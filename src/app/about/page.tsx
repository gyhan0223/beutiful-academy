import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageShell>
      <Container>
        {/* ✅ Intro Hero (카드 X, 밴드형) */}
        <section className="py-16 sm:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT */}
            <div className="lg:col-span-7">
              <div className="inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                관리형 미대 입시 시스템
              </div>

              <h1 className="mt-6 text-3xl font-semibold tracking-tight text-zinc-900">
                최상위권 미대는
                <br />
                ‘관리되는 학생’이 합격합니다.
              </h1>

              <p className="mt-6 text-[15px] leading-7 text-zinc-600">
                실기 점수는 대부분 비슷합니다.
                <br />
                차이는 성적을 기준으로 한{" "}
                <span className="font-medium text-zinc-900">
                  지원 가능한 대학 범위
                </span>
                에서 먼저 납니다.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/consult"
                  className="inline-flex w-fit items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  상담 신청하기 →
                </Link>
                <p className="text-xs text-zinc-500">
                  * 학생 현황 기준으로 시간표·시수·관리방식까지 함께 설계
                </p>
              </div>
            </div>

            {/* RIGHT (STEP도 카드 느낌 줄이기: border만, bg 제거) */}
            <div className="lg:col-span-5">
              <p className="text-xs font-semibold text-zinc-500">합격 구조</p>
              <ul className="mt-3 space-y-3">
                {[
                  "성적(수능·내신)으로 지원 가능 대학 범위 설정",
                  "전형·서류·면접 전략 적용",
                  "실기로 최종 점수 완성",
                ].map((v, i) => (
                  <li
                    key={i}
                    className="rounded-xl border border-zinc-200 p-4 text-sm text-zinc-700"
                  >
                    <span className="mr-2 text-xs font-semibold text-zinc-500">
                      STEP {i + 1}
                    </span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <Divider className="my-10 sm:my-12" />

        <Section title="운영 원칙">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* LEFT: 운영 원칙 (카드 제거 → 텍스트/리스트) */}
            <div className="lg:col-span-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                📍 홍대앞 본원 운영
              </div>

              <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                실기는 마지막 변수,
                <br />
                관리는 처음부터 끝까지.
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-600">
                아름다운학원은 실기 이전에{" "}
                <span className="font-medium text-zinc-900">
                  학과(수능/내신)
                </span>
                를 합격의 기준선으로 보고, 목표 성적에 도달하도록 관리합니다.
              </p>

              <div className="mt-6 border-t border-zinc-200 pt-6">
                <p className="text-xs font-semibold text-zinc-700">핵심 운영</p>
                <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                  <li className="flex gap-2">
                    <span className="mt-[2px]">✅</span>
                    <span>학과(수능)·실기 분리 설계</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[2px]">✅</span>
                    <span>출결·진도·평가 리포트 정기 공유</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-[2px]">✅</span>
                    <span>관찰·상담 기반 맞춤 지도</span>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <Link
                  href="/consult"
                  className="inline-flex w-full items-center justify-center rounded-xl bg-zinc-900 px-4 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                >
                  상담으로 우리 아이 플랜 받기 →
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="lg:col-span-8">
              <div className="space-y-10">
                {/* ✅ 실기 수업시간 (필수라 카드 유지: 단 1개) */}
                <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-wrap items-end justify-between gap-2">
                    <h4 className="text-base font-semibold text-zinc-900">
                      실기 수업시간 (Time)
                    </h4>
                    <p className="text-xs text-zinc-500">
                      * 주말 / 방학 / 수시 준비 / 수능 후 정시 준비 기간 운영
                    </p>
                  </div>

                  <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
                    <div className="grid grid-cols-1 sm:grid-cols-3">
                      <div className="border-b border-zinc-200 bg-zinc-50 p-4 sm:border-b-0 sm:border-r">
                        <p className="text-xs font-semibold text-zinc-500">
                          1 Time
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900">
                          AM 9:00 ~ PM 12:50
                        </p>
                      </div>

                      <div className="border-b border-zinc-200 bg-zinc-50 p-4 sm:border-b-0 sm:border-r">
                        <p className="text-xs font-semibold text-zinc-500">
                          2 Time
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900">
                          PM 1:35 ~ PM 5:25
                        </p>
                      </div>

                      <div className="bg-zinc-50 p-4">
                        <p className="text-xs font-semibold text-zinc-500">
                          3 Time
                        </p>
                        <p className="mt-1 text-sm font-semibold text-zinc-900">
                          PM 6:10 ~ PM 10:00
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-6 text-zinc-700">
                    수강 신청은 희망 Time 내에서 선택 가능하나,{" "}
                    <span className="font-medium text-zinc-900">
                      지망대학에 맞는 효율
                    </span>
                    이 필요할 경우 상담을 통해{" "}
                    <span className="font-medium text-zinc-900">
                      요일 및 Time 배정
                    </span>
                    을 조정합니다. 학과 수업과 연동해{" "}
                    <span className="font-medium text-zinc-900">시수·시간</span>
                    도 함께 조율합니다.
                  </p>
                </div>

                {/* ✅ 주당 수업 기준 (카드 2개 삭제 → 비교 리스트) */}
                <div className="border-t border-zinc-200 pt-8">
                  <p className="text-xs font-semibold text-zinc-500">
                    주당 수업 기준
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        예비반 · 주 4회 이상
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        본원 커리큘럼 진도를 안정적으로 이수하며, 대학입시에
                        원활히 대응하기 위한 기본 기준입니다.
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-zinc-900">
                        입시반 · 주 6회 이상
                      </p>
                      <p className="mt-2 text-sm leading-6 text-zinc-600">
                        학과 성적 관리 상황을 점검 후, 상담을 통해{" "}
                        <span className="font-medium text-zinc-900">
                          시수 조정
                        </span>
                        이 가능합니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* ✅ 관리 시스템 (카드 삭제 → 2열 체크리스트) */}
                <div className="border-t border-zinc-200 pt-8">
                  <p className="text-xs font-semibold text-zinc-500">
                    관리 시스템
                  </p>

                  <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {[
                      {
                        title: "학과(수능/내신) 성적 관리",
                        desc: "부족 과목 체크 → 목표 성적 도달까지 관리",
                      },
                      {
                        title: "출결 실시간 문자 전송",
                        desc: "출석·하교 인증 결과를 즉시 전달",
                      },
                      {
                        title: "분기별 리포트 발송",
                        desc: "출결·진도·평가를 정리해 정기 공유",
                      },
                      {
                        title: "관찰·상담 기반 맞춤 지도",
                        desc: "학습 상태 점검 → 개인별 보완 설계",
                      },
                      {
                        title: "개성·창의성 중심 지도",
                        desc: "독창성을 기준으로 표현력·완성도 강화",
                      },
                    ].map((v) => (
                      <div key={v.title} className="flex gap-3">
                        <span className="mt-[2px] text-zinc-900">✓</span>
                        <div>
                          <p className="text-sm font-semibold text-zinc-900">
                            {v.title}
                          </p>
                          <p className="mt-1 text-sm leading-6 text-zinc-600">
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* ✅ CTA (카드 2개 삭제 → 밴드 1개만 남기기) */}
                <div className="border-t border-zinc-200 pt-8">
                  <div className="rounded-2xl bg-zinc-50 p-6">
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm font-semibold text-zinc-900">
                          상담에서 ‘우리 아이 케이스’로 바로 확인하세요.
                        </p>
                        <p className="mt-1 text-sm leading-6 text-zinc-600">
                          현재 성적과 목표대학을 알려주시면 필요한 관리와 수업
                          구성을 빠르게 정리해드립니다.
                        </p>
                      </div>
                      <Link
                        href="/consult"
                        className="inline-flex shrink-0 items-center justify-center rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
                      >
                        상담 신청 →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
