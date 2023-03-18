import { PT_Serif, Rufina } from "next/font/google";
import "@/styles/globals.css";
import Main from "@/components/main";

const rufina = PT_Serif({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "The library reviews",
  description: "La guía perfecta para encontrar tu próxima lectura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="mx-auto grid" style={rufina.style}>
        <Main className="">{children}</Main>
      </body>
    </html>
  );
}
