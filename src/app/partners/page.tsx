'use client'

import { Box, Container, Heading, Text, VStack, Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react'
import { useState, useEffect } from 'react'

interface UniversityData {
    [key: string]: string
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
        <Box py={20}>
            <Container maxW="container.xl">
                {/* Introduction Section */}
                <VStack spacing={12} mb={20}>
                    <VStack spacing={6}>
                        <Heading size="2xl" textAlign="center">Our Partner Universities</Heading>
                        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                            We have established strong relationships with top universities across China, giving our students
                            access to prestigious programs and exclusive opportunities. Our partnerships enable us to provide
                            direct application support and increase your chances of admission to these renowned institutions.
                        </Text>
                    </VStack>
                </VStack>

                {/* Partner Universities Table */}
                <Box bg="white" borderRadius="xl" boxShadow="lg" overflow="hidden">
                    <Box bg="#544695" color="white" p={6}>
                        <Heading size="lg" textAlign="center">Partner Universities' Undergraduate Majors and Tuition Information</Heading>
                    </Box>

                    <TableContainer>
                        <Table variant="simple" size="sm">
                            <Thead bg="gray.50">
                                <Tr>
                                    <Th>序号</Th>
                                    <Th>Majors</Th>
                                    <Th>Chinese (HSK≥)</Th>
                                    <Th>English (IELTS≥)</Th>
                                    <Th>English (TOEFL≥)</Th>
                                    <Th>Other</Th>
                                    <Th>University</Th>
                                    <Th>Annual Tuition</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {universityData.slice(3).map((row, index) => (
                                    <Tr key={index} _hover={{ bg: 'gray.50' }}>
                                        <Td fontWeight="medium">{row["Partner Universities' Undergraduate Majors and Tuition Information"]}</Td>
                                        <Td maxW="300px" fontSize="sm">
                                            {row.field2.split('\n').map((major, idx) => (
                                                <Text key={idx} mb={1}>{major.trim()}</Text>
                                            ))}
                                        </Td>
                                        <Td>{row.field3}</Td>
                                        <Td>{row.field4}</Td>
                                        <Td>{row.field5}</Td>
                                        <Td>{row.field6}</Td>
                                        <Td fontWeight="medium" color="#544695">{row.field7}</Td>
                                        <Td fontWeight="bold">{row.field8}</Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
                </Box>

                {/* Additional Information */}
                <Box mt={12} bg="gray.50" p={8} borderRadius="xl">
                    <VStack spacing={6} align="center">
                        <Heading size="lg" textAlign="center">Why Choose Our Partner Universities?</Heading>
                        <Text fontSize="lg" color="gray.600" textAlign="center" maxW="container.md">
                            Our partner universities represent the best of Chinese higher education, offering world-class programs
                            in engineering, business, arts, and sciences. With our established relationships, we can provide
                            personalized guidance for each institution's specific requirements and application processes.
                        </Text>
                    </VStack>
                </Box>
            </Container>
        </Box>
    )
} 