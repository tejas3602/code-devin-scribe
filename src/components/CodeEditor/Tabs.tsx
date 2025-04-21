
import React from 'react';
import { X } from 'lucide-react';

interface TabsProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeFile, setActiveFile }) => {
  const openFiles = [
    { name: 'index.tsx', icon: '📄' },
    { name: 'App.tsx', icon: '📄' },
    { name: 'Button.tsx', icon: '📄' },
  ];

  return (
    <div className="h-10 flex bg-[hsl(var(--editor-bg))] border-b border-[hsl(var(--sidebar-border))]">
      {openFiles.map((file) => (
        <div
          key={file.name}
          className={`flex items-center px-4 h-full border-r border-[hsl(var(--sidebar-border))] cursor-pointer group ${
            activeFile === file.name
              ? 'bg-[hsl(var(--editor-bg))] border-b-2 border-b-[hsl(var(--primary))]'
              : 'bg-[hsl(var(--editor-line))]'
          }`}
          onClick={() => setActiveFile(file.name)}
        >
          <span className="mr-2">{file.icon}</span>
          <span className={`text-sm ${
            activeFile === file.name 
              ? 'text-[hsl(var(--editor-text))]' 
              : 'text-[hsl(var(--muted-foreground))]'
          }`}>
            {file.name}
          </span>
          <X
            size={14}
            className="ml-2 text-[hsl(var(--muted-foreground))] opacity-0 group-hover:opacity-100"
          />
        </div>
      ))}
    </div>
  );
};

export default Tabs;
