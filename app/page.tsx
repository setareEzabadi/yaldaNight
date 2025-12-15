// app/page.tsx

"use client"; // ← این خط خیلی مهمه! اضافه کن

import { motion } from "framer-motion";
import { Heart, Flame, Sparkles, Gift } from "lucide-react";

export default function Home() {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1f7e84]/10 to-[#de5354]/10 p-4 font-vazir"
      dir="rtl"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="mx-auto max-w-md rounded-2xl bg-white p-8 shadow-2xl dark:bg-zinc-900"
      >
        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#1f7e84]">
            Homeenger
          </h1>
        </div>

        {/* Title */}
        <h2 className="mb-6 text-center text-2xl font-semibold text-[#de5354] md:text-3xl">
          دعوت به مهمانی شب یلدا
        </h2>

        {/* Poem - حافظ (دو بیت رندوم) */}
        <div className="mb-8 text-center font-nastaliq text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
          <p>بیا تا گل برافشانیم و می در ساغر اندازیم</p>
          <p>فلک را سقف بشکافیم و طرحی نو دراندازیم</p>
          <p className="mt-4 text-sm italic text-zinc-500">— حافظ</p>
        </div>

        {/* Details */}
        <div className="mb-8 space-y-4 rounded-lg bg-zinc-50 px-6 py-4 text-center text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200">
          <p className="text-lg">
            <span className="font-medium">تاریخ:</span> جمعه ۲۸ آذر ۱۴۰۴
          </p>
          <p className="text-lg">
            <span className="font-medium">مکان:</span> گرگان
          </p>
        </div>

        {/* Yalda Icons */}
        <div className="mb-6 flex justify-center gap-6">
          <Heart className="h-10 w-10 text-[#de5354]" />
          <Flame className="h-10 w-10 text-[#f59e0b]" />
          <Sparkles className="h-10 w-10 text-[#1f7e84]" />
          <Gift className="h-10 w-10 text-[#7c3aed]" />
        </div>

        {/* Footer */}
        <p className="text-center text-zinc-600 dark:text-zinc-400">
          با حضور شما، یلدا زیباتر می‌شود 💫
        </p>
      </motion.div>
    </div>
  );
}
