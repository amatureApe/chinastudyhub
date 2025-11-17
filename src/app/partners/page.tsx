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

    // Group universities and filter based on search term
    const getFilteredData = () => {
        const rawData = universityData.slice(1)
        
        // Group by university name
        const grouped = new Map<string, UniversityData[]>()
        
        if (!searchTerm) {
            rawData.forEach((uni) => {
                if (!grouped.has(uni.University)) {
                    grouped.set(uni.University, [])
                }
                grouped.get(uni.University)!.push(uni)
            })
            
            const totalMatches = rawData.reduce((total, uni) => {
                return total + getMajorsArray(uni.Majors).length
            }, 0)
            
            return { grouped, totalMatches }
        }

        const searchLower = searchTerm.toLowerCase()
        let totalMatches = 0

        rawData.forEach((university) => {
            const allMajors = getMajorsArray(university.Majors)
            const matchingMajors = allMajors.filter(major =>
                major.toLowerCase().includes(searchLower)
            )

            if (matchingMajors.length > 0) {
                if (!grouped.has(university.University)) {
                    grouped.set(university.University, [])
                }
                grouped.get(university.University)!.push({
                    ...university,
                    Majors: matchingMajors
                })
                totalMatches += matchingMajors.length
            }
        })

        return { grouped, totalMatches }
    }

    const { grouped: groupedData, totalMatches } = getFilteredData()

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
                                Found {totalMatches} program{totalMatches !== 1 ? 's' : ''} across {groupedData.size} universit{groupedData.size !== 1 ? 'ies' : 'y'}
                            </Text>
                        )}
                        <Text fontSize={{ base: "xs", md: "sm" }} color="gray.600" mt={searchTerm ? 1 : 2} textAlign="center">
                            For more detailed information{' '}
                            <Link href="/contact" style={{ color: '#544695', textDecoration: 'underline', fontWeight: 'bold' }}>
                                CONTACT US
                            </Link>
                        </Text>
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
                                    <Th minW="150px" maxW="200px">University</Th>
                                    <Th minW="250px" maxW="350px">Majors</Th>
                                    <Th minW="120px" maxW="150px">Annual Tuition</Th>
                                    <Th minW="100px" maxW="130px">Chinese (HSK≥)</Th>
                                    <Th minW="100px" maxW="150px">English</Th>
                                    <Th minW="80px" maxW="120px">Other</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {Array.from(groupedData.entries()).map(([university, rows], uniIndex) => (
                                    rows.map((row, rowIndex) => (
                                        <Tr key={`${uniIndex}-${rowIndex}`} _hover={{ bg: 'gray.50' }} borderTop={rowIndex === 0 ? "2px solid" : "none"} borderColor={rowIndex === 0 ? "gray.300" : "transparent"}>
                                            {rowIndex === 0 && (
                                                <Td 
                                                    fontWeight="bold" 
                                                    color="#544695" 
                                                    minW="150px" 
                                                    maxW="200px" 
                                                    whiteSpace="normal" 
                                                    wordBreak="break-word"
                                                    rowSpan={rows.length}
                                                    verticalAlign="top"
                                                    bg="gray.50"
                                                    borderRight="2px solid"
                                                    borderColor="gray.200"
                                                    fontSize="md"
                                                    py={4}
                                                >
                                                    {university}
                                                </Td>
                                            )}
                                            <Td minW="250px" maxW="350px" fontSize="sm" whiteSpace="normal" wordBreak="break-word">
                                                {getMajorsArray(row.Majors).length > 0 ?
                                                    getMajorsArray(row.Majors).map((major, idx) => (
                                                        <Text key={idx} mb={1}>{major.trim()}</Text>
                                                    )) : <Text>-</Text>}
                                            </Td>
                                            <Td fontWeight="bold" minW="120px" maxW="150px" whiteSpace="normal">{row['Annual Tuition']}</Td>
                                            <Td minW="100px" maxW="130px" whiteSpace="normal">{row['Chinese (HSK≥)']}</Td>
                                            <Td minW="100px" maxW="150px" whiteSpace="normal" wordBreak="break-word">{row.English}</Td>
                                            <Td minW="80px" maxW="120px" whiteSpace="normal">{row.Other}</Td>
                                        </Tr>
                                    ))
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
                        {Array.from(groupedData.entries()).map(([university, rows], index) => (
                            <UniversityGroupCard key={index} university={university} data={rows} />
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

function UniversityGroupCard({ university, data }: { university: string; data: UniversityData[] }) {
    return (
        <Card>
            <CardBody>
                <VStack align="start" spacing={4}>
                    <Heading size="sm" color="#544695">
                        {university}
                    </Heading>

                    {data.map((row, idx) => (
                        <Box key={idx} w="full" pb={idx < data.length - 1 ? 3 : 0} borderBottom={idx < data.length - 1 ? "1px solid" : "none"} borderColor="gray.200">
                            <Box mb={2}>
                                <Text fontWeight="bold" fontSize="sm" color="gray.600">Majors:</Text>
                                <Box fontSize="xs" color="gray.700">
                                    {getMajorsArray(row.Majors).length > 0 ?
                                        getMajorsArray(row.Majors).map((major, majorIdx) => (
                                            <Text key={majorIdx} mb={1}>• {major.trim()}</Text>
                                        )) : <Text>-</Text>}
                                </Box>
                            </Box>

                            <Box mb={2}>
                                <Text fontWeight="bold" fontSize="sm" color="gray.600">Annual Tuition:</Text>
                                <Badge colorScheme="green" fontSize="xs">{row['Annual Tuition']}</Badge>
                            </Box>

                            <Box>
                                <Text fontWeight="bold" fontSize="sm" color="gray.600">Language Requirements:</Text>
                                <VStack align="start" spacing={1}>
                                    <Text fontSize="xs">Chinese: {row['Chinese (HSK≥)']}</Text>
                                    <Text fontSize="xs">English: {row.English}</Text>
                                    <Text fontSize="xs">Other: {row.Other}</Text>
                                </VStack>
                            </Box>
                        </Box>
                    ))}
                </VStack>
            </CardBody>
        </Card>
    )
} 