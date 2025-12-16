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
          // صفحه پاکت بسته
          <motion.div
            key="closed"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92, rotateY: 20 }}
            transition={{ duration: 0.6 }}
            className="relative z-50 flex flex-col items-center"
          >
            <button
              onClick={handleOpenLetter}
              aria-label="باز کردن نامه"
              className="group relative mx-auto w-96 h-64 rounded-md shadow-2xl overflow-hidden transform-gpu transition-transform hover:-translate-y-1 active:translate-y-0"
            >
              {/* پاکت کرافت با texture و خطوط */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D2B48C]/95 to-[#C19A6B]/95 mix-blend-multiply"></div>
              <div className="absolute inset-0 border-2 border-[#C19A6B]/30 rounded-md"></div>

              {/* فلپ مثلثی */}
              <div
                className="absolute top-0 left-0 w-full h-32 origin-top shadow-md"
                style={{
                  clipPath: "polygon(0% 100%, 50% 0%, 100% 100%)",
                  background: "linear-gradient(180deg,#D2B48C, #C19A6B)",
                }}
              />

              {/* مهر مومی */}
              <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#DE5354] rounded-full flex items-center justify-center shadow-lg ring-2 ring-[#DE5354]/40">
                <Sparkles className="h-8 w-8 text-white animate-pulse" />
              </div>

              {/* دکوراتورها */}
              <div className="absolute top-4 left-4 text-4xl rotate-12 opacity-70">
                🍁
              </div>
              <div className="absolute bottom-4 right-8 text-4xl -rotate-6 opacity-70">
                🍁
              </div>

              {/* لوگو */}
              <div className="absolute top-32 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-md">
                <Image
                  src={logo}
                  alt="Homeenger Logo"
                  width={150}
                  height={50}
                  className="object-contain"
                />
              </div>
            </button>

            {/* آیکون پاکت به‌همراه متن داخل یک باکس کوچک و قابل کلیک (خواناتر از متن ساده) */}
            <div
              className="mt-4 flex items-center gap-3 rounded-full px-4 py-2 bg-white/80 backdrop-blur-sm shadow-md border border-zinc-200 cursor-pointer"
              onClick={handleOpenLetter}
              role="button"
              aria-hidden
            >
              <Mail className="h-6 w-6 text-zinc-700 group-hover:scale-110 transition-transform" />
              <span className="text-sm text-zinc-800">باز کردن نامه</span>
            </div>
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
                  امروز، ۱ دقیقه بیشتر پیش همیم 💫
                </p>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 drop-shadow-sm">
                  چون یلدا ۱ دقیقه از همه‌ی شب‌ها طولانی‌تره
                </p>
              </div>

              {/* شعر حافظ */}
              {/* <div className="mb-10 text-center font-nastaliq text-lg leading-relaxed text-zinc-800 dark:text-zinc-200 drop-shadow-sm">
                <p>بیا تا گل برافشانیم و می در ساغر اندازیم</p>
                <p>فلک را سقف بشکافیم و طرحی نو دراندازیم</p>
                <p className="mt-6 text-sm italic text-zinc-600 drop-shadow-sm">
                  — حافظ
                </p>
              </div> */}
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
