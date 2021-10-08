import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { get } from '../utils/httpClient';

export const SelectGenre = () => {
    const [genres, setGenres] = useState([])
    
    const history = useHistory();

    useEffect(() => {
        const searchUrl = '/genre/movie/list'
        get(searchUrl)
        .then(data=>{
            console.log(data.genres)
            setGenres(data.genres)
        })
    }, [])

    const handleChange = (e) => {
        const value = e.target.value;
        if(value!=="noGenre"){
            history.push(`/?genreId=${value}`)
        }
    } 

    return (
        <div>
            <form >
                <select name="selectGenre" onChange={handleChange}>
                    <option value="noGenre">Select a genre</option>
                    {  genres.map((genre)=>(
                            <option key={genre.id} value={genre.id}>{genre.name}</option>
                        )) }
                </select>
            </form>
        </div>
    )
}
