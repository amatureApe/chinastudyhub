'use client'

import { useState, useEffect } from 'react'
import { Box, Container, Heading, Text, SimpleGrid, VStack, UnorderedList, ListItem, Icon, Button, HStack, Image } from '@chakra-ui/react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function About() {
    return (
        <Box py={{ base: 12, md: 20 }}>
            <Container maxW="container.xl">
                {/* Mission Section */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 20 }}>
                    <VStack spacing={6}>
                        <Heading size={{ base: "xl", md: "2xl" }} textAlign="center">Our Mission</Heading>
                        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" textAlign="center" maxW="container.md">
                            We&apos;re dedicated to making Chinese education accessible to international students.
                            Based in Beijing, our team of education professionals leverages deep local expertise and university
                            connections to help students secure admissions and maximize their scholarship opportunities.
                        </Text>
                    </VStack>
                </VStack>

                {/* Company Overview */}
                <Box mt={{ base: 12, md: 20 }} mb={{ base: 12, md: 20 }} py={{ base: 12, md: 16 }} borderRadius="xl" bg="gray.50">
                    <Container maxW="container.lg" mx="auto">
                        <VStack spacing={8} align="center">
                            <Heading size={{ base: "xl", md: "2xl" }} textAlign="center">About ChinaStudyHub</Heading>
                            <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" textAlign="center" maxW="container.md">
                                Established in 2016, ChinaStudyHub is a dynamic education service provider headquartered in Beijing, China.
                                Specializing in cross-border educational exchange programs, conference curation, and comprehensive academic consulting,
                                we have positioned ourselves as a reputable partner for international students, educational institutions, and organizations
                                seeking tailored solutions in global education and cultural collaboration.
                            </Text>
                        </VStack>

                        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 10 }} mt={{ base: 8, md: 12 }} mb={{ base: 8, md: 12 }}>
                            <VStack align="start" spacing={4} p={{ base: 4, md: 6 }} bg="white" borderRadius="lg" boxShadow="md">
                                <Heading size={{ base: "sm", md: "md" }} color="#544695">Student-Centric Services</Heading>
                                <VStack spacing={3} align="start">
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>• Study Abroad Support: End-to-end assistance for international students, including university application, visa processing, and pre-arrival orientation</Text>
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>• Skill Development: Training programs covering academic writing, interview preparation, and cultural adaptation</Text>
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>• Post-Study Opportunities: Career counseling and internship placement services to bridge education and professional aspirations</Text>
                                </VStack>
                            </VStack>

                            <VStack align="start" spacing={4} p={{ base: 4, md: 6 }} bg="white" borderRadius="lg" boxShadow="md">
                                <Heading size={{ base: "sm", md: "md" }} color="#544695">Educational Programs & Events</Heading>
                                <VStack spacing={3} align="start">
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>• Study Tours & Exchange Programs: Curated short-term academic trips and cultural immersion activities</Text>
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>• International Education Exhibitions: Strategic collaborations with universities to organize global education fairs</Text>
                                </VStack>
                            </VStack>
                        </SimpleGrid>
                        <Text fontSize={{ base: "sm", md: "md" }}>
                            We specialize in building a global network of educational resources. Our primary services include:
                        </Text>
                        <UnorderedList pl={6} spacing={2} fontSize={{ base: "sm", md: "md" }}>
                            <ListItem>Domestic and international study exchange programs.</ListItem>
                            <ListItem>Full-cycle services for studying in China.</ListItem>
                            <ListItem>Overseas career consulting.</ListItem>
                        </UnorderedList>
                        <Text mt={4} fontSize={{ base: "sm", md: "md" }}>We particularly focus on offering comprehensive, end-to-end services for outstanding international students, which include:</Text>
                        <UnorderedList pl={6} spacing={2} fontSize={{ base: "sm", md: "md" }}>
                            <ListItem>Study abroad consultations.</ListItem>
                            <ListItem>School and program selection guidance.</ListItem>
                            <ListItem>Application assistance.</ListItem>
                            <ListItem>Exam and interview coaching.</ListItem>
                            <ListItem>Visa document review.</ListItem>
                            <ListItem>Internship and employment consulting.</ListItem>
                        </UnorderedList>
                    </Container>
                </Box>

                {/* Photo Gallery Section */}
                <PhotoGallery />

                {/* Why Choose Us Section */}
                <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 20 }}>
                    <VStack spacing={6}>
                        <Heading size={{ base: "xl", md: "2xl" }} textAlign="center">Why Choose Us</Heading>
                        <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" textAlign="center" maxW="container.md">
                            We combine local expertise with international standards to provide the best support for your educational journey in China.
                        </Text>
                    </VStack>

                    <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={{ base: 6, md: 10 }}>
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

                {/* Contact Information */}
                <Box mt={{ base: 12, md: 20 }} py={{ base: 12, md: 16 }} borderRadius="xl" bg="blue.50">
                    <Container maxW="container.lg" mx="auto">
                        <VStack spacing={6} align="center">
                            <Heading size={{ base: "xl", md: "2xl" }} textAlign="center">Contact ChinaStudyHub</Heading>
                            <Text fontSize={{ base: "md", md: "xl" }} color="gray.600" textAlign="center">
                                ChinaStudyHub – Where Education Meets the World
                            </Text>

                            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }} maxW="container.md">
                                <VStack spacing={2} align="start">
                                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="blue.600">Address:</Text>
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>1st Floor, Building 2, No. 89 Shuangqing Road, Haidian District, Beijing, China</Text>
                                </VStack>

                                <VStack spacing={2} align="start">
                                    <Text fontSize={{ base: "md", md: "lg" }} fontWeight="bold" color="blue.600">Email:</Text>
                                    <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>glxer001@126.com</Text>
                                </VStack>
                            </SimpleGrid>
                        </VStack>
                    </Container>
                </Box>
            </Container>
        </Box>
    )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
    return (
        <VStack
            p={{ base: 4, md: 6 }}
            bg="white"
            borderRadius="lg"
            boxShadow="md"
            align="start"
            spacing={4}
        >
            <Heading size={{ base: "sm", md: "md" }} color="#544695">{title}</Heading>
            <Text color="gray.600" fontSize={{ base: "sm", md: "md" }}>{description}</Text>
        </VStack>
    )
}




