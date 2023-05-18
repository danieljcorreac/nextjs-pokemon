"use client"

import { useState } from 'react';

import { localFavorities } from '@/utils';
import { NoFavorites } from '../ui';
import { PokemonList } from './PokemonList';

export const PokemonFavorites = () => {
    const [favoritePokemons, setFavoritePokemons] = useState(localFavorities.getFavorites())

    return (
        <>
            {
                favoritePokemons.length === 0
                    ? (<NoFavorites />)
                    : (<PokemonList pokemons={favoritePokemons} />)
            }
        </>
    );
};