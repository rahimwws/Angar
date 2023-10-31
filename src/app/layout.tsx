

import { Footer } from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";

import '@/styles/global.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>        
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
