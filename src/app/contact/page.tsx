import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";

export default function ContactPage() {
  return (
    <PageShell>
      <Container>
        {/* HERO */}
        <section className="py-14 sm:py-20">
          <div className="max-w-3xl">
            {" "}
            <p className="text-sm font-medium text-zinc-600">
              최상위권 미대 입시 · 학과/수능 중심 전략 상담
            </p>
            <h1 className="mt-4 text-3xl font-semibold leading-[1.15] tracking-tight sm:text-5xl">
              최상위권 미대 합격,
              <br />
              <span className="text-zinc-900">상담에서 이미 갈립니다.</span>
            </h1>
            <p className="mt-6 text-[15px] leading-7 text-zinc-700">
              실기 이전에{" "}
              <span className="font-medium text-zinc-900">전략</span>이
              먼저입니다.
              <br />
              학생의 성적·실기·목표 대학을 바탕으로{" "}
              <span className="font-medium text-zinc-900">
                합격 가능성과 현실적인 로드맵
              </span>
              을 설계합니다.
            </p>
            {/* CTA */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc1Gv5oufwEIX3OuaLCA0_CXxY7QkM_Yq9pRW3L1crnWtRqYw/viewform?usp=dialog"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800"
              >
                지금 성적으로 가능한 대학 알아보기
              </a>

              <a
                href="tel:02-338-3302"
                className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                📞 바로 상담 연결 (02-338-3302)
              </a>
            </div>
            <div className="mt-3 text-xs text-zinc-500">
              * 상담은 <span className="font-medium text-zinc-700">예약제</span>
              로 진행됩니다. 수업 중일 경우{" "}
              <span className="font-medium text-zinc-700">
                문자 남겨주시면 빠르게 연락
              </span>
              드립니다.
            </div>
          </div>
        </section>

        <Divider />

        {/* WHAT YOU GET */}
        <Section title="상담에서 받는 것">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-zinc-900">
                📊 현재 위치 진단
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                내신·수능·실기 수준을 객관적으로 정리하고, 지금 단계에서 필요한
                우선순위를 잡습니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-zinc-900">
                🎯 대학별 가능성 분석
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                지원 가능 대학 / 위험 구간 / 현실 구간을 분리해서, “가능한
                선택지”를 명확히 합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-zinc-900">
                🧭 개인 전략 로드맵
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                학과(수능)와 실기를 분리해서 설계하고, 월별/단계별 준비 방향을
                제시합니다.
              </p>
            </div>
          </div>

          {/* Trust bullets */}
          <div className="mt-8 rounded-2xl bg-zinc-50 p-5">
            <p className="text-sm font-semibold text-zinc-900">
              이런 학생/학부모에게 특히 좋습니다
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
              <li>“실기만 열심히 하면 된다”가 맞는지 확신이 없을 때</li>
              <li>
                목표 대학은 있는데, 현재 성적에서 현실적인 루트가 필요할 때
              </li>
              <li>최상위권 대학을 목표로 학과(수능) 전략이 필요한 경우</li>
            </ul>
          </div>
        </Section>

        <Divider />

        {/* HOW IT WORKS */}
        <Section title="진행 방식">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-xs font-semibold text-zinc-500">STEP 01</div>
              <div className="mt-1 text-sm font-semibold text-zinc-900">
                신청 폼 작성
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                기본 정보(성적/목표/준비 상황)를 남겨주시면 상담 준비에
                반영합니다.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-xs font-semibold text-zinc-500">STEP 02</div>
              <div className="mt-1 text-sm font-semibold text-zinc-900">
                일정 확정 (예약제)
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                연락드려 상담 시간을 확정합니다. (수업 중이면 문자 회신 권장)
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <div className="text-xs font-semibold text-zinc-500">STEP 03</div>
              <div className="mt-1 text-sm font-semibold text-zinc-900">
                1:1 전략 상담
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-600">
                대학별 전형/반영 요소를 기준으로 전략 방향과 로드맵을
                정리합니다.
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc1Gv5oufwEIX3OuaLCA0_CXxY7QkM_Yq9pRW3L1crnWtRqYw/viewform?usp=dialog"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-zinc-900 px-6 py-4 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              상담 신청하기
            </a>
            <a
              href="tel:02-338-3302"
              className="inline-flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-6 py-4 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
            >
              📞 전화로 바로 예약
            </a>
          </div>
        </Section>

        <Divider />

        {/* LOCATION */}
        <Section title="오시는 길">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-zinc-200 bg-white p-5">
              <p className="text-sm font-semibold text-zinc-900">주소</p>
              <p className="mt-2 text-sm text-zinc-700">
                서울 마포구 와우산로23길 9, 칼리오페 5층
              </p>

              <p className="mt-5 text-sm font-semibold text-zinc-900">연락처</p>
              <p className="mt-2 text-sm text-zinc-700">TEL: 02-338-3302</p>

              <p className="mt-5 text-sm font-semibold text-zinc-900">안내</p>
              <ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>홍대입구 인근</li>
                <li>상담은 예약 후 방문을 권장합니다</li>
              </ul>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://naver.me/xf5ylXQV"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
                >
                  네이버지도에서 보기
                </a>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-5">
              <p className="text-sm font-semibold text-zinc-900">
                빠른 예약 팁
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-zinc-700">
                <li>
                  목표 대학/학과를 2~3개 적어주시면 상담 퀄리티가 확 올라갑니다.
                </li>
                <li>
                  최근 성적(내신/모의고사)을 적어주면 가능성 분석이
                  정확해집니다.
                </li>
                <li>
                  실기 경험이 없어도 괜찮아요. “전략부터” 잡는 상담입니다.
                </li>
              </ul>
            </div>
          </div>
        </Section>
      </Container>
    </PageShell>
  );
}
