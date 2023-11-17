import "./globals.scss";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "SpiderVerse",
  description:
    "Creating a Spiderverse parallax carousel with React, Next.js 13 and Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu options"
            width={36}
            height={25}
          />
          <Link href="/">
            <Image
              src="/spider-logo.svg"
              alt="Spiderman"
              width={260}
              height={70}
            />
          </Link>
          <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
        </header>
        {children}
      </body>
    </html>
  );
}
