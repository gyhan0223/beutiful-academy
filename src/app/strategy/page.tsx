import PageShell from "@/components/PageShell";
import { Container, Divider, Section } from "@/components/UI";
import Link from "next/link";
import DiagramStrategyFlow from "@/components/DiagramStrategyFlow";
import DiagramStrategyFlowHero from "@/components/DiagramStrategyFlowHero";

export default function StrategyPage() {
  return (
    <PageShell>
      {/* Hero Section */}
      <div className="bg-zinc-50 py-16">
        <Container>
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-900">
              합격 전략
            </h1>
            <p className="text-xl text-zinc-600 mt-4">
              최상위권 미대 합격은 실기보다 ‘구조’에서 결정됩니다
            </p>
          </header>
          <Section title="">
            <div className="mt-8">
              <DiagramStrategyFlowHero />
            </div>
          </Section>
        </Container>
      </div>

      {/* Explanation Section */}
      <div className="bg-white py-12">
        <Container>
          <Section>
            <p className="mt-8">
              최상위권 미대 입시는 ‘실기 싸움’이 아닙니다. 이미 1차에서 당락이
              결정되는 구조입니다.
            </p>
            <p className="mt-4">
              아름다운학원은 학생의 현재 성적과 목표 대학을 기준으로 “합격이
              가능한 구조부터 먼저 설계”합니다.
            </p>
            <p className="mt-4">실기는 그 다음입니다.</p>
            <p>합격 구조가 없는 실기는, 점수가 나와도 의미가 없습니다.</p>
          </Section>
        </Container>
      </div>

      {/* Card Section */}
      <div className="bg-neutral-50 py-12">
        <Container>
          <Section title="우리가 먼저 설계하는 것">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">합격선 설정</h3>
                <p className="text-sm mt-2">
                  지금 성적으로 가능한 ‘합격선’을 설정합니다.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">전형 구조 분석</h3>
                <p className="text-sm mt-2">
                  대학별 1차 전형 구조를 반영 비율 중심으로 분석합니다.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">범위 판단</h3>
                <p className="text-sm mt-2">
                  실기로 커버 가능한 범위를 판단합니다.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="font-semibold">역산 전략 설계</h3>
                <p className="text-sm mt-2">
                  수능까지 남은 시간을 기준으로 역산 전략을 설계합니다.
                </p>
              </div>
            </div>
          </Section>
        </Container>
      </div>

      {/* Consultation Section */}
      <div className="bg-white py-12">
        <Container>
          <Section title="상담에서 하는 것">
            <p>
              상담은 “어느 대학을 쓸 수 있나요?”를 묻는 시간이 아닙니다. 이
              학생이 합격 가능한 구조가 있는지, 있다면 어디까지 가능한지, 없다면
              무엇을 포기해야 하는지를 결정하는 시간입니다.
            </p>
            <p className="mt-4">
              합격 가능성이 없는 전략은 제시하지 않습니다. 가능성이 있다면, 그
              이유를 구조로 설명합니다.
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
      </div>

      {/* Strategy Flow Section */}
      <div className="bg-neutral-50 py-12">
        <Container>
          <Section title="전략 흐름">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                <span className="text-sm">현재 성적 분석</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <span className="text-sm">목표 설정</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <span className="text-sm">전략 설계</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <span className="text-sm">실행 및 피드백</span>
              </div>
            </div>
          </Section>
        </Container>
      </div>
    </PageShell>
  );
}
