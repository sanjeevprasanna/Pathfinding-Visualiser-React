import { MouseEventHandler } from "react";
import { BsFillPlayFill } from "react-icons/bs";
import { GrPowerReset } from "react-icons/gr";

const PlayButton = ({
  handlerRunVisualizer,
  isDisabled,
  isGraphVisualized,
}: {
  handlerRunVisualizer: MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
  isGraphVisualized: boolean;
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={handlerRunVisualizer}
      className="disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 bg-white shadow-md hover:bg-green-600 border-none active:ring-green-300 focus:outline-none focus:ring-green-300 focus:ring-opacity-30"
    >
      {isGraphVisualized ? (
        <GrPowerReset className="w-5 h-5 text-rose-600 " />
      ) : (
        <BsFillPlayFill className="w-5 h-5 text-gray-800 " />
      )}
    </button>
  );
};

export default PlayButton;