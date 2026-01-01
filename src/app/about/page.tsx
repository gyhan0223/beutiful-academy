import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";

export default function AboutPage() {
  return (
    <PageShell>
      <Container>
        <Section title="운영 원칙">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
            {/* LEFT: 요약/배지 */}
            <div className="lg:col-span-4">
              <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                <div className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700">
                  📍 홍대앞 본원 운영
                </div>

                <h3 className="mt-4 text-lg font-semibold tracking-tight text-zinc-900">
                  실기는 마지막 변수,
                  <br />
                  관리는 처음부터 끝까지.
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-600">
                  아름다운학원은 실기 교육뿐 아니라{" "}
                  <span className="font-medium text-zinc-900">
                    학과(수능/내신) 성적
                  </span>
                  을 합격의 기준선으로 보고, 목표 성적에 도달하도록 체계적으로
                  관리합니다.
                </p>

                <div className="mt-6 rounded-2xl bg-zinc-50 p-4">
                  <p className="text-xs font-semibold text-zinc-700">
                    핵심 운영
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-zinc-700">
                    <li className="flex gap-2">
                      <span className="mt-[2px]">✅</span>
                      <span>학과(수능)·실기 분리 설계</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[2px]">✅</span>
                      <span>출결·진도·평가 리포트 정기 발송</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="mt-[2px]">✅</span>
                      <span>개별 관찰·상담 기반 맞춤 지도</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT: 상세 */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 gap-6">
                {/* 실기 수업시간 (표) */}
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

                  <div className="mt-4 rounded-2xl bg-white p-4 ring-1 ring-zinc-100">
                    <p className="text-sm leading-6 text-zinc-700">
                      수강 신청은 희망 Time 내에서 선택 가능하나,{" "}
                      <span className="font-medium text-zinc-900">
                        지망대학 별 효율적인 수업 진행
                      </span>
                      이 필요할 경우 상담을 통해{" "}
                      <span className="font-medium text-zinc-900">
                        요일 및 Time 배정
                      </span>
                      을 조정합니다. 또한 학과 수업과 연동하여{" "}
                      <span className="font-medium text-zinc-900">
                        수강 시수 및 시간을 조율
                      </span>
                      합니다.
                    </p>
                  </div>
                </div>

                {/* 주당 수업 기준 */}
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold text-zinc-500">
                      수업 기준
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-zinc-900">
                      예비반 · 주 4회 이상
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      진학률 통계 기준, 본원 커리큘럼 진도를 이수하며 대학입시에
                      원활히 대응하기 위한 기본 수업 기준입니다.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-xs font-semibold text-zinc-500">
                      수업 기준
                    </p>
                    <h4 className="mt-2 text-base font-semibold text-zinc-900">
                      입시반 · 주 6회 이상
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      개인별 학과 성적 관리 상황을 점검 후, 상담을 통해{" "}
                      <span className="font-medium text-zinc-900">
                        시수 조정
                      </span>
                      이 가능합니다.
                    </p>
                  </div>
                </div>

                {/* 관리 시스템 카드들 */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">
                      📈 학과(수능/내신) 성적 관리
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      학과 관련 수업을 함께 운용하며, 학생별 부족 과목을 체크해{" "}
                      <span className="font-medium text-zinc-900">
                        목표 성적 도달까지 관리
                      </span>
                      합니다.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">
                      📩 출결 실시간 문자 전송
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      출석·하교 시 학생 본인 인증 체크 결과를{" "}
                      <span className="font-medium text-zinc-900">
                        학부모님께 실시간
                      </span>
                      으로 전달합니다. 수시 체크로 나태를 방지하고 진도 상황을
                      대처합니다.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">
                      🗂 분기별 리포트 발송
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      매 분기{" "}
                      <span className="font-medium text-zinc-900">
                        예정 수업계획·출결·실기·학과 평가 결과
                      </span>
                      를 발송합니다. 객관적 평가를 기반으로 개별 커리큘럼을
                      업데이트합니다.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">
                      ✨ 개성·창의성 중심 지도
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      독창적인 개성을 가장 중요하게 여기며, 잠재적인 창의 능력을
                      끌어내어 발전시키는 교육을 지향합니다.
                    </p>
                  </div>

                  <div className="sm:col-span-2 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold text-zinc-900">
                      🤝 상시 관찰·상담 기반의 세심한 지도
                    </p>
                    <p className="mt-2 text-sm leading-6 text-zinc-600">
                      학생 개개인을 수시 관찰하고 상담하며, 세심한 관심과 케어로
                      학습 상태를 점검합니다.
                    </p>
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
