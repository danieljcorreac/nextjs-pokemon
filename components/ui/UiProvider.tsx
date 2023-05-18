'use client';

import { FC } from 'react';
import Head from 'next/head';
import { CssBaseline, NextUIProvider } from '@nextui-org/react';

import { darkTheme } from '@/themes';

type Props = {
    children?: React.ReactNode
};

export const UiProvider: FC<Props> = ({ children }) => {
    return (
        <>
            <Head>{CssBaseline.flush()}</Head>
            <NextUIProvider theme={darkTheme}>
                {children}
            </NextUIProvider>
        </>
    );
};