'use client'

import {
    Box,
    Container,
    Heading,
    Text,
    VStack,
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'

export default function Guides() {
    return (
        <Box py={20}>
            <Container maxW="container.xl">
                <VStack gap={12} align="center" mb={16}>
                    <Heading size="2xl" textAlign="center" color="#544695">
                        Essential Guides
                    </Heading>
                    <Text fontSize="xl" color="gray.600" textAlign="center" maxW="container.md">
                        Everything you need to know about studying in China, from application to settlement.
                    </Text>
                </VStack>

                <Accordion allowMultiple maxW="container.md" mx="auto">
                    {/* ----------------------------- APPLY TO UNIVERSITY ----------------------------- */}
                    <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="lg">
                        <h2>
                            <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" color="#544695">
                                    How to Apply to Chinese Universities
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align="start" gap={4}>
                                <Text>
                                    <strong>Start early – 6 – 8 months out.</strong> Draw up a shortlist of universities whose
                                    majors, tuition fees, teaching language, and city vibe all fit your goals. Remember that
                                    most schools have <em>two intakes</em>: March (deadlines fall between September and
                                    January) and September (deadlines between January and June).
                                </Text>
                                <Text>
                                    Gather certified transcripts, passport scans, a one–page study plan, proof of language
                                    ability (HSK 4‒5 or IELTS/TOEFL), and two recommendation letters. Upload them to the
                                    school&apos;s own portal or the national &quot;Study in China&quot; platform, then pay the application
                                    fee − typically ¥400 – ¥800. Expect an admissions decision within 4‒6 weeks.
                                </Text>
                                <Text>
                                    If you need funding, click the <strong>scholarship</strong> box while the application is still
                                    open. The Chinese Government Scholarship (CSC) Type B closes as early as 30 April; local
                                    provincial awards usually follow in May. When the red-stamped Admission Notice and blue
                                    JW201/202 form arrive, scan them and move straight on to your student-visa paperwork.
                                </Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* ----------------------------- STUDENT VISA ----------------------------- */}
                    <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="lg">
                        <h2>
                            <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" color="#544695">
                                    Chinese Student Visa Application Process
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align="start" gap={4}>
                                <Text>
                                    China issues <strong>X1 visas</strong> for programmes longer than 180 days and <strong>X2</strong> for a
                                    single semester. Complete the COVA online form only after your Admission Notice and
                                    JW201/202 are in hand, then book an appointment at your nearest Chinese embassy or
                                    consulate.
                                </Text>
                                <Text>
                                    Bring your passport (12 + months validity), two white-background photos, the original
                                    Admission Notice, JW form copy, Foreigner Physical Examination form, and proof of funds.
                                    You will be fingerprinted in most countries. Standard processing takes four working days,
                                    but peak-season waits can stretch to three weeks, so build in slack.
                                </Text>
                                <Text>
                                    The X1 sticker gets you into China once and is valid for 30 days. In that window you must
                                    convert it to a <em>Residence Permit</em> at the local Exit-Entry Bureau. Miss the deadline and
                                    overstay fines start at ¥500 per day (maximum ¥10 000) plus a possible entry ban.
                                </Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* ----------------------------- FIRST ARRIVAL ----------------------------- */}
                    <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="lg">
                        <h2>
                            <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" color="#544695">
                                    First Arrival in China: Dos & Don&apos;ts
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align="start" gap={4}>
                                <Text>
                                    Cruise through immigration, grab your bags, and choose the green channel unless you&apos;re
                                    declaring items like large electronics for resale or more than USD 5 000 in cash. Since
                                    November 2023 there&apos;s no health-code QR, but officers may still ask about symptoms – answer
                                    truthfully.
                                </Text>
                                <Text>
                                    Within <strong>24 hours</strong> of reaching your dorm or apartment, register your address. Hotels
                                    do this automatically; otherwise take your passport, lease (or landlord) and phone to the
                                    nearest police station. Late registration can trigger a warning or fines up to ¥2 000 and
                                    can complicate future visa renewals.
                                </Text>
                                <Text>
                                    Pick up a local SIM (about ¥60/month for 20 GB), activate WeChat Pay or Alipay TourPass, and
                                    keep your passport—or a colour copy—on you at all times. Avoid unlicensed taxis and never
                                    work for pay without both university and Public Security Bureau approval.
                                </Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* ----------------------------- WECHAT ACCOUNT ----------------------------- */}
                    <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="lg">
                        <h2>
                            <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" color="#544695">
                                    Setting Up WeChat Account
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align="start" gap={4}>
                                <Text>
                                    Download WeChat, hit <em>Sign Up</em>, and register with any mobile number (foreign numbers
                                    are fine). After SMS verification, ask a friend who&apos;s had WeChat &gt; 6 months to scan the
                                    security QR. No friend handy? Wait 24 h and try again—Tencent limits assists per user per
                                    day.
                                </Text>
                                <Text>
                                    Complete real-name verification by scanning your passport photo page and recording a quick
                                    face video. The check usually approves in seconds. Tap <em>Wallet → Bank Cards</em> to add a
                                    Visa, Mastercard, JCB, or Discover card—enabled for foreigners since 2023. Expect a 3 % FX
                                    fee plus a 0.5 % WeChat service fee per transaction and a ¥6 000 annual spending cap until
                                    you switch to a Chinese bank card.
                                </Text>
                                <Text>
                                    Set a six-digit payment PIN, enable two-factor login, and never screenshot your personal QR.
                                    If your phone is lost, freeze the wallet instantly via the web portal or the 24-hour hotline
                                    (+86-95017).
                                </Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>

                    {/* ----------------------------- BANK ACCOUNT ----------------------------- */}
                    <AccordionItem mb={4} border="1px solid" borderColor="gray.200" borderRadius="lg">
                        <h2>
                            <AccordionButton py={4} _hover={{ bg: 'gray.50' }}>
                                <Box flex="1" textAlign="left" fontWeight="bold" color="#544695">
                                    Opening a Chinese Bank Account
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            <VStack align="start" gap={4}>
                                <Text>
                                    The big three—ICBC, Bank of China, and China Construction Bank—offer English mobile apps and
                                    seamless links to WeChat and Alipay. Bring your passport, student visa, Admission Notice,
                                    the police registration slip, and a local phone number.
                                </Text>
                                <Text>
                                    You&apos;ll fill out a short form, choose a six-digit PIN, and, under 2025 KYC rules, provide
                                    fingerprints or a quick face scan. Some branches ask for an initial deposit of ¥10 – ¥500;
                                    many campus branches waive it.
                                </Text>
                                <Text>
                                    Before leaving the counter, activate online banking and bind the UnionPay debit card inside
                                    WeChat Pay. This lifts the app&apos;s spending cap to ¥200 000/year—enough for tuition and rent.
                                    You can also enable the e-CNY digital-yuan wallet, which works even without mobile data.
                                    Remember: closing the account requires the original passport and card, and dormant cards
                                    incur maintenance fees after 12 months.
                                </Text>
                            </VStack>
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>
            </Container>
        </Box>
    )
}
