import React from "react";
import { GrSubtractCircle, GrAddCircle } from "react-icons/gr";
import { FaDivide } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {increNum, decreNum} from "./action/index";

const App = () => {

  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <main>
        {/* increment and decrement part  */}
        <section className="w-screen h-screen flex flex-col justify-center items-center bg-blue-500">
          <div className="mb-6 text-center">
            <h1 className="text-4xl text-gray-200 font-mono mb-3">
              Increment / Decrement Counter
            </h1>
            <h2 className="text-2xl text-gray-200 font-mono">
              Using React & Redux
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="bg-yellow-300 p-2 text-3xl font-semibold rounded-lg shadow-2xl"
              onClick={() => dispatch(decreNum())}
            >
              <GrSubtractCircle />
            </button>
            <input
              className="mx-2 w-20 p-2 text-3xl text-center rounded-2xl shadow-2xl outline-none cursor-grab"
              type="text"
              value={myState}
              readOnly
            />
            <button
              className="bg-yellow-300 p-2 text-3xl font-semibold rounded-lg shadow-2xl"
              onClick={() => dispatch(increNum(5))}
            >
              <GrAddCircle />
            </button>
          </div>
        </section>

        {/* multiplication and division part  */}
        <section className="w-screen h-screen flex flex-col justify-center items-center bg-blue-500">
          <div className="mb-6 text-center">
            <h1 className="text-4xl text-gray-200 font-mono mb-3">
              Multiplication / Division Counter
            </h1>
            <h2 className="text-2xl text-gray-200 font-mono">
              Using React & Redux
            </h2>
          </div>
          <div className="flex flex-row justify-center items-center">
            <button
              className="bg-yellow-300 p-2 text-3xl font-semibold rounded-lg shadow-2xl"
              onClick={() => dispatch(decreNum())}
            >
              <FaDivide />
            </button>
            <input
              className="mx-2 w-20 p-2 text-3xl text-center rounded-2xl shadow-2xl outline-none cursor-grab"
              type="text"
              value={myState}
              readOnly
            />
            <button
              className="bg-yellow-300 p-2 text-4xl font-bold rounded-lg shadow-2xl"
              onClick={() => dispatch(increNum(5))}
            >
              &#215;
            </button>
          </div>
        </section>
      </main>
    </>
  );
};

export default App;
