import { getServerSession } from "next-auth";
import { SignInForm } from "./login/page";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await getServerSession(authOptions);
  if (session?.user) redirect("/board");
  return (
    <>
      <div className="flex w-full h-full">
        <div className="basis-1/3 flex justify-center items-center bg-secondary">
          <p className="text-primary text-6xl font-bold">Board.</p>
        </div>
        <div className="basis-2/3 flex justify-center items-center bg-neutral-100">
          <SignInForm />
        </div>
      </div>
    </>
  );
}
