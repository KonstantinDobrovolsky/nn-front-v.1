import { Link } from "react-router-dom";
import 'app/styles/index.css';
import { AppRouter } from "app/providers/appRouter";
import Button from "shared/ui/Button/Button";
import { useState } from "react";
import classes from './App.module.css';

function App() {
  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
    if (theme === 'light')
      setTheme('cyberpunk')
    else
      setTheme('light')
  }

  return (
    <div className={`app ${theme}`}>

      <div className={classes.header}>
        <div className={classes.links}>
          <Link className={classes.link} to={'/playground'}>Площадка</Link>
          <Link className={classes.link} to={'/currentFights'}>Список боев</Link>
          <Link className={classes.link} to={'/tournamentResults'}>Итоги</Link>
          <Link className={classes.link} to={'/tournamentSettings'}>Управление турниром</Link>
        </div>
        <Button name="" inheritClasses={classes.themeToggle} onClick={changeTheme}/>
      </div>

      <AppRouter/>
    </div>
  );
}

export default App;
