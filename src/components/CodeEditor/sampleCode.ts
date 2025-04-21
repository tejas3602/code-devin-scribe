
export const sampleCode: Record<string, string> = {
  'index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Initialize the application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Log welcome message
console.log('Welcome to Devin-inspired IDE!');`,

  'App.tsx': `import { useState, useEffect } from 'react';
import { Button } from './components/Button';
import { Card } from './components/Card';
import { fetchData } from './utils/helpers';

function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch initial data
    fetchData()
      .then(response => {
        setData(response);
        setLoading(false);
      })
      .catch(error => {
        console.error('Failed to fetch data:', error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Devin IDE Demo</h1>
      
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {data.map(item => (
            <Card key={item.id} title={item.title}>
              <p>{item.description}</p>
              <Button onClick={() => console.log(item)}>
                View Details
              </Button>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;`,

  'Button.tsx': `import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'underline-offset-4 hover:underline text-primary',
      },
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <button
        className={buttonVariants({ variant, size, className })}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };`,

  'Card.tsx': `import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, children }) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6 flex flex-col space-y-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div>{children}</div>
      </div>
    </div>
  );
};`,

  'helpers.ts': `// API utilities
export async function fetchData(): Promise<any[]> {
  // Simulate API request with timeout
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, title: 'First Item', description: 'This is the first item' },
        { id: 2, title: 'Second Item', description: 'This is the second item' },
        { id: 3, title: 'Third Item', description: 'This is the third item' },
        { id: 4, title: 'Fourth Item', description: 'This is the fourth item' },
        { id: 5, title: 'Fifth Item', description: 'This is the fifth item' },
      ]);
    }, 1000);
  });
}

// String formatter
export function formatString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Date utils
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}`,
  
  'default': `// No file selected
// Please select a file from the sidebar
  
console.log('Select a file to view its contents');`
};
