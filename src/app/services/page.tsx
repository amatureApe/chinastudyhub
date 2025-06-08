'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaLanguage, FaHandshake, FaUserFriends } from 'react-icons/fa'

interface Service {
    title: string;
    description: string;
    icon: React.ElementType;
}

const services: Service[] = [
    {
        title: "University Application Support",
        description: "Expert guidance through the entire application process, from selecting the right university to submitting a compelling application package.",
        icon: FaGraduationCap
    },
    {
        title: "Scholarship & Financial Aid",
        description: "Access to exclusive scholarship opportunities and assistance in securing financial aid, including Chinese government scholarships and university-specific grants.",
        icon: FaMoneyBillWave
    },
    {
        title: "University Selection",
        description: "Personalized recommendations for universities based on your academic background, career goals, and budget considerations.",
        icon: FaUniversity
    },
    {
        title: "Language Preparation",
        description: "Support for Chinese language learning and HSK exam preparation, including recommendations for language schools and study materials.",
        icon: FaLanguage
    },
    {
        title: "Visa Application Support",
        description: "Step-by-step guidance through the Chinese student visa application process, including document preparation and interview coaching.",
        icon: FaHandshake
    },
    {
        title: "Pre-arrival & Settlement",
        description: "Comprehensive support for your transition to China, including accommodation arrangements, local orientation, and cultural adaptation guidance.",
        icon: FaUserFriends
    }
]

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
                    {services.map((service: Service, index: number) => (
                        <ServiceCard
                            key={index}
                            icon={service.icon}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </SimpleGrid>
            </Container>
        </Box>
    )
}

function ServiceCard({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
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