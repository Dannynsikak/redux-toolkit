import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../state/counter/counterSlice";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  return (
    <div className="">
      <h2 className="text-[1.5rem]">{count}</h2>
      <div className="space-x-4 text-white">
        <button
          className="bg-black p-[.5em] rounded-md"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="bg-black p-[.5em] rounded-md"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          className="bg-black p-[.5em] rounded-md"
          onClick={() => dispatch(incrementByAmount(10))}
        >
          IncrementByAmount
        </button>
      </div>
    </div>
  );
};

export default Counter;
