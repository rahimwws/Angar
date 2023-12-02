import { Footer } from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";
import "@/styles/global.scss";
// import { QueryProvider } from "./QueryProvider";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* <QueryProvider> */}
          <Header />
          {children}
          <Footer />
        {/* </QueryProvider> */}
      </body>
    </html>
  );
}
