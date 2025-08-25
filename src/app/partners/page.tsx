'use client'

import { Box, Container, Heading, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, TableContainer, SimpleGrid, Card, CardBody, Badge, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react'
import { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Link from 'next/link'

interface UniversityData {
    University: string
    Majors: string | string[]
    'Annual Tuition': string
    'Chinese (HSK≥)': string
    English: string
    Other: string
}

// Helper function to get majors as array
const getMajorsArray = (majors: string | string[]): string[] => {
    if (Array.isArray(majors)) {
        return majors
    }
    return majors ? majors.split('\n') : []
}

export default function Partners() {
    const [universityData, setUniversityData] = useState<UniversityData[]>([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch('/tableData.json')
            .then(response => response.json())
            .then(data => setUniversityData(data))
            .catch(error => console.error('Error loading university data:', error))
    }, [])

    // Filter and process universities based on search term
    const getFilteredData = () => {
        if (!searchTerm) {
            return {
                universities: universityData.slice(1),
                totalMatches: universityData.slice(1).reduce((total, uni) => {
                    return total + getMajorsArray(uni.Majors).length
                }, 0)
            }
        }

        const searchLower = searchTerm.toLowerCase()
        const results: UniversityData[] = []
        let totalMatches = 0

        universityData.slice(1).forEach((university) => {
            // Filter majors that match the search term
            const allMajors = getMajorsArray(university.Majors)
            const matchingMajors = allMajors.filter(major =>
                major.toLowerCase().includes(searchLower)
            )

            // Include university only if it has matching majors
            if (matchingMajors.length > 0) {
                results.push({
                    ...university,
                    Majors: matchingMajors
                })
                totalMatches += matchingMajors.length
            }
        })

        return {
            universities: results,
            totalMatches
        }
    }

    const { universities: filteredData, totalMatches } = getFilteredData()

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

                    {/* Search Input */}
                    <Box maxW={{ base: "full", md: "md" }} w="full" mb={-10} px={{ base: 4, md: 0 }}>
                        <InputGroup>
                            <InputLeftElement pointerEvents="none">
                                <Icon as={FaSearch} color="gray.400" />
                            </InputLeftElement>
                            <Input
                                placeholder="Search Programs"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                size={{ base: "md", md: "lg" }}
                                borderRadius="full"
                                bg="white"
                                border="2px solid"
                                borderColor="gray.200"
                                _hover={{ borderColor: "#544695" }}
                                _focus={{ borderColor: "#544695", boxShadow: "0 0 0 1px #544695" }}
                            />
                        </InputGroup>
                        {searchTerm && (
                            <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mt={2} textAlign="center">
                                Found {totalMatches} program{totalMatches !== 1 ? 's' : ''} across {filteredData.length} universit{filteredData.length !== 1 ? 'ies' : 'y'}
                            </Text>
                        )}
                    </Box>
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
                                {filteredData.map((row, index) => (
                                    <Tr key={index} _hover={{ bg: 'gray.50' }}>
                                        <Td fontWeight="medium" color="#544695">
                                            {row.University === "Peking University" ? (
                                                <Link href="/partners/peking-university" style={{ textDecoration: 'underline' }}>
                                                    {row.University}
                                                </Link>
                                            ) : (
                                                row.University
                                            )}
                                        </Td>
                                        <Td maxW="400px" fontSize="sm">
                                            {getMajorsArray(row.Majors).length > 0 ?
                                                getMajorsArray(row.Majors).map((major, idx) => {
                                                    if (row.University === "Peking University") {
                                                        const majorSlug = major.toLowerCase()
                                                            .replace(/\s+/g, '-')
                                                            .replace(/[^a-z0-9-]/g, '');
                                                        return (
                                                            <Text key={idx} mb={1}>
                                                                <Link
                                                                    href={`/partners/peking-university/${majorSlug}`}
                                                                    style={{ textDecoration: 'underline', color: '#544695' }}
                                                                >
                                                                    {major.trim()}
                                                                </Link>
                                                            </Text>
                                                        );
                                                    }
                                                    return <Text key={idx} mb={1}>{major.trim()}</Text>;
                                                }) : <Text>-</Text>}
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
                        {filteredData.map((row, index) => (
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
                    <Heading size="sm" color="#544695">
                        {data.University === "Peking University" ? (
                            <Link href="/partners/peking-university" style={{ textDecoration: 'underline' }}>
                                {data.University}
                            </Link>
                        ) : (
                            data.University
                        )}
                    </Heading>

                    <Box>
                        <Text fontWeight="bold" fontSize="sm" color="gray.600">Majors:</Text>
                        <Text fontSize="xs" color="gray.700">
                            {getMajorsArray(data.Majors).length > 0 ?
                                getMajorsArray(data.Majors).map((major, idx) => {
                                    if (data.University === "Peking University") {
                                        const majorSlug = major.toLowerCase()
                                            .replace(/\s+/g, '-')
                                            .replace(/[^a-z0-9-]/g, '');
                                        return (
                                            <Text key={idx} mb={1}>
                                                • <Link
                                                    href={`/partners/peking-university/${majorSlug}`}
                                                    style={{ textDecoration: 'underline', color: '#544695' }}
                                                >
                                                    {major.trim()}
                                                </Link>
                                            </Text>
                                        );
                                    }
                                    return <Text key={idx} mb={1}>• {major.trim()}</Text>;
                                }) : <Text>-</Text>}
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