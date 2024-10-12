'use client';

import { useState, useEffect } from 'react';

export function NewComponent() {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 500);
  }, []);
  return <>현재 시각 : {date.toISOString()}</>;
}
