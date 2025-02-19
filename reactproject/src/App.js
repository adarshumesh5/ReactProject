
import './App.css';
import Education from './components/Education';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Resume</h1>
      </header>
      <main>
        <Education />
        <WorkExperience />
        <Projects />
      </main>
    </div>
  );
}


export default App;
