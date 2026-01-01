"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Image from "next/image";
import { useEffect, useState } from "react";

/** ✅ 원본 보기(라이트박스) */
function Lightbox({
  open,
  images,
  startIndex = 0,
  onClose,
}: {
  open: boolean;
  images: string[];
  startIndex?: number;
  onClose: () => void;
}) {
  const [idx, setIdx] = useState(startIndex);

  useEffect(() => {
    if (open) setIdx(startIndex);
  }, [open, startIndex]);

  const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
  const next = () => setIdx((v) => (v + 1) % images.length);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/80"
      role="dialog"
      aria-modal="true"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
        aria-label="닫기"
      >
        ✕
      </button>

      <div className="relative mx-auto h-[100vh] w-full max-w-6xl px-4">
        <div className="relative h-full w-full">
          <Image
            src={images[idx]}
            alt={`원본 이미지 ${idx + 1}`}
            fill
            className="object-contain"
            sizes="100vw"
            priority
          />
        </div>

        {images.length > 1 && (
          <>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              aria-label="이전 이미지"
            >
              ←
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
              aria-label="다음 이미지"
            >
              →
            </button>
          </>
        )}

        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-3">
          <div className="rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {idx + 1} / {images.length}
          </div>

          {images.length > 1 && (
            <div className="flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIdx(i);
                  }}
                  className={`h-2.5 w-2.5 rounded-full transition ${
                    i === idx ? "bg-white" : "bg-white/40"
                  }`}
                  aria-label={`이미지 ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function useInViewOnce<T extends HTMLElement>(
  rootMargin = "-10% 0px -10% 0px"
) {
  const [inView, setInView] = useState(false);
  const ref = (node: T | null) => {
    if (!node || inView) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin, threshold: 0.12 }
    );

    io.observe(node);
  };

  return { ref, inView };
}

function StickyMiniCTA() {
  // 하단(시설 섹션 들어가면) 숨기기: 시설 섹션 id를 감지
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const el = document.getElementById("facility");
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        setHide(entries[0]?.isIntersecting ?? false);
      },
      { threshold: 0.05 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={[
        "fixed bottom-5 left-1/2 z-[60] -translate-x-1/2",
        "transition-all duration-500",
        hide
          ? "opacity-0 translate-y-4 pointer-events-none"
          : "opacity-100 translate-y-0",
      ].join(" ")}
    >
      <div className="flex items-center gap-2 rounded-2xl border border-zinc-200 bg-white/80 px-3 py-2 shadow-lg shadow-zinc-900/5 backdrop-blur">
        <div className="hidden sm:block text-xs text-zinc-600">
          내 성적으로 가능할까?
        </div>

        <Link
          href="/system"
          className="group inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3.5 py-2 text-xs font-semibold text-white shadow-sm transition
                     hover:bg-zinc-800 hover:-translate-y-[1px] active:translate-y-0"
        >
          가능 대학 확인
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center rounded-xl border border-zinc-300 bg-white px-3.5 py-2 text-xs font-medium text-zinc-900 transition
                     hover:bg-zinc-50 hover:-translate-y-[1px] active:translate-y-0"
        >
          상담
        </Link>
      </div>
    </div>
  );
}

export default function Home() {
  const [singleOpen, setSingleOpen] = useState(false);
  const [singleSrc, setSingleSrc] = useState<string | null>(null);

  const openSingle = (src: string) => {
    setSingleSrc(src);
    setSingleOpen(true);
  };

  return (
    <PageShell>
      {/* Hero */}
      <section
        className="relative bg-zinc-50 py-20 h-[500px] sm:h-[600px]"
        style={{
          backgroundImage: "url('/hero-background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 -z-10" style={{ opacity: 0.25 }} />

        <Container>
          <div className="relative z-10 text-left">
            <p className="text-sm font-medium text-zinc-600">
              최상위권 미대 입시 · 수능 중심 학과 운영
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[1.15] tracking-tight">
              최상위권 미대 합격,
              <br />
              실기만으로는 부족합니다.
            </h1>

            <p className="mt-6 max-w-2xl text-[15px] leading-7 text-zinc-700">
              실기 점수는 비슷한데,
              <br />
              <span className="font-semibold text-zinc-900">
                수능·학과에서 이미 탈락이 결정되는 구조
              </span>
              를 아시나요?
              <br />
              <br />
              국어 · 영어 · 탐구 · 관리까지. 서울대·홍대·국민대·이대 등 최상위권
              미대 전형을 기준으로 합격 구조를 설계합니다.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
              >
                상담 신청하기
              </Link>

              <Link
                href="/system"
                className="rounded-xl border border-zinc-300 bg-white/60 px-5 py-3 text-sm font-medium text-zinc-900 backdrop-blur transition hover:border-zinc-900 hover:bg-white/80"
              >
                지금 내 성적으로 가능할까?
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 합격 구조 설명 먼저 */}
      <Container>
        <Divider />

        {/* ✅ WHY: 텍스트 압축 + FAQ 아코디언 */}
        <section className="py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-zinc-500">
                  ADMISSION LOGIC
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                  미대 입시는
                  <br className="hidden sm:block" />
                  실기가 아니라,{" "}
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                      성적에서
                    </span>
                    <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-zinc-900/10" />
                  </span>{" "}
                  먼저 갈립니다.
                </h2>

                {/* ✅ 문단 대신 “핵심 3줄” */}
                <div className="mt-6 space-y-2 text-base sm:text-lg leading-8 text-zinc-700">
                  <p>
                    실기 점수는{" "}
                    <span className="font-semibold text-zinc-900">
                      대부분 비슷
                    </span>
                    합니다.
                  </p>
                  <p>
                    차이는{" "}
                    <span className="font-semibold text-zinc-900">
                      “지원 가능한 대학 범위”
                    </span>
                    에서 먼저 납니다.
                  </p>
                  <p>
                    그래서{" "}
                    <span className="font-semibold text-zinc-900">
                      성적을 기준으로
                    </span>{" "}
                    합격 구조를 설계합니다.
                  </p>
                </div>

                {/* ✅ 구조 카드: 설명 한 줄로 축약 */}
                <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-zinc-900">
                      합격 구조 (3단계)
                    </p>
                    <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200/70">
                      한눈에
                    </span>
                  </div>

                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      {
                        step: "STEP 1",
                        title: "성적(수능·학과)",
                        desc: "대학 범위를 먼저 확정",
                      },
                      {
                        step: "STEP 2",
                        title: "서류/면접(전형)",
                        desc: "대학별 전략 적용",
                      },
                      {
                        step: "STEP 3",
                        title: "실기(최종 점수)",
                        desc: "마지막 완성",
                      },
                    ].map((x) => (
                      <div
                        key={x.step}
                        className="rounded-xl bg-zinc-50 p-4 ring-1 ring-zinc-200/70"
                      >
                        <p className="text-xs font-semibold text-zinc-500">
                          {x.step}
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900">
                          {x.title}
                        </p>
                        <p className="mt-2 text-xs leading-5 text-zinc-600">
                          {x.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-zinc-900" />
                    <p className="text-xs sm:text-sm text-zinc-700">
                      “가능 대학”부터 정리하면 전략이 빨라집니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/system"
                  className="group rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition
                     hover:bg-zinc-800 hover:-translate-y-[1px] active:translate-y-0"
                >
                  내 성적으로 가능한 대학 확인하기{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href="/strategy"
                  className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition
                     hover:bg-zinc-50 hover:-translate-y-[1px] active:translate-y-0"
                >
                  합격 구조 더 보기
                </Link>
              </div>
            </div>

            {/* Right: ✅ 오해 3가지 = 아코디언(접기/펼치기) */}
            <div className="lg:col-span-6">
              <div className="h-full rounded-3xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-sm shadow-zinc-900/5">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-zinc-900">
                    자주 하는 오해 3가지
                  </p>
                  <p className="text-xs text-zinc-500">클릭해서 펼치기</p>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    {
                      tag: "오해 1",
                      q: "실기만 잘하면 되지 않나요?",
                      a: "실기 점수는 비슷하게 모입니다. 먼저 성적 기준선(지원 범위)이 결정됩니다.",
                    },
                    {
                      tag: "오해 2",
                      q: "학과는 실기랑 연결되는 거 아닌가요?",
                      a: "학과와 실기는 별개입니다. 학과로 합격권을 만들고, 실기로 완성합니다.",
                    },
                    {
                      tag: "오해 3",
                      q: "좋은 분위기가 성적을 올려주나요?",
                      a: "분위기는 유지가 어렵습니다. 저희는 관리 시스템으로 루틴이 깨지기 전에 개입합니다.",
                    },
                  ].map((x) => (
                    <details
                      key={x.tag}
                      className="group rounded-2xl bg-zinc-50 ring-1 ring-zinc-200/70 transition
                         open:bg-white open:shadow-md open:shadow-zinc-900/5"
                    >
                      <summary className="cursor-pointer list-none p-5">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold text-zinc-500">
                              {x.tag}
                            </p>
                            <p className="mt-1 text-base font-semibold text-zinc-900">
                              “{x.q}”
                            </p>
                          </div>
                          <span className="text-zinc-400 transition group-open:rotate-180">
                            ▾
                          </span>
                        </div>
                      </summary>
                      <div className="px-5 pb-5 -mt-2">
                        <p className="text-sm leading-6 text-zinc-700">{x.a}</p>
                      </div>
                    </details>
                  ))}
                </div>

                <div className="mt-6 border-t border-zinc-200 pt-6">
                  <p className="text-xs text-zinc-600">
                    * 목표 대학/전형에 따라 기준선과 전략은 달라집니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Divider />

        {/* ✅ SYSTEM (텍스트 압축 + 시원하게) */}
        <section className="py-14 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            {/* Left */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold tracking-wider text-zinc-500">
                  SYSTEM
                </p>

                <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                  공부는 시키는 게 아니라,
                  <br className="hidden sm:block" />
                  <span className="relative inline-block">
                    <span className="bg-gradient-to-r from-zinc-900 to-zinc-600 bg-clip-text text-transparent">
                      흐트러지지 않게
                    </span>
                    <span className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-zinc-900/10" />
                  </span>{" "}
                  설계합니다.
                </h2>

                {/* ✅ 긴 문단 제거 → 핵심 3줄 */}
                <div className="mt-6 space-y-2 text-base sm:text-lg leading-8 text-zinc-700">
                  <p>
                    성적은{" "}
                    <span className="font-semibold text-zinc-900">수업</span>
                    만으로 오르지 않습니다.
                  </p>
                  <p>
                    <span className="font-semibold text-zinc-900">루틴</span>이
                    유지될 때 점수가 쌓입니다.
                  </p>
                  <p>
                    우리는{" "}
                    <span className="font-semibold text-zinc-900">
                      관리로 루틴을 고정
                    </span>
                    합니다.
                  </p>
                </div>

                {/* ✅ 관리 메커니즘: 길게 설명 X, “칩”으로 */}
                <div className="mt-10 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm shadow-zinc-900/5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-zinc-900">
                      관리가 결과로 이어지는 방식
                    </p>
                    <span className="rounded-full bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-600 ring-1 ring-zinc-200/70">
                      요약
                    </span>
                  </div>

                  {/* ✅ 3칩: 한눈에 */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/70">
                      출결/자습 체크
                    </span>
                    <span className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/70">
                      과목 우선순위 조정
                    </span>
                    <span className="rounded-full bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-700 ring-1 ring-zinc-200/70">
                      리포트 기반 피드백
                    </span>
                  </div>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-2 w-2 rounded-full bg-zinc-900" />
                    <p className="text-xs sm:text-sm text-zinc-700">
                      끊기는 지점을 먼저 막으면, 점수는 안정적으로 올라갑니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  href="/system"
                  className="group rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition
                     hover:bg-zinc-800 hover:-translate-y-[1px] active:translate-y-0"
                >
                  관리 시스템 자세히 보기{" "}
                  <span className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>

                <Link
                  href="/contact"
                  className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-medium text-zinc-900 transition
                     hover:bg-zinc-50 hover:-translate-y-[1px] active:translate-y-0"
                >
                  상담 신청하기
                </Link>
              </div>
            </div>

            {/* Right: 세로 흐름 카드 (STEP 제거 버전) */}
            <div className="lg:col-span-7">
              <div className="flex flex-col gap-4">
                {[
                  {
                    label: "CURRICULUM",
                    title: "성적 기반 수업 설계",
                    desc: "현재 성적 → 목표 대학을 역산합니다.\n올릴 점수부터 먼저 잡습니다.",
                    items: ["국어·영어·탐구 클리닉", "실전형 풀이 + 시간 관리"],
                  },
                  {
                    label: "ROUTINE",
                    title: "일상 루틴 관리",
                    desc: "점수는 루틴이 무너지면 내려갑니다.\n깨지기 전에 바로 조정합니다.",
                    items: ["출결/자습 리듬 체크", "복습 흐름 유지 설계"],
                  },
                  {
                    label: "FEEDBACK",
                    title: "리포트 기반 피드백",
                    desc: "감이 아니라 데이터로 봅니다.\n약점을 찾아 반복 교정합니다.",
                    items: [
                      "정기 상담 + 성적 리포트",
                      "대학/전형 일정·전략 조율",
                    ],
                  },
                ].map((c, idx) => (
                  <div key={c.label} className="relative">
                    {/* 흐름선 (마지막 카드 제외) */}
                    {idx < 2 && (
                      <div className="absolute left-6 top-full h-6 w-px bg-zinc-200" />
                    )}

                    <div
                      className="rounded-3xl border border-zinc-200 bg-white p-6
                     shadow-sm shadow-zinc-900/5 transition
                     hover:-translate-y-[2px] hover:shadow-lg hover:shadow-zinc-900/10 hover:border-zinc-300"
                    >
                      {/* Label */}
                      <p className="text-xs font-semibold tracking-wider text-zinc-500">
                        {c.label}
                      </p>

                      {/* Title */}
                      <h3 className="mt-2 text-lg font-semibold text-zinc-900">
                        {c.title}
                      </h3>

                      {/* Description (2줄 고정) */}
                      <p className="mt-2 text-sm leading-6 text-zinc-700 whitespace-pre-line">
                        {c.desc}
                      </p>

                      {/* Bullets */}
                      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
                        {c.items.map((it) => (
                          <li key={it} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-900" />
                            {it}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Container>

      {/* 시설은 신뢰 보조재로 뒤에 */}
      <section className="pb-24 pt-10 sm:pt-14">
        <Divider />

        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mt-10 sm:mt-14 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                시설 · 학습 환경
              </h2>
              <p className="mt-4 text-lg sm:text-xl leading-8 text-zinc-700">
                시설은 목적이 아니라 결과를 위한 도구입니다. “공부만 남게”
                만드는 환경을 제공합니다.
              </p>
            </div>

            <Link
              href="/dormitory"
              className="hidden rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 sm:inline-flex"
            >
              학사관리 보기
            </Link>
          </div>

          <div className="mt-14">
            {/* ✅ 1) 자습실 (슬라이더 제거, 높이 딱 맞추기) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Text */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-zinc-500">
                      STUDY ROOM
                    </p>

                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                      자습은 자유가 아니라,
                      <br className="hidden sm:block" />
                      관리다.
                    </h3>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-700">
                      좌석·동선·시선까지 “집중이 무너질 여지”를 구조적으로
                      차단합니다. 자습실도 관리 시스템의 일부로 설계했습니다.
                    </p>

                    {/* Key points */}
                    <div className="mt-8 space-y-3">
                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            고정 좌석 · 개인 집중 구획
                          </span>{" "}
                          (자리 바뀜으로 흔들리지 않게)
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            출결 · 학습 리듬 점검
                          </span>{" "}
                          (루틴이 깨지면 바로 조정)
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            자습 → 수업 → 복습
                          </span>{" "}
                          흐름이 끊기지 않게 연결
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA (아래로 내려서 세로 밸런스 맞춤) */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/dormitory"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      관리 시스템 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-7">
                  {/* ✅ lg에서 텍스트와 같은 높이로 맞추기 */}
                  <div className="h-[340px] sm:h-[420px] lg:h-full overflow-hidden rounded-3xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-study-01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      {/* ✅ 안 잘리게 contain, 대신 카드 꽉 채우기 */}
                      <Image
                        src="/facility-study-01.jpg"
                        alt="자습실"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  </div>

                  {/* ✅ 사진 가리지 말고 아래에 캡션 */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-600">
                    * 시설은 “보여주기”가 아니라 “결과를 만들기” 위해
                    설계합니다.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 2) 학과 강의실 (이미지-텍스트 반전, 자습실 톤 통일) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Image (left on desktop) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="h-[340px] sm:h-[420px] lg:h-full overflow-hidden rounded-3xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-class-01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />

                      <Image
                        src="/facility-class-01.jpg"
                        alt="학과 강의실"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-600">
                    * 실제 수업 장면을 기준으로 “점수형 학습”에 맞춘 환경을
                    구성합니다.
                  </p>
                </div>

                {/* Text (right on desktop) */}
                <div className="lg:col-span-5 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-zinc-500">
                      CLASS ROOM
                    </p>

                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                      수업은 분위기가 아니라,
                      <br className="hidden sm:block" />
                      점수로 증명한다.
                    </h3>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-700">
                      국어·영어·탐구를 “감”이 아니라 “점수”를 올리는 수업에
                      맞춰, 몰입과 복습이 이어지게 구성했습니다.
                    </p>

                    {/* Key points */}
                    <div className="mt-8 space-y-3">
                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            실전형 수업 운영
                          </span>{" "}
                          (문제 풀이·시간 관리 중심)
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            수업 → 복습 흐름
                          </span>
                          이 끊기지 않게 설계
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">
                            성적 리포트 기반 피드백
                          </span>
                          으로 약점 교정
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/system"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      시스템 자세히 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 3) 식사/생활 (자습실 톤: 대표 1장, 오버레이/블러/슬라이더 없음) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Text */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-zinc-500">
                      MEAL / LIFE
                    </p>

                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                      컨디션은 관리다.
                      <br className="hidden sm:block" />
                      식사부터 무너지지 않게.
                    </h3>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-700">
                      공부는 체력전입니다. 식사·생활 리듬이 무너지면 성적이 먼저
                      꺾입니다.
                      <br />
                      학습을 지속할 수 있게{" "}
                      <span className="font-semibold text-zinc-900">
                        컨디션 변수
                      </span>
                      를 줄입니다.
                    </p>

                    {/* Key points */}
                    <div className="mt-8 space-y-3">
                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">식사 시간 고정</span>{" "}
                          (리듬이 흔들리지 않게)
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">학습 흐름 유지</span>{" "}
                          (식사 후 바로 복귀되는 동선)
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">컨디션 체크</span>{" "}
                          (무너지기 전에 조정)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CTA (원하면 유지 / 빼도 됨) */}
                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/dormitory"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      학사관리 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-7">
                  {/* lg에서 텍스트와 같은 높이로 맞추기 */}
                  <div className="h-[340px] sm:h-[420px] lg:h-full rounded-3xl bg-white ring-1 ring-zinc-200/70 overflow-hidden">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-meal-01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      <Image
                        src="/facility-meal-01.jpg"
                        alt="식사/생활"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>

                  {/* 캡션은 이미지 아래 */}
                  <p className="mt-4 text-xs sm:text-sm text-zinc-600">
                    * 컨디션이 무너지지 않게, 학습이 ‘지속’되도록 설계합니다.
                  </p>
                </div>
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 4) 숙소 (식사 톤: 대표 1장, 테두리/링 없음, 이미지-텍스트 반전 유지) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Image (left on desktop) */}
                <div className="lg:col-span-7 order-2 lg:order-1">
                  <div className="h-[340px] sm:h-[420px] lg:h-full overflow-hidden rounded-3xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-dorm02-2.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      <Image
                        src="/facility-dorm02-2.jpg"
                        alt="숙소"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 60vw"
                      />
                    </div>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm text-zinc-600">
                    * 집중이 깨지는 변수를 줄여, 공부만 남게 만드는 환경을
                    제공합니다.
                  </p>
                </div>

                {/* Text */}
                <div className="lg:col-span-5 flex flex-col justify-between order-1 lg:order-2">
                  <div>
                    <p className="text-xs font-semibold tracking-wider text-zinc-500">
                      DORMITORY
                    </p>

                    <h3 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                      집중이 남게,
                      <br className="hidden sm:block" />
                      변수를 줄인다.
                    </h3>

                    <p className="mt-5 text-base sm:text-lg leading-8 text-zinc-700">
                      생활 변수가 커지면 성적이 먼저 흔들립니다.
                      <br />
                      공부에 필요한 루틴이 이어지도록{" "}
                      <span className="font-semibold text-zinc-900">
                        환경을 정돈
                      </span>
                      합니다.
                    </p>

                    <div className="mt-8 space-y-3">
                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">수면/기상 리듬</span>
                          이 흔들리지 않게
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">정리/청결 기준</span>
                          으로 집중 유지
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-zinc-900" />
                        <p className="text-sm sm:text-base text-zinc-800">
                          <span className="font-semibold">학습 동선</span>이
                          끊기지 않게 연결
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <Link
                      href="/dormitory"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      학사관리 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* ✅ 단일 이미지 라이트박스 */}
        <Lightbox
          open={singleOpen}
          images={singleSrc ? [singleSrc] : []}
          startIndex={0}
          onClose={() => setSingleOpen(false)}
        />
      </section>
    </PageShell>
  );
}
