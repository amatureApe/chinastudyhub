'use client'

import { Box, Container, Heading, Text, SimpleGrid, Image, VStack, Flex, Icon } from '@chakra-ui/react'
import { FaGraduationCap, FaHandshake, FaGlobeAsia, FaUsers } from 'react-icons/fa'

export default function About() {
    return (
        <Box py={20}>
            <Container maxW="container.xl">
                {/* Mission Section */}
                <VStack gap={8} align="center" mb={20}>
                    <Heading size="2xl" textAlign="center">Our Mission</Heading>
                    <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                        At ChinaStudyHub, we're dedicated to making Chinese education accessible to international students.
                        Based in Beijing, our team of education professionals leverages deep local expertise and university
                        connections to help students secure admissions and maximize their scholarship opportunities.
                    </Text>
                </VStack>

                {/* Why Choose Us Section */}
                <Box mb={20}>
                    <Heading size="xl" textAlign="center" mb={12}>Why Choose ChinaStudyHub</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={10}>
                        <FeatureCard
                            icon={FaGraduationCap}
                            title="Expert Guidance"
                            description="Our team consists of experienced education professionals with deep knowledge of Chinese universities and their requirements."
                        />
                        <FeatureCard
                            icon={FaHandshake}
                            title="Strong Connections"
                            description="Direct relationships with top Chinese universities and scholarship programs to maximize your opportunities."
                        />
                        <FeatureCard
                            icon={FaGlobeAsia}
                            title="Local Expertise"
                            description="Based in Beijing, we provide authentic insights and support for both academic and cultural adaptation."
                        />
                        <FeatureCard
                            icon={FaUsers}
                            title="Personalized Support"
                            description="Tailored guidance throughout your journey, from application to arrival and beyond."
                        />
                    </SimpleGrid>
                </Box>

                {/* Team Section */}
                <Box>
                    <Heading size="xl" textAlign="center" mb={12}>Our Team</Heading>
                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={10}>
                        <TeamMember
                            name="Dr. Wei Chen"
                            position="Founder & Education Director"
                            image="/placeholder.jpg"
                            description="Former university admissions officer with 15+ years of experience in international education."
                        />
                        <TeamMember
                            name="Li Ming"
                            position="Scholarship Specialist"
                            image="/placeholder.jpg"
                            description="Expert in Chinese government and university scholarship programs with a track record of successful applications."
                        />
                        <TeamMember
                            name="Sarah Wang"
                            position="Student Support Coordinator"
                            image="/placeholder.jpg"
                            description="Bilingual professional specializing in student visa applications and pre-arrival preparation."
                        />
                    </SimpleGrid>
                </Box>

                {/* Success Stats */}
                <Box mt={20} bg="blue.50" py={16} borderRadius="xl">
                    <SimpleGrid columns={{ base: 1, md: 3 }} gap={10} maxW="container.lg" mx="auto">
                        <StatCard number="500+" label="Students Placed" />
                        <StatCard number="95%" label="Scholarship Success Rate" />
                        <StatCard number="50+" label="Partner Universities" />
                    </SimpleGrid>
                </Box>
            </Container>
        </Box>
    )
}

function FeatureCard({ icon, title, description }: { icon: any; title: string; description: string }) {
    return (
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
    )
}

function TeamMember({ name, position, image, description }: {
    name: string;
    position: string;
    image: string;
    description: string;
}) {
    return (
        <VStack gap={4}>
            <Box
                w="200px"
                h="200px"
                borderRadius="full"
                overflow="hidden"
                bg="gray.200"
            >
                <Image
                    src={image}
                    alt={name}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                />
            </Box>
            <VStack gap={2}>
                <Heading size="md">{name}</Heading>
                <Text color="blue.500" fontWeight="bold">{position}</Text>
                <Text color="gray.600" textAlign="center">{description}</Text>
            </VStack>
        </VStack>
    )
}

function StatCard({ number, label }: { number: string; label: string }) {
    return (
        <VStack>
            <Heading size="2xl" color="blue.600">{number}</Heading>
            <Text fontSize="lg" color="gray.600">{label}</Text>
        </VStack>
    )
} 