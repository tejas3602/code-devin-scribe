
import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';

interface TerminalProps {
  output: string[];
  onCommand: (command: string) => void;
}

const Terminal: React.FC<TerminalProps> = ({ output, onCommand }) => {
  const [input, setInput] = useState('');
  const [isExpanded, setIsExpanded] = useState(true);
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onCommand(input.trim());
      setInput('');
    }
  };
  
  return (
    <div className={`border-t border-[hsl(var(--sidebar-border))] bg-[hsl(var(--terminal-bg))] ${
      isExpanded ? 'h-60' : 'h-10'
    } transition-height duration-200 flex flex-col`}>
      <div 
        className="flex items-center px-4 py-2 border-b border-[hsl(var(--sidebar-border))] cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <TerminalIcon size={16} className="mr-2 text-[hsl(var(--terminal-text))]" />
        <span className="text-sm font-medium text-[hsl(var(--terminal-text))]">Terminal</span>
        <span className="text-xs ml-2 opacity-60 text-[hsl(var(--terminal-text))]">{isExpanded ? 'Click to minimize' : 'Click to expand'}</span>
      </div>
      
      {isExpanded && (
        <div className="flex-1 overflow-auto p-4 font-mono text-sm text-[hsl(var(--terminal-text))]">
          {output.map((line, i) => (
            <div key={i} className="mb-1">
              {line.startsWith('$') ? (
                <div className="text-[hsl(var(--primary))]">{line}</div>
              ) : line.startsWith('>') ? (
                <div className="text-[hsl(var(--terminal-text))]">{line}</div>
              ) : (
                <div>{line}</div>
              )}
            </div>
          ))}
          <form onSubmit={handleSubmit} className="flex items-center mt-2">
            <span className="mr-2 text-[hsl(var(--primary))]">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-transparent outline-none text-[hsl(var(--terminal-text))]"
              placeholder="Type command..."
              spellCheck={false}
              autoComplete="off"
            />
          </form>
          <div ref={endOfMessagesRef} />
        </div>
      )}
    </div>
  );
};

export default Terminal;
