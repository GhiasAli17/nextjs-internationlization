import {useTranslations} from 'next-intl';
 import styles from '@/app/page.module.css'
export default function Index({params}:{
  params:{
    locale:string
  }
}) {
  const t = useTranslations('Index');
  return (
  <main dir={params.locale==="en"?"ltr":"rtl"}>
      
      <h1>{t('title')}</h1>;
  </main>
  )
}