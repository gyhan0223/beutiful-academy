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

        <Section title="왜 성적이 먼저인가">
          <p>
            많은 학생들이 미대 입시를 실기 시험이라고 생각합니다. 하지만
            최상위권 미대에서는 수능 성적이 합격의 기준선이 됩니다. 성적이
            받쳐주지 않으면 실기로 뒤집기 어렵습니다.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              href="/strategy"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              합격 전략 보기
            </Link>
          </div>
        </Section>

        <Divider />

        <Section title="수업 · 관리 시스템">
          <ul className="list-disc pl-5">
            <li>국어·영어·사회탐구 수업 및 과목별 클리닉</li>
            <li>출결 확인 및 학습 루틴 점검</li>
            <li>정기 상담 및 성적 리포트 기반 피드백</li>
            <li>최상위권 미대 전형 기반 일정·전략 조율</li>
          </ul>

          <div className="mt-6 flex gap-3">
            <Link
              href="/system"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              시스템 자세히 보기
            </Link>
          </div>
        </Section>
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
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      관리 시스템 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-7">
                  {/* ✅ lg에서 텍스트와 같은 높이로 맞추기 */}
                  <div className="h-[340px] sm:h-[420px] lg:h-full rounded-3xl bg-white ring-1 ring-zinc-200/70 overflow-hidden">
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
                        className="object-contain p-6 sm:p-8"
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

            {/* 2) 학과 강의실 (슬라이더 제거, 자습실과 톤 통일) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
                {/* Text */}
                <div className="lg:col-span-5 flex flex-col justify-between">
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
                      className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800"
                    >
                      시스템 자세히 보기
                    </Link>
                    <Link
                      href="/contact"
                      className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                    >
                      상담 신청
                    </Link>
                  </div>
                </div>

                {/* Image */}
                <div className="lg:col-span-7">
                  <div className="h-[340px] sm:h-[420px] lg:h-full rounded-3xl bg-white ring-1 ring-zinc-200/70 overflow-hidden">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-class-01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />

                      {/* ✅ 안 잘리게 contain + 여백(padding) 동일 톤 */}
                      <Image
                        src="/facility-class-01.jpg"
                        alt="학과 강의실"
                        fill
                        className="object-contain p-6 sm:p-8"
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
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 3) 식사/생활 (정방향: 텍스트-이미지) */}
            <section className="py-14 sm:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="pt-1 order-1">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    식사/생활
                  </h3>
                  <p className="mt-4 text-base sm:text-lg leading-8 text-zinc-700 max-w-xl">
                    컨디션이 무너지면 성적이 먼저 꺾입니다. 식사·생활 리듬까지
                    관리해 학습 지속력을 만듭니다.
                  </p>
                </div>

                <div className="relative min-h-[340px] sm:min-h-[520px] order-2">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-meal01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      <Image
                        src="/facility-meal01.jpg"
                        alt="식사/생활"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 4) 숙소 (반전: 이미지-텍스트) */}
            <section className="py-16 sm:py-24 bg-zinc-50/60">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                <div className="relative min-h-[340px] sm:min-h-[520px] order-2 lg:order-1">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-dorm01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      <Image
                        src="/facility-dorm01.jpg"
                        alt="숙소"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-1 order-1 lg:order-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    숙소
                  </h3>
                  <p className="mt-4 text-base sm:text-lg leading-8 text-zinc-700 max-w-xl">
                    집중이 깨지는 변수를 줄여, 공부만 남게 만듭니다. 필요 시
                    ‘몰입 환경’으로 전환합니다.
                  </p>
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
