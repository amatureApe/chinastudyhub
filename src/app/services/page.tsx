'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaLanguage, FaHandshake, FaUserFriends } from 'react-icons/fa'

export default function Services() {
    return (
        <Box py={20}>
            <Container maxW="container.xl">
                <VStack gap={12} align="center" mb={16}>
                    <Heading size="2xl" textAlign="center">Our Services</Heading>
                    <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                        We provide comprehensive support to help international students successfully apply to and study at Chinese universities, with a focus on securing the best possible financial aid.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
                    <ServiceCard
                        icon={FaGraduationCap}
                        title="University Application Support"
                        description="Expert guidance through the entire application process, from selecting the right university to submitting a compelling application package."
                    />
                    <ServiceCard
                        icon={FaMoneyBillWave}
                        title="Scholarship & Financial Aid"
                        description="Access to exclusive scholarship opportunities and assistance in securing financial aid, including Chinese government scholarships and university-specific grants."
                    />
                    <ServiceCard
                        icon={FaUniversity}
                        title="University Selection"
                        description="Personalized recommendations for universities based on your academic background, career goals, and budget considerations."
                    />
                    <ServiceCard
                        icon={FaLanguage}
                        title="Language Preparation"
                        description="Support for Chinese language learning and HSK exam preparation, including recommendations for language schools and study materials."
                    />
                    <ServiceCard
                        icon={FaHandshake}
                        title="Visa Application Support"
                        description="Step-by-step guidance through the Chinese student visa application process, including document preparation and interview coaching."
                    />
                    <ServiceCard
                        icon={FaUserFriends}
                        title="Pre-arrival & Settlement"
                        description="Comprehensive support for your transition to China, including accommodation arrangements, local orientation, and cultural adaptation guidance."
                    />
                </SimpleGrid>
            </Container>
        </Box>
    )
}

function ServiceCard({ icon, title, description }: { icon: any; title: string; description: string }) {
    return (
        <Box
            p={8}
            borderWidth="1px"
            borderRadius="lg"
            _hover={{ transform: 'translateY(-5px)', shadow: 'lg' }}
            transition="all 0.3s"
        >
            <VStack align="start" gap={4}>
                <Flex
                    w={12}
                    h={12}
                    align="center"
                    justify="center"
                    color="white"
                    rounded="full"
                    bg="blue.500"
                >
                    <Icon as={icon} w={6} h={6} />
                </Flex>
                <Heading size="md">{title}</Heading>
                <Text color="gray.600">{description}</Text>
            </VStack>
        </Box>
    )
} 