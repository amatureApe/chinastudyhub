'use client'

import { useEffect, useState } from 'react'
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
  Icon,
  Flex,
  Image,
  HStack
} from '@chakra-ui/react'
import {
  FaGraduationCap,
  FaUniversity,
  FaHandshake,
  FaUser,
  FaAward,
  FaMoneyBillWave,
  FaChartLine,
  FaClock,
  FaBriefcase,
  FaStar,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa'
import Link from 'next/link'

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  university: string;
  program: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Student",
    content: "ChinaStudyHub made my dream of studying at Tsinghua a reality. Their guidance through the application process was invaluable.",
    image: "/testimonial1.jpg",
    university: "Tsinghua University",
    program: "Master's in International Relations"
  },
  {
    name: "Michael Chen",
    role: "Student",
    content: "The scholarship application support was exceptional. I received a full scholarship thanks to their expertise.",
    image: "/testimonial2.jpg",
    university: "Fudan University",
    program: "Bachelor's in Business Administration"
  },
  {
    name: "Emma Wilson",
    role: "Student",
    content: "From visa application to finding accommodation, they supported me every step of the way.",
    image: "/testimonial3.jpg",
    university: "Peking University",
    program: "Chinese Language Program"
  }
]

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Box bg="white" py={{ base: 12, md: 20 }}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
            <Box flex={1}>
              <Heading as="h1" size={{ base: "xl", md: "2xl" }} mb={6} color="#544695">
                Your Gateway to Chinese Education
              </Heading>
              <Text fontSize={{ base: "lg", md: "xl" }} mb={8} color="gray.600">
                Comprehensive support for international students applying to Chinese universities. From application assistance to visa support, we guide you every step of the way.
              </Text>
              <Flex gap={4} direction={{ base: "column", sm: "row" }}>
                <Button as={Link} href="/services" colorScheme="purple" size={{ base: "lg", md: "xl" }} bg="#544695" _hover={{ bg: "#FDB801" }} minW={{ base: "180px", md: "220px" }} h={{ base: "60px", md: "72px" }} fontSize={{ base: "lg", md: "xl" }}>
                  Our Services
                </Button>
                <Button as={Link} href="/contact" variant="outline" size={{ base: "lg", md: "xl" }} borderColor="#544695" color="#544695" _hover={{ bg: "#544695", color: "white" }} minW={{ base: "180px", md: "220px" }} h={{ base: "60px", md: "72px" }} fontSize={{ base: "lg", md: "xl" }}>
                  Contact Us
                </Button>
              </Flex>
            </Box>
            <Box flex={1} display={{ base: 'none', md: 'block' }}>
              <Box
                w="full"
                h="400px"
                borderRadius="xl"
                overflow="hidden"
                boxShadow="lg"
              >
                <Image
                  src="/home-page-photo.jpg"
                  alt="Students studying in China"
                  w="full"
                  h="full"
                  objectFit="cover"
                />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Achievements Section */}
      <Box bg="blue.50" py={{ base: 12, md: 16 }} borderRadius="xl">
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={{ base: 6, md: 10 }} maxW="container.lg" mx="auto">
            <VStack>
              <Heading size={{ base: "xl", md: "2xl" }} color="blue.600">500+</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">Students Placed</Text>
            </VStack>
            <VStack>
              <Heading size={{ base: "xl", md: "2xl" }} color="blue.600">95%</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">Scholarship Success Rate</Text>
            </VStack>
            <VStack>
              <Heading size={{ base: "xl", md: "2xl" }} color="blue.600">50+</Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">Partner Universities</Text>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* How We Help Section */}
      <Box py={{ base: 12, md: 20 }}>
        <HelpCarousel />
      </Box>

      {/* Free Assessment Section */}
      <Box py={{ base: 8, md: 12 }} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={{ base: 8, md: 10 }}>
            <Box textAlign="center" maxW="3xl">
              <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                Free Assessment
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.700" mb={6}>
                Take the first step towards your Chinese education journey with our comprehensive free assessment.
                Our expert team will evaluate your profile and provide personalized recommendations to help you
                find the perfect university and program that aligns with your academic goals and career aspirations.
              </Text>
            </Box>

            <Box w="full" maxW="4xl">
              <VStack spacing={4}>
                <Box
                  w="full"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  shadow="sm"
                  borderLeft="4px solid #544695"
                >
                  <Flex align="center" mb={2}>
                    <Box as={FaUser} color="#544695" mr={3} />
                    <Heading as="h3" size="md" color="#544695">
                      Personal Assessment
                    </Heading>
                  </Flex>
                  <Text color="gray.600" fontSize="sm">
                    We&apos;ll review your academic transcripts, test scores, work experience, and personal interests to create a detailed profile. Our assessment includes evaluating your strengths, identifying areas for improvement, and understanding your long-term career objectives to ensure the best possible match with Chinese universities and programs.
                  </Text>
                </Box>

                <Box
                  w="full"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  shadow="sm"
                  borderLeft="4px solid #544695"
                >
                  <Flex align="center" mb={2}>
                    <Box as={FaUniversity} color="#544695" mr={3} />
                    <Heading as="h3" size="md" color="#544695">
                      University Recommendations
                    </Heading>
                  </Flex>
                  <Text color="gray.600" fontSize="sm">
                    Based on your assessment results, we&apos;ll provide you with a curated list of Chinese universities and specific programs that align with your academic background, career goals, and personal preferences. This includes information about admission requirements, program details, campus life, scholarship opportunities, and application deadlines to help you make informed decisions.
                  </Text>
                </Box>

                <Box
                  w="full"
                  p={6}
                  bg="white"
                  borderRadius="lg"
                  shadow="sm"
                  borderLeft="4px solid #544695"
                >
                  <Flex align="center" mb={2}>
                    <Box as={FaHandshake} color="#544695" mr={3} />
                    <Heading as="h3" size="md" color="#544695">
                      Professional Guidance
                    </Heading>
                  </Flex>
                  <Text color="gray.600" fontSize="sm">
                    Our team of experienced education consultants will guide you through every step of the application process. From preparing your documents and writing compelling personal statements to navigating visa requirements and preparing for interviews, we&apos;ll provide ongoing support and answer all your questions to ensure a smooth transition to studying in China.
                  </Text>
                </Box>
              </VStack>
            </Box>
          </VStack>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={{ base: 8, md: 12 }}>
            <Box textAlign="center">
              <Heading as="h2" size={{ base: "lg", md: "xl" }} mb={4} color="#544695">
                Student Success Stories
              </Heading>
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
                Hear from our students who have successfully started their journey in China
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={{ base: 6, md: 8 }} w="full">
              {testimonials.map((testimonial: Testimonial, index: number) => (
                <TestimonialCard
                  key={index}
                  name={testimonial.name}
                  university={testimonial.university}
                  program={testimonial.program}
                  image={testimonial.image}
                  quote={testimonial.content}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>


    </Box>
  )
}

interface TestimonialCardProps {
  name: string;
  university: string;
  program: string;
  image: string;
  quote: string;
}

function TestimonialCard({ name, university, program, quote }: TestimonialCardProps) {
  return (
    <VStack
      p={{ base: 4, md: 6 }}
      bg="white"
      borderRadius="lg"
      boxShadow="md"
      align="start"
      spacing={4}
    >
      <VStack align="start" spacing={4}>
        <Text color="gray.600" fontSize={{ base: "sm", md: "lg" }} fontStyle="italic">
          &quot;{quote}&quot;
        </Text>
        <VStack align={{ base: "center", sm: "start" }} spacing={2} w="full">
          <Text fontWeight="bold" color="#544695" fontSize={{ base: "sm", md: "md" }}>{name}</Text>
          <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }} textAlign={{ base: "center", sm: "left" }}>{university}</Text>
          <Text color="gray.500" fontSize={{ base: "xs", md: "sm" }} textAlign={{ base: "center", sm: "left" }}>{program}</Text>
        </VStack>
      </VStack>
    </VStack>
  )
}

