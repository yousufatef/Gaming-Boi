import { Metadata } from "next"
import "./globals.css"
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gaming Boi",
  description: "This is Gaming Boi platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={` ${montserrat.className}  dark antialiased`}>
        <main>{children}</main>
      </body>
    </html>
  )
}