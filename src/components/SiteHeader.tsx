"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const nav = [
  { href: "/about", label: "학원소개" },
  { href: "/system", label: "시스템" },
  { href: "/strategy", label: "합격전략" },
  { href: "/dormitory", label: "기숙" },
  { href: "/teachers", label: "강사진" },
  { href: "/contact", label: "상담" },
];

function IconMenu({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 7h16M4 12h16M4 17h16"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconX({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M6 6l12 12M18 6l-12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!panelRef.current) return;
      if (!panelRef.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/85 backdrop-blur">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-sm font-semibold">
            아름다운학원
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-4 text-sm text-zinc-700 md:flex">
            {nav.map((x) => (
              <Link key={x.href} href={x.href} className="hover:text-zinc-900">
                {x.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 md:inline-flex"
            >
              상담 신청
            </Link>

            {/* Mobile hamburger */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-200 p-2 text-zinc-900 hover:bg-zinc-50 md:hidden"
              aria-label="메뉴 열기"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? (
                <IconX className="h-5 w-5" />
              ) : (
                <IconMenu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      {open && (
        <div className="md:hidden">
          <div className="border-t border-zinc-200/70 bg-white">
            <div ref={panelRef} className="mx-auto w-full max-w-5xl px-6 py-4">
              <div className="grid gap-2">
                {nav.map((x) => (
                  <Link
                    key={x.href}
                    href={x.href}
                    className="rounded-xl px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    {x.label}
                  </Link>
                ))}

                <Link
                  href="/contact"
                  className="mt-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  onClick={() => setOpen(false)}
                >
                  상담 신청하기
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
