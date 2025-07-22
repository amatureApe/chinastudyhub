'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Badge, Divider } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaAward, FaCheckCircle, FaClock, FaUsers } from 'react-icons/fa'
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
        price: 'Custom',
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
        <Box py={20}>
            <Container maxW='container.xl'>

                {/* Hero */}
                <VStack spacing={4} mb={16} align='center'>
                    <Heading size='2xl' textAlign='center'>ChinaStudyHub International Education Consulting</Heading>
                    <Text fontSize='lg' color='gray.600' textAlign='center'>Study Abroad Application Service Overview</Text>
                    <Divider maxW='200px' borderColor='gray.300' />
                </VStack>

                {/* Platform Introduction */}
                <VStack spacing={6} mb={20} align='start' bg='gray.50' p={8} borderRadius='xl'>
                    <Heading size='xl'>ChinaStudyHub Platform Introduction</Heading>
                    <Text>
                        Founded in 2016, ChinaStudyHub is an online platform dedicated to assisting international students applying to Chinese universities. We specialize in building a global network of educational resources. Our primary services include:
                    </Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>Domestic and international study exchange programs.</ListItem>
                        <ListItem>Full-cycle services for studying in China.</ListItem>
                        <ListItem>Overseas career consulting.</ListItem>
                    </UnorderedList>
                    <Text mt={4}>We particularly focus on offering comprehensive, end-to-end services for outstanding international students, which include:</Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>Study abroad consultations.</ListItem>
                        <ListItem>School and program selection guidance.</ListItem>
                        <ListItem>Application assistance.</ListItem>
                        <ListItem>Exam and interview coaching.</ListItem>
                        <ListItem>Visa document review.</ListItem>
                        <ListItem>Internship and employment consulting.</ListItem>
                    </UnorderedList>
                </VStack>

                {/* Our Service Tiers Header */}
                <VStack spacing={12} align='center' mb={6}>
                    <Heading size='2xl' textAlign='center'>Our Service Tiers</Heading>
                    <Text fontSize='xl' color='gray.600' textAlign='center' maxW='container.md'>
                        Choose the perfect level of support for your study-abroad journey.
                    </Text>
                </VStack>

                <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                    {serviceTiers.map((tier, idx) => (
                        <ServiceTierCard key={idx} tier={tier} />
                    ))}
                </SimpleGrid>

                {/* Study Challenges Section */}
                <VStack spacing={6} mb={20} mt={20} align='start' bg='gray.50' p={8} borderWidth='2px' borderColor='#544695' borderRadius='xl'>
                    <VStack spacing={6} align="start">
                        <Heading size="xl">Study Challenges</Heading>
                        <Text fontWeight="bold">International Student Challenges:</Text>
                        <UnorderedList pl={6} spacing={3}>
                            <ListItem>
                                <strong>Challenge 1:</strong> Difficulty in course search & information gathering – Many students struggle to find clear, reliable details about courses, universities, and application requirements.
                            </ListItem>
                            <ListItem>
                                <strong>Challenge 2:</strong> Complex university & program selection – With countless universities and majors to choose from, it can be challenging to make informed and optimal decisions.
                            </ListItem>
                            <ListItem>
                                <strong>Challenge 3:</strong> Unclear application process – The steps involved in applying are often confusing, opportunities can seem vague, and students are unsure how to proceed effectively.
                            </ListItem>
                        </UnorderedList>
                    </VStack>
                </VStack>

                {/* How We Help & Why Choose Us */}
                <VStack spacing={6} mb={20} mt={20} align='start' bg='gray.50' p={8} borderWidth='2px' borderColor='#544695' borderRadius='xl'>
                    <Heading size='xl'>How ChinaStudyHub Can Help You</Heading>

                    <Text fontWeight='bold'>Increase Your Admission Chances:</Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>Comprehensive document preparation – Professional guidance on preparing and reviewing application documents, as well as tailored advice for selecting the right universities and majors.</ListItem>
                        <ListItem>Expert support – Our specialists provide personalized, in-depth assistance to ensure your application is competitive and well-prepared.</ListItem>
                        <ListItem>Smart university matching system – Covers top universities and double-first-class institutions.</ListItem>
                        <ListItem>Professional polishing of application materials – Dual reviews of CVs and recommendation letters for maximum impact.</ListItem>
                        <ListItem>Intensive entrance exam training – Preparation for HSK, mathematics, physics, and chemistry exams.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4}>Save Time &amp; Energy:</Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>Streamlined process – We simplify the complex application process, allowing you to focus on the most important aspects of your journey.</ListItem>
                        <ListItem>Seamless communication – Through online platforms, email, and phone consultations, we ensure smooth communication between students and our expert team.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4}>Career &amp; Employment Support:</Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>China employment policy guidance – Clear interpretation of employment pathways in China.</ListItem>
                        <ListItem>Exclusive internship referrals – Internal channels for top company internship opportunities.</ListItem>
                        <ListItem>Work visa conversion support – Guidance on transitioning from student to work visas.</ListItem>
                    </UnorderedList>

                    <Text fontWeight='bold' mt={4}>Our Service Standards:</Text>
                    <UnorderedList pl={6} spacing={2}>
                        <ListItem>Original &quot;5A service standard&quot; – Assessment, Application, Arrival, Studies, and Employment.</ListItem>
                        <ListItem>Multi-language service team – Support available in English, Chinese, Japanese, Korean, and Spanish.</ListItem>
                    </UnorderedList>
                </VStack>

                {/* Quick Application Steps */}
                <VStack spacing={6} mb={20} mt={20} align='start' bg='gray.50' p={8} borderWidth='2px' borderColor='#544695' borderRadius='xl'>
                    <Container maxW='container.md'>
                        <VStack spacing={6} align='center'>
                            <Heading size='lg' textAlign='center'>Quick Application Process</Heading>
                            <Text fontSize='lg' color='gray.600' textAlign='center'>Follow these three simple steps to get started</Text>
                            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>
                                <Step icon={FaCheckCircle} title='Step 1' text='Visit our website' />
                                <Step icon={FaUsers} title='Step 2' text='Register & submit info' />
                                <Step icon={FaClock} title='Step 3' text='Schedule consultation' />
                            </SimpleGrid>
                        </VStack>
                    </Container>
                </VStack>
            </Container>
        </Box>
    )
}

function ServiceTierCard({ tier }: { tier: ServiceTier }) {
    return (
        <Box
            p={8}
            borderWidth='1px'
            borderRadius='lg'
            borderColor={tier.color}
            _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
            transition='all 0.25s'
        >
            <VStack align='start' spacing={4}>
                <Flex align='center' gap={4}>
                    <Icon as={tier.icon} w={8} h={8} color={tier.color} />
                    <Heading size='md' color={tier.color}>{tier.title}</Heading>
                    {tier.badge && <Badge colorScheme='purple'>{tier.badge}</Badge>}
                </Flex>

                <Text fontSize='xl' fontWeight='bold' color={tier.color}>{tier.price}</Text>
                <Text color='gray.600'>{tier.description}</Text>

                <UnorderedList pl={6} spacing={1}>
                    {tier.features.map((feat, idx) => (
                        <ListItem key={idx}>{feat}</ListItem>
                    ))}
                </UnorderedList>
            </VStack>
        </Box>
    )
}

function Step({ icon, title, text }: { icon: React.ElementType; title: string; text: string }) {
    return (
        <VStack spacing={3} align='center'>
            <Icon as={icon} w={8} h={8} color='blue.500' />
            <Text fontWeight='bold'>{title}</Text>
            <Text color='gray.600' textAlign='center'>{text}</Text>
        </VStack>
    )
} 