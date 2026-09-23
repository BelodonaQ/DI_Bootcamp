import './App.css';
import Car from './Components/Car';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

function App() {
  const carinfo = { name: 'Ford', model: 'Mustang' };

  return (
    <main className="app-shell">
      <h1>React Exercises XP</h1>

      <section className="exercise-card">
        <h2>Exercise 1 — Car and Components</h2>
        <Car carInfo={carinfo} />
      </section>

      <section className="exercise-card">
        <h2>Exercise 2 — Events</h2>
        <Events />
      </section>

      <section className="exercise-card">
        <h2>Exercise 3 — Phone and Components</h2>
        <Phone />
      </section>

      <section className="exercise-card">
        <h2>Exercise 4 — useEffect Hook</h2>
        <Color />
      </section>
    </main>
  );
}

export default App;
