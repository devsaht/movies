import { useEffect, useState } from "react";
import { MoviesGrid } from "../components/MoviesGrid";
import { Search } from "../components/Search";
import { SelectGenre } from "../components/SelectGenre";
import { useDebounce } from "../hooks/useDebounce";
import { useQuery } from "../hooks/useQuery";

export function LandingPage(){

    const [isChange, setIsChange] = useState(false)
    const query = useQuery();

    const search = query.get("search");
    const genreId = query.get("genreId");

    const debouncedSearch = useDebounce(search,300);

    useEffect(() => {
        setIsChange(prevIsChange => !prevIsChange)
    }, [debouncedSearch, genreId])

    return (
        <>
            <SelectGenre/>
            <Search/>
            {/* <MoviesGrid key={debouncedSearch} search={debouncedSearch} genreId={genreId} /> */}
            <MoviesGrid key={isChange} search={debouncedSearch} genreId={genreId} />
        </>
        );
}