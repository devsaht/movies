import styles from './App.module.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { MovieDetails } from './pages/MovieDetails';
import { LandingPage } from './pages/LandingPage';
import { MoviesProvider } from './context/MoviesContext';

export function App(){
    return <Router>
        <header>
            <Link to='/'>
                <h1 className={styles.title}>PELIS STATION</h1>
            </Link>
        </header>
        <main>
            <MoviesProvider>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/movies/:movieId" component={MovieDetails}/>
                </Switch>
            </MoviesProvider>
        </main>
    </Router>;
}