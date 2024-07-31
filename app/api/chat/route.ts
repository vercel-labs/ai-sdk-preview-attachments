import { openai } from "@ai-sdk/openai";
import { convertToCoreMessages, streamText } from "ai";

export async function POST(req: Request) {
  const { messages } = await req.json();

  if (messages.length > 4) {
    return Response.json({ error: "You can only send 8 messages at a time!" });
  }

  const result = await streamText({
    model: openai("gpt-4o"),
    system:
      "do not respond on markdown or lists, keep your responses brief, you can ask the user to upload images or documents if it could help you understand the problem better",
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
}
