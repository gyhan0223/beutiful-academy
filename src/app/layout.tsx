import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

const noto = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "아름다운학원 | 최상위권 미대 수능·실기 통합 관리",
  description:
    "서울대·홍대·국민대·이대 등 최상위권 미대 입시를 위한 국어·영어·탐구 수업과 출결·학습 관리 시스템.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${noto.className} bg-white text-zinc-900`}>
        {children}
      </body>
    </html>
  );
}
