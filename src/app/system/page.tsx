import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";
import Image from "next/image";

export default function SystemPage() {
  return (
    <PageShell>
      <Container>
        <Section title="수업 · 관리 시스템">
          <p>
            국어·영어·탐구 수업을 기반으로, 과목별 취약을 빠르게 보완하고 성적을
            끌어올리는 데 집중합니다. 동시에 출결·학습 루틴·상담을 통해 흔들리지
            않게 관리합니다.
          </p>
        </Section>

        <Divider />

        <Section title="학과 수업">
          <ul className="list-disc pl-5">
            <li>국어 / 영어 / 사회탐구 수업</li>
            <li>과목별 클리닉(취약 파트 집중)</li>
            <li>모의고사 기반 피드백</li>
          </ul>
        </Section>

        <Divider />
        <section className="py-16">
          <h2 className="text-xl font-semibold tracking-tight">
            실기실 · 연계 운영
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-zinc-700">
            실기는 단독으로 운영되지 않습니다. 학과 성적, 일정, 목표 대학 전형에
            맞춰 실기 준비 시기와 강도를 조율합니다.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* LEFT: 1,2 stacked */}
            <div className="grid gap-4">
              <div className="h-44 sm:h-56 overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/facility-studio01.jpg"
                  alt="실기실 1"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="h-44 sm:h-56 overflow-hidden rounded-2xl border border-zinc-200">
                <Image
                  src="/facility-studio02.jpg"
                  alt="실기실 2"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            {/* RIGHT: 3 (same total height as left stack) */}
            <div className="h-72 sm:h-[464px] overflow-hidden rounded-2xl border border-zinc-200">
              <Image
                src="/facility-studio03.jpg"
                alt="실기실 3"
                width={1200}
                height={1600}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>
        <Divider />
        <Section title="관리 시스템">
          <ul className="list-disc pl-5">
            <li>출결 확인 및 학습 루틴 점검</li>
            <li>정기 상담</li>
            <li>성적 리포트 기반 학습 계획 조정</li>
          </ul>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              상담으로 내 계획 만들기
            </Link>
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