const galleryPhotos = [
    {
        src: "/home-page-photo.jpg",
        alt: "Students studying together in a modern campus environment",
        title: "Campus Life"
    },
    {
        src: "/chinastudyhubicon.svg",
        alt: "ChinaStudyHub team collaboration",
        title: "Our Team"
    },
    {
        src: "/home-page-photo.jpg",
        alt: "University lecture hall with engaged students",
        title: "Academic Excellence"
    },
    {
        src: "/chinastudyhubicon.svg",
        alt: "Cultural exchange and international students",
        title: "Global Community"
    },
    {
        src: "/home-page-photo.jpg",
        alt: "Study abroad preparation and consultation",
        title: "Student Support"
    },
    {
        src: "/chinastudyhubicon.svg",
        alt: "Beijing university campus architecture",
        title: "Beautiful Campus"
    }
]

function PhotoGallery() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoRotate, setAutoRotate] = useState(true)
    const [itemsToShow, setItemsToShow] = useState(1)

    useEffect(() => {
        const updateItemsToShow = () => {
            if (window.innerWidth >= 1024) { // lg breakpoint
                setItemsToShow(3)
            } else if (window.innerWidth >= 768) { // md breakpoint
                setItemsToShow(2)
            } else { // base (mobile)
                setItemsToShow(1)
            }
        }

        updateItemsToShow()
        window.addEventListener('resize', updateItemsToShow)
        return () => window.removeEventListener('resize', updateItemsToShow)
    }, [])

    const extendedPhotos = [...galleryPhotos, ...galleryPhotos, ...galleryPhotos]

    useEffect(() => {
        if (!autoRotate) return

        const interval = setInterval(() => {
            setCurrentIndex((prev) => prev + 1)
        }, 4000)

        return () => clearInterval(interval)
    }, [autoRotate])

    const nextSlide = () => {
        setAutoRotate(false)
        setCurrentIndex((prev) => prev + 1)
    }

    const prevSlide = () => {
        setAutoRotate(false)
        setCurrentIndex((prev) => prev - 1)
    }

    useEffect(() => {
        if (currentIndex >= galleryPhotos.length) {
            const timer = setTimeout(() => {
                setCurrentIndex(0)
            }, 800)
            return () => clearTimeout(timer)
        }
    }, [currentIndex])

    return (
        <VStack spacing={{ base: 8, md: 12 }} mb={{ base: 12, md: 20 }}>
            <Box textAlign="center">
                <Heading size={{ base: 'xl', md: '2xl' }} mb={4} color="#544695">
                    Our Community in Action
                </Heading>
                <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="3xl" mx="auto">
                    Experience the vibrant campus life and supportive community that awaits you at Chinese universities
                </Text>
            </Box>

            <Box position="relative" w="full" maxW="6xl" mx="auto" overflow="hidden">
                <Box
                    p={{ base: 4, md: 6 }}
                    bg="gray.50"
                    borderRadius="2xl"
                    minH={{ base: "400px", md: "350px" }}
                >
                    <Box
                        display="flex"
                        transition={currentIndex >= galleryPhotos.length ? "none" : "transform 0.8s ease-in-out"}
                        transform={`translateX(-${currentIndex * (100 / extendedPhotos.length)}%)`}
                        w={`${(extendedPhotos.length / itemsToShow) * 100}%`}
                    >
                        {extendedPhotos.map((photo, idx) => (
                            <Box
                                key={idx}
                                flex={`0 0 ${100 / extendedPhotos.length}%`}
                                px={{ base: 2, md: 3 }}
                            >
                                <Box
                                    p={{ base: 4, md: 5 }}
                                    bg="white"
                                    borderRadius="xl"
                                    shadow="md"
                                    borderWidth="2px"
                                    borderColor="gray.200"
                                    _hover={{
                                        transform: 'translateY(-4px)',
                                        shadow: 'lg'
                                    }}
                                    transition="all 0.3s"
                                    h="full"
                                    minH={{ base: "300px", md: "280px" }}
                                >
                                    <VStack spacing={4} align="center" h="full">
                                        <Box
                                            w="full"
                                            h="200px"
                                            borderRadius="lg"
                                            overflow="hidden"
                                            bg="gray.100"
                                        >
                                            <Image
                                                src={photo.src}
                                                alt={photo.alt}
                                                w="full"
                                                h="full"
                                                objectFit="cover"
                                            />
                                        </Box>
                                        <Heading
                                            size={{ base: "sm", md: "md" }}
                                            color="#544695"
                                            textAlign="center"
                                            lineHeight="1.2"
                                        >
                                            {photo.title}
                                        </Heading>
                                    </VStack>
                                </Box>
                            </Box>
                        ))}
                    </Box>
                </Box>

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

            <HStack spacing={2} justify="center">
                {galleryPhotos.map((_, idx) => (
                    <Box
                        key={idx}
                        w={2}
                        h={2}
                        borderRadius="full"
                        bg={idx === (currentIndex % galleryPhotos.length) ? "#544695" : "gray.300"}
                        cursor="pointer"
                        onClick={() => {
                            setAutoRotate(false)
                            setCurrentIndex(idx)
                        }}
                        transition="all 0.3s"
                        _hover={{ transform: "scale(1.3)" }}
                    />
                ))}
            </HStack>
        </VStack>
    )
}