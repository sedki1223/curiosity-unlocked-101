
"use client";

import { useAuth, UserButton } from "@clerk/nextjs";
import {
  useCallback,
  useEffect,
  useState,
  type FormEvent,
} from "react";

type Lesson = {
  _id: string;
  title: string;
  slug: string;
  topic: string;
  topicSlug: string;
  category: string;
  summary: string;
  description: string;
  durationMinutes: number;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  order: number;
  status: "draft" | "published";
  blocks?: unknown[];
  quiz?: unknown;
  updatedAt?: string;
  createdAt?: string;
};

type Review = {
  _id: string;
  type?: string;
  message: string;
  rating?: number;
  lessonSlug?: string;
  createdAt?: string;
};

type LessonForm = {
  title: string;
  slug: string;
  topic: string;
  topicSlug: string;
  category: string;
  summary: string;
  description: string;
  durationMinutes: string;
  difficulty: "Beginner" | "Intermediate" | "Advanced";
  order: string;
  status: "draft" | "published";
};

type Tab = "Overview" | "Lessons" | "Feedback";

const API_URL = (
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:5000/api"
).replace(/\/$/, "");

const emptyForm: LessonForm = {
  title: "",
  slug: "",
  topic: "",
  topicSlug: "",
  category: "",
  summary: "",
  description: "",
  durationMinutes: "5",
  difficulty: "Beginner",
  order: "1",
  status: "draft",
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-[#0b0d14] px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60";

const panelClass =
  "rounded-2xl border border-white/[0.08] bg-white/[0.025]";

function formatDate(value?: string) {
  if (!value) return "—";

  const date = new Date(value);

  return Number.isNaN(date.getTime())
    ? "—"
    : date.toLocaleDateString(undefined, {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
}

function StatusPill({ status }: { status: string }) {
  const published = status === "published";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-xs font-medium ${
        published
          ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
          : "border-amber-400/20 bg-amber-400/10 text-amber-300"
      }`}
    >
      {status}
    </span>
  );
}

function StatCard({
  label,
  value,
  detail,
  accent,
}: {
  label: string;
  value: string | number;
  detail: string;
  accent: string;
}) {
  return (
    <div className={`${panelClass} relative overflow-hidden p-5`}>
      <div
        className={`absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl ${accent}`}
      />
      <p className="relative text-sm text-slate-400">{label}</p>
      <p className="relative mt-4 text-3xl font-semibold tracking-tight text-white">
        {value}
      </p>
      <p className="relative mt-2 text-xs text-slate-500">{detail}</p>
    </div>
  );
}

export default function AdminDashboard() {
  const { getToken } = useAuth();

  const [tab, setTab] = useState<Tab>("Overview");
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [lessonError, setLessonError] = useState("");
  const [reviewError, setReviewError] = useState("");
  const [notice, setNotice] = useState("");
  const [saving, setSaving] = useState(false);
  const [editing, setEditing] = useState<Lesson | null>(null);
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState<LessonForm>(emptyForm);
  const [search, setSearch] = useState("");

  const loadDashboard = useCallback(async () => {
    setLoading(true);
    setLessonError("");
    setReviewError("");

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Your session token is unavailable. Sign in again.");
      }

      const headers = {
        Authorization: `Bearer ${token}`,
      };

      const [lessonResult, reviewResult] = await Promise.allSettled([
        fetch(`${API_URL}/lessons/admin`, { headers }),
        fetch(`${API_URL}/reviews`, { headers }),
      ]);

      if (lessonResult.status === "fulfilled") {
        const response = lessonResult.value;
        const result = await response.json();

        if (!response.ok || !result.success) {
          setLessonError(result.message ?? "Could not load lessons.");
        } else {
          setLessons(Array.isArray(result.data) ? result.data : []);
        }
      } else {
        setLessonError("Could not connect to the lessons API.");
      }

      if (reviewResult.status === "fulfilled") {
        const response = reviewResult.value;
        const result = await response.json();

        if (!response.ok || !result.success) {
          setReviewError(result.message ?? "Could not load feedback.");
        } else {
          setReviews(Array.isArray(result.data) ? result.data : []);
        }
      } else {
        setReviewError("Could not connect to the feedback API.");
      }
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Could not load dashboard.";

      setLessonError(message);
      setReviewError(message);
    } finally {
      setLoading(false);
    }
  }, [getToken]);

  useEffect(() => {
    void loadDashboard();
  }, [loadDashboard]);

  const publishedCount = lessons.filter(
    (lesson) => lesson.status === "published",
  ).length;

  const draftCount = lessons.filter(
    (lesson) => lesson.status === "draft",
  ).length;

  const filteredLessons = lessons.filter((lesson) => {
    const query = search.trim().toLowerCase();

    return (
      !query ||
      lesson.title.toLowerCase().includes(query) ||
      lesson.slug.toLowerCase().includes(query) ||
      lesson.topic.toLowerCase().includes(query)
    );
  });

  function openCreateForm() {
    setEditing(null);
    setForm(emptyForm);
    setNotice("");
    setFormOpen(true);
    setTab("Lessons");
  }

  function openEditForm(lesson: Lesson) {
    setEditing(lesson);
    setForm({
      title: lesson.title,
      slug: lesson.slug,
      topic: lesson.topic,
      topicSlug: lesson.topicSlug,
      category: lesson.category,
      summary: lesson.summary,
      description: lesson.description,
      durationMinutes: String(lesson.durationMinutes),
      difficulty: lesson.difficulty,
      order: String(lesson.order),
      status: lesson.status,
    });
    setNotice("");
    setFormOpen(true);
    setTab("Lessons");
  }

  async function saveLesson(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setNotice("");

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Your session expired. Sign in again.");
      }

      const payload = {
        ...form,
        durationMinutes: Number(form.durationMinutes),
        order: Number(form.order),
        blocks: editing?.blocks ?? [],
        quiz: editing?.quiz ?? undefined,
      };

      const response = await fetch(
        editing
          ? `${API_URL}/lessons/admin/${editing._id}`
          : `${API_URL}/lessons/admin`,
        {
          method: editing ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Could not save lesson.");
      }

      setFormOpen(false);
      setEditing(null);
      setForm(emptyForm);
      setNotice(editing ? "Lesson updated." : "Lesson created.");

      await loadDashboard();
    } catch (error) {
      setNotice(
        error instanceof Error ? error.message : "Could not save lesson.",
      );
    } finally {
      setSaving(false);
    }
  }

  async function deleteLesson(lesson: Lesson) {
    if (
      !window.confirm(
        `Delete "${lesson.title}"? This action cannot be undone.`,
      )
    ) {
      return;
    }

    setNotice("");

    try {
      const token = await getToken();

      if (!token) {
        throw new Error("Your session expired. Sign in again.");
      }

      const response = await fetch(
        `${API_URL}/lessons/admin/${lesson._id}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message ?? "Could not delete lesson.");
      }

      setNotice("Lesson deleted.");
      await loadDashboard();
    } catch (error) {
      setNotice(
        error instanceof Error ? error.message : "Could not delete lesson.",
      );
    }
  }

  const navigation: {
    label: Tab;
    icon: string;
    description: string;
  }[] = [
    { label: "Overview", icon: "◫", description: "Your workspace" },
    { label: "Lessons", icon: "▤", description: "Manage content" },
    { label: "Feedback", icon: "◌", description: "Community responses" },
  ];

  return (
    <div className="min-h-screen bg-[#07080d] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-400/[0.07] blur-[120px]" />
        <div className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-violet-500/[0.08] blur-[120px]" />
      </div>

      <div className="relative flex min-h-screen">
        <aside className="hidden w-64 shrink-0 border-r border-white/[0.07] bg-black/20 p-5 md:flex md:flex-col">
          <a href="/admin" className="flex items-center gap-3 px-2 py-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-lg text-cyan-200">
              ◈
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-wide">
                CU101
              </span>
              <span className="mt-1 block text-xs text-slate-500">
                Admin workspace
              </span>
            </span>
          </a>

          <div className="mt-10">
            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-600">
              Workspace
            </p>

            <nav className="space-y-1">
              {navigation.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    setTab(item.label);
                    setNotice("");
                  }}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm transition ${
                    tab === item.label
                      ? "border border-cyan-300/15 bg-cyan-300/[0.08] text-cyan-100"
                      : "text-slate-400 hover:bg-white/[0.04] hover:text-white"
                  }`}
                >
                  <span className="w-5 text-center text-base">
                    {item.icon}
                  </span>
                  <span className="flex-1">{item.label}</span>
                  {item.label === "Feedback" && reviews.length > 0 && (
                    <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px]">
                      {reviews.length}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-auto rounded-2xl border border-white/[0.07] bg-white/[0.025] p-4">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              <span className="text-xs text-slate-300">Workspace active</span>
            </div>
            <p className="mt-3 text-xs leading-5 text-slate-500">
              Curiosity starts with a question. Keep building.
            </p>
            <a
              href="/"
              className="mt-4 inline-block text-xs text-cyan-300 transition hover:text-cyan-200"
            >
              ← Visit public website
            </a>
          </div>
        </aside>

        <main className="min-w-0 flex-1">
          <header className="flex min-h-20 items-center justify-between border-b border-white/[0.07] px-5 sm:px-8 lg:px-10">
            <div>
              <p className="text-xs text-slate-500">Curiosity Unlocked 101</p>
              <h1 className="mt-1 text-lg font-semibold tracking-tight">
                {tab}
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => void loadDashboard()}
                disabled={loading}
                className="rounded-xl border border-white/10 px-3 py-2 text-xs text-slate-300 transition hover:bg-white/[0.05] disabled:opacity-50 sm:px-4 sm:text-sm"
              >
                {loading ? "Refreshing…" : "↻ Refresh"}
              </button>
              <div className="rounded-full border border-white/10 p-1">
                <UserButton />
              </div>
            </div>
          </header>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/70">
                  Control center
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                  {tab === "Overview" && "A little more curious today."}
                  {tab === "Lessons" && "Your learning library."}
                  {tab === "Feedback" && "Listen to your community."}
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  {tab === "Overview" &&
                    "A live snapshot of the content and feedback stored in your CU101 API."}
                  {tab === "Lessons" &&
                    "Create, update, publish, or remove lessons from your library."}
                  {tab === "Feedback" &&
                    "Review responses submitted by your community."}
                </p>
              </div>

              {tab === "Lessons" && (
                <button
                  onClick={openCreateForm}
                  className="rounded-xl bg-cyan-300 px-4 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200"
                >
                  + New lesson
                </button>
              )}
            </div>

            {notice && (
              <div className="mb-6 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.06] px-4 py-3 text-sm text-cyan-100">
                {notice}
              </div>
            )}

            {tab === "Overview" && (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                  <StatCard
                    label="Total lessons"
                    value={loading ? "—" : lessons.length}
                    detail="All saved lessons"
                    accent="bg-cyan-400/10"
                  />
                  <StatCard
                    label="Published"
                    value={loading ? "—" : publishedCount}
                    detail="Visible in the public library"
                    accent="bg-emerald-400/10"
                  />
                  <StatCard
                    label="Drafts"
                    value={loading ? "—" : draftCount}
                    detail="Not publicly listed"
                    accent="bg-amber-400/10"
                  />
                  <StatCard
                    label="Feedback entries"
                    value={reviewError ? "—" : reviews.length}
                    detail="Returned by the feedback API"
                    accent="bg-violet-400/10"
                  />
                </div>

                <div className="mt-8 grid gap-6 xl:grid-cols-[1.4fr_1fr]">
                  <section className={`${panelClass} p-5 sm:p-6`}>
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-semibold">Recently updated</h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Latest changes in your lesson library
                        </p>
                      </div>
                      <button
                        onClick={() => setTab("Lessons")}
                        className="text-xs text-cyan-300 hover:text-cyan-200"
                      >
                        All lessons →
                      </button>
                    </div>

                    {lessonError ? (
                      <p className="mt-6 text-sm text-rose-300">
                        {lessonError}
                      </p>
                    ) : loading ? (
                      <p className="mt-6 text-sm text-slate-500">
                        Loading lessons…
                      </p>
                    ) : lessons.length === 0 ? (
                      <p className="mt-6 text-sm text-slate-500">
                        No lessons found. Create your first lesson to get started.
                      </p>
                    ) : (
                      <div className="mt-5 divide-y divide-white/[0.06]">
                        {[...lessons]
                          .sort(
                            (a, b) =>
                              new Date(b.updatedAt ?? b.createdAt ?? 0).getTime() -
                              new Date(a.updatedAt ?? a.createdAt ?? 0).getTime(),
                          )
                          .slice(0, 5)
                          .map((lesson) => (
                            <div
                              key={lesson._id}
                              className="flex items-center justify-between gap-3 py-4"
                            >
                              <div className="min-w-0">
                                <p className="truncate text-sm font-medium">
                                  {lesson.title}
                                </p>
                                <p className="mt-1 text-xs text-slate-500">
                                  {lesson.topic} · {lesson.durationMinutes} min
                                </p>
                              </div>
                              <StatusPill status={lesson.status} />
                            </div>
                          ))}
                      </div>
                    )}
                  </section>

                  <section className={`${panelClass} p-5 sm:p-6`}>
                    <div>
                      <h3 className="font-semibold">Recent feedback</h3>
                      <p className="mt-1 text-xs text-slate-500">
                        The latest community responses
                      </p>
                    </div>

                    {reviewError ? (
                      <p className="mt-6 text-sm text-rose-300">
                        {reviewError}
                      </p>
                    ) : loading ? (
                      <p className="mt-6 text-sm text-slate-500">
                        Loading feedback…
                      </p>
                    ) : reviews.length === 0 ? (
                      <p className="mt-6 text-sm text-slate-500">
                        No feedback entries returned by the API.
                      </p>
                    ) : (
                      <div className="mt-5 space-y-4">
                        {[...reviews]
                          .sort(
                            (a, b) =>
                              new Date(b.createdAt ?? 0).getTime() -
                              new Date(a.createdAt ?? 0).getTime(),
                          )
                          .slice(0, 4)
                          .map((review) => (
                            <div
                              key={review._id}
                              className="rounded-xl border border-white/[0.06] bg-black/20 p-4"
                            >
                              <p className="line-clamp-3 text-sm leading-6 text-slate-300">
                                {review.message}
                              </p>
                              <p className="mt-3 text-xs text-slate-500">
                                {review.lessonSlug || review.type || "Feedback"}
                                {" · "}
                                {formatDate(review.createdAt)}
                              </p>
                            </div>
                          ))}
                        <button
                          onClick={() => setTab("Feedback")}
                          className="text-xs text-cyan-300 hover:text-cyan-200"
                        >
                          View all feedback →
                        </button>
                      </div>
                    )}
                  </section>
                </div>
              </>
            )}

            {tab === "Lessons" && (
              <section className={`${panelClass} overflow-hidden`}>
                {formOpen && (
                  <form
                    onSubmit={saveLesson}
                    className="border-b border-white/[0.08] p-5 sm:p-7"
                  >
                    <div className="mb-6 flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-semibold">
                          {editing ? "Edit lesson" : "Create lesson"}
                        </h3>
                        <p className="mt-1 text-xs text-slate-500">
                          Required lesson metadata. Existing blocks and quiz
                          content are preserved when editing.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setFormOpen(false)}
                        className="rounded-lg px-3 py-2 text-sm text-slate-400 hover:bg-white/5 hover:text-white"
                      >
                        Close
                      </button>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {(
                        [
                          ["title", "Title"],
                          ["slug", "Slug"],
                          ["topic", "Topic"],
                          ["topicSlug", "Topic slug"],
                          ["category", "Category"],
                          ["summary", "Summary"],
                        ] as const
                      ).map(([key, label]) => (
                        <label key={key} className="block">
                          <span className="mb-2 block text-xs text-slate-400">
                            {label}
                          </span>
                          <input
                            required
                            className={inputClass}
                            value={form[key]}
                            onChange={(event) =>
                              setForm((current) => ({
                                ...current,
                                [key]: event.target.value,
                              }))
                            }
                            placeholder={label}
                          />
                        </label>
                      ))}

                      <label className="block">
                        <span className="mb-2 block text-xs text-slate-400">
                          Duration (minutes)
                        </span>
                        <input
                          required
                          min="1"
                          type="number"
                          className={inputClass}
                          value={form.durationMinutes}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              durationMinutes: event.target.value,
                            }))
                          }
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs text-slate-400">
                          Display order
                        </span>
                        <input
                          required
                          min="1"
                          type="number"
                          className={inputClass}
                          value={form.order}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              order: event.target.value,
                            }))
                          }
                        />
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs text-slate-400">
                          Difficulty
                        </span>
                        <select
                          className={inputClass}
                          value={form.difficulty}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              difficulty: event.target.value as LessonForm["difficulty"],
                            }))
                          }
                        >
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                      </label>

                      <label className="block">
                        <span className="mb-2 block text-xs text-slate-400">
                          Status
                        </span>
                        <select
                          className={inputClass}
                          value={form.status}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              status: event.target.value as LessonForm["status"],
                            }))
                          }
                        >
                          <option value="draft">Draft</option>
                          <option value="published">Published</option>
                        </select>
                      </label>

                      <label className="block sm:col-span-2 lg:col-span-3">
                        <span className="mb-2 block text-xs text-slate-400">
                          Description
                        </span>
                        <textarea
                          required
                          rows={3}
                          className={inputClass}
                          value={form.description}
                          onChange={(event) =>
                            setForm((current) => ({
                              ...current,
                              description: event.target.value,
                            }))
                          }
                          placeholder="Describe what the learner will discover."
                        />
                      </label>
                    </div>

                    <div className="mt-5 flex flex-wrap items-center gap-3">
                      <button
                        type="submit"
                        disabled={saving}
                        className="rounded-xl bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200 disabled:opacity-50"
                      >
                        {saving
                          ? "Saving…"
                          : editing
                            ? "Save changes"
                            : "Create lesson"}
                      </button>
                      <p className="text-xs text-slate-500">
                        Quiz questions and lesson blocks are managed separately
                        in this first version.
                      </p>
                    </div>
                  </form>
                )}

                <div className="flex flex-col gap-3 border-b border-white/[0.07] p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
                  <div>
                    <h3 className="text-sm font-semibold">All lessons</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {lessons.length} total records
                    </p>
                  </div>
                  <input
                    className={`${inputClass} sm:max-w-xs`}
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search title, slug, or topic…"
                  />
                </div>

                {lessonError ? (
                  <p className="p-6 text-sm text-rose-300">{lessonError}</p>
                ) : loading ? (
                  <p className="p-6 text-sm text-slate-500">
                    Loading lessons…
                  </p>
                ) : filteredLessons.length === 0 ? (
                  <p className="p-6 text-sm text-slate-500">
                    No matching lessons found.
                  </p>
                ) : (
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead className="bg-white/[0.02] text-xs text-slate-500">
                        <tr>
                          <th className="px-5 py-4 font-medium">Lesson</th>
                          <th className="px-5 py-4 font-medium">Difficulty</th>
                          <th className="px-5 py-4 font-medium">Status</th>
                          <th className="px-5 py-4 font-medium">Updated</th>
                          <th className="px-5 py-4 text-right font-medium">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.06]">
                        {filteredLessons.map((lesson) => (
                          <tr
                            key={lesson._id}
                            className="transition hover:bg-white/[0.02]"
                          >
                            <td className="px-5 py-4">
                              <p className="font-medium text-slate-200">
                                {lesson.title}
                              </p>
                              <p className="mt-1 text-xs text-slate-500">
                                {lesson.slug}
                              </p>
                            </td>
                            <td className="px-5 py-4 text-slate-400">
                              {lesson.difficulty}
                            </td>
                            <td className="px-5 py-4">
                              <StatusPill status={lesson.status} />
                            </td>
                            <td className="px-5 py-4 text-xs text-slate-500">
                              {formatDate(lesson.updatedAt ?? lesson.createdAt)}
                            </td>
                            <td className="px-5 py-4">
                              <div className="flex justify-end gap-2">
                                <button
                                  onClick={() => openEditForm(lesson)}
                                  className="rounded-lg border border-white/10 px-3 py-2 text-xs text-slate-300 hover:bg-white/5"
                                >
                                  Edit
                                </button>
                                <button
                                  onClick={() => void deleteLesson(lesson)}
                                  className="rounded-lg border border-rose-400/15 px-3 py-2 text-xs text-rose-300 hover:bg-rose-400/10"
                                >
                                  Delete
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            )}

            {tab === "Feedback" && (
              <section className={`${panelClass} p-5 sm:p-7`}>
                <div className="mb-6 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-semibold">Community feedback</h3>
                    <p className="mt-1 text-xs text-slate-500">
                      {reviews.length} entries returned by the API
                    </p>
                  </div>
                </div>

                {reviewError ? (
                  <p className="text-sm text-rose-300">{reviewError}</p>
                ) : loading ? (
                  <p className="text-sm text-slate-500">Loading feedback…</p>
                ) : reviews.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    No feedback entries were returned.
                  </p>
                ) : (
                  <div className="space-y-3">
                    {[...reviews]
                      .sort(
                        (a, b) =>
                          new Date(b.createdAt ?? 0).getTime() -
                          new Date(a.createdAt ?? 0).getTime(),
                      )
                      .map((review) => (
                        <article
                          key={review._id}
                          className="rounded-xl border border-white/[0.07] bg-black/20 p-5"
                        >
                          <div className="flex flex-wrap items-start justify-between gap-3">
                            <div className="flex flex-wrap items-center gap-2">
                              <span className="rounded-full border border-violet-300/15 bg-violet-300/[0.07] px-2.5 py-1 text-xs text-violet-200">
                                {review.type || "Feedback"}
                              </span>
                              {review.lessonSlug && (
                                <span className="text-xs text-slate-500">
                                  Lesson: {review.lessonSlug}
                                </span>
                              )}
                            </div>
                            <time className="text-xs text-slate-500">
                              {formatDate(review.createdAt)}
                            </time>
                          </div>
                          <p className="mt-4 whitespace-pre-wrap text-sm leading-7 text-slate-300">
                            {review.message}
                          </p>
                          {typeof review.rating === "number" && (
                            <p className="mt-3 text-xs text-amber-300">
                              Rating: {review.rating}
                            </p>
                          )}
                        </article>
                      ))}
                  </div>
                )}
              </section>
            )}

            <footer className="mt-10 flex flex-wrap justify-between gap-3 border-t border-white/[0.07] pt-5 text-xs text-slate-600">
              <span>CU101 · Admin workspace</span>
              <span>Live API data · No demo metrics</span>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
}
