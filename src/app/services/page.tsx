'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Badge, Divider } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaAward } from 'react-icons/fa'
import { UnorderedList, ListItem } from '@chakra-ui/react'

interface ServiceTier {
    title: string;
    price: string;
    description: string;
    features: string[];
    icon: React.ElementType;
    color: string;
    badge?: string;
}

const serviceTiers: ServiceTier[] = [
    {
        title: 'Planning Consultation',
        price: '$150',
        description: 'Comprehensive planning session to map out your ideal academic path in China.',
        features: [
            '1 selected university recommendation',
            '2 alternate university options',
            '1 intended major recommendation',
            '3 alternate major suggestions'
        ],
        icon: FaGraduationCap,
        color: 'blue.500',
        badge: 'Entry'
    },
    {
        title: 'Standard Service Package',
        price: '$1500',
        description: 'Recommendations & applications to up to 2 universities (fees included).',
        features: [
            'Up to 2 university applications',
            'Professional document review',
            'University application fees covered',
            'Basic interview preparation',
            'Tailored advisor support'
        ],
        icon: FaUniversity,
        color: 'purple.500',
        badge: 'Popular'
    },
    {
        title: 'Premium Full Package',
        price: '$2500',
        description: '1-on-1 consultation & applications to up to 4 top universities / MBBS / MBA.',
        features: [
            'Up to 4 top university applications',
            'Personal 1-on-1 advisor',
            'Advanced interview coaching',
            'Scholarship application support',
            'All university fees covered'
        ],
        icon: FaAward,
        color: 'orange.500',
        badge: 'Premium'
    },
    {
        title: 'Scholarship Assessment Support',
        price: '',
        description: 'Scholarship eligibility assessment & professor recommendations (UG/Masters/PhD).',
        features: [
            'Scholarship qualification audit',
            'Internal professor references',
            'Custom pricing based on profile',
            'Advanced funding strategies',
            'Full-cycle support until enrollment'
        ],
        icon: FaMoneyBillWave,
        color: 'green.500'
    }
]

export default function Services() {
    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW='container.xl'>

                {/* Hero */}
                <VStack spacing={4} mb={{ base: 12, md: 16 }} align='center'>
                    <Heading size={{ base: 'xl', md: '2xl' }} textAlign='center'>ChinaStudyHub International Education Consulting</Heading>
                    <Text fontSize={{ base: 'md', md: 'lg' }} color='gray.600' textAlign='center'>Study Abroad Application Service Overview</Text>
                    <Divider maxW='200px' borderColor='gray.300' />
                </VStack>

                {/* Platform Introduction */}
                <VStack spacing={6} mb={{ base: 16, md: 20 }} align='start' bg='gray.50' p={{ base: 6, md: 8 }} borderRadius='xl'>
                    <Heading size={{ base: 'lg', md: 'xl' }}>Our Platform</Heading>
                    <Text fontSize={{ base: 'sm', md: 'md' }}>
                        Founded in 2016, ChinaStudyHub is an online platform dedicated to assisting international students applying to Chinese universities. We specialize in building a global network of educational resources. Our primary services include:
                    </Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>Domestic and international study exchange programs.</ListItem>
                        <ListItem>Full-cycle services for studying in China.</ListItem>
                        <ListItem>Overseas career consulting.</ListItem>
                    </UnorderedList>
                    <Text mt={4} fontSize={{ base: 'sm', md: 'md' }}>We particularly focus on offering comprehensive, end-to-end services for outstanding international students, which include:</Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>Study abroad consultations.</ListItem>
                        <ListItem>School and program selection guidance.</ListItem>
                        <ListItem>Application assistance.</ListItem>
                        <ListItem>Exam and interview coaching.</ListItem>
                        <ListItem>Visa application assistance.</ListItem>
                        <ListItem>Internship and employment consulting.</ListItem>
                    </UnorderedList>
                </VStack>

                {/* Our Service Tiers Header */}
                <VStack spacing={{ base: 8, md: 12 }} align='center' mb={6}>
                    <Heading size={{ base: 'xl', md: '2xl' }} textAlign='center'>Our Service Tiers</Heading>
                    <Text fontSize={{ base: 'lg', md: 'xl' }} color='gray.600' textAlign='center' maxW='container.md'>
                        Choose the perfect level of support for your study-abroad journey.
                    </Text>
                </VStack>

                {/* First 3 Service Tiers in a Row */}
                <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 6, md: 10 }} mb={{ base: 6, md: 10 }}>
                    {serviceTiers.slice(0, 3).map((tier, idx) => (
                        <ServiceTierCard key={idx} tier={tier} />
                    ))}
                </SimpleGrid>

                {/* Scholarship Assessment Support - Full Width */}
                <Box maxW="container.lg" mx="auto">
                    <ServiceTierCard tier={serviceTiers[3]} isFullWidth />
                </Box>


                {/* Why Choose Section */}
                <Box py={{ base: 12, md: 20 }}>
                    <Container maxW="container.xl">
                        <VStack spacing={{ base: 8, md: 12 }}>
                            <Box textAlign="center">
                                <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                                    Why Choose ChinaStudyHub?
                                </Heading>
                                <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                                    We provide comprehensive support throughout your journey to studying in China
                                </Text>
                            </Box>
                            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 8 }} w="full">
                                <FeatureCard
                                    icon={FaUniversity}
                                    title="University Selection"
                                    description="Expert guidance in choosing the right university and program for your goals"
                                />
                                <FeatureCard
                                    icon={FaGraduationCap}
                                    title="Application Support"
                                    description="Complete assistance with university applications and documentation"
                                />
                                <FeatureCard
                                    icon={FaMoneyBillWave}
                                    title="Scholarship Guidance"
                                    description="Help identifying and applying for scholarships to fund your studies"
                                />
                                <FeatureCard
                                    icon={FaAward}
                                    title="Our Expertise"
                                    description="Experienced consultants with deep knowledge of Chinese higher education"
                                />
                            </SimpleGrid>
                        </VStack>
                    </Container>
                </Box>

            </Container>
        </Box>
    )
}

