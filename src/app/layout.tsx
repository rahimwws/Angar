import { Footer } from "@/widgets/Footer/Footer";
import Header from "@/widgets/Header/Header";
import "@/styles/global.scss";
import { QueryProvider } from "./QueryProvider";
import BitrixButton from "@/shared/BitrixButton/BitrixButton";
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          <Header />
          {children}
          <Footer />
        </QueryProvider>
        <BitrixButton/>
      </body>
    </html>
  );
}
