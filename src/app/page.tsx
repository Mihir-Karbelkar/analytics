import { SignInForm } from "./login/page";

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
