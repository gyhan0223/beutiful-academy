import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";

export default function DormitoryPage() {
  return (
    <PageShell>
      <Container>
        <Section title="학사관리">
          <p>
            필요한 학생에게는 집중 학습 환경을 통해 학과 수업 + 자기주도 학습 +
            일정 관리를 강화합니다.
          </p>
        </Section>

        <Divider />

        <Section title="집중 루틴(예시)">
          <ul className="list-disc pl-5">
            <li>아침 루틴 + 0교시 자기주도</li>
            <li>국어/영어/탐구 수업</li>
            <li>클리닉/모의고사/자기주도 학습</li>
            <li>필요 시 실기 수업 연계</li>
          </ul>
        </Section>

        <Divider />

        <Section title="상담 필요">
          <p>
            숙소 운영 여부 및 대상은 학생 상황에 따라 달라질 수 있습니다. 상담을
            통해 가능한 옵션을 안내드립니다.
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
