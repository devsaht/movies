import placeholder from "../assets/placeholder.gif";

export function getImage(path){
    return (path
    ? `https://image.tmdb.org/t/p/w300${path}`
    : placeholder);
}
