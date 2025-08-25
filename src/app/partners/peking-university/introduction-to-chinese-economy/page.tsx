'use client'

import { Box, Container, Heading, Text, VStack, Card, CardBody, Breadcrumb, BreadcrumbItem, BreadcrumbLink, UnorderedList, ListItem, SimpleGrid, Badge, Progress, Flex } from '@chakra-ui/react'
import Link from 'next/link'
import { FaChevronRight, FaIndustry, FaClock, FaUsers, FaGraduationCap, FaGlobe, FaChartBar, FaBuilding } from 'react-icons/fa'

export default function IntroductionToChineseEconomy() {
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
                        <BreadcrumbLink href="#">Introduction to Chinese Economy</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Program Header */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "xl", md: "2xl" }} mb={4} color="#544695">
                            Introduction to Chinese Economy
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl">
                            Comprehensive study of China's economic transformation and its role in the global economy
                        </Text>
                        <Badge colorScheme="green" fontSize="md" px={4} py={2} mt={4}>
                            Economics & Policy Studies
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
                                This comprehensive program provides students with a deep understanding of China's remarkable economic transformation from a planned economy to the world's second-largest economy. Students will explore the historical context, policy frameworks, and institutional changes that have driven China's growth.
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                                The course covers key topics including economic reforms, industrial development, financial markets, trade policies, and China's integration into the global economy. Special attention is given to contemporary challenges such as sustainable development, income inequality, and technological innovation.
                            </Text>
                        </VStack>
                    </Box>

                    <Box>
                        <Heading size={{ base: "lg", md: "xl" }} mb={6} color="#544695">
                            Key Focus Areas
                        </Heading>
                        <VStack spacing={4}>
                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaIndustry} w={6} h={6} color="blue.500" />
                                        <Heading size="sm">Economic Reforms</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Study of market-oriented reforms since 1978
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaGlobe} w={6} h={6} color="green.500" />
                                        <Heading size="sm">Global Integration</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            China's role in international trade and investment
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaChartBar} w={6} h={6} color="purple.500" />
                                        <Heading size="sm">Policy Analysis</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Evaluation of economic policies and their impacts
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>
                        </VStack>
                    </Box>
                </SimpleGrid>

                {/* Economic Indicators */}
                <Box bg="gray.50" p={{ base: 6, md: 8 }} borderRadius="xl" mb={{ base: 12, md: 16 }}>
                    <Heading size={{ base: "lg", md: "xl" }} mb={6} textAlign="center">
                        China's Economic Milestones (Study Topics)
                    </Heading>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 4, md: 6 }}>
                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="lg" color="#544695" mb={2}>1978</Heading>
                                <Text fontSize="sm" fontWeight="bold" mb={1}>Economic Reforms Begin</Text>
                                <Text fontSize="xs" color="gray.600">Opening up and reform policies</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="lg" color="#544695" mb={2}>2001</Heading>
                                <Text fontSize="sm" fontWeight="bold" mb={1}>WTO Membership</Text>
                                <Text fontSize="xs" color="gray.600">Integration into global trade</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="lg" color="#544695" mb={2}>2010</Heading>
                                <Text fontSize="sm" fontWeight="bold" mb={1}>World's 2nd Economy</Text>
                                <Text fontSize="xs" color="gray.600">Surpassed Japan in GDP</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="lg" color="#544695" mb={2}>2013</Heading>
                                <Text fontSize="sm" fontWeight="bold" mb={1}>Belt and Road Initiative</Text>
                                <Text fontSize="xs" color="gray.600">Global infrastructure strategy</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Course Structure */}
                <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" shadow="lg" mb={{ base: 12, md: 16 }}>
                    <Heading size={{ base: "lg", md: "xl" }} mb={6}>Course Modules</Heading>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
                        <Box>
                            <Heading size="md" mb={4} color="#544695">Foundation Modules</Heading>
                            <VStack spacing={3} align="start">
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Historical Background (1949-1978)</Text>
                                    <Progress value={100} size="sm" colorScheme="purple" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Reform and Opening Up (1978-2000)</Text>
                                    <Progress value={100} size="sm" colorScheme="purple" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">WTO Era and Globalization</Text>
                                    <Progress value={100} size="sm" colorScheme="purple" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">New Era Economic Policies</Text>
                                    <Progress value={100} size="sm" colorScheme="purple" w="60px" />
                                </Flex>
                            </VStack>
                        </Box>

                        <Box>
                            <Heading size="md" mb={4} color="#544695">Advanced Topics</Heading>
                            <VStack spacing={3} align="start">
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Financial System Development</Text>
                                    <Progress value={85} size="sm" colorScheme="blue" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Regional Development Strategies</Text>
                                    <Progress value={90} size="sm" colorScheme="blue" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Innovation and Technology Policy</Text>
                                    <Progress value={80} size="sm" colorScheme="blue" w="60px" />
                                </Flex>
                                <Flex align="center" w="full">
                                    <Text fontSize="sm" flex="1">Sustainable Development Goals</Text>
                                    <Progress value={75} size="sm" colorScheme="blue" w="60px" />
                                </Flex>
                            </VStack>
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
                            Graduates are well-prepared for careers in international business, policy analysis, and China-focused roles
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 4, md: 6 }} w="full">
                        <Card textAlign="center">
                            <CardBody>
                                <Box as={FaBuilding} w={8} h={8} color="#544695" mx="auto" mb={3} />
                                <Heading size="sm" mb={2} color="#544695">Multinational Corporations</Heading>
                                <Text fontSize="xs" color="gray.600">China market entry, business development, strategic planning</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Box as={FaGlobe} w={8} h={8} color="#544695" mx="auto" mb={3} />
                                <Heading size="sm" mb={2} color="#544695">International Organizations</Heading>
                                <Text fontSize="xs" color="gray.600">World Bank, IMF, UN agencies, development organizations</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Box as={FaChartBar} w={8} h={8} color="#544695" mx="auto" mb={3} />
                                <Heading size="sm" mb={2} color="#544695">Government & Policy</Heading>
                                <Text fontSize="xs" color="gray.600">Trade offices, diplomatic missions, policy research institutes</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Box as={FaIndustry} w={8} h={8} color="#544695" mx="auto" mb={3} />
                                <Heading size="sm" mb={2} color="#544695">Financial Services</Heading>
                                <Text fontSize="xs" color="gray.600">Investment banking, asset management, economic research</Text>
                            </CardBody>
                        </Card>
                    </SimpleGrid>
                </Box>

                {/* Program Details */}
                <Box bg="#544695" color="white" p={{ base: 6, md: 8 }} borderRadius="xl" mt={{ base: 12, md: 16 }}>
                    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 4, md: 8 }} textAlign="center">
                        <VStack spacing={2}>
                            <Box as={FaClock} w={6} h={6} />
                            <Heading size="sm">Duration</Heading>
                            <Text fontSize="sm" opacity={0.9}>1 Semester (Introductory)</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Box as={FaGraduationCap} w={6} h={6} />
                            <Heading size="sm">Credits</Heading>
                            <Text fontSize="sm" opacity={0.9}>3 Credits</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Box as={FaUsers} w={6} h={6} />
                            <Heading size="sm">Class Size</Heading>
                            <Text fontSize="sm" opacity={0.9}>40-50 Students</Text>
                        </VStack>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    )
}
