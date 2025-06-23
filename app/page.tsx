"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// 구조화된 데이터를 위한 JSON-LD
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "서울개발자모임 - 서개모",
  alternateName: "Seoul Developer Group",
  description:
    "웹과 모바일 솔루션을 개발하는 개발자들의 모임입니다. 최신 기술 트렌드를 공유하고 함께 성장하는 개발자 커뮤니티입니다.",
  url: "https://seogaemo.com",
  logo: "https://seogaemo.com/logo.png",
  foundingDate: "2023",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "contact@seogaemo.com",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Seoul",
    addressCountry: "KR",
  },
  sameAs: ["https://github.com/seogaemo", "https://twitter.com/seogaemo"],
};

export default function ComingSoon() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* JSON-LD 구조화된 데이터 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative min-h-[100dvh] bg-gradient-to-br from-[#0a0a10] to-[#101016] text-white overflow-hidden">
        {/* Mysterious glowing orb that follows mouse - Updated to brand color */}
        <div
          className="pointer-events-none fixed opacity-30 blur-[100px]"
          style={{
            background:
              "radial-gradient(circle, rgba(44, 115, 243, 0.8) 0%, rgba(44, 115, 243, 0) 70%)",
            width: "40vw",
            height: "40vw",
            borderRadius: "50%",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "left 0.5s ease-out, top 0.5s ease-out",
          }}
        />

        {/* Grid background */}
        <div className="absolute inset-0 bg-[url('/grid.png')] bg-center opacity-[0.15]" />

        <div className="container relative z-10 mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <Logo className="w-24 h-24 md:w-32 md:h-32" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-center max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              서울개발자모임
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-300 mb-8">
              Seoul Developer Group
            </h2>
            <p className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed">
              웹과 모바일 솔루션을 개발하는 개발자들의 모임
              <br />
              <span className="text-gray-500 text-base md:text-lg">
                A developer group focused on web and mobile solutions.
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="absolute bottom-8 text-center text-gray-600 text-sm"
          >
            &copy; {new Date().getFullYear()} 서울개발자모임. All rights
            reserved.
          </motion.div>
        </div>
      </div>
    </>
  );
}

function Logo({ className = "" }) {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 410 410"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="서울개발자모임 로고"
    >
      <motion.path
        d="M0 0H273.333V136.667H410V410H136.667V273.333H0V0Z"
        fill="url(#logo-gradient)"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      <defs>
        <linearGradient
          id="logo-gradient"
          x1="0"
          y1="0"
          x2="410"
          y2="410"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#2C73F3" />
          <stop offset="1" stopColor="#1a5cd1" />
        </linearGradient>
      </defs>
    </svg>
  );
}
