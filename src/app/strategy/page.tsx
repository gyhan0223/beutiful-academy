import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";

export default function StrategyPage() {
  return (
    <PageShell>
      <Container>
        <Section title="합격 전략">
          <p>
            최상위권 미대 입시는 1차에서 이미 결정되는 경우가 많습니다. 수능
            성적은 기본 점수, 실기는 마지막 변수입니다.
          </p>
          <p className="mt-4">
            아름다운학원은 학생의 현재 성적과 목표 대학 전형을 기준으로 합격
            구조를 먼저 설계하고, 필요한 학습량과 일정, 실기 준비를 현실적으로
            조율합니다.
          </p>
        </Section>

        <Divider />

        <Section title="우리가 먼저 보는 것">
          <ul className="list-disc pl-5">
            <li>현재 성적과 상승 가능 구간</li>
            <li>목표 대학 전형 구조(반영 방식)</li>
            <li>수능까지 남은 기간의 전략적 분배</li>
            <li>실기 준비와 병행 가능한 일정 설계</li>
          </ul>
        </Section>

        <Divider />

        <Section title="상담에서 하는 것">
          <p>
            상담은 ‘어떤 대학을 쓸 수 있나요?’보다 먼저, “어떤 구조로 합격을
            만들 것인가”를 정리하는 시간입니다.
          </p>
          <div className="mt-6">
            <Link
              href="/contact"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              상담 신청
            </Link>
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
