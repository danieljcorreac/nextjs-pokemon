import { Metadata } from 'next';

import { PokemonFavorites } from '@/components';

export const metadata: Metadata = {
    title: 'Favoritos',
    openGraph: {
        title: 'Pokemons favoritos',
        description: 'Listado de los pokemons favoritos',
    }
};

  
const FavoritesPage = () => {
    return (
        <PokemonFavorites />
    );
};

export default FavoritesPage