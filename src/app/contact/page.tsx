import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";

export default function ContactPage() {
  return (
    <PageShell>
      <Container>
        <Section title="상담 안내">
          <p className="max-w-2xl text-zinc-700">
            학생의 현재 성적, 실기 경험, 목표 대학을 바탕으로
            <br />
            <span className="font-medium text-zinc-900">
              합격 가능성과 전략 방향을 분석
            </span>
            하는 상담입니다.
            <br />
            상담은 <strong>예약제</strong>로 진행됩니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:02-338-3302"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              전화하기 (02-338-3302)
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1Gv5oufwEIX3OuaLCA0_CXxY7QkM_Yq9pRW3L1crnWtRqYw/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              상담 신청 폼 열기
            </a>
          </div>
        </Section>

        <Divider />

        <Section title="오시는 길">
          <ul className="list-disc pl-5">
            <li>서울 마포구 와우산로23길 9, 칼리오페 5층</li>
            <li>홍대입구 인근</li>
            <li>TEL: 02-338-3302</li>
          </ul>
        </Section>
      </Container>
    </PageShell>
  );
}
