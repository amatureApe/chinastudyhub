'use client'

import { Box, Container, Heading, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, TableContainer, SimpleGrid, Card, CardBody, Badge } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface UniversityData {
    University: string
    Majors: string
    'Annual Tuition': string
    'Chinese (HSK≥)': string
    English: string
    Other: string
}

export default function Partners() {
    const [universityData, setUniversityData] = useState<UniversityData[]>([])

    useEffect(() => {
        fetch('/tableData.json')
            .then(response => response.json())
            .then(data => setUniversityData(data))
            .catch(error => console.error('Error loading university data:', error))
    }, [])

    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                {/* Introduction Section */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 20 }}>
                    <VStack spacing={6}>
                        <Heading size={{ base: "xl", md: "2xl" }} textAlign="center">Our Partner Universities</Heading>
                        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" textAlign="center" maxW="container.md">
                            We have established strong relationships with top universities across China, giving our students
                            access to prestigious programs and exclusive opportunities. Our partnerships enable us to provide
                            direct application support and increase your chances of admission to these renowned institutions.
                        </Text>
                    </VStack>
                </VStack>

                {/* Partner Universities Table - Desktop */}
                <Box bg="white" borderRadius="xl" boxShadow="lg" overflow="hidden" display={{ base: 'none', lg: 'block' }}>
                    <Box bg="#544695" color="white" p={6}>
                        <Heading size="lg" textAlign="center">Partner Universities&apos; Undergraduate Majors and Tuition Information</Heading>
                    </Box>

                    <TableContainer>
                        <Table variant="simple" size="sm">
                            <Thead bg="gray.50">
                                <Tr>
                                    <Th>University</Th>
                                    <Th>Majors</Th>
                                    <Th>Annual Tuition</Th>
                                    <Th>Chinese (HSK≥)</Th>
                                    <Th>English</Th>
                                    <Th>Other</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {universityData.slice(1).map((row, index) => (
                                    <Tr key={index} _hover={{ bg: 'gray.50' }}>
                                        <Td fontWeight="medium" color="#544695">{row.University}</Td>
                                        <Td maxW="400px" fontSize="sm">
                                            {row.Majors ? row.Majors.split('\n').map((major, idx) => (
                                                <Text key={idx} mb={1}>{major.trim()}</Text>
                                            )) : <Text>-</Text>}
                                        </Td>
                                        <Td fontWeight="bold">{row['Annual Tuition']}</Td>
                                        <Td>{row['Chinese (HSK≥)']}</Td>
                                        <Td>{row.English}</Td>
                                        <Td>{row.Other}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Partner Universities Cards - Mobile */}
                <Box display={{ base: 'block', lg: 'none' }}>
                    <Box bg="#544695" color="white" p={4} borderRadius="xl" mb={6}>
                        <Heading size="md" textAlign="center">Partner Universities&apos; Information</Heading>
                    </Box>

                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        {universityData.slice(1).map((row, index) => (
                            <UniversityCard key={index} data={row} />
                        ))}
                    </SimpleGrid>
                </Box>

                {/* Additional Information */}
                <Box mt={{ base: 8, md: 12 }} bg="gray.50" p={{ base: 6, md: 8 }} borderRadius="xl">
                    <VStack spacing={6} align="center">
                        <Heading size={{ base: "md", md: "lg" }} textAlign="center">Why Choose Our Partner Universities?</Heading>
                        <Text fontSize={{ base: "sm", md: "lg" }} color="gray.600" textAlign="center" maxW="container.md">
                            Our partner universities represent the best of Chinese higher education, offering world-class programs
                            in engineering, business, arts, and sciences. With our established relationships, we can provide
                            personalized guidance for each institution&apos;s specific requirements and application processes.
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
}

function UniversityCard({ data }: { data: UniversityData }) {
    return (
        <Card>
            <CardBody>
                <VStack align="start" spacing={3}>
                    <Heading size="sm" color="#544695">{data.University}</Heading>

                    <Box>
                        <Text fontWeight="bold" fontSize="sm" color="gray.600">Majors:</Text>
                        <Text fontSize="xs" color="gray.700">
                            {data.Majors ? data.Majors.split('\n').map((major, idx) => (
                                <Text key={idx} mb={1}>• {major.trim()}</Text>
                            )) : <Text>-</Text>}
                        </Text>
                    </Box>

                    <Box>
                        <Text fontWeight="bold" fontSize="sm" color="gray.600">Annual Tuition:</Text>
                        <Badge colorScheme="green" fontSize="xs">{data['Annual Tuition']}</Badge>
                    </Box>

                    <Box>
                        <Text fontWeight="bold" fontSize="sm" color="gray.600">Language Requirements:</Text>
                        <VStack align="start" spacing={1}>
                            <Text fontSize="xs">Chinese: {data['Chinese (HSK≥)']}</Text>
                            <Text fontSize="xs">English: {data.English}</Text>
                            <Text fontSize="xs">Other: {data.Other}</Text>
                        </VStack>
                    </Box>
                </VStack>
            </CardBody>
        </Card>
    )
} 