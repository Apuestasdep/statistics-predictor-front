'use client';

import App from './_app';
import { Login } from '@/src/Scenes';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main>
      <App>
        <Login router={router} />
      </App>
    </main>
  );
}
