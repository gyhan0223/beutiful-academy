import Link from "next/link";
import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Image from "next/image";

export default function Home() {
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
      <section className="pb-16">
        <Container>
          <Divider />

          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight">
                시설 · 학습 환경
              </h2>
              <p className="mt-2 text-[15px] leading-7 text-zinc-700">
                공부가 되는 환경을 만들고, 루틴이 깨지지 않게 관리합니다.
              </p>
            </div>

            <Link
              href="/dormitory"
              className="hidden rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium hover:bg-zinc-50 sm:inline-flex"
            >
              기숙/집중관리 보기
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              {
                src: "/facility-study01.jpg",
                title: "자습실",
                desc: "집중이 유지되는 개인 좌석과 동선",
              },
              {
                src: "/facility-class01.jpg",
                title: "학과 강의실",
                desc: "국어·영어·탐구 수업 전용 공간",
              },
              {
                src: "/facility-meal01.jpg",
                title: "식사/생활",
                desc: "학습 루틴이 흔들리지 않게 관리",
              },
              {
                src: "/facility-dorm01.jpg",
                title: "기숙/숙소",
                desc: "필요 시 집중 관리 환경 제공",
              },
            ].map((x) => (
              <div
                key={x.title}
                className="overflow-hidden rounded-2xl border border-zinc-200 transition-transform hover:scale-[1.01]"
              >
                <div className="relative h-44 sm:h-56">
                  <Image
                    src={x.src}
                    alt={x.title}
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                </div>
                <div className="p-5">
                  <div className="text-sm font-semibold">{x.title}</div>
                  <div className="mt-2 text-[13px] leading-6 text-zinc-700">
                    {x.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
