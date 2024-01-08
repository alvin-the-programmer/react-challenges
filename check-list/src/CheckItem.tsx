import { useState } from "react";

const CheckItem = (props) => {
  const { text } = props;
  const [checked, setChecked] = useState(false);
  return (
    <div
      className="flex text-neutral-800 text-lg items-center my-2 cursor-pointer"
      onClick={() => setChecked(!checked)}
    >
      {checked ? (
        <i className="fa-solid fa-square-check text-red-500"></i>
      ) : (
        <i className="fa-regular fa-square"></i>
      )}
      <div className="ml-4">{text}</div>
    </div>
  );
};

export default CheckItem;
