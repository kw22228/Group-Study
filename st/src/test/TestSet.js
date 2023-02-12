import { useEffect, useState } from 'react';

export default function TeaSet() {
  const [count, setCount] = useState(0);
  // useEffect(() => {
  //   let ignore = false;
  //   console.log(ignore);

  //   return () => {
  //     ignore = true;
  //     console.log(ignore);
  //   };
  // }, [count]);

  setCount(count);
  setCount(prev => prev + 1);
  setCount(count, () => setCount(count));
  return <button onClick={() => setCount(prev => prev + 1)}>{count}</button>;
}
