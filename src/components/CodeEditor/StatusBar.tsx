
import React from 'react';

const StatusBar: React.FC = () => {
  return (
    <div className="h-6 bg-[hsl(var(--secondary))] border-t border-[hsl(var(--border))] flex items-center px-4 text-xs text-[hsl(var(--secondary-foreground))]">
      <div className="flex items-center">
        <span className="inline-block h-2 w-2 rounded-full bg-green-500 mr-2"></span>
        <span className="mr-4">Ready</span>
      </div>
      <div className="flex-1"></div>
      <div className="flex space-x-4">
        <span>TypeScript</span>
        <span>UTF-8</span>
        <span>Ln 24, Col 42</span>
      </div>
    </div>
  );
};

export default StatusBar;
