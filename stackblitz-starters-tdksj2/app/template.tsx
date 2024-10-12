'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname(); // react hook 은 클라이언트에서만 사용됨 // react 19 이후로는 달라질 수 있음
  useEffect(() => {
    // 클라이언트 단에서 앱 초기화 시점에 실행해야 할 내용
    // axios.defaults
  }, []);
  return <>{children}</>;
}
