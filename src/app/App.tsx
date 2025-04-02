import { Link } from "react-router-dom";
import 'app/styles/index.css';
import { AppRouter } from "app/providers/appRouter";
import Button from "shared/ui/Button/Button";
import classes from './App.module.css';
import { useTheme } from "./providers/ThemeProvider/useTheme";

function App() {
  const {theme, switchTheme} = useTheme()

  return (
    <div className={`app ${theme}`}>

      <div className={classes.header}>
        <div className={classes.links}>
          <Link className={classes.link} to={'/playground'}>Площадка</Link>
          <Link className={classes.link} to={'/currentFights'}>Список боев</Link>
          {/* <Link className={classes.link} to={'/tournamentResults'}>Итоги</Link> */}
        </div>
        <Button name="Сменить тему" inheritClasses={classes.themeToggle} onClick={switchTheme}/>
      </div>

      <AppRouter/>
    </div>
  );
}

export default App;
