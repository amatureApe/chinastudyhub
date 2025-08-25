'use client'

import { Box, Container, Heading, Text, VStack, SimpleGrid, Card, CardBody, Badge, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Divider, UnorderedList, ListItem, Button, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { FaGraduationCap, FaTrophy, FaGlobe, FaChevronRight } from 'react-icons/fa'

export default function PekingUniversity() {
    const majors = [
        {
            name: "Classical Chinese Poetry",
            slug: "classical-chinese-poetry",
            description: "Explore the rich tradition of Chinese poetry from ancient times to modern era"
        },
        {
            name: "Applied Econometrics",
            slug: "applied-econometrics",
            description: "Advanced statistical methods for economic analysis and forecasting"
        },
        {
            name: "Introduction to Chinese Economy",
            slug: "introduction-to-chinese-economy",
            description: "Comprehensive overview of China's economic development and policies"
        }
    ]

    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                {/* Breadcrumb Navigation */}
                <Breadcrumb spacing="8px" separator={<FaChevronRight color="gray.500" />} mb={8}>
                    <BreadcrumbItem>
                        <BreadcrumbLink as={Link} href="/partners">Partners</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href="#">Peking University</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* University Header */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "xl", md: "2xl" }} mb={4} color="#544695">
                            Peking University (北京大学)
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl">
                            China's first modern national university, established in 1898, and one of the most prestigious institutions in Asia
                        </Text>
                        <Flex justify="center" mt={4} gap={4} wrap="wrap">
                            <Badge colorScheme="purple" fontSize="sm" px={3} py={1}>Rank #1 in China</Badge>
                            <Badge colorScheme="blue" fontSize="sm" px={3} py={1}>Founded 1898</Badge>
                            <Badge colorScheme="green" fontSize="sm" px={3} py={1}>Beijing, China</Badge>
                        </Flex>
                    </Box>
                </VStack>

                {/* University Overview */}
                <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={{ base: 6, md: 8 }} mb={{ base: 12, md: 16 }}>
                    <Card>
                        <CardBody>
                            <VStack spacing={4} align="center">
                                <Box as={FaTrophy} w={8} h={8} color="gold" />
                                <Heading size="md" textAlign="center">Academic Excellence</Heading>
                                <Text fontSize="sm" textAlign="center" color="gray.600">
                                    Consistently ranked as China's top university with world-class faculty and research facilities
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack spacing={4} align="center">
                                <Box as={FaGlobe} w={8} h={8} color="blue.500" />
                                <Heading size="md" textAlign="center">Global Recognition</Heading>
                                <Text fontSize="sm" textAlign="center" color="gray.600">
                                    Ranked among top 20 universities worldwide with extensive international partnerships
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>

                    <Card>
                        <CardBody>
                            <VStack spacing={4} align="center">
                                <Box as={FaGraduationCap} w={8} h={8} color="green.500" />
                                <Heading size="md" textAlign="center">Alumni Network</Heading>
                                <Text fontSize="sm" textAlign="center" color="gray.600">
                                    Over 400,000 alumni worldwide including Nobel laureates and world leaders
                                </Text>
                            </VStack>
                        </CardBody>
                    </Card>
                </SimpleGrid>

                {/* About Section */}
                <Box bg="gray.50" p={{ base: 6, md: 8 }} borderRadius="xl" mb={{ base: 12, md: 16 }}>
                    <VStack spacing={6} align="start">
                        <Heading size={{ base: "lg", md: "xl" }}>About Peking University</Heading>

                        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                            Peking University (PKU) is a public research university in Beijing, China. It is the first modern national university established in China, founded in 1898 as the Imperial University of Peking. PKU is consistently ranked as the top university in China and among the best in Asia and the world.
                        </Text>

                        <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                            The university is renowned for its campus grounds and the beauty of its traditional Chinese architecture. PKU has educated and produced many prominent figures in Chinese politics, business, academia, and culture, including many leaders of the Communist Party of China.
                        </Text>

                        <Box>
                            <Heading size="md" mb={3}>Key Highlights:</Heading>
                            <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
                                <ListItem>First modern national university in China (1898)</ListItem>
                                <ListItem>Consistently ranked #1 university in China</ListItem>
                                <ListItem>Located in Beijing's Haidian District</ListItem>
                                <ListItem>Over 50,000 students from around the world</ListItem>
                                <ListItem>30+ schools and departments</ListItem>
                                <ListItem>Extensive library system with over 15 million volumes</ListItem>
                                <ListItem>Beautiful traditional Chinese campus architecture</ListItem>
                            </UnorderedList>
                        </Box>
                    </VStack>
                </Box>

                {/* Available Majors Section */}
                <VStack spacing={{ base: 8, md: 12 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                            Available Majors
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                            Explore our specialized programs designed for international students
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
                        {majors.map((major, index) => (
                            <Card key={index} _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }} transition="all 0.3s">
                                <CardBody>
                                    <VStack spacing={4} align="start" h="full">
                                        <Heading size="md" color="#544695">
                                            {major.name}
                                        </Heading>
                                        <Text fontSize="sm" color="gray.600" flex="1">
                                            {major.description}
                                        </Text>
                                        <Button
                                            as={Link}
                                            href={`/partners/peking-university/${major.slug}`}
                                            size="sm"
                                            colorScheme="purple"
                                            variant="outline"
                                            w="full"
                                        >
                                            Learn More
                                        </Button>
                                    </VStack>
                                </CardBody>
                            </Card>
                        ))}
                    </SimpleGrid>
                </VStack>

                {/* Tuition Information */}
                <Box bg="#544695" color="white" p={{ base: 6, md: 8 }} borderRadius="xl" mt={{ base: 12, md: 16 }}>
                    <VStack spacing={4} textAlign="center">
                        <Heading size={{ base: "md", md: "lg" }}>Tuition Information</Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} fontWeight="bold">¥15,000 per year</Text>
                        <Text fontSize={{ base: "sm", md: "md" }} opacity={0.9}>
                            Competitive tuition rates for international students with scholarship opportunities available
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}
