
import { NextResponse } from "next/server";
import OpenAI from "openai";
import ChatCompletionRequestMessage from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const instructionMessage: OpenAI.Chat.CreateChatCompletionRequestMessage = {
  role: 'system',
  content: "You are a code generator. You must answer only in markdown code snippets. Use code comments for explanations."
}


export async function POST(
  req: Request
) {
  try {
    const body = await req.json();
    const { messages} = body;

    if (!openai.apiKey) {
      return new NextResponse("OpenAI API Key not configured.", { status: 500 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [instructionMessage, ...messages]
    });
 
return NextResponse.json(response.choices[0].message);
  } catch (error) {
    console.log('[CODE_ERROR]', error);
    return new NextResponse("Internal Error", { status: 500 });
  }
};