function ServiceTierCard({ tier, isFullWidth = false }: { tier: ServiceTier; isFullWidth?: boolean }) {
    return (
        <Box
            p={{ base: 6, md: 8 }}
            borderWidth='1px'
            borderRadius='lg'
            borderColor={tier.color}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition='all 0.25s'
        >
            <VStack align='start' spacing={isFullWidth ? 6 : 4}>
                <Flex align='center' gap={4} direction={{ base: 'column', sm: 'row' }} w="full" justify={isFullWidth ? "center" : "start"}>
                    <Icon as={tier.icon} w={{ base: 6, md: 8 }} h={{ base: 6, md: 8 }} color={tier.color} />
                    <Heading size={{ base: 'sm', md: 'md' }} color={tier.color}>{tier.title}</Heading>
                    {tier.badge && <Badge colorScheme='purple' fontSize={{ base: 'xs', md: 'sm' }}>{tier.badge}</Badge>}
                </Flex>

                {isFullWidth ? (
                    <VStack spacing={6} w="full">
                        <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }} lineHeight="1.5" textAlign="center">
                            {tier.description}
                        </Text>
                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} w="full">
                            <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                                {tier.features.slice(0, Math.ceil(tier.features.length / 2)).map((feat, idx) => (
                                    <ListItem key={idx}>{feat}</ListItem>
                                ))}
                            </UnorderedList>
                            <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                                {tier.features.slice(Math.ceil(tier.features.length / 2)).map((feat, idx) => (
                                    <ListItem key={idx + Math.ceil(tier.features.length / 2)}>{feat}</ListItem>
                                ))}
                            </UnorderedList>
                        </SimpleGrid>
                    </VStack>
                ) : (
                    <>
                        <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight='bold' color={tier.color}>{tier.price}</Text>
                        <Text color='gray.600' fontSize={{ base: 'sm', md: 'md' }}>{tier.description}</Text>

                        <UnorderedList pl={6} spacing={1} fontSize={{ base: 'sm', md: 'md' }}>
                            {tier.features.map((feat, idx) => (
                                <ListItem key={idx}>{feat}</ListItem>
                            ))}
                        </UnorderedList>
                    </>
                )}
            </VStack>
        </Box>
    )
}

function FeatureCard({ icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
    return (
        <VStack
            p={{ base: 6, md: 8 }}
            bg="white"
            borderRadius="xl"
            boxShadow="md"
            align="start"
            spacing={4}
            _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
        >
            <Icon as={icon} w={{ base: 8, md: 10 }} h={{ base: 8, md: 10 }} color="#544695" />
            <Heading as="h3" size={{ base: "sm", md: "md" }} color="#544695">
                {title}
            </Heading>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>{description}</Text>
        </VStack>
    )
}


