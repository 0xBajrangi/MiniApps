

const useGenre = (selectedGenres) => {
    if (selectedGenres.length < 1) return "";
    const GenresId = selectedGenres.map((g) => g.id);

    return GenresId.reduce((acc, g) => acc + "," + g); 
};

export default useGenre;