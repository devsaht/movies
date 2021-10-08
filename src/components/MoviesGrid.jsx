import { useEffect, useState } from "react";
import { get } from "../utils/httpClient";
import { MovieCard } from "./MovieCard";
import styles from "./MoviesGrid.module.css";
import { Spinner } from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import Empty from "./Empty";

export function MoviesGrid({ search, genreId }) {

  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [morePages, setMorePages] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const searchUrl = genreId
      ? `/discover/movie?with_genres=${genreId}`
      : (search
      ? `/search/movie?query=${search}&page=${page}`
      : `/discover/movie?page=${page}`);

    get(searchUrl).then((data) => {
      setMovies((prevMovies) => prevMovies.concat(data.results));
      setMorePages(data.page < data.total_pages);
      setIsLoading(false);
    });

  }, [search, page, genreId]);

  if (isLoading) {
    return <Spinner />;
  }
  
  if (movies.length === 0 && !isLoading) {
    return <Empty />;
  }

  const nextPage = () =>setPage((prevPage) => prevPage + 1)

  return (
    <InfiniteScroll
      dataLength={movies.length}
      hasMore={morePages}
      next={nextPage}
      loader={<Spinner />}
    >
      <ul className={styles.moviesGrid}>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </InfiniteScroll>
  );
}
