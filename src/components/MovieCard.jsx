import { Link } from "react-router-dom";
import styles from "./MovieCard.module.css";
import { getImage } from "../utils/getImage";

export function MovieCard({ movie }) {
  const imageUrl = getImage(movie.poster_path);

  return (
    <li className={styles.movieCard}>
      <Link to={"/movies/" + movie.id}>
        <div className={styles.movieCard}>
          <img
            width={230}
            height={345}
            className={styles.movieImage}
            src={imageUrl}
            alt={movie.title}
          />
          <div className={styles.movieRate}>
            <div className={styles.movieRing}>
              {movie.vote_average}
            </div>
            </div>
        </div>
        <div className={styles.movieTitle}>{movie.title}</div>
      </Link>
    </li>
  );
}
