
import React from 'react';
import { sampleCode } from './sampleCode';

interface EditorProps {
  activeFile: string;
}

const Editor: React.FC<EditorProps> = ({ activeFile }) => {
  const code = sampleCode[activeFile] || sampleCode['default'];
  const lines = code.split('\n');

  return (
    <div className="flex-1 overflow-auto bg-[hsl(var(--editor-bg))] text-[hsl(var(--editor-text))] font-mono text-sm">
      <div className="flex">
        <div className="py-4 pr-4 text-right select-none bg-[hsl(var(--editor-bg))] text-[hsl(var(--editor-line))]">
          {lines.map((_, i) => (
            <div key={i} className="px-4 select-none">{i + 1}</div>
          ))}
        </div>
        <pre className="py-4 flex-1 overflow-auto">
          <code>
            {lines.map((line, i) => (
              <div key={i} className="px-2">
                {renderCodeLine(line)}
              </div>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
};

const renderCodeLine = (code: string): React.ReactNode => {
  // This is a simplified syntax highlighter
  // In a real application, you would use a library like Prism or highlight.js
  
  const keywords = /(const|let|var|function|return|import|export|from|class|interface|type|extends|if|else|for|while|switch|case|break|continue|try|catch)/g;
  const strings = /(["'`])(.*?)\1/g;
  const comments = /(\/\/.*|\/\*[\s\S]*?\*\/)/g;
  const functions = /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\(/g;
  const numbers = /\b([0-9]+)\b/g;
  
  let highlighted = code
    .replace(comments, '<span class="text-[hsl(var(--editor-comment))]">$1</span>')
    .replace(keywords, '<span class="text-[hsl(var(--editor-keyword))]">$1</span>')
    .replace(strings, '<span class="text-[hsl(var(--editor-string))]">$1$2$1</span>')
    .replace(functions, '<span class="text-[hsl(var(--editor-function))]">$1</span>(')
    .replace(numbers, '<span class="text-[hsl(var(--editor-number))]">$1</span>');

  return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
};

export default Editor;
