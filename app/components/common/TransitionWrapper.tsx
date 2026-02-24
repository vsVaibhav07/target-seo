"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./page-transition";

export default function TransitionWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      {/* Key pathname hone ki wajah se har page change par animation trigger hogi */}
      <div key={pathname}>
        <PageTransition />
        {children}
      </div>
    </AnimatePresence>
  );
}