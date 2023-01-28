import { useEffect, useState } from 'react';

export default function TeaSet() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffet');

    return () => console.log('clean up');
  }, [count]);
  return <button onClick={() => setCount(prev => prev + 1)}>{count}</button>;
}
