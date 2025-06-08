import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
    colors: {
        brand: {
            yellow: '#FDB801',
            purple: '#544695',
            teal: '#78C3BE',
        },
    },
    components: {
        Button: {
            baseStyle: {
                fontWeight: 'bold',
            },
            variants: {
                solid: {
                    bg: 'brand.purple',
                    color: 'white',
                    _hover: {
                        bg: 'brand.yellow',
                    },
                },
                outline: {
                    borderColor: 'brand.purple',
                    color: 'brand.purple',
                    _hover: {
                        bg: 'brand.purple',
                        color: 'white',
                    },
                },
            },
        },
        Link: {
            baseStyle: {
                _hover: {
                    textDecoration: 'none',
                },
            },
        },
    },
    styles: {
        global: {
            body: {
                bg: 'white',
                color: 'gray.800',
            },
        },
    },
})

export default theme 