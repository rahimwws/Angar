import SearchInput from "@/entities/SearchInput/SearchInput";
import { Footer } from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";



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
