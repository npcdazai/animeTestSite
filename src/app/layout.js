import { Inter, Mulish } from "next/font/google";
import "./globals.css";
import  Header from "./components/Header";
import {AllAnimeProvider} from "@/app/context/AllAnime"
import { Roboto } from 'next/font/google'
 
const mulish = Mulish({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AnimeWatch",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={mulish.className}>
      <AllAnimeProvider>
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
      </AllAnimeProvider>
      
    </html>
  );
}
