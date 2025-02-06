import ModelClient from "@azure-rest/ai-inference";
import { isUnexpected } from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";
import { NextResponse } from 'next/server';

export async function POST(req: Request) {

  // For testing purposes
  //return NextResponse.json('<think>\n  Okay, the user just asked "what is 10+10." Let me think about how to approach this.\n  \n  First, I need to confirm that this is a straightforward arithmetic question. The previous interaction was a greeting exchange, so the user is now moving to a math problem.\n  \n  Hmm, adding 10 and 10. That"s pretty basic. But maybe I should make sure there"s no trick here. Sometimes people use base systems or other contexts, but the question is direct.\n  \n  Wait, the user might be a child learning math, or someone testing if I can handle simple questions. Either way, the answer is 20. I should present it clearly. \n  \n  But just giving the number might seem too abrupt. The user might appreciate a friendly explanation. Maybe break it down: 10 plus another 10 is like having two groups of ten, which totals 20.\n  \n  Also, adding an emoji could keep the tone consistent with the previous reply, which had a 😊. Using a different emoji here, like 🎉, would maintain a positive vibe without being repetitive.\n  \n  Let me double-check the calculation. 10 + 10 = 20. Yep, that"s correct. No hidden meanings detected.\n  \n  Alright, time to put it all together. State the answer clearly, explain briefly, and keep the response friendly and approachable.\n  </think>\n  \n  10 + 10 equals **20**! 🎉 Let me know if you need help with anything else. 😊')

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

  return NextResponse.json(completion.choices[0].message.content);
}
