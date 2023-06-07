"use client";
import Button from "@/components/overriden/button";
import Input from "@/components/overriden/input";
import Label from "@/components/overriden/label";
import Link from "@/components/overriden/link";
import PillButton from "@/components/pill-button";
import { signIn } from "next-auth/react";
import Image from "next/image";

export const SignInForm = () => {
  return (
    <div className="w-1/2">
      <p className="text-secondary text-4xl font-bold font-lato">Sign In</p>
      <p className="text-secondary text-md font-lato">
        Sign in to your account
      </p>
      <div className="pills-section flex justify-between gap-4 mt-6">
        <PillButton
          onClick={() => {
            signIn("google", { callbackUrl: "/board" });
          }}
        >
          <Image
            src="/icons/google.svg"
            height={20}
            width={20}
            alt="google icon"
            className="mr-2"
          />
          Sign in with Google
        </PillButton>
        <PillButton>
          <Image
            src="/icons/apple.svg"
            height={20}
            width={20}
            alt="google icon"
            className="mr-2"
          />{" "}
          Sign in with Apple
        </PillButton>
      </div>
      <form className="mt-6 p-7 bg-primary rounded-xl">
        <Label htmlFor="email">Email address</Label>
        <Input name="email" />
        <Label htmlFor="password" className="mt-6">
          Password
        </Label>
        <Input name="password" type="password" />
        <Link href="/forgot-password">Forgot password?</Link>
        <Button className="mt-4">Sign in</Button>
      </form>

      <p className="text-center">
        Dont have an account? <Link href="/register-here">Register here</Link>
      </p>
    </div>
  );
};

export default function Login() {
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
