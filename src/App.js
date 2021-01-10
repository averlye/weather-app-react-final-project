import './App.css';
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Warsaw"/>
        <footer>This project was created by <a href="https://www.linkedin.com/in/alicja-jadwiga-nowak/" target="_blank" rel="noreferrer">Alicja Nowak</a>. Code available at <a href="https://github.com/averlye/weather-app-react-final-project.git" target="_blank" rel="noreferrer">GitHub</a>.
        </footer>
      </div>
    </div>
  );
}
