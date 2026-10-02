import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "../config/db.js";
import { Lesson } from "../models/Lesson.js";

dotenv.config();

const lessons = [
  {
    title: "What is a black hole?",
    slug: "what-is-a-black-hole",
    topic: "Black Holes",
    topicSlug: "black-holes",
    category: "Space",
    summary:
      "Understand what a black hole actually is and why the name can be misleading.",
    description:
      "A black hole is a region of space where gravity becomes so extreme that nothing that crosses its boundary can escape.",
    durationMinutes: 6,
    difficulty: "Beginner",
    order: 1,
    status: "published",
    blocks: [
      {
        type: "text",
        title: "Start with the question",
        content:
          "What happens when an enormous amount of matter gets squeezed into an incredibly small region of space?",
      },
      {
        type: "visual",
        title: "It is not really a hole",
        content:
          "A black hole is not an empty tunnel through space. It is an extremely dense region that strongly curves spacetime around it.",
      },
      {
        type: "visual",
        title: "Picture this",
        content:
          "Imagine spacetime like a flexible surface. Put enough mass in one place and the surface becomes dramatically curved.",
      },
      {
        type: "callout",
        title: "The key idea",
        content:
          "The event horizon marks the boundary beyond which escaping the black hole is impossible.",
      },
    ],
    quiz: {
      title: "Black Hole Check",
      description:
        "Let’s see what stuck. There are no tricks here.",
      questions: [
        {
          id: "bh-1",
          question: "What is a black hole?",
          options: [
            "An empty tunnel through space",
            "A region of spacetime with extremely strong gravity",
            "A giant ball of dark gas",
            "A hole that absorbs the entire universe",
          ],
          correctAnswer:
            "A region of spacetime with extremely strong gravity",
          explanation:
            "A black hole is a region of spacetime where gravity becomes so strong that crossing the event horizon prevents escape.",
        },
        {
          id: "bh-2",
          question: "What is the event horizon?",
          options: [
            "The surface of a black hole",
            "A cloud of hot gas around a black hole",
            "The boundary beyond which escape is impossible",
            "The center of a black hole",
          ],
          correctAnswer:
            "The boundary beyond which escape is impossible",
          explanation:
            "The event horizon is a boundary in spacetime. Once something crosses it, it cannot return to the outside.",
        },
        {
          id: "bh-3",
          question: "Why can a black hole appear black?",
          options: [
            "It produces no gravity",
            "It is made of black material",
            "Light cannot escape after crossing the event horizon",
            "Space around it blocks all light",
          ],
          correctAnswer:
            "Light cannot escape after crossing the event horizon",
          explanation:
            "Light can travel freely outside the event horizon, but once it crosses the boundary, it cannot escape back out.",
        },
        {
          id: "bh-4",
          question: "Which statement is true?",
          options: [
            "Black holes act like giant vacuum cleaners",
            "Everything near a black hole is instantly destroyed",
            "The event horizon is a physical wall",
            "Black holes are extreme regions of curved spacetime",
          ],
          correctAnswer:
            "Black holes are extreme regions of curved spacetime",
          explanation:
            "A black hole is best understood through the way mass and energy curve spacetime. It is not a cosmic vacuum cleaner or a physical hole in space.",
        },
      ],
    },
  },

  {
    title: "Gravity turned extreme",
    slug: "gravity-turned-extreme",
    topic: "Black Holes",
    topicSlug: "black-holes",
    category: "Space",
    summary:
      "See how enormous amounts of mass can bend space and time around them.",
    description:
      "The more concentrated the mass becomes, the stronger the curvature of spacetime near it.",
    durationMinutes: 7,
    difficulty: "Beginner",
    order: 2,
    status: "published",
    blocks: [
      {
        type: "text",
        title: "Why gravity gets so strong",
        content:
          "Black holes form when matter becomes compressed enough that the resulting gravitational effects become extreme.",
      },
      {
        type: "visual",
        title: "Space and time bend",
        content:
          "General relativity describes gravity as curvature of spacetime rather than a simple invisible pulling force.",
      },
    ],
  },

  {
    title: "The event horizon",
    slug: "the-event-horizon",
    topic: "Black Holes",
    topicSlug: "black-holes",
    category: "Space",
    summary:
      "Explore the boundary beyond which escaping becomes impossible.",
    description:
      "The event horizon is the point of no return surrounding a black hole.",
    durationMinutes: 8,
    difficulty: "Beginner",
    order: 3,
    status: "published",
    blocks: [
      {
        type: "text",
        title: "The point of no return",
        content:
          "Once something passes the event horizon, every possible future path leads deeper toward the black hole.",
      },
      {
        type: "callout",
        title: "Important distinction",
        content:
          "The event horizon is not a physical wall. It is a boundary defined by the structure of spacetime.",
      },
    ],
  },

  {
    title: "What happens inside?",
    slug: "what-happens-inside-a-black-hole",
    topic: "Black Holes",
    topicSlug: "black-holes",
    category: "Space",
    summary:
      "Go deeper into what scientists know and what remains unknown.",
    description:
      "The interior of a black hole takes us to the limits of current physics.",
    durationMinutes: 9,
    difficulty: "Beginner",
    order: 4,
    status: "published",
    blocks: [
      {
        type: "text",
        title: "What we can say",
        content:
          "Our current theories describe extreme spacetime curvature inside a black hole, but they do not provide a complete picture.",
      },
      {
        type: "callout",
        title: "Still an open question",
        content:
          "Understanding what happens at the deepest interior is one of the major unresolved problems connecting gravity and quantum physics.",
      },
    ],
  },
];

async function seedLessons(): Promise<void> {
  try {
    await connectDB();

    await Lesson.deleteMany({});

    await Lesson.insertMany(lessons);

    console.log(`Seeded ${lessons.length} lessons.`);
  } catch (error) {
    console.error("Failed to seed lessons:", error);
    process.exitCode = 1;
  } finally {
    await mongoose.connection.close();
  }
}

seedLessons();
