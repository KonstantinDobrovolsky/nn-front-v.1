import { Link } from "react-router-dom";
import 'app/styles/index.css';
import { AppRouter } from "app/providers/appRouter";

export const MainPage = () => {
    return (
      <div className="main light cyberpunk">

        <div>
          <Link className="link" to={'/playground'}>Площадка</Link>
          <Link className="link" to={'/currentFights'}>Список боев</Link>
          <Link className="link" to={'/tournamentResults'}>Итоги</Link>
          <Link className="link" to={'/tournamentSettings'}>Управление турниром</Link>
          {/* <Link className='link' to={'/saberRating'}>Рейтинг по сабле</Link> */}
        </div>
  
        <AppRouter/>
      </div>
    );
}