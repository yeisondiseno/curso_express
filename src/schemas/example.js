import zod from "zod";

// !NOTE: https://youtu.be/-9d3KhCqOtU?si=JtyXDPv8yRSrelHA&t=3303
const exampleSchema = zod.object({
  id: zod.string(),
  name: zod.string().min(2).max(100),
  email: zod.email(),
  age: zod.number().min(0).optional(),
  poster: zod.url(),
});

export const validExampleSchema = (data) => exampleSchema.safeParse(data);

export const validPartialExampleSchema = (data) =>
  exampleSchema.partial().safeParse(data);
