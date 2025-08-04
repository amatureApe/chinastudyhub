'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Badge, Divider } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaAward } from 'react-icons/fa'
import React from 'react'
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
        title: 'Free University Consultation',
        price: '$0',
        description: 'Basic guidance for partner university applications (processing not included).',
        features: [
            'University selection advice',
            'Program matching recommendations',
            'Application timeline planning',
            'Document checklist overview'
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
                    <Heading size={{ base: 'lg', md: 'xl' }}>ChinaStudyHub Platform</Heading>
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


                {/* How We Help & Why Choose Us */}
                <VStack spacing={6} mb={{ base: 16, md: 20 }} mt={{ base: 16, md: 20 }} align='start' bg='gray.50' p={{ base: 6, md: 8 }} borderWidth='2px' borderColor='#544695' borderRadius='xl'>
                    <Heading size={{ base: 'lg', md: 'xl' }}>How ChinaStudyHub Can Help You</Heading>

                    <Text fontWeight='bold' fontSize={{ base: 'sm', md: 'md' }}>Increase Your Admission Chances:</Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>Comprehensive document preparation – Professional guidance on preparing and reviewing application documents, as well as tailored advice for selecting the right universities and majors.</ListItem>
                        <ListItem>Expert support – Our specialists provide personalized, in-depth assistance to ensure your application is competitive and well-prepared.</ListItem>
                        <ListItem>Smart university matching system – Covers top universities and double-first-class institutions.</ListItem>
                        <ListItem>Professional polishing of application materials – Dual reviews of CVs and recommendation letters for maximum impact.</ListItem>
                        <ListItem>Intensive entrance exam training – Preparation for HSK, mathematics, physics, and chemistry exams.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4} fontSize={{ base: 'sm', md: 'md' }}>Save Time &amp; Energy:</Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>Streamlined process – We simplify the complex application process, allowing you to focus on the most important aspects of your journey.</ListItem>
                        <ListItem>Seamless communication – Through online platforms, email, and phone consultations, we ensure smooth communication between students and our expert team.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4} fontSize={{ base: 'sm', md: 'md' }}>Career &amp; Employment Support:</Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>China employment policy guidance – Clear interpretation of employment pathways in China.</ListItem>
                        <ListItem>Exclusive internship referrals – Internal channels for top company internship opportunities.</ListItem>
                        <ListItem>Work visa conversion support – Guidance on transitioning from student to work visas.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4} fontSize={{ base: 'sm', md: 'md' }}>Our Service Standards:</Text>
                    <UnorderedList pl={6} spacing={2} fontSize={{ base: 'sm', md: 'md' }}>
                        <ListItem>Original &quot;5A service standard&quot; – Assessment, Application, Arrival, Studies, and Employment.</ListItem>
                        <ListItem>Multi-language service team – Support available in English, Chinese, Japanese, Korean, and Spanish.</ListItem>
                    </UnorderedList>
                </VStack>

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

