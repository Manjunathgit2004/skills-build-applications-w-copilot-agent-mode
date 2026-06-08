import { useState } from 'react';

function App() {
  const [welcome] = useState('Welcome to OctoFit Tracker');

  return (
    <main className="container py-5">
      <div className="text-center">
        <h1 className="mb-4">{welcome}</h1>
        <p className="lead">
          A modern React 19 app scaffolded with Vite for the OctoFit Tracker experience.
        </p>
      </div>
    </main>
  );
}

export default App;
