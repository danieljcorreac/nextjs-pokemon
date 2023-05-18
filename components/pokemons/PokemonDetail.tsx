"use client"

import { FC, useState } from 'react';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';

import { Pokemon } from '@/interfaces';
import { localFavorities } from '@/utils';

interface Props {
    pokemon: Pokemon;
}

export const PokemonDetail: FC<Props> = ({pokemon}) => {

    const [isInFavorite, setIsInFavorite] = useState(localFavorities.existInFavorite(pokemon.id));

    const onToggleFavorite = () => {
        localFavorities.toggleFavorite({
            id: pokemon.id,
            name: pokemon.name,
            img: pokemon.sprites.other?.dream_world.front_default ?? '',
            url: ''
        });
        setIsInFavorite(!isInFavorite);
        
        if(!isInFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                spread: 160,
                angle: -100,
                origin: {
                    x: 1,
                    y: 0,
                }
            });
        }
    };

    return (
        <Grid.Container css={{ marginTop: '5px' }} gap={2}>
            <Grid xs={12} sm={4}>
                <Card isHoverable css={{ padding: '30px' }}>
                    <Card.Body>
                        <Card.Image 
                            src={ pokemon.sprites.other?.dream_world.front_default || '/no-image.png' }
                            alt={ pokemon.name }
                            width="100%"
                            height={200}
                        />
                    </Card.Body> 
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                    <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Text h1 transform="capitalize">{pokemon.name}</Text>

                        <Button
                            color="gradient"
                            ghost={!isInFavorite}
                            onClick={onToggleFavorite}
                        >
                            { isInFavorite ? 'En favoritos' : 'Guardar en favoritos' }
                        </Button>
                    </Card.Header>

                    <Card.Body>
                        <Text size={30}>Sprites:</Text>
                        <Container display="flex" direction="row">
                            <Image 
                                src={ pokemon.sprites.front_default }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={ pokemon.sprites.back_default }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={ pokemon.sprites.front_shiny }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                            <Image 
                                src={ pokemon.sprites.back_shiny }
                                alt={ pokemon.name }
                                width={100}
                                height={100}
                            />
                        </Container>
                    </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>
    );
};