import ModelClient from "@azure-rest/ai-inference";
import { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const client = ModelClient(
    process.env.AZURE_INFERENCE_ENDPOINT || "", 
    new AzureKeyCredential(process.env.AZURE_INFERENCE_CREDENTIAL || "")
  );

  var response = await client.path("/chat/completions").post({
    body: {
        messages: messages,
        model: "DeepSeek-R1"
    }
  });

  if (isUnexpected(response)) {
      throw response.body.error;
  }

  const completion = response.body;
  console.log(completion.choices[0].message.content);

  return NextResponse.json(completion);
}
