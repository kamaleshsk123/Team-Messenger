import NextAuth from "next-auth";
import { authOptions } from "@/app/libs/authOptions"; // Import from the separate file

// Use NextAuth with imported authOptions
const handler = NextAuth(authOptions);

// Export the route handlers
export { handler as GET, handler as POST };
