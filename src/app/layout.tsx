import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'スマプロハッカソン2026 | Smapro | 金沢工業大学',
  description: 'ハッカソン開催決定！ SMAPRO HACKTHON 2026 | 2月5日～2月6日 申込期間2026年1月7日（水）12:30～1月28日（水）（定員に達し次第 受付締切）',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  )
} 