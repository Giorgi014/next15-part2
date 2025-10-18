import { comments } from "./data";

export async function GET() {
  return await Response.json(comments);
}

export async function POST(requst: Request) {
  const comment = await requst.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);
  return new Response(JSON.stringify(newComment), {
    headers: { "Content-Type": "application/json" },
    status: 201,
  });
}
