'use client'

import { Box, Container, Flex, Link, Text, VStack, Image } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="white">
            <Box as="nav" bg="#544695" color="white" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <Link as={NextLink} href="/" display="flex" alignItems="center" gap={3}>
                            <Image src="/chinastudyhubicon.svg" alt="ChinaStudyHub Logo" h="40px" />
                            <Text fontSize="xl" fontWeight="bold">ChinaStudyHub</Text>
                        </Link>
                        <Flex gap={6}>
                            <Link as={NextLink} href="/" _hover={{ color: "#FDB801" }}>Home</Link>
                            <Link as={NextLink} href="/services" _hover={{ color: "#FDB801" }}>Services</Link>
                            <Link as={NextLink} href="/guides" _hover={{ color: "#FDB801" }}>Guides</Link>
                            <Link as={NextLink} href="/about" _hover={{ color: "#FDB801" }}>About</Link>
                            <Link as={NextLink} href="/contact" _hover={{ color: "#FDB801" }}>Contact</Link>
                        </Flex>
                    </Flex>
                </Container>
            </Box>

            <Box flex="1">
                {children}
            </Box>

            <Box as="footer" bg="#544695" color="white" py={6}>
                <Container maxW="container.xl">
                    <VStack gap={4}>
                        <Text>© 2024 ChinaStudyHub. All rights reserved.</Text>
                        <Flex gap={4}>
                            <Link href="#" _hover={{ color: "#FDB801" }}>Privacy Policy</Link>
                            <Link href="#" _hover={{ color: "#FDB801" }}>Terms of Service</Link>
                        </Flex>
                    </VStack>
                </Container>
            </Box>
        </Box>
    )
} 