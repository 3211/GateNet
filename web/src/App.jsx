import { useEffect, useState } from 'react';

const apiBase = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080/api/v1';

function App() {
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    fetch(`${apiBase}/health`)
      .then((res) => res.json())
      .then((data) => setStatus(`API: ${data.status}`))
      .catch(() => setStatus('API unreachable'));
  }, []);

  return (
    <main className="app">
      <h1>GateNet</h1>
      <p>Social media wiki platform scaffold.</p>
      <p className="status">{status}</p>
      <section className="next-steps">
        <h2>Next steps</h2>
        <ul>
          <li>Add authentication and user profiles.</li>
          <li>Implement wiki content editing, versioning, and moderation.</li>
          <li>Connect to Postgres and Redis for persistence and caching.</li>
        </ul>
      </section>
    </main>
  );
}

export default App;
