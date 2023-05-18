import { Metadata } from 'next';

import { pokeApi } from '@/api';
import { PokemonListResponse } from '@/interfaces';
import { PokemonList } from '../components';

export const metadata: Metadata = {
  title: 'Listado de Pokemons',
  openGraph: {
    title: 'Listado de Pokemons',
    description: 'Listado de los primeros 151 pokemons',
  }
};

async function getData() {
  const { data }  = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  const { results } = data;
  
  return results.map((pokemon, index) => {
    const id = index + 1;

    return {
      ...pokemon,
      id,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    };
  });
}

export default async function HomePage(props: any) {
  console.log('HomePage', props)

  const pokemons = await getData();

  return (
    <PokemonList pokemons={pokemons} />
  )
}
