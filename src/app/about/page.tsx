import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageShell>
      <Container>
        <Section title="학원 소개">
          <p>
            아름다운학원은 최상위권 미대 입시를 목표로 하는 학생들을 위해, 수능
            중심의 학과 수업과 학습 관리를 기반으로 합격 전략을 설계합니다.
          </p>
          <p className="mt-4">
            실기는 마지막 변수입니다. 합격의 기준선은 성적에서 결정됩니다.
            그래서 우리는 국어·영어·탐구 성적과 학습 루틴을 먼저 안정화하고,
            목표 대학 전형 구조에 맞춰 실기 일정과 준비를 조율합니다.
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              href="/contact"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              상담 신청
            </Link>
            <Link
              href="/strategy"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
            >
              합격 전략 보기
            </Link>
          </div>
        </Section>

        <Divider />

        <Section title="운영 원칙">
          <ul className="list-disc pl-5">
            <li>최상위권 미대 전형 구조를 기준으로 목표를 설정합니다.</li>
            <li>성적 관리(국어·영어·탐구)와 학습 루틴을 핵심으로 둡니다.</li>
            <li>출결·상담·리포트를 통해 학습 과정을 점검합니다.</li>
          </ul>
        </Section>
      </Container>
    </PageShell>
  );
}
