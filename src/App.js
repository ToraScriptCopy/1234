import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

export default function App() {
  const [tab, setTab] = useState('raw');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');

  const generateRaw = () => {
    // call Netlify function to create raw link
  };

  const generateLoad = () => {
    setOutput(`loadstring(game:HttpGet("${input}", true))()`);
  };

  const generateASCII = () => {
    const codes = input.split('').map(c => c.charCodeAt(0));
    setOutput(`string.char(${codes.join(',')})`);
  };

  return (
    <div className="min-h-screen p-4">
      <header className="flex items-center">
        <Hamburger size={24} toggled={false} toggle={() => {}} />
        <h1 className="ml-4 text-2xl font-bold">
          {tab === 'raw' ? 'Raw Link Maker' : tab === 'load' ? 'Loadstring Maker' : 'ASCII Obfuscator v1'}
        </h1>
      </header>
      <main className="mt-10 text-center">
        <textarea
          rows="10"
          className="w-full p-2 border rounded"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Paste your script or link here"
        />
        <div className="mt-4">
          {tab === 'raw' && <button onClick={generateRaw} className="px-4 py-2 rounded bg-blue-500 text-white">Get Raw Link</button>}
          {tab === 'load' && <button onClick={generateLoad} className="px-4 py-2 rounded bg-green-500 text-white">Get Loadstring</button>}
          {tab === 'ascii' && <button onClick={generateASCII} className="px-4 py-2 rounded bg-purple-500 text-white">Obfuscate ASCII</button>}
        </div>
        <pre className="mt-6 p-4 bg-gray-200 rounded">{output}</pre>
      </main>
    </div>
  );
}
