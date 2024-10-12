import Image from 'next/image';
import { NewComponent } from './NewComponent';
import Link from 'next/link';

// 클래스 컴포넌트 -> 필요할 때
// 함수 컴포넌트

export default async function Home() {
  console.log('Home Component');
  // 자바스크립트 파트
  const key = 'value';
  const inlineStyle = { textDecoration: 'underline' };

  // XML 파트
  return (
    <main
      className={'flex flex-col min-h-screen items-center justify-between p-24'}
      // style={inlineStyle}
    >
      <div>
        <Link href='/page-2'>Go Page 2</Link>
      </div>
      <div>접속 시각 : {new Date().toISOString()}</div>
      <NewComponent />
    </main>
  ); // JSX Node
}
