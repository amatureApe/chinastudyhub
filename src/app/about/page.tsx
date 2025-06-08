'use client'

import { Box, Container, Heading, Text, SimpleGrid, Image, VStack } from '@chakra-ui/react'

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

export default function About() {
    return (
        <Box py={20}>
            <Container maxW="container.xl">
                {/* Mission Section */}
                <VStack spacing={12} mb={20}>
                    <VStack spacing={6}>
                        <Heading size="2xl" textAlign="center">Our Mission</Heading>
                        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                            We&apos;re dedicated to making Chinese education accessible to international students.
                            Based in Beijing, our team of education professionals leverages deep local expertise and university
                            connections to help students secure admissions and maximize their scholarship opportunities.
                        </Text>
                    </VStack>
                </VStack>

                {/* Why Choose Us Section */}
                <VStack spacing={12} mb={20}>
                    <VStack spacing={6}>
                        <Heading size="2xl" textAlign="center">Why Choose Us</Heading>
                        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                            We combine local expertise with international standards to provide the best support for your educational journey in China.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
                        <FeatureCard
                            title="Expert Guidance"
                            description="Our team consists of education professionals with years of experience in Chinese universities."
                        />
                        <FeatureCard
                            title="Strong Connections"
                            description="Direct partnerships with top Chinese universities and scholarship programs."
                        />
                        <FeatureCard
                            title="Local Expertise"
                            description="Deep understanding of Chinese education system and cultural nuances."
                        />
                        <FeatureCard
                            title="Personalized Support"
                            description="Tailored guidance based on your academic background and career goals."
                        />
                    </SimpleGrid>
                </VStack>

                {/* Team Section */}
                <VStack spacing={12}>
                    <VStack spacing={6}>
                        <Heading size="2xl" textAlign="center">Our Team</Heading>
                        <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                            Meet the experts who will guide you through your journey to studying in China.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
                        <TeamMemberCard
                            name="Dr. Wei Zhang"
                            role="Founder & Education Director"
                            bio="Former university professor with 15+ years of experience in international education."
                            image="/team1.jpg"
                        />
                        <TeamMemberCard
                            name="Li Wei"
                            role="Scholarship Specialist"
                            bio="Expert in Chinese government scholarships and university funding opportunities."
                            image="/team2.jpg"
                        />
                        <TeamMemberCard
                            name="Sarah Chen"
                            role="Student Support Coordinator"
                            bio="Dedicated to ensuring smooth transitions for international students in China."
                            image="/team3.jpg"
                        />
                    </SimpleGrid>
                </VStack>

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

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <VStack
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            align="start"
            spacing={4}
        >
            <Heading size="md" color="#544695">{title}</Heading>
            <Text color="gray.600">{description}</Text>
        </VStack>
    )
}

function TeamMemberCard({ name, role, bio, image }: TeamMember) {
    return (
        <VStack
            p={6}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            align="center"
            spacing={4}
        >
            <Image
                src={image}
                alt={name}
                w="100px"
                h="100px"
                borderRadius="full"
                objectFit="cover"
            />
            <VStack spacing={2} align="center">
                <Heading size="md" color="#544695">{name}</Heading>
                <Text color="gray.500" fontWeight="medium">{role}</Text>
                <Text color="gray.600" textAlign="center">{bio}</Text>
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