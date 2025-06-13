'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'

export function Providers({ children }: { children: ReactNode }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                {children}
            </ChakraProvider>
        </CacheProvider>
    )
} 