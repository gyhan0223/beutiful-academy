import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";

function TeacherCard({
  subject,
  name,
  desc,
}: {
  subject: string;
  name: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 p-5">
      <div className="text-xs font-semibold text-zinc-500">{subject}</div>
      <div className="mt-2 text-sm font-semibold">{name}</div>
      <div className="mt-3 text-[13px] leading-6 text-zinc-700">{desc}</div>
    </div>
  );
}

export default function TeachersPage() {
  return (
    <PageShell>
      <Container>
        <Section title="강사진">
          <p>
            과목별 수업과 클리닉을 통해 취약을 보완하고, 성적을 ‘합격 가능한
            수준’까지 끌어올리는 데 집중합니다.
          </p>
        </Section>

        <Divider />

        <section className="py-16">
          <div className="grid gap-4 sm:grid-cols-3">
            <TeacherCard
              subject="국어"
              name="국어 선생님"
              desc="독서/문학/언매 또는 화작 흐름을 잡고, 모의고사 기반으로 실수를 줄이는 방향으로 지도합니다."
            />
            <TeacherCard
              subject="영어"
              name="영어 선생님"
              desc="빈출 구문/독해 루틴을 정리하고, 실전 시간 관리와 약점 유형 보완 중심으로 지도합니다."
            />
            <TeacherCard
              subject="사회탐구"
              name="탐구 선생님"
              desc="개념-기출-실전 반복 구조로 점수를 고정시키고, 부족 파트를 빠르게 메웁니다."
            />
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            ※ 실제 성함/약력/사진이 있으면 이 페이지 퀄리티가 확 올라갑니다.
          </p>
        </section>
      </Container>
    </PageShell>
  );
}
