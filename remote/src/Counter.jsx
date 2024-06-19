import { createSignal } from 'solid-js';

export default function Counter() {
  const [count, setCount] = createSignal(0);

  return (
    <div className='bg-blue-500 text-white p-5 rounded-lg'>
      <div>Count: {count()}</div>
      <button onClick={() => setCount(count() + 1)}>Add counter</button>
    </div>
  );
}
