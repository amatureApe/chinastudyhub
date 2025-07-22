import { Geist } from "next/font/google"
import "./globals.css"
import { Providers } from '@/components/Providers'
import Layout from '@/components/Layout'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={geistSans.variable}>
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  )
}