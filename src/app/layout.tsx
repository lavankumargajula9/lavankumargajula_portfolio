import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Lavan Kumar Gajula - Senior Data Engineer',
  description: 'Professional portfolio of Lavan Kumar Gajula, Senior Data Engineer specializing in AWS and data warehousing.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  )
}
