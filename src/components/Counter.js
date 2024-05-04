// components/Counter.js
import { useSelector, useDispatch } from 'react-redux';
import { increment } from '../slices/counterSlice';

function Counter() {
  const count = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default Counter;
