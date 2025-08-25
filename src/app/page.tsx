'use client'

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
  Image
} from '@chakra-ui/react'
import { FaGraduationCap, FaUniversity, FaLanguage, FaHandshake, FaUser } from 'react-icons/fa'
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
                <Button as={Link} href="/services" colorScheme="purple" size={{ base: "md", md: "lg" }} bg="#544695" _hover={{ bg: "#FDB801" }}>
                  Our Services
                </Button>
                <Button as={Link} href="/contact" variant="outline" size={{ base: "md", md: "lg" }} borderColor="#544695" color="#544695" _hover={{ bg: "#544695", color: "white" }}>
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

      {/* Features Section */}
      <Box py={{ base: 12, md: 20 }} bg="gray.50">
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
                icon={FaLanguage}
                title="Language Preparation"
                description="Support for Chinese language learning and HSK exam preparation"
              />
              <FeatureCard
                icon={FaHandshake}
                title="Visa Assistance"
                description="Step-by-step guidance through the Chinese student visa process"
              />
            </SimpleGrid>
          </VStack>
        </Container>
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
