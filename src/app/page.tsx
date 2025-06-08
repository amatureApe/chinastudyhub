'use client'

import { Box, Button, Container, Flex, Heading, Text, VStack, SimpleGrid, Avatar, Icon, useColorModeValue } from '@chakra-ui/react'
import { FaGraduationCap, FaUniversity, FaLanguage, FaHandshake } from 'react-icons/fa'
import NextLink from 'next/link'

export default function Home() {
  const bgColor = useColorModeValue('white', 'gray.800')
  const cardBg = useColorModeValue('white', 'gray.700')

  return (
    <Box>
      {/* Hero Section */}
      <Box bg="white" py={20}>
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} align="center" gap={8}>
            <Box flex={1}>
              <Heading as="h1" size="2xl" mb={6} color="#544695">
                Your Gateway to Chinese Education
              </Heading>
              <Text fontSize="xl" mb={8} color="gray.600">
                Comprehensive support for international students applying to Chinese universities. From application assistance to visa support, we guide you every step of the way.
              </Text>
              <Flex gap={4}>
                <Button as={NextLink} href="/services" colorScheme="purple" size="lg" bg="#544695" _hover={{ bg: "#FDB801" }}>
                  Our Services
                </Button>
                <Button as={NextLink} href="/contact" variant="outline" size="lg" borderColor="#544695" color="#544695" _hover={{ bg: "#544695", color: "white" }}>
                  Contact Us
                </Button>
              </Flex>
            </Box>
            <Box flex={1} display={{ base: 'none', md: 'block' }}>
              <Box
                bg="#78C3BE"
                w="full"
                h="400px"
                borderRadius="xl"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Icon as={FaGraduationCap} w={32} h={32} color="white" />
              </Box>
            </Box>
          </Flex>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h2" size="xl" mb={4} color="#544695">
                Why Choose ChinaStudyHub?
              </Heading>
              <Text fontSize="lg" color="gray.600">
                We provide comprehensive support throughout your journey to studying in China
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
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

      {/* Testimonials Section */}
      <Box py={20} bg="white">
        <Container maxW="container.xl">
          <VStack spacing={12}>
            <Box textAlign="center">
              <Heading as="h2" size="xl" mb={4} color="#544695">
                Student Success Stories
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Hear from our students who have successfully started their journey in China
              </Text>
            </Box>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              <TestimonialCard
                name="Sarah Johnson"
                university="Tsinghua University"
                program="Master's in International Relations"
                image="/testimonial1.jpg"
                quote="ChinaStudyHub made my dream of studying at Tsinghua a reality. Their guidance through the application process was invaluable."
              />
              <TestimonialCard
                name="Michael Chen"
                university="Fudan University"
                program="Bachelor's in Business Administration"
                image="/testimonial2.jpg"
                quote="The scholarship application support was exceptional. I received a full scholarship thanks to their expertise."
              />
              <TestimonialCard
                name="Emma Wilson"
                university="Peking University"
                program="Chinese Language Program"
                image="/testimonial3.jpg"
                quote="From visa application to finding accommodation, they supported me every step of the way."
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={20} bg="#544695" color="white">
        <Container maxW="container.xl">
          <VStack spacing={8} textAlign="center">
            <Heading as="h2" size="xl">
              Ready to Start Your Journey?
            </Heading>
            <Text fontSize="lg" maxW="2xl">
              Join hundreds of successful students who have achieved their dreams of studying in China with our support.
            </Text>
            <Button
              as={NextLink}
              href="/contact"
              size="lg"
              bg="#FDB801"
              _hover={{ bg: "#78C3BE" }}
            >
              Get Started Today
            </Button>
          </VStack>
        </Container>
      </Box>
    </Box>
  )
}

function FeatureCard({ icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <VStack
      p={8}
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      align="start"
      spacing={4}
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
    >
      <Icon as={icon} w={10} h={10} color="#544695" />
      <Heading as="h3" size="md" color="#544695">
        {title}
      </Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  )
}

function TestimonialCard({ name, university, program, image, quote }: { name: string; university: string; program: string; image: string; quote: string }) {
  return (
    <Box
      p={8}
      bg="white"
      borderRadius="xl"
      boxShadow="md"
      _hover={{ transform: 'translateY(-5px)', transition: 'all 0.3s ease' }}
    >
      <VStack align="start" spacing={4}>
        <Text color="gray.600" fontSize="lg" fontStyle="italic">
          "{quote}"
        </Text>
        <Flex align="center" gap={4}>
          <Avatar name={name} src={image} />
          <Box>
            <Text fontWeight="bold" color="#544695">{name}</Text>
            <Text fontSize="sm" color="gray.600">{university}</Text>
            <Text fontSize="sm" color="gray.600">{program}</Text>
          </Box>
        </Flex>
      </VStack>
    </Box>
  )
}
