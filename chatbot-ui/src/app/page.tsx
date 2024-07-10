// src/app/page.tsx

import Head from 'next/head';
import Chatbot from '../../components/Chatbot';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Chatbot UI</title>
        <meta name="description" content="A chatbot UI in Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to the Chatbot UI</h1>
        {/* Other content */}
      </main>

      <Chatbot />
    </div>
  );
}
