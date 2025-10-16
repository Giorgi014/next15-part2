import { comments } from "./data";

export async function GET() {
  return await Response.json(comments);
}
