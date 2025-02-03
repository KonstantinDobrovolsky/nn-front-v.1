import { Link } from "react-router-dom";
import 'app/styles/index.css';
import { AppRouter } from "app/providers/appRouter";

function App() {
  return (
    <div className="main light">

    <div>
      <Link className="link" to={'/playground'}>Площадка</Link>
      <Link className="link" to={'/currentFights'}>Список боев</Link>
      <Link className="link" to={'/tournamentResults'}>Итоги</Link>
      <Link className="link" to={'/tournamentSettings'}>Управление турниром</Link>
    </div>

    <AppRouter/>
  </div>
  );
}

export default App;
