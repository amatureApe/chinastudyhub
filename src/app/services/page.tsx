'use client'

import { Box, Container, Heading, Text, SimpleGrid, VStack, Icon, Flex, Badge, Divider, Button, HStack } from '@chakra-ui/react'
import { FaGraduationCap, FaMoneyBillWave, FaUniversity, FaAward, FaChartLine, FaClock, FaBriefcase, FaStar, FaChevronLeft, FaChevronRight, FaHandshake } from 'react-icons/fa'
import React, { useState, useEffect } from 'react'
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


                {/* How We Help - Carousel Section */}
                <HelpCarousel />

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

const helpSections = [
    {
        icon: FaGraduationCap,
        title: "Comprehensive Document Preparation",
        description: "Professional guidance on preparing and reviewing application documents, as well as tailored advice for selecting the right universities and majors.",
        color: "blue.500"
    },
    {
        icon: FaUniversity,
        title: "Expert Support",
        description: "Our specialists provide personalized, in-depth assistance to ensure your application is competitive and well-prepared.",
        color: "purple.500"
    },
    {
        icon: FaChartLine,
        title: "Smart University Matching System",
        description: "Covers top universities and double-first-class institutions",
        color: "green.500"
    },
    {
        icon: FaAward,
        title: "Professional Polishing of Application Materials",
        description: "Reviews of both CVs and recommendation letters for maximum impact.",
        color: "orange.500"
    },
    {
        icon: FaMoneyBillWave,
        title: "Intensive Entrance Exam Training",
        description: "Preparation for HSK, mathematics, physics, and chemistry exams",
        color: "red.500"
    },
    {
        icon: FaClock,
        title: "Streamlined Process",
        description: "We simplify complex application procedures, eliminating unnecessary steps and providing clear timelines to keep your journey on track efficiently.",
        color: "teal.500"
    },
    {
        icon: FaStar,
        title: "Save Time & Energy",
        description: "Focus on what truly matters while we handle the administrative burden, allowing you to concentrate on your studies and personal preparation.",
        color: "pink.500"
    },
    {
        icon: FaBriefcase,
        title: "Career & Employment Support",
        description: "Comprehensive guidance from academic planning through to career placement, including internship opportunities and employment pathways in China.",
        color: "cyan.500"
    },
    {
        icon: FaHandshake,
        title: "Our Service Standards",
        description: "Maintaining the highest quality through our proven 5A methodology and multilingual support team committed to your success at every stage.",
        color: "yellow.500"
    }
];

function HelpCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const itemsToShow = 4;

    // Create extended array for infinite loop
    const extendedSections = [...helpSections, ...helpSections, ...helpSections];

    useEffect(() => {
        if (!autoRotate) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1);
        }, 15000); // Auto-rotate every 15 seconds

        return () => clearInterval(interval);
    }, [autoRotate]);

    const nextSlide = () => {
        setAutoRotate(false); // Stop auto-rotation
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setAutoRotate(false); // Stop auto-rotation
        setCurrentIndex((prev) => prev - 1);
    };

    // Handle infinite loop reset
    useEffect(() => {
        if (currentIndex >= helpSections.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(0);
            }, 800); // Wait for transition to complete
            return () => clearTimeout(timer);
        }
    }, [currentIndex]);

    return (
        <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 16, md: 20 }} mt={{ base: 16, md: 20 }}>
            <Box textAlign="center">
                <Heading size={{ base: 'xl', md: '2xl' }} mb={4} color="#544695">
                    How ChinaStudyHub Can Help You
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="3xl">
                    Comprehensive support designed to maximize your success in studying in China
                </Text>
            </Box>

            <Box position="relative" w="full" maxW="6xl" mx="auto" overflow="hidden">
                {/* Main Carousel Content */}
                <Box
                    p={{ base: 4, md: 6 }}
                    bg="gray.50"
                    borderRadius="2xl"
                    minH={{ base: "400px", md: "350px" }}
                >
                    <Box
                        display="flex"
                        transition={currentIndex >= helpSections.length ? "none" : "transform 0.8s ease-in-out"}
                        transform={`translateX(-${currentIndex * (100 / extendedSections.length)}%)`}
                        w={`${(extendedSections.length / itemsToShow) * 100}%`}
                    >
                        {extendedSections.map((section, idx) => (
                            <Box
                                key={idx}
                                flex={`0 0 ${100 / extendedSections.length}%`}
                                px={{ base: 2, md: 3 }}
                            >
                                <Box
                                    p={{ base: 4, md: 5 }}
                                    bg="white"
                                    borderRadius="xl"
                                    shadow="md"
                                    borderWidth="2px"
                                    borderColor={section.color}
                                    _hover={{
                                        transform: 'translateY(-4px)',
                                        shadow: 'lg'
                                    }}
                                    transition="all 0.3s"
                                    h="full"
                                    minH={{ base: "320px", md: "280px" }}
                                >
                                    <VStack spacing={4} align="center" h="full">
                                        <Icon as={section.icon} w={8} h={8} color={section.color} />
                                        <Heading
                                            size={{ base: "sm", md: "md" }}
                                            color={section.color}
                                            textAlign="center"
                                            lineHeight="1.2"
                                        >
                                            {section.title}
                                        </Heading>
                                        <Text
                                            fontSize={{ base: "xs", md: "sm" }}
                                            color="gray.600"
                                            textAlign="center"
                                            lineHeight="1.4"
                                            flex="1"
                                        >
                                            {section.description}
                                        </Text>
                                    </VStack>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Navigation Arrows */}
                <Button
                    position="absolute"
                    left={{ base: "-10px", md: "-20px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={prevSlide}
                    bg="white"
                    shadow="md"
                    borderRadius="full"
                    w={{ base: 10, md: 12 }}
                    h={{ base: 10, md: 12 }}
                    minW="auto"
                    _hover={{ bg: "gray.50", shadow: "lg" }}
                >
                    <Icon as={FaChevronLeft} color="gray.600" />
                </Button>

                <Button
                    position="absolute"
                    right={{ base: "-10px", md: "-20px" }}
                    top="50%"
                    transform="translateY(-50%)"
                    onClick={nextSlide}
                    bg="white"
                    shadow="md"
                    borderRadius="full"
                    w={{ base: 10, md: 12 }}
                    h={{ base: 10, md: 12 }}
                    minW="auto"
                    _hover={{ bg: "gray.50", shadow: "lg" }}
                >
                    <Icon as={FaChevronRight} color="gray.600" />
                </Button>
            </Box>

            {/* Dot Indicators */}
            <HStack spacing={2}>
                {helpSections.map((_, idx) => (
                    <Box
                        key={idx}
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg={idx === (currentIndex % helpSections.length) ? "#544695" : "gray.300"}
                        cursor="pointer"
                        onClick={() => {
                            setAutoRotate(false);
                            setCurrentIndex(idx);
                        }}
                        transition="all 0.3s"
                        _hover={{ transform: "scale(1.3)" }}
                    />
                ))}
            </HStack>
        </VStack>
    );
}

