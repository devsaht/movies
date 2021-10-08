import styles from "./MovieDetails.module.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { Spinner } from "../components/Spinner";
import { getImage } from "../utils/getImage";

export function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    get("/movie/" + movieId).then((data) => {
      setMovie(data);
      setIsLoading(false);
    });
  }, [movieId]);

  if (isLoading) {
    return <Spinner />;
  }

  if (!isLoading) {
    console.log(movie);
  }

  const imageUrl = getImage(movie.poster_path);

  return (
    <div className={styles.movieDetailsContainer}>
      <img
        src={imageUrl}
        width={300}
        alt={"reseña de " + movie.title}
        className={styles.movieImage}
      />
      <div className={styles.movieDetailsContent}>
        <p>
          <strong>Title:</strong> {movie.title}
        </p>
        <p>
          <strong>Description:</strong> {movie.overview}
        </p>
        <div>
          <strong>Genres:</strong>
          <ul>
            {movie.genres.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
