const baseUrl = 'https://api.themoviedb.org/3';

export function get(path){

    return fetch(baseUrl + path,{
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1NTIzYTA4N2Y4NjU2ZjIwNzVmYjUwNTI4OTVhMjljMiIsInN1YiI6IjYwYzhjYWI5NDgzMzNhMDA3OWI5YzA5ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.34d2h_omJCzAtH1nta1TPuN5L_dPtHSzvhv9enkHsnE',
                'Content-Type': 'application/json;charset=utf-8'
            },
        })
        .then(result => result.json());
}