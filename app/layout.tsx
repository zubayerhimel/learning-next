import '@/app/ui/global.css';
import { inter } from './ui/fonts';
import NextTopLoader from 'nextjs-toploader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <NextTopLoader />
        {children}
      </body>
    </html>
  );
}
