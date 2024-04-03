'use client';

import 'bootstrap/dist/css/bootstrap.css';

export default function App({ children }) {
  return (
    <main
      className="d-flex flex-column align-items-center justify-content-center "
      style={{ height: '100vh' }}
    >
      {children}
    </main>
  );
}
