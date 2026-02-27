# Vercel AI SDK useChat with Attachments Example

This example demonstrates how to use the [Vercel AI SDK](https://sdk.vercel.ai/docs) with [Next.js](https://nextjs.org/) with the `useChat` hook to create a chat interface that can send and receive multi-modal messages from the AI provider of your choice via [Vercel AI Gateway](https://vercel.com/docs/ai-gateway).

## Deploy your own

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel-labs%2Fai-sdk-preview-attachments&env=AI_GATEWAY_API_KEY&envDescription=API%20key%20needed%20for%20application&envLink=vercel.com/docs/ai-gateway)

## How to use

Run [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) with [npm](https://docs.npmjs.com/cli/init), [Yarn](https://yarnpkg.com/lang/en/docs/cli/create/), or [pnpm](https://pnpm.io) to bootstrap the example:

```bash
npx create-next-app --example https://github.com/vercel-labs/ai-sdk-preview-attachments ai-sdk-preview-attachments-example
```

```bash
yarn create next-app --example https://github.com/vercel-labs/ai-sdk-preview-attachments ai-sdk-preview-attachments-example
```

```bash
pnpm create next-app --example https://github.com/vercel-labs/ai-sdk-preview-attachments ai-sdk-preview-attachments-example
```

To run the example locally you need to:

1. Create a [Vercel account](https://vercel.com) and generate an AI Gateway API key from the [AI Gateway settings](https://vercel.com/docs/ai-gateway).
2. Set the required environment variables as shown in the `.env.example` file, but in a new file called `.env`.
3. `npm install` to install the required dependencies.
4. `npm run dev` to launch the development server.


## Learn More

To learn more about Vercel AI SDK, AI Gateway, or Next.js take a look at the following resources:

- [Vercel AI SDK docs](https://sdk.vercel.ai/docs)
- [Vercel AI Gateway docs](https://vercel.com/docs/ai-gateway)
- [Vercel AI Playground](https://play.vercel.ai)
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
