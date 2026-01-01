import Image from "next/image";
import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";

type Teacher = {
  subject: "국어" | "영어" | "사회탐구";
  name: string;
  photoSrc: string;
  headline?: string;
  careers: string[];
};

function TeacherCard({ t }: { t: Teacher }) {
  return (
    <div className="mx-auto w-full max-w-[900px] rounded-2xl border border-zinc-200 bg-white p-7">
      <div className="grid gap-8 sm:grid-cols-[180px_1fr] sm:items-start">
        {/* Left: Photo (사진만) */}
        <div className="relative h-44 w-44 overflow-hidden sm:h-44 sm:w-44">
          <Image
            src={t.photoSrc}
            alt={`${t.name} 프로필`}
            fill
            className="object-cover"
            sizes="176px"
            priority={false}
          />
        </div>

        {/* Right: Info */}
        <div className="min-w-0">
          <div className="text-xs font-semibold text-zinc-500">{t.subject}</div>

          <div className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900">
            {t.name}
          </div>

          {t.headline ? (
            <div className="mt-2 text-sm leading-6 text-zinc-700">
              {t.headline}
            </div>
          ) : null}

          <ul className="mt-5 space-y-2 text-[15px] leading-7 text-zinc-800">
            {t.careers.map((item, idx) => (
              <li key={idx} className="flex gap-2">
                <span className="mt-[10px] shrink-0 text-zinc-400">▶</span>
                <span className="min-w-0 break-words">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

const TEACHERS: Teacher[] = [
  // 국어
  {
    subject: "국어",
    name: "김지중 국어 선생님",
    photoSrc: "/teachers/teacher-kim-jijung.jpg",
    careers: [
      "현) 아름다운학원",
      "전) 강북 중앙학원",
      "전) 서초 메가스터디학원",
      "전국연합모의고사 출제위원",
    ],
  },
  {
    subject: "국어",
    name: "송충기 국어 선생님",
    photoSrc: "/teachers/teacher-song-chunggi.jpg",
    careers: [
      "현) 아름다운학원",
      "전) 노량진 대성학원",
      "전) 강남 대한민국학원",
      "전국연합모의고사 출제위원",
    ],
  },
  {
    subject: "국어",
    name: "노화진 국어 선생님",
    photoSrc: "/teachers/teacher-no-hwajin.jpg",
    careers: [
      "현) 아름다운학원",
      "고려대학교 졸업 (국문학 전공)",
      "전) 대성학원",
      "전) 정일에듀학원",
      "전) 제일학원",
      "전) 탑클래스학원",
    ],
  },

  // 영어
  {
    subject: "영어",
    name: "손종석 영어 선생님",
    photoSrc: "/teachers/teacher-son-jongseok.jpg",
    careers: [
      "현) 아름다운학원",
      "고려대학교 영어영문학과",
      "코리아헤럴드 (영자신문 교육부)",
      "캘리포니아주립대 (영어교육학)",
      "대치동 W입시사관학교",
      "이투스 공교육",
      "스카이에듀 공교육",
    ],
  },
  {
    subject: "영어",
    name: "김준범 영어 선생님",
    photoSrc: "/teachers/teacher-kim-junbeom.jpg",
    careers: [
      "현) 아름다운학원 대치본원 영어과 전임",
      "고려대학교 영어영문학과 졸업",
      "전) 강동 대일학원",
      "현) 종로학원 강북본원 영어과 강사",
      "현) 올래(olleh)KT TV 외국어 영역 강의",
    ],
  },
  {
    subject: "영어",
    name: "박세희 영어 선생님",
    photoSrc: "/teachers/teacher-park-sehee.jpg",
    careers: [
      "현) 아름다운학원 본원 영어",
      "The University of Sydney 졸업",
      "전) 스카이에듀학원",
      "전) 하이스트학원",
      "전) 정상어학원",
      "전) 미래어학원",
    ],
  },

  // 사회탐구
  {
    subject: "사회탐구",
    name: "임성준 사회탐구 선생님",
    photoSrc: "/teachers/teacher-lim-seongjun.jpg",
    careers: [
      "현) 아름다운학원 사회탐구",
      "성균관대학교 졸업 (법학 전공)",
      "전) 중앙학원",
      "전) 대성학원",
      "전) 한국학원",
      "전) 청솔학원",
    ],
  },
  {
    subject: "사회탐구",
    name: "박정식 사회탐구 선생님",
    photoSrc: "/teachers/teacher-park-jeongsik.jpg",
    careers: [
      "현) 아름다운학원 전임강사",
      "전) 대성학원 전임강사",
      "전) 강남중앙학원 전임강사",
      "전) 이투스학원 전임강사",
      "전) 청솔학원 전임강사",
      "비타에듀 강사",
      "저서: 자이스토리 사문·정치, 네비게이션 사문·정치",
    ],
  },
  {
    subject: "사회탐구",
    name: "이명신 사회탐구 선생님",
    photoSrc: "/teachers/teacher-lee-myeongsin.jpg",
    careers: [
      "현) 아름다운학원",
      "고려대학교 졸업",
      "전) 노량진 위너스터",
      "현) 스카이에듀 사회탐구영역",
      "전) 서초 종로학원 · 하이퍼리뷰학원",
      "전) 부천 늘푸른학원",
    ],
  },
];

export default function TeachersPage() {
  const groups: Array<{
    subject: Teacher["subject"];
    title: string;
    desc: string;
  }> = [
    {
      subject: "국어",
      title: "국어",
      desc: "독서/문학/언매(또는 화작) 흐름을 잡고, 기출·실전 기반으로 점수 흔들림을 줄입니다.",
    },
    {
      subject: "영어",
      title: "영어",
      desc: "빈출 구문·독해 루틴을 정리하고, 실전 시간 관리와 약점 유형 보완에 집중합니다.",
    },
    {
      subject: "사회탐구",
      title: "사회탐구",
      desc: "개념-기출-실전 반복 구조로 점수를 고정시키고, 취약 파트를 빠르게 메웁니다.",
    },
  ];

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

        {/* Teachers */}
        <section className="py-16">
          {groups.map((g) => {
            const list = TEACHERS.filter((t) => t.subject === g.subject);
            return (
              <div key={g.subject} className="mb-16 last:mb-0">
                <div className="mb-6">
                  <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
                    {g.title}
                  </h2>
                  <p className="mt-2 text-sm text-zinc-600">{g.desc}</p>
                </div>

                {/* ✅ 세로 나열 */}
                <div className="space-y-5">
                  {list.map((t) => (
                    <TeacherCard key={t.name} t={t} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </Container>
    </PageShell>
  );
}
