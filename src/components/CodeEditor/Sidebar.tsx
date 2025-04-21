
import { useState } from 'react';
import { Folder, FileText, ChevronRight, ChevronDown, Search, Code, Settings } from 'lucide-react';

interface SidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
}

const Sidebar = ({ activeFile, setActiveFile }: SidebarProps) => {
  const [expandedFolders, setExpandedFolders] = useState({
    src: true,
    components: true,
    pages: false,
    utils: false,
  });

  const toggleFolder = (folder: keyof typeof expandedFolders) => {
    setExpandedFolders(prev => ({ ...prev, [folder]: !prev[folder] }));
  };

  return (
    <div className="w-60 border-r bg-[hsl(var(--sidebar-background))] border-[hsl(var(--sidebar-border))] flex flex-col">
      <div className="flex items-center p-4 border-b border-[hsl(var(--sidebar-border))]">
        <Code size={18} className="mr-2 text-[hsl(var(--sidebar-primary))]" />
        <span className="font-medium text-[hsl(var(--sidebar-foreground))]">DEVIN IDE</span>
      </div>
      
      <div className="p-2 border-b border-[hsl(var(--sidebar-border))]">
        <div className="flex items-center px-2 py-1.5 rounded-md bg-[hsl(var(--sidebar-accent))]">
          <Search size={16} className="mr-2 text-[hsl(var(--sidebar-foreground))]" />
          <span className="text-sm text-[hsl(var(--sidebar-foreground))] opacity-70">Search files</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-auto">
        <div className="p-2">
          <div className="mb-1">
            <div 
              className="flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2"
              onClick={() => toggleFolder('src')}
            >
              {expandedFolders.src ? 
                <ChevronDown size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" /> : 
                <ChevronRight size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" />
              }
              <Folder size={16} className="mr-1.5 text-[hsl(var(--sidebar-primary))]" />
              <span className="text-sm text-[hsl(var(--sidebar-foreground))]">src</span>
            </div>
            
            {expandedFolders.src && (
              <div className="pl-6">
                <div 
                  className="flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2"
                  onClick={() => toggleFolder('components')}
                >
                  {expandedFolders.components ? 
                    <ChevronDown size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" /> : 
                    <ChevronRight size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" />
                  }
                  <Folder size={16} className="mr-1.5 text-[hsl(var(--sidebar-primary))]" />
                  <span className="text-sm text-[hsl(var(--sidebar-foreground))]">components</span>
                </div>
                
                {expandedFolders.components && (
                  <div className="pl-6">
                    <div 
                      className={`flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2 ${
                        activeFile === 'Button.tsx' ? 'bg-[hsl(var(--sidebar-accent))]' : ''
                      }`}
                      onClick={() => setActiveFile('Button.tsx')}
                    >
                      <FileText size={16} className="mr-1.5 text-[hsl(var(--sidebar-foreground))]" />
                      <span className="text-sm text-[hsl(var(--sidebar-foreground))]">Button.tsx</span>
                    </div>
                    <div 
                      className={`flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2 ${
                        activeFile === 'Card.tsx' ? 'bg-[hsl(var(--sidebar-accent))]' : ''
                      }`}
                      onClick={() => setActiveFile('Card.tsx')}
                    >
                      <FileText size={16} className="mr-1.5 text-[hsl(var(--sidebar-foreground))]" />
                      <span className="text-sm text-[hsl(var(--sidebar-foreground))]">Card.tsx</span>
                    </div>
                  </div>
                )}
                
                <div 
                  className="flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2"
                  onClick={() => toggleFolder('pages')}
                >
                  {expandedFolders.pages ? 
                    <ChevronDown size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" /> : 
                    <ChevronRight size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" />
                  }
                  <Folder size={16} className="mr-1.5 text-[hsl(var(--sidebar-primary))]" />
                  <span className="text-sm text-[hsl(var(--sidebar-foreground))]">pages</span>
                </div>
                
                {expandedFolders.pages && (
                  <div className="pl-6">
                    <div 
                      className={`flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2 ${
                        activeFile === 'index.tsx' ? 'bg-[hsl(var(--sidebar-accent))]' : ''
                      }`}
                      onClick={() => setActiveFile('index.tsx')}
                    >
                      <FileText size={16} className="mr-1.5 text-[hsl(var(--sidebar-foreground))]" />
                      <span className="text-sm text-[hsl(var(--sidebar-foreground))]">index.tsx</span>
                    </div>
                  </div>
                )}
                
                <div 
                  className={`flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2 ${
                    activeFile === 'App.tsx' ? 'bg-[hsl(var(--sidebar-accent))]' : ''
                  }`}
                  onClick={() => setActiveFile('App.tsx')}
                >
                  <FileText size={16} className="mr-1.5 text-[hsl(var(--sidebar-primary))]" />
                  <span className="text-sm text-[hsl(var(--sidebar-foreground))]">App.tsx</span>
                </div>
                
                <div 
                  className="flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2"
                  onClick={() => toggleFolder('utils')}
                >
                  {expandedFolders.utils ? 
                    <ChevronDown size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" /> : 
                    <ChevronRight size={16} className="mr-1 text-[hsl(var(--sidebar-foreground))]" />
                  }
                  <Folder size={16} className="mr-1.5 text-[hsl(var(--sidebar-primary))]" />
                  <span className="text-sm text-[hsl(var(--sidebar-foreground))]">utils</span>
                </div>
                
                {expandedFolders.utils && (
                  <div className="pl-6">
                    <div 
                      className={`flex items-center py-1 cursor-pointer hover:bg-[hsl(var(--sidebar-accent))] rounded px-2 ${
                        activeFile === 'helpers.ts' ? 'bg-[hsl(var(--sidebar-accent))]' : ''
                      }`}
                      onClick={() => setActiveFile('helpers.ts')}
                    >
                      <FileText size={16} className="mr-1.5 text-[hsl(var(--sidebar-foreground))]" />
                      <span className="text-sm text-[hsl(var(--sidebar-foreground))]">helpers.ts</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-3 border-t border-[hsl(var(--sidebar-border))] flex items-center">
        <Settings size={16} className="mr-2 text-[hsl(var(--sidebar-foreground))]" />
        <span className="text-sm text-[hsl(var(--sidebar-foreground))]">Settings</span>
      </div>
    </div>
  );
};

export default Sidebar;
