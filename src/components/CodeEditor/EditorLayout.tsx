
import { useState } from 'react';
import Sidebar from './Sidebar';
import Editor from './Editor';
import Terminal from './Terminal';
import StatusBar from './StatusBar';
import Tabs from './Tabs';

const EditorLayout = () => {
  const [activeFile, setActiveFile] = useState('index.tsx');
  const [terminalOutput, setTerminalOutput] = useState<string[]>([
    '> Starting development server...',
    '> Server running at http://localhost:3000',
    '> Ready in 1.2s'
  ]);
  
  const runCommand = (command: string) => {
    setTerminalOutput(prev => [
      ...prev, 
      `$ ${command}`,
      ...(command === 'clear' ? [] : [`> Executing ${command}...`, '> Done in 0.35s']),
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-[hsl(var(--editor-bg))]">
      <div className="flex flex-1 overflow-hidden">
        <Sidebar activeFile={activeFile} setActiveFile={setActiveFile} />
        <div className="flex flex-col flex-1">
          <Tabs activeFile={activeFile} setActiveFile={setActiveFile} />
          <Editor activeFile={activeFile} />
        </div>
      </div>
      <Terminal output={terminalOutput} onCommand={runCommand} />
      <StatusBar />
    </div>
  );
};

export default EditorLayout;
