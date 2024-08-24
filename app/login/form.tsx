"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Form() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    if (response?.error) {
        // Update the state with the error message
        setErrorMessage(response.error);
      } else {
        // On successful login, redirect to the dashboard and refresh the page
        router.push("/dashboard");
        router.refresh();
      }
  };
  return (
    <div className="bg-white my-auto lg:px-8 lg:py-10 lg:rounded-[10px] lg:shadow-md lg:w-[466px]">
      <div className="flex flex-col">
        <div className="flex flex-col text-black items-center ">
          <h1 className="font-bold text-[24px]">Welcome Back</h1>
          <p className="font-medium text-[14px]">
            We’re so excited to see you again!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2 mx-auto mt-[30px] lg:w-[406px] w-[318px] "
        >
          <input
            name="email"
            className="border border-abu-button text-black px-5 py-4 rounded-[5px] mb-4"
            type="email"
            placeholder="Username/Email"
          />
          <input
            name="password"
            className="border border-abu-button text-black px-5 py-4 rounded-[5px] mb-4"
            type="password"
            placeholder="Password"
          />
          <a href="#" className="text-[14px] text-biru-button mb-[30px]">
            Lupa Password?
          </a>
          <button
            type="submit"
            className="px-5 py-4 rounded-[5px] text-white bg-biru-button"
          >
            Sign In
          </button>
          <div className="flex font-medium items-center text-[14px] mx-auto mt-[30px]">
            <h1 className="text-black mr-1">Butuh buat akun?</h1>
            <Link href="/register" className="text-biru-button cursor-pointer">
              Daftar di sini
            </Link>
          </div>
        </form>
        {errorMessage && (
        <div className="mt-4 p-2 bg-red-100 border border-red-400 text-red-700">
          {errorMessage}  // Display the error message
        </div>
      )}
      </div>
    </div>
  );
}
