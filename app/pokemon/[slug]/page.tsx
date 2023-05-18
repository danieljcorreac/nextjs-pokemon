import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { pokeApi } from '@/api';
import { PokemonDetail } from '@/components';
import { Pokemon, PokemonListResponse } from '@/interfaces';

async function getAllData() {
    const { data }  = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
    const { results } = data;
    
    return results.map((pokemon) => {
      return pokemon.name;
    });
}

async function getData(slug: string) {
    try {
        const response  = await pokeApi.get<Pokemon>(`/pokemon/${slug}`);

        if(response.status !== 200) return;
        
        const {data} = response;
        const {id, name, sprites} = data;
        return {
            id,
            name,
            sprites
        } as Pokemon;
    } catch {
        return;
    }
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
    const { slug } = params;
    const pokemon = await getData(slug);
    
    if(!pokemon) return {};

    return { 
        title: pokemon.name,
        openGraph: {
            title: `Pokemon ${pokemon.name}`,
            description: `Detalle del pokemon ${pokemon.name}`,
            images: [pokemon.sprites.other?.home.front_default ?? '']
        }
    };
}

const PokemonPage = async ({ params }: any) => {
    console.log('PokemonPage', {params});

    const { slug } = params;
    const pokemon = await getData(slug);

    if (!pokemon) {
        notFound();
    }
    
    return (
        <PokemonDetail pokemon={pokemon} />
    );
};

export async function generateStaticParams() {
    console.log('generateStaticParams');

    const pokemons = await getAllData();

    const pokemonsId = [...Array(151)].map((value, index) => ({
        slug: `${index + 1}`,
    }));

    const pokemonsName = pokemons.map((name) => ({
        slug: name,
    }));;

    return [
        ...pokemonsId,
        ...pokemonsName,
    ];
}

export default PokemonPage