const helpSections = [
  {
    icon: FaGraduationCap,
    title: "Comprehensive Document Preparation",
    description:
      "Professional guidance on preparing and reviewing application documents, as well as tailored advice for selecting the right universities and majors.",
    color: "blue.500"
  },
  {
    icon: FaUniversity,
    title: "Expert Support",
    description:
      "Our specialists provide personalized, in-depth assistance to ensure your application is competitive and well-prepared.",
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
    description:
      "We simplify complex application procedures, eliminating unnecessary steps and providing clear timelines to keep your journey on track efficiently.",
    color: "teal.500"
  },
  {
    icon: FaStar,
    title: "Save Time & Energy",
    description:
      "Focus on what truly matters while we handle the administrative burden, allowing you to concentrate on your studies and personal preparation.",
    color: "pink.500"
  },
  {
    icon: FaBriefcase,
    title: "Career & Employment Support",
    description:
      "Comprehensive guidance from academic planning through to career placement, including internship opportunities and employment pathways in China.",
    color: "cyan.500"
  },
  {
    icon: FaHandshake,
    title: "Our Service Standards",
    description:
      "Maintaining the highest quality through our proven 5A methodology and multilingual support team committed to your success at every stage.",
    color: "yellow.500"
  }
]

function HelpCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoRotate, setAutoRotate] = useState(true)
  const [itemsToShow, setItemsToShow] = useState(1)

  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) { // lg breakpoint
        setItemsToShow(4)
      } else if (window.innerWidth >= 768) { // md breakpoint
        setItemsToShow(3)
      } else { // base (mobile)
        setItemsToShow(1)
      }
    }

    updateItemsToShow()
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  const extendedSections = [...helpSections, ...helpSections, ...helpSections]

  useEffect(() => {
    if (!autoRotate) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => prev + 1)
    }, 15000)

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
    if (currentIndex >= helpSections.length) {
      const timer = setTimeout(() => {
        setCurrentIndex(0)
      }, 800)
      return () => clearTimeout(timer)
    }
  }, [currentIndex])

  return (
    <VStack spacing={{ base: 6, md: 8 }} mb={{ base: 4, md: 6 }} mt={{ base: 1, md: 2 }}>
      <Box textAlign="center">
        <Heading size={{ base: 'lg', md: 'xl' }} mb={4} color="#544695">
          How ChinaStudyHub Can Help You
        </Heading>
        <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600" maxW="3xl" mx="auto">
          Comprehensive support designed to maximize your success in studying in China
        </Text>
      </Box>

      <Box position="relative" w="full" maxW="6xl" mx="auto" overflow="hidden">
        <Box
          p={{ base: 4, md: 6 }}
          bg="gray.50"
          borderRadius="2xl"
          minH={{ base: '280px', md: '240px' }}
        >
          <Box
            display="flex"
            transition={currentIndex >= helpSections.length ? 'none' : 'transform 0.8s ease-in-out'}
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
                  minH={{ base: '220px', md: '200px' }}
                >
                  <VStack spacing={4} align="center" h="full">
                    <Icon as={section.icon} w={8} h={8} color={section.color} />
                    <Heading
                      size={{ base: 'sm', md: 'md' }}
                      color={section.color}
                      textAlign="center"
                      lineHeight="1.2"
                    >
                      {section.title}
                    </Heading>
                    <Text
                      fontSize={{ base: 'xs', md: 'sm' }}
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

        <Button
          position="absolute"
          left={{ base: '-10px', md: '-20px' }}
          top="50%"
          transform="translateY(-50%)"
          onClick={prevSlide}
          bg="white"
          shadow="md"
          borderRadius="full"
          w={{ base: 10, md: 12 }}
          h={{ base: 10, md: 12 }}
          minW="auto"
          _hover={{ bg: 'gray.50', shadow: 'lg' }}
        >
          <Icon as={FaChevronLeft} color="gray.600" />
        </Button>

        <Button
          position="absolute"
          right={{ base: '-10px', md: '-20px' }}
          top="50%"
          transform="translateY(-50%)"
          onClick={nextSlide}
          bg="white"
          shadow="md"
          borderRadius="full"
          w={{ base: 10, md: 12 }}
          h={{ base: 10, md: 12 }}
          minW="auto"
          _hover={{ bg: 'gray.50', shadow: 'lg' }}
        >
          <Icon as={FaChevronRight} color="gray.600" />
        </Button>
      </Box>

      <HStack spacing={2} justify="center">
        {helpSections.map((_, idx) => (
          <Box
            key={idx}
            w={2}
            h={2}
            borderRadius="full"
            bg={idx === (currentIndex % helpSections.length) ? '#544695' : 'gray.300'}
            cursor="pointer"
            onClick={() => {
              setAutoRotate(false)
              setCurrentIndex(idx)
            }}
            transition="all 0.3s"
            _hover={{ transform: 'scale(1.3)' }}
          />
        ))}
      </HStack>
    </VStack>
  )
}
