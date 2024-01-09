import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("Enter a fake username and password...");

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-neutral-700">
      <div className="text-orange-300 text-3xl mb-16">{message}</div>
      <form
        className="w-72 border flex flex-col border border-zinc-300 px-4 py-8 rounded-lg bg-white"
        onSubmit={(e) => {
          e.preventDefault();
          if (username && password) {
            setMessage(`You submitted ${username} and ${password}`);
            setUsername("");
            setPassword("");
          } else {
            setMessage(`A username and password are both required!!!!`);
          }
        }}
      >
        <label className="my-2 mx-3">Username</label>
        <input
          type="text"
          className="border border-zinc-300 rounded-md p-2 m-2 bg-zinc-50"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="my-2 mx-3">Password</label>
        <input
          type="password"
          className="border border-zinc-300 rounded-md p-2 m-2 bg-zinc-50"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="rounded-full bg-gradient-to-r from-red-400 to-orange-300 py-3 mx-2 mt-6 text-xl text-white">
          sign-in
        </button>
      </form>
    </div>
  );
};

export default App;
