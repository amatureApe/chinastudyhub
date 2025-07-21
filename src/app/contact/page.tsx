'use client'

import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, SimpleGrid, Icon, HStack, Link as ChakraLink } from '@chakra-ui/react'
import { FaYoutube, FaFacebook, FaInstagram, FaTiktok, FaWeixin, FaWhatsapp } from 'react-icons/fa'
import NextLink from 'next/link'
import { FormEvent } from 'react'

export default function Contact() {
    return (
        <Box py={20}>
            <Container maxW="container.xl">
                <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
                    {/* Contact Information */}
                    <VStack align="start" gap={6}>
                        <Heading size="xl">Get in Touch</Heading>
                        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="container.md">
                            We&apos;re here to help you with any questions about studying in China. Let&apos;s get in touch!
                        </Text>

                        <Box>
                            <Heading size="md" mb={4}>Contact Information</Heading>
                            <VStack align="start" gap={3}>
                                <Text><strong>Address:</strong> 1st Floor, Building 2, No. 89 Shuangqing Road, Haidian District, Beijing, China</Text>
                                <Text><strong>Phone:</strong> (+86)13718403293</Text>
                                <Text><strong>Email:</strong> glxer001@126.com</Text>
                            </VStack>
                        </Box>

                        {/* Social Media */}
                        <Box>
                            <Heading size="md" mb={4}>Social Media</Heading>
                            <HStack spacing={4}>
                                <ChakraLink as={NextLink} href="https://www.youtube.com/@EARLHOPPER-K3Z2Y" isExternal>
                                    <Icon as={FaYoutube} w={6} h={6} />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.facebook.com/profile.php?id=61576295951035" isExternal>
                                    <Icon as={FaFacebook} w={6} h={6} />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.instagram.com/chinastudyhub_cathy0126" isExternal>
                                    <Icon as={FaInstagram} w={6} h={6} />
                                </ChakraLink>
                                <ChakraLink as={NextLink} href="https://www.tiktok.com/@chinastudyhub_cathy0126" isExternal>
                                    <Icon as={FaTiktok} w={6} h={6} />
                                </ChakraLink>
                                <Icon as={FaWeixin} w={6} h={6} title="WeChat: chinastudyhub_coordinator" />
                                <Icon as={FaWhatsapp} w={6} h={6} title="WhatsApp coming soon" />
                            </HStack>
                        </Box>
                    </VStack>

                    {/* Contact Form */}
                    <Box as="form" onSubmit={(e: FormEvent) => e.preventDefault()}>
                        <VStack gap={4}>
                            <FormControl isRequired>
                                <FormLabel>Name</FormLabel>
                                <Input type="text" placeholder="Your name" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Email</FormLabel>
                                <Input type="email" placeholder="Your email" />
                            </FormControl>

                            <FormControl isRequired>
                                <FormLabel>Message</FormLabel>
                                <Textarea placeholder="Your message" rows={6} />
                            </FormControl>

                            <Button type="submit" colorScheme="blue" size="lg" w="full">
                                Send Message
                            </Button>
                        </VStack>
                    </Box>
                </SimpleGrid>
            </Container>
        </Box>
    )
} 