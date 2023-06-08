import "./globals.css";
import localFont from "next/font/local";
import { Inter, Lato, Montserrat } from "next/font/google";
import { Session } from "next-auth";
import { headers } from "next/headers";
import { api } from "@/utils/api";
import AuthContext from "@/components/auth-context";

async function getSession(cookie: string): Promise<Session> {
  const response = await api(`/api/auth/session`, {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Homepage",
  description: "Homepage for login",
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const lato = Lato({
  variable: "--font-lato",
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get("cookie") ?? "");

  return (
    <html lang="en" className={`${lato.variable} ${montserrat.variable}`}>
      <body>
        <AuthContext session={session}>{children}</AuthContext>
      </body>
    </html>
  );
}
