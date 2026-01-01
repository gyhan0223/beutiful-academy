"use client";

import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

const studyImages = [
  "/facility-study-01.jpg",
  "/facility-study-02.jpg",
  "/facility-study-03.jpg",
  "/facility-study-04.jpg",
];

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
        // 배경 클릭 닫기(이미지/버튼 클릭은 제외)
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* 상단 닫기 */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-white/10 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
        aria-label="닫기"
      >
        ✕
      </button>

      {/* 이미지 영역 */}
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

        {/* 좌우 버튼 */}
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

        {/* 하단 인디케이터 */}
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

function StudyRoomCarousel({ images }: { images: string[] }) {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(false);

  const prev = () => setIdx((v) => (v - 1 + images.length) % images.length);
  const next = () => setIdx((v) => (v + 1) % images.length);

  useEffect(() => {
    console.log("Current image source:", images[idx]);
  }, [idx]);

  return (
    <>
      <div className="relative h-[420px] sm:h-[520px] w-full overflow-hidden bg-zinc-100">
        {/* ✅ 클릭하면 원본 라이트박스 */}
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="absolute inset-0 z-10 cursor-zoom-in"
          aria-label="원본 이미지로 보기"
        />

        <Image
          src={images[idx]}
          alt={`자습실 ${idx + 1}`}
          fill
          className="object-contain"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority={idx === 0}
        />

        {/* 좌우 버튼 */}
        <button
          type="button"
          onClick={prev}
          className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-black/55"
          aria-label="이전 이미지"
        >
          ←
        </button>
        <button
          type="button"
          onClick={next}
          className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-sm font-semibold text-white backdrop-blur hover:bg-black/55"
          aria-label="다음 이미지"
        >
          →
        </button>

        {/* 도트 */}
        <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIdx(i)}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === idx ? "bg-white" : "bg-white/40"
              }`}
              aria-label={`자습실 이미지 ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* ✅ 원본 라이트박스 */}
      <Lightbox
        open={open}
        images={images}
        startIndex={idx}
        onClose={() => setOpen(false)}
      />
    </>
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
        <div className="absolute inset-0 -z-10" style={{ opacity: 0.25 }}></div>

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

            {/* CTA */}
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
          {/* 헤더 영역 */}
          <div className="mt-10 sm:mt-14 flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900">
                시설 · 학습 환경
              </h2>
              <p className="mt-4 text-lg sm:text-xl leading-8 text-zinc-700">
                공부가 되는 환경을 만들고, 루틴이 깨지지 않게 관리합니다.
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
            {/* 1) 자습실 (텍스트 위 + 이미지 아래) */}
            <section className="py-14 sm:py-20">
              {/* 텍스트 */}
              <div className="max-w-3xl">
                <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                  자습실
                </h3>
                <p className="mt-4 text-base sm:text-lg leading-8 text-zinc-700">
                  하루 학습량이 흔들리지 않도록, 집중을 끊지 않는 개인
                  좌석·동선으로 설계합니다.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
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

              {/* 이미지(아래) - 섹션감 있는 연한 배경 */}
              <div className="mt-10 sm:mt-12 rounded-3xl bg-zinc-50/70 p-4 sm:p-6 ring-1 ring-zinc-200/70">
                <div className="overflow-hidden rounded-2xl">
                  <StudyRoomCarousel images={studyImages} />
                </div>
              </div>

              <div className="mt-14">
                <Divider />
              </div>
            </section>

            {/* 2) 학과 강의실 (반전: 이미지-텍스트) */}
            <section className="py-16 sm:py-24 bg-zinc-50/60">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* 이미지가 왼쪽으로 */}
                <div className="relative min-h-[340px] sm:min-h-[520px] order-2 lg:order-1">
                  <div className="overflow-hidden rounded-2xl">
                    <div className="relative h-full w-full">
                      <button
                        type="button"
                        onClick={() => openSingle("/facility-class01.jpg")}
                        className="absolute inset-0 z-10 cursor-zoom-in"
                        aria-label="원본 이미지로 보기"
                      />
                      <Image
                        src="/facility-class01.jpg"
                        alt="학과 강의실"
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>

                {/* 텍스트가 오른쪽으로 */}
                <div className="pt-1 order-1 lg:order-2">
                  <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                    학과 강의실
                  </h3>
                  <p className="mt-4 text-base sm:text-lg leading-8 text-zinc-700 max-w-xl">
                    국어·영어·탐구를 ‘점수로’ 올리는 수업에 맞춰, 수업 몰입과
                    복습이 이어지게 구성했습니다.
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
                {/* 이미지가 왼쪽으로 */}
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

                {/* 텍스트가 오른쪽으로 */}
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
