import React, { useState } from 'react';

import logo from '@/assets/favicon.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container h-screen mx-auto flex flex-col space-y-6 justify-center items-center">
      <img src={logo} className="h-40 w-40" alt="logo" />
      <p className="text-4xl">Vite + React + Typescript + Tailwindcss</p>
      <p className="text-4xl"> Eslint + Prettier + Husky</p>
      <button
        className="p-2 px-4 text-white rounded bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
        onClick={() => setCount((count) => count + 1)}
      >
        Click me : {count}
      </button>
      <p>Don&apos;t forgot to install Eslint and Prettier in Your Vscode.</p>
      <p className="flex space-x-2">
        <a
          className="underline text-indigo-500 decoration-indigo-500"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a>{'|'}</a>
        <a
          className="underline text-indigo-500 decoration-indigo-500"
          href="https://vitejs.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vite Docs
        </a>
        <a>{'|'}</a>
        <a
          className="underline text-indigo-500 decoration-indigo-500"
          href="https://tailwindcss.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tailwindcss
        </a>
      </p>
    </div>
  );
}

export default App;
