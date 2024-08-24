"use client";

import { FormEvent } from "react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const router = useRouter();
  const [emailPlaceholder, setEmailPlaceholder] = useState("Email");
  const [isPasswordModalVisible, setPasswordModalVisible] = useState(false);
  useEffect(() => {
    const updatePlaceholder = () => {
      setEmailPlaceholder(window.innerWidth < 768 ? "Username/Email" : "Email");
    };
    updatePlaceholder();
    window.addEventListener("resize", updatePlaceholder);
    return () => window.removeEventListener("resize", updatePlaceholder);
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const response = await fetch(`/api/auth/register`, {
      method: "POST",
      body: JSON.stringify({
        email: formData.get("email"),
        password: formData.get("password"),
      }),
    });
    const data = await response.json(); 

    if (response.ok) { 
      console.log({ data });
      router.push('/login'); 
    } else {
      console.error("Registration failed:", data.message);
    }
  };

  const handlePasswordFocus = () => {
    if (window.innerWidth < 768) {
      setPasswordModalVisible(true);
    }
  };

  const handlePasswordBlur = () => {
    setPasswordModalVisible(false);
  };

  return (
    <div className="bg-white my-auto lg:px-8 lg:py-10 lg:rounded-[10px] lg:shadow-md lg:w-[466px]">
      <div className="flex flex-col">
        <div className="flex flex-col text-black justify-center items-center mx-auto max-w-[264px]">
          <h1 className="font-bold text-[24px] text-center">
            Welcome To Fowardin
          </h1>
          <p className="font-medium text-[14px] text-center">
            Revolutionize your communication journey with Fowardin today
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
            placeholder={emailPlaceholder}
          />
          <input
            name="username"
            className="lg:block hidden border border-abu-button text-black px-5 py-4 rounded-[5px] mb-4"
            type="text"
            placeholder="Username"
          />
          <div className="flex">
            <select
              name="country"
              className="lg:block hidden border border-abu-button text-black px-2 py-4 rounded-[5px] mb-4 mr-4 "
            >
              <option value="+62">(ID) +62</option>
              <option value="+1">(US) +1</option>
              <option value="+44">(UK) +44</option>
            </select>
            <input
              name="number"
              className="border border-abu-button text-black px-5 py-4 rounded-[5px] mb-4 flex-grow "
              type="text"
              placeholder="Whatsapp Phone Number"
            />
          </div>

          <input
            name="password"
            className="border border-abu-button text-black px-5 py-4 rounded-[5px] mb-4"
            type="password"
            placeholder="Password"
            onFocus={handlePasswordFocus}
            onBlur={handlePasswordBlur}
          />
          {isPasswordModalVisible && (
            <div className="mb-[12px] p-4 bg-[#F3F5F8] border rounded-md shadow-lg transition-all duration-300">
              <p className="text-[#777C88]">Password harus mengandung:</p>
              <ul>
                <li className="text-[#4FBEAB]">Paling tidak 8 karakter</li>
                <li className="text-[#777C88]">
                  Paling tidak 3 dari syarat berikut:
                </li>
                <li className="text-[#4FBEAB]">Huruf besar (A-Z)</li>
                <li className="text-[#777C88]">Huruf kecil (a-z)</li>
                <li className="text-[#777C88]">Angka</li>
                <li className="text-[#777C88]">Karakter Spesial (!@#$%^&*)</li>
              </ul>
            </div>
          )}
          <button
            type="submit"
            className="px-5 py-4 rounded-[5px] text-white bg-biru-button"
          >
            Sign Up
          </button>
          <div className="flex font-medium items-center text-[14px] mx-auto mt-[30px]">
            <h1 className="text-black mr-1">Sudah punya akun?</h1>
            <Link href="/login" className="text-biru-button cursor-pointer">
              Masuk di sini
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
