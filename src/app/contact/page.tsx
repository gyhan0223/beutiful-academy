import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";

export default function ContactPage() {
  return (
    <PageShell>
      <Container>
        <Section title="상담 안내">
          <p>
            학생의 현재 성적과 목표 대학에 따라 맞춤형 전략을 상담합니다. 상담은
            예약제로 진행됩니다.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="tel:02-338-3302"
              className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
            >
              전화하기 (02-338-3302)
            </a>

            <a
              href="https://forms.gle/"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
            >
              상담 신청 폼 열기
            </a>
          </div>

          <p className="mt-3 text-xs text-zinc-500">
            ※ 위 링크를 실제 구글폼/네이버폼 주소로 교체해줘.
          </p>
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
