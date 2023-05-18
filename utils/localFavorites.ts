import { SmallPokemon } from '@/interfaces';

const getFavorites = (): SmallPokemon[] => {
    if (typeof window === 'undefined') return [];

    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

const existInFavorite = (id: number) => {
    const favorites = getFavorites();
    return favorites.some(e => e.id === id);
}

const toggleFavorite = (pokemon: SmallPokemon) => {
    const {id} = pokemon;
    let favorites = getFavorites();
    
    if (existInFavorite(id)) {
        favorites = favorites.filter(e => e.id !== id);
    } else {
        favorites.push(pokemon);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

const localFavorities = {
    getFavorites,
    existInFavorite,
    toggleFavorite
};

export default localFavorities;