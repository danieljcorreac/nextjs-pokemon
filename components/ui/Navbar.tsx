'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Link as LinkUi, Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
    const {theme} = useTheme();

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray100.value,
        }}>
            <Image
                src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
                alt="icono"
                width={70}
                height={70}
            />

            <Link href="/" legacyBehavior>
                <LinkUi>
                    <Text h4 css={{ margin: '0' }}>P</Text>
                    <Text h5 css={{ margin: '0' }}>okemón</Text>
                </LinkUi>
            </Link>

            <Spacer css={{ flex: 1 }} />

            <Link href="/favorites">
                <Text>Favoritos</Text>
            </Link>
        </div>
    );
};
