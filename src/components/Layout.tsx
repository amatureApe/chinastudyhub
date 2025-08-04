'use client'

import { Box, Container, Flex, Link, Text, VStack, Image, IconButton, useDisclosure, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, Stack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { HamburgerIcon } from '@chakra-ui/icons'

export default function Layout({ children }: { children: React.ReactNode }) {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const navItems = [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/partners", label: "Partners" },
        { href: "/guides", label: "Guides" },
        { href: "/about", label: "About" },
        { href: "/contact", label: "Contact" }
    ]

    return (
        <Box minH="100vh" display="flex" flexDirection="column" bg="white">
            <Box as="nav" bg="#544695" color="white" py={4}>
                <Container maxW="container.xl">
                    <Flex justify="space-between" align="center">
                        <Link as={NextLink} href="/" display="flex" alignItems="center" gap={3}>
                            <Image src="/chinastudyhubicon.svg" alt="ChinaStudyHub Logo" h={{ base: "30px", md: "40px" }} />
                            <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">ChinaStudyHub</Text>
                        </Link>

                        {/* Desktop Navigation with Button */}
                        <VStack display={{ base: 'none', md: 'flex' }} align="center">
                            <Flex gap={6}>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.href}
                                        as={NextLink}
                                        href={item.href}
                                        _hover={{ color: "#FDB801" }}
                                        fontSize={{ base: "sm", lg: "md" }}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </Flex>

                            {/* Get Started Button - Desktop */}
                            <Link
                                as={NextLink}
                                href="/contact"
                                bg="#FDB801"
                                color="white"
                                px={6}
                                py="1px"
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="medium"
                                _hover={{ bg: "#78C3BE", textDecoration: "none" }}
                                transition="all 0.2s"
                                lineHeight="1"
                                minH="20px"
                                display="flex"
                                alignItems="center"
                                mt="-16px"
                            >
                                Get Started Today
                            </Link>
                        </VStack>

                        {/* Mobile Menu Button */}
                        <IconButton
                            display={{ base: 'flex', md: 'none' }}
                            onClick={onOpen}
                            icon={<HamburgerIcon />}
                            variant="ghost"
                            color="white"
                            _hover={{ bg: 'rgba(255,255,255,0.1)' }}
                            aria-label="Open navigation menu"
                        />
                    </Flex>
                </Container>
            </Box>

            {/* Mobile Navigation Drawer */}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg="#544695">
                    <DrawerCloseButton color="white" />
                    <DrawerHeader color="white" borderBottomWidth="1px" borderColor="rgba(255,255,255,0.2)">
                        <Flex alignItems="center" gap={3}>
                            <Image src="/chinastudyhubicon.svg" alt="ChinaStudyHub Logo" h="30px" />
                            <Text fontSize="lg" fontWeight="bold">ChinaStudyHub</Text>
                        </Flex>
                    </DrawerHeader>
                    <DrawerBody pt={6}>
                        <Stack spacing={4}>
                            {navItems.map((item) => (
                                <Link
                                    key={item.href}
                                    as={NextLink}
                                    href={item.href}
                                    color="white"
                                    fontSize="lg"
                                    py={3}
                                    px={4}
                                    borderRadius="md"
                                    _hover={{ bg: 'rgba(255,255,255,0.1)', color: "#FDB801" }}
                                    onClick={onClose}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </Stack>
                    </DrawerBody>
                </DrawerContent>
            </Drawer>

            <Box flex="1">
                {children}
            </Box>

            <Box as="footer" bg="#544695" color="white" py={6}>
                <Container maxW="container.xl">
                    <VStack gap={4}>
                        <VStack spacing={2} textAlign="center">
                            <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
                                <strong>Address:</strong> 1st Floor, Building 2, No. 89 Shuangqing Road, Haidian District, Beijing, China
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }} color="gray.300">
                                <strong>Email:</strong> glxer001@126.com
                            </Text>
                        </VStack>
                        <Text fontSize={{ base: "sm", md: "md" }} textAlign="center">
                            © 2024 ChinaStudyHub. All rights reserved.
                        </Text>
                        <Flex gap={4} flexDirection={{ base: "column", sm: "row" }} alignItems="center">
                            <Link href="#" _hover={{ color: "#FDB801" }} fontSize={{ base: "sm", md: "md" }}>Privacy Policy</Link>
                            <Link href="#" _hover={{ color: "#FDB801" }} fontSize={{ base: "sm", md: "md" }}>Terms of Service</Link>
                        </Flex>
                    </VStack>
                </Container>
            </Box>
        </Box>
    )
} 