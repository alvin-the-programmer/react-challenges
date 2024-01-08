import { useState } from "react";
import CheckItem from "./CheckItem";
import items from "./items";

const App = () => {
  const checkItems = items.map((text, idx) => <CheckItem key={idx} text={text} />);

  return (
    <div className="h-screen flex flex-col items-center pt-16 bg-neutral-700">
      <div></div>
      <div className="bg-neutral-50 rounded-lg p-8">{checkItems}</div>
    </div>
  );
};

export default App;
