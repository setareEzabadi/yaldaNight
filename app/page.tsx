// app/page.tsx

"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Heart, Flame, Sparkles, Gift, Mail } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import logo from "@/public/footerLogo.dd590cfd.png";
import background from "@/public/background.png";

// برای سمبول انار از ایموجی هندوانه استفاده می‌کنیم (چون انار ایموجی استاندارد نداره و قرمز رنگه مثل انار)
const Pomegranate = () => <span className="text-5xl">🍉</span>;

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    setIsOpen(true);
  };

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-center p-4 font-vazir overflow-hidden relative ${
        isOpen ? "" : "bg-gradient-to-b from-[#F5F5F5] to-[#E0E0E0]"
      }`}
      dir="rtl"
    >
      {/* بک‌گراند فول‌پیج وقتی باز است - بلور قوی‌تر با فیلتر سفارشی (blur 40px) و opacity کمتر برای دیده شدن بهتر متن */}
      {isOpen && (
        <Image
          src={background}
          alt="Group Photo Background"
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
          style={{ filter: "blur(5px)" }}
          fill
        />
      )}

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6 }}
            className="relative z-50 flex items-center justify-center"
          >
            <button
              onClick={handleOpenLetter}
              aria-label="باز کردن نامه"
              style={{
                border: "none",
                cursor: "pointer",
                background: "transparent",
              }}
              className="flex flex-col items-center justify-center focus:outline-none"
            >
              <Mail
                size={150}
                strokeWidth={1}
                className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72"
                style={{ color: "rgb(25,124,130)" }}
              />

              <span
                className="absolute text-center font-semibold select-none"
                style={{
                  fontSize: "14px",
                  color: "rgb(25,124,130)",
                  textShadow: "0 2px 10px rgba(0,0,0,0.12)",
                  top: "92px",
                }}
              >
                باز کردن نامه
              </span>
            </button>
          </motion.div>
        ) : (
          // محتوای نامه باز شده - لایه نیمه‌شفاف قوی‌تر (bg-white/95) برای جداسازی بهتر متن از بک‌گراند و دیده شدن متن - اضافه کردن text-shadow برای کنتراست بیشتر
          <motion.div
            key="open"
            initial={{ opacity: 0, rotateY: -180 }}
            animate={{ opacity: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mx-auto max-w-lg z-50" // z-index بالاتر
          >
            <div className="rounded-2xl bg-white/95 p-10 shadow-2xl dark:bg-zinc-900/95">
              {/* سمبول انار در بالا */}
              <div className="mb-6 flex justify-center gap-8">
                <Pomegranate />
                <Pomegranate />
                <Pomegranate />
              </div>

              {/* لوگو */}
              <div className="mb-8 flex justify-center">
                <Image
                  src={logo}
                  alt="Homeenger Logo"
                  width={200}
                  height={60}
                  className="object-contain"
                />
              </div>

              {/* عنوان اصلی - سطر اول رنگ متفاوت، یلدا قرمز - رنگ‌ها تیره‌تر برای کنتراست بهتر + text-shadow */}
              <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl text-zinc-900 dark:text-zinc-100 drop-shadow-md">
                <span className="text-[#1f7e84]">دعوت به میهمانی شب </span>
                <span className="text-[#DE5354]">یلدا</span>
              </h2>

              {/* متن ویژه درباره ۱ دقیقه بیشتر */}
              <div className="mb-8 rounded-lg bg-red-50 px-6 py-4 text-center dark:bg-red-950/30 drop-shadow-sm">
                <p className="text-lg font-medium text-[#8B1E3F] drop-shadow-sm">
                  امشب، ۱ دقیقه بیشتر پیش همیم 💫
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 drop-shadow-sm">
                  چون یلدا ۱ دقیقه از همه‌ی شب‌ها طولانی‌تره
                </p>
              </div>

              <div className="mb-10 flex justify-center">
                <a
                  href="https://hafez.taktemp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg px-6 py-3 text-white font-medium text-lg shadow-md hover:bg-[#1f7e84]/90 transition-colors drop-shadow-sm"
                >
                  <Sparkles className="h-5 w-5" />
                  گرفتن فال حافظ
                </a>
              </div>

              {/* جزئیات */}
              <div className="mb-10 space-y-4 rounded-lg bg-zinc-50 px-8 py-6 text-center text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200 drop-shadow-sm">
                <p className="text-lg drop-shadow-sm">
                  <span className="font-medium">تاریخ:</span> جمعه ۲۸ آذر ۱۴۰۴
                </p>
                <p className="text-lg drop-shadow-sm">
                  <span className="font-medium">مکان:</span> گرگان
                </p>
              </div>

              {/* آیکون‌های یلدا با انار در وسط */}
              <div className="mb-8 flex items-center justify-center gap-6 drop-shadow-md">
                <Heart className="h-10 w-10 text-[#de5354]" />
                <Flame className="h-10 w-10 text-[#f59e0b]" />
                <Pomegranate />
                <Sparkles className="h-10 w-10 text-[#1f7e84]" />
                <Gift className="h-10 w-10 text-[#7c3aed]" />
              </div>

              {/* متن پایانی */}
              <p className="text-center text-lg text-zinc-700 dark:text-zinc-300 drop-shadow-sm">
                با حضور شما، یلدا زیباتر می‌شود 🍉✨
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
