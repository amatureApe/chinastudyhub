'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Card, CardBody, Breadcrumb, BreadcrumbItem, BreadcrumbLink, UnorderedList, ListItem, SimpleGrid, Badge } from '@chakra-ui/react'
import Link from 'next/link'
import { FaChevronRight, FaBook, FaClock, FaUsers, FaGraduationCap } from 'react-icons/fa'

export default function ClassicalChinesePoetry() {
    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                {/* Breadcrumb Navigation */}
                <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500" />} mb={8}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} href="/partners">Partners</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} href="/partners/peking-university">Peking University</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Classical Chinese Poetry</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Program Header */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "xl", md: "2xl" }} mb={4} color="#544695">
                            Classical Chinese Poetry
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl">
                            Immerse yourself in the rich tradition of Chinese poetry spanning over 3,000 years of literary excellence
                        </Text>
                        <Badge colorScheme="purple" fontSize="md" px={4} py={2} mt={4}>
                            Literature & Cultural Studies
                        </Badge>
                    </Box>
                </VStack>

                {/* Program Overview */}
                <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
                    <Box>
                        <Heading size={{ base: "lg", md: "xl" }} mb={6} color="#544695">
                            Program Overview
                        </Heading>
                        <VStack spacing={4} align="start">
                            <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                                The Classical Chinese Poetry program at Peking University offers students a comprehensive exploration of China's poetic traditions from the earliest recorded verses to the modern era. This program combines rigorous academic study with cultural immersion, providing students with deep insights into Chinese literature, philosophy, and aesthetics.
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                                Students will study the works of legendary poets such as Li Bai, Du Fu, Wang Wei, and Su Shi, while also exploring the historical and cultural contexts that shaped their writing. The program emphasizes both analytical skills and creative expression, encouraging students to engage with poetry as both scholars and practitioners.
                            </Text>
                        </VStack>
                    </Box>

                    <Box>
                        <Heading size={{ base: "lg", md: "xl" }} mb={6} color="#544695">
                            Program Highlights
                        </Heading>
                        <VStack spacing={4}>
                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaBook} w={6} h={6} color="blue.500" />
                                        <Heading size="sm">Comprehensive Curriculum</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Study poetry from Tang, Song, Yuan, Ming, and Qing dynasties
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaUsers} w={6} h={6} color="green.500" />
                                        <Heading size="sm">Expert Faculty</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Learn from renowned scholars and practicing poets
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaGraduationCap} w={6} h={6} color="purple.500" />
                                        <Heading size="sm">Cultural Immersion</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Field trips to historical sites and poetry gardens
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </VStack>
                    </Box>
                </SimpleGrid>

                {/* Course Structure */}
                <Box bg="gray.50" p={{ base: 6, md: 8 }} borderRadius="xl" mb={{ base: 12, md: 16 }}>
                    <Heading size={{ base: "lg", md: "xl" }} mb={6}>Course Structure</Heading>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
                        <Box>
                            <Heading size="md" mb={4} color="#544695">Core Courses</Heading>
                            <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
                                <ListItem>History of Chinese Poetry (Tang Dynasty Focus)</ListItem>
                                <ListItem>Song Dynasty Poetry and Ci Poetry</ListItem>
                                <ListItem>Classical Chinese Language and Grammar</ListItem>
                                <ListItem>Poetic Forms and Prosody</ListItem>
                                <ListItem>Philosophy in Classical Poetry</ListItem>
                                <ListItem>Comparative Literature: East and West</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box>
                            <Heading size="md" mb={4} color="#544695">Elective Courses</Heading>
                            <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
                                <ListItem>Modern Interpretations of Classical Poetry</ListItem>
                                <ListItem>Poetry Translation Workshop</ListItem>
                                <ListItem>Calligraphy and Poetry</ListItem>
                                <ListItem>Women Poets in Chinese Literature</ListItem>
                                <ListItem>Poetry and Painting Traditions</ListItem>
                                <ListItem>Digital Humanities in Poetry Studies</ListItem>
                            </UnorderedList>
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* Career Prospects */}
                <VStack spacing={{ base: 8, md: 12 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                            Career Prospects
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
                            Graduates pursue diverse careers in education, translation, cultural preservation, and creative industries
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 4, md: 6 }} w="full">
                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Academic Research</Heading>
                                <Text fontSize="xs" color="gray.600">Universities, research institutes, literary journals</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Translation</Heading>
                                <Text fontSize="xs" color="gray.600">Literary translation, publishing houses</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Cultural Institutions</Heading>
                                <Text fontSize="xs" color="gray.600">Museums, cultural centers, arts organizations</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Media & Publishing</Heading>
                                <Text fontSize="xs" color="gray.600">Editorial work, content creation, journalism</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </VStack>

                {/* Program Details */}
                <Box bg="#544695" color="white" p={{ base: 6, md: 8 }} borderRadius="xl" mt={{ base: 12, md: 16 }}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 8 }} textAlign="center">
                        <VStack spacing={2}>
                            <Box as={FaClock} w={6} h={6} />
                            <Heading size="sm">Duration</Heading>
                            <Text fontSize="sm" opacity={0.9}>4 Years (Bachelor&apos;s)</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Box as={FaBook} w={6} h={6} />
                            <Heading size="sm">Credits</Heading>
                            <Text fontSize="sm" opacity={0.9}>120 Total Credits</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Box as={FaUsers} w={6} h={6} />
                            <Heading size="sm">Class Size</Heading>
                            <Text fontSize="sm" opacity={0.9}>15-20 Students</Text>
                        </VStack>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    )
}
