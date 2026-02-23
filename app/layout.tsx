import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://k-jisu-portfolio.vercel.app/'),
  title: {
    default: '강지수 | Frontend Developer',
    template: '강지수 포트폴리오',
  },
  description:
    '사용자 경험 중심의 UI를 구현하는 프론트엔드 개발자 강지수의 포트폴리오입니다.',
  keywords: [
    '강지수',
    '프론트엔드 개발자',
    '프론트엔드',
    '개발자',
    '포트폴리오',
    'Frontend Developer',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: '강지수' }],
  creator: '강지수',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://k-jisu-portfolio.vercel.app/',
    siteName: '강지수 포트폴리오',
    title: '강지수 | Frontend Developer',
    description:
      '사용자 경험 중심의 UI를 구현하는 프론트엔드 개발자 강지수의 포트폴리오입니다.',
    images: [
      {
        url: '/projects/portfolio/portfolio.png',
        width: 1200,
        height: 630,
        alt: '강지수 포트폴리오 미리보기',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '강지수 | Frontend Developer',
    description:
      '사용자 경험 중심의 UI를 구현하는 프론트엔드 개발자 강지수의 포트폴리오입니다.',
    images: ['/projects/portfolio/portfolio.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="">{children}</body>
    </html>
  );
}
