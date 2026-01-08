export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-zinc-900 text-zinc-400">
      <div className="mx-auto w-full max-w-6xl px-6 py-14">
        {/* Top */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold tracking-wide text-white">
              아름다운학원
            </p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
              점수로 증명하는 관리 중심 미대 입시 시스템
            </p>
          </div>

          {/* CTA */}
          <div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-zinc-700 px-5 py-3
                         text-sm font-semibold text-white transition
                         hover:border-white hover:bg-white hover:text-zinc-900"
            >
              상담 예약 접수하기 →
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-zinc-800" />

        {/* Info */}
        <div className="flex flex-col gap-2 text-xs sm:flex-row sm:gap-6">
          <div>서울 마포구 와우산로23길 9, 칼리오페 5층</div>
          <div>TEL. 02-338-3302</div>
        </div>

        {/* Bottom */}
        <div className="mt-6 text-xs text-zinc-500">
          © 아름다운학원. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
