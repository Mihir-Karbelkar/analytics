import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.SECRET || "MZkQf837vImpHr71iRcLzOgdxgF68gNgTQ0/vUTGUnc=",
  callbacks: {
    async jwt({ token }) {
      token.userRole = "user";
      return token;
    },
  },
  pages: {
    signIn: "/",
  },
};

export default NextAuth(authOptions);
