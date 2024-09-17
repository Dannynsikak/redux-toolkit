import Counter from "./components/Counter";

function App() {
  return (
    <div className="bg-gray-600 p-[1em_0]">
      <h1 className="text-center text-[1.5rem] font-bold uppercase">
        redux essentials
      </h1>
      <div className="w-[90%] m-[0_auto] mt-[1em]">
        <Counter />
      </div>
    </div>
  );
}

export default App;
