import Header from "@/components/Header";

const locales = ['en', 'ar'];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}

export default function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  return (
    <html lang={locale}>
      
      <body>
      <Header />
        {children}</body>
    </html>
  );
}