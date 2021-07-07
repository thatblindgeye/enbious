import React, { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    document.title = 'Enbious';
  }, []);

  return <div>Home Page</div>;
}
