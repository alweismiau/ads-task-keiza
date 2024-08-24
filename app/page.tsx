"use client";
import Image from "next/image";
import Form from "./login/form";
import Appbar from "./appbar";
import { useRef } from "react";
import Link from "next/link";

export default function Home() {
  const sectionGetStarted = useRef(null);
  const sectionBroadcast = useRef(null);

  return (
    <div
      className="w-full h-screen bg-cover bg-center lg:items-center flex flex-col"
      style={{ backgroundImage: "url(/main-bg.png)" }}
    >
      <div className="lg:pt-10 ">
        <Appbar />
      </div>

      <div className="flex flex-col-reverse md:flex-row w-full flex-1 items-center justify-center px-4">
        <div className="hidden lg:flex w-64 space-y-4">
          <div className="border-l-2 border-[#00000066] h-52 mx-4"></div>
          <div className="flex flex-col font-medium text-[14px] my-auto">
            <Link href="/get-started" className="text-black">
              Get Started
            </Link>
            <Link href="/features" className="text-[#00000066]">
              Broadcast
            </Link>
            <Link href="/pricing" className="text-[#00000066]">
              Campaign
            </Link>
            <Link href="/demo" className="text-[#00000066]">
              Auto Reply
            </Link>
            <Link href="/blog" className="text-[#00000066]">
              Opportunity
            </Link>
            <Link href="/blog" className="text-[#00000066]">
              Pricing
            </Link>
            <Link href="/blog" className="text-[#00000066]">
              FAQ
            </Link>
            <Link href="/blog" className="text-[#00000066]">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="flex flex-col w-[313px] mx-auto lg:w-[367px] gap-y-[30px]">
          <div className="text-black text-[34px] font-bold" style={{ lineHeight: '42.5px' }}>
            Elevate Your Messaging Efficiency with Our Innovative Admin Tools
          </div>
          <div className="font-medium text-black text-[14px]">
            Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih
            mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan
            pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi
            lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan
            kendali penuh pesan dengan manajemen konten yang praktis.
          </div>
          <button className="w-[222px] bg-black text-white font-medium py-2 px-4 flex items-center rounded-[5px]">
            <span className="flex-grow">Daftar Sekarang</span>
            <span className="border-l-2 border-white py-2 px-4 ">→</span>
          </button>
        </div>
        <div>
          <img src="/img/elevate.svg" alt="elv" className=""/>
        </div>
      </div>
    </div>
  );
}
