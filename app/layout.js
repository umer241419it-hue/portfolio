import { GoogleTagManager } from "@next/third-parties/google";
import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import ScrollToTop from "./components/helper/scroll-to-top";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammad Umer Kadiwal | Portfolio",
  description:
    "Third Year B.E. Information Technology student | Mumbai, India. Information Technology undergraduate with hands-on experience in full-stack web development, cloud computing, and Android development. Skilled in React, Java, JavaScript, Node.js, MongoDB, and AWS.",
  openGraph: {
    title: "Mohammad Umer Kadiwal | Portfolio",
    description:
      "Third Year B.E. Information Technology student | Mumbai, India. Skilled in React, Java, JavaScript, Node.js, MongoDB, and AWS.",
    url: "https://github.com/umer241419it-hue",
    siteName: "Mohammad Umer Kadiwal Portfolio",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
    ],
    shortcut: '/favicon.ico',
    apple: '/icon.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
          <ScrollToTop />
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_GTM ? (
          <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM} />
        ) : null}
      </body>
    </html>
  );
}
