'use client'

import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, SimpleGrid, Icon, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok, FaWeixin, FaWhatsapp } from 'react-icons/fa'
import NextLink from 'next/link'
import { FormEvent } from 'react'

export default function Contact() {
    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, lg: 2 }} gap={{ base: 8, md: 10 }}>
                    {/* Contact Information */}
                    <VStack align="start" gap={6}>
                        <Heading size={{ base: "lg", md: "xl" }}>Get in Touch</Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" textAlign={{ base: "center", lg: "left" }} maxW="container.md">
                            We&apos;re here to help you with any questions about studying in China. Let&apos;s get in touch!
                        </Text>

                        <Box w="full">
                            <Heading size={{ base: "md", md: "lg" }} mb={4}>Contact Information</Heading>
                            <VStack align="start" gap={3}>
                                <Text fontSize={{ base: "sm", md: "md" }}><strong>Address:</strong> 1st Floor, Building 2, No. 89 Shuangqing Road, Haidian District, Beijing, China</Text>
                                <Text fontSize={{ base: "sm", md: "md" }}><strong>Phone:</strong> (+86)13718403293</Text>
                                <Text fontSize={{ base: "sm", md: "md" }}><strong>Email:</strong> glxer001@126.com</Text>
                            </VStack>
                        </Box>

                        {/* Social Media */}
                        <Box w="full">
                            <Heading size={{ base: "md", md: "lg" }} mb={4}>Social Media</Heading>
                            <HStack spacing={6} justify={{ base: "center", lg: "start" }} align="center">
                                <ChakraLink as={NextLink} href="https://www.youtube.com/@EARLHOPPER-K3Z2Y" isExternal display="flex" alignItems="center">
                                    <Icon
                                        as={FaYoutube}
                                        w={{ base: 6, md: 7 }}
                                        h={{ base: 6, md: 7 }}
                                        color="gray.600"
                                        _hover={{ color: "#FF0000", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.facebook.com/profile.php?id=61576295951035" isExternal display="flex" alignItems="center">
                                    <Icon
                                        as={FaFacebook}
                                        w={{ base: 6, md: 7 }}
                                        h={{ base: 6, md: 7 }}
                                        color="gray.600"
                                        _hover={{ color: "#1877F2", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.instagram.com/chinastudyhub_cathy0126" isExternal display="flex" alignItems="center">
                                    <Icon
                                        as={FaInstagram}
                                        w={{ base: 6, md: 7 }}
                                        h={{ base: 6, md: 7 }}
                                        color="gray.600"
                                        _hover={{ color: "#E4405F", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.tiktok.com/@chinastudyhub_cathy0126" isExternal display="flex" alignItems="center">
                                    <Icon
                                        as={FaTiktok}
                                        w={{ base: 6, md: 7 }}
                                        h={{ base: 6, md: 7 }}
                                        color="gray.600"
                                        _hover={{ color: "#000000", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </ChakraLink>
                                <Box cursor="pointer" title="WeChat: chinastudyhub_coordinator" display="flex" alignItems="center">
                                    <Icon
                                        as={FaWeixin}
                                        w={{ base: 7, md: 8 }}
                                        h={{ base: 7, md: 8 }}
                                        color="gray.600"
                                        _hover={{ color: "#07C160", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </Box>
                                <Box cursor="pointer" title="WhatsApp coming soon" display="flex" alignItems="center">
                                    <Icon
                                        as={FaWhatsapp}
                                        w={{ base: 7, md: 8 }}
                                        h={{ base: 7, md: 8 }}
                                        color="gray.600"
                                        _hover={{ color: "#25D366", transform: "scale(1.1)" }}
                                        transition="all 0.2s"
                                    />
                                </Box>
                            </HStack>
                        </Box>
                    </VStack>

                    {/* Contact Form */}
                    <Box as="form" onSubmit={(e: FormEvent) => e.preventDefault()}>
                        <VStack gap={4}>
                            <FormControl isRequired>
                                <FormLabel fontSize={{ base: "sm", md: "md" }}>Name</FormLabel>
                                <Input type="text" placeholder="Your name" size={{ base: "md", md: "lg" }} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize={{ base: "sm", md: "md" }}>Email</FormLabel>
                                <Input type="email" placeholder="Your email" size={{ base: "md", md: "lg" }} />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel fontSize={{ base: "sm", md: "md" }}>Message</FormLabel>
                                <Textarea placeholder="Your message" rows={6} size={{ base: "md", md: "lg" }} />
                            </FormControl>

                            <Button type="submit" colorScheme="blue" size={{ base: "md", md: "lg" }} w="full">
                                Send Message
                            </Button>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
} 