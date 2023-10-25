import SearchInput from "@/entities/SearchInput/SearchInput";
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
      </body>
    </html>
  );
}
