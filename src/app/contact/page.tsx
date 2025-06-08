'use client'

import { Box, Container, Heading, Text, VStack, FormControl, FormLabel, Input, Textarea, Button, SimpleGrid } from '@chakra-ui/react'
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
                                <Text>📍 123 Business Street, City, Country</Text>
                                <Text>📞 +1 (555) 123-4567</Text>
                                <Text>✉️ contact@business.com</Text>
                            </VStack>
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