'use client'

import React from 'react'
import { Box, Container, Heading, Text, VStack, Card, CardBody, Breadcrumb, BreadcrumbItem, BreadcrumbLink, UnorderedList, ListItem, SimpleGrid, Badge, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react'
import Link from 'next/link'
import { FaChevronRight, FaChartLine, FaClock, FaUsers, FaGraduationCap, FaCalculator, FaDatabase } from 'react-icons/fa'

export default function AppliedEconometrics() {
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
                        <BreadcrumbLink href="#">Applied Econometrics</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>

                {/* Program Header */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 16 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "xl", md: "2xl" }} mb={4} color="#544695">
                            Applied Econometrics
                        </Heading>
                        <Text fontSize={{ base: "lg", md: "xl" }} color="gray.600" maxW="3xl">
                            Master advanced statistical methods and data analysis techniques for economic research and policy analysis
                        </Text>
                        <Badge colorScheme="blue" fontSize="md" px={4} py={2} mt={4}>
                            Economics & Statistics
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
                                The Applied Econometrics program at Peking University provides students with cutting-edge training in statistical methods used in economic analysis. This rigorous program combines theoretical foundations with practical applications, preparing students to tackle real-world economic problems using sophisticated quantitative techniques.
                            </Text>
                            <Text fontSize={{ base: "sm", md: "md" }} lineHeight="1.6">
                                Students will master both classical and modern econometric methods, including time series analysis, panel data methods, instrumental variables, and machine learning applications in economics. The program emphasizes hands-on experience with statistical software and real economic datasets.
                            </Text>
                        </VStack>
                    </Box>

                    <Box>
                        <Heading size={{ base: "lg", md: "xl" }} mb={6} color="#544695">
                            Key Skills Developed
                        </Heading>
                        <VStack spacing={4}>
                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaChartLine} w={6} h={6} color="blue.500" />
                                        <Heading size="sm">Statistical Analysis</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Advanced regression techniques and hypothesis testing
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaDatabase} w={6} h={6} color="green.500" />
                                        <Heading size="sm">Data Management</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            Big data handling and database management skills
                                        </Text>
                                    </VStack>
                                </CardBody>
                            </Card>

                            <Card w="full">
                                <CardBody>
                                    <VStack spacing={3} align="start">
                                        <Box as={FaCalculator} w={6} h={6} color="purple.500" />
                                        <Heading size="sm">Software Proficiency</Heading>
                                        <Text fontSize="sm" color="gray.600">
                                            R, Python, Stata, MATLAB, and specialized packages
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
                                <ListItem>Mathematical Statistics and Probability</ListItem>
                                <ListItem>Linear Regression Analysis</ListItem>
                                <ListItem>Time Series Econometrics</ListItem>
                                <ListItem>Panel Data Methods</ListItem>
                                <ListItem>Instrumental Variables and Causality</ListItem>
                                <ListItem>Maximum Likelihood Estimation</ListItem>
                                <ListItem>Bayesian Econometrics</ListItem>
                            </UnorderedList>
                        </Box>

                        <Box>
                            <Heading size="md" mb={4} color="#544695">Specialized Tracks</Heading>
                            <UnorderedList spacing={2} fontSize={{ base: "sm", md: "md" }}>
                                <ListItem>Financial Econometrics</ListItem>
                                <ListItem>Macroeconomic Forecasting</ListItem>
                                <ListItem>Labor Economics Applications</ListItem>
                                <ListItem>Development Economics Methods</ListItem>
                                <ListItem>Machine Learning for Economists</ListItem>
                                <ListItem>Experimental Design and Analysis</ListItem>
                                <ListItem>Policy Evaluation Methods</ListItem>
                            </UnorderedList>
                        </Box>
                    </SimpleGrid>
                </Box>

                {/* Program Statistics */}
                <Box bg="white" p={{ base: 6, md: 8 }} borderRadius="xl" shadow="lg" mb={{ base: 12, md: 16 }}>
                    <Heading size={{ base: "lg", md: "xl" }} mb={6} textAlign="center" color="#544695">
                        Program Statistics
                    </Heading>
                    <SimpleGrid columns={{ base: 1, md: 4 }} spacing={{ base: 6, md: 8 }}>
                        <Stat textAlign="center">
                            <StatLabel>Employment Rate</StatLabel>
                            <StatNumber color="#544695">96%</StatNumber>
                            <StatHelpText>Within 6 months</StatHelpText>
                        </Stat>
                        <Stat textAlign="center">
                            <StatLabel>Average Salary</StatLabel>
                            <StatNumber color="#544695">¥180K</StatNumber>
                            <StatHelpText>Starting salary</StatHelpText>
                        </Stat>
                        <Stat textAlign="center">
                            <StatLabel>PhD Continuation</StatLabel>
                            <StatNumber color="#544695">45%</StatNumber>
                            <StatHelpText>Pursue advanced degrees</StatHelpText>
                        </Stat>
                        <Stat textAlign="center">
                            <StatLabel>International Students</StatLabel>
                            <StatNumber color="#544695">30%</StatNumber>
                            <StatHelpText>Of total enrollment</StatHelpText>
                        </Stat>
                    </SimpleGrid>
                </Box>

                {/* Career Prospects */}
                <VStack spacing={{ base: 8, md: 12 }}>
                    <Box textAlign="center">
                        <Heading size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                            Career Prospects
                        </Heading>
                        <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" maxW="3xl">
                            Graduates are highly sought after in finance, consulting, government, and research institutions
                        </Text>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 4, md: 6 }} w="full">
                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Investment Banking</Heading>
                                <Text fontSize="xs" color="gray.600">Quantitative analysis, risk modeling, derivatives pricing</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Consulting</Heading>
                                <Text fontSize="xs" color="gray.600">Strategy consulting, data analytics, market research</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Government</Heading>
                                <Text fontSize="xs" color="gray.600">Policy analysis, central banking, regulatory agencies</Text>
                            </CardBody>
                        </Card>

                        <Card textAlign="center">
                            <CardBody>
                                <Heading size="sm" mb={2} color="#544695">Research</Heading>
                                <Text fontSize="xs" color="gray.600">Think tanks, academic institutions, research organizations</Text>
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
                            <Box as={FaGraduationCap} w={6} h={6} />
                            <Heading size="sm">Credits</Heading>
                            <Text fontSize="sm" opacity={0.9}>128 Total Credits</Text>
                        </VStack>
                        <VStack spacing={2}>
                            <Box as={FaUsers} w={6} h={6} />
                            <Heading size="sm">Class Size</Heading>
                            <Text fontSize="sm" opacity={0.9}>25-30 Students</Text>
                        </VStack>
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    )
}
