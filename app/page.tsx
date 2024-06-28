"use client";
import React, { useState } from 'react';
import { Pen, Eraser, Highlighter, Palette, Minus, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import MusicSheetSidebar from './music-sheet-sidebar';

const tools = [
  { name: 'Pen', icon: Pen },
  { name: 'Eraser', icon: Eraser },
  { name: 'Highlighter', icon: Highlighter },
];

const colors = ['black', 'red', 'blue', 'green', 'yellow'];
const plcd_image = 'https://imgs.search.brave.com/-Sob40ttdYv15EhwMqEHCGUNGYkJ7DYJSgKEoIBTUdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2I0/LzNjL2ZkYjQzYzVl/YmNkNDZlZmEwZGI0/M2Y4NWIyNTk1MDA5/LmpwZw';
const Home = () => {
  const [selectedTool, setSelectedTool] = useState('Pen');
  const [selectedColor, setSelectedColor] = useState('black');
  const [strokeWidth, setStrokeWidth] = useState(2);

  return (
    <>
    <div className="flex h-screen">
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        {/* Toolbar */}
        <div className="bg-gray-100 p-2 flex items-center space-x-4">
          {tools.map((tool) => (
            <Button
            key={tool.name}
            variant={selectedTool === tool.name ? 'default' : 'outline'}
            size="icon"
            onClick={() => setSelectedTool(tool.name)}
            >
              <tool.icon className="h-4 w-4" />
            </Button>
          ))}
          <Select onValueChange={(value) => setSelectedColor(value)}>
            <SelectTrigger className="w-20">
              <SelectValue placeholder="Color" />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color} value={color}>
                  <div className="flex items-center">
                    <div className={`w-4 h-4 rounded-full mr-2 bg-${color}`} />
                    {color}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => setStrokeWidth(Math.max(1, strokeWidth - 1))}>
              <Minus className="h-4 w-4" />
            </Button>
            <span>{strokeWidth}</span>
            <Button variant="outline" size="icon" onClick={() => setStrokeWidth(strokeWidth + 1)}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className='w-full flex'>
            <div className="w-1/5">
              <MusicSheetSidebar />
            </div>

            {/* Music Sheet Area */}
            <div className="w-4/5 bg-white p-4">
          <h2 className="text-2xl font-bold mb-4">Music Sheet</h2>
          {/* Placeholder for the actual music sheet content */}
          <div className="border-2 border-dashed border-gray-300 h-full flex items-center justify-center">
            <p className="text-gray-500">Music sheet content goes here</p>
          </div>
        </div>
        </div>

        {/* Live Sharing Placeholder
        <div className="bg-gray-100 p-2">
          <p className="text-sm text-gray-600">Live sharing status: <span className="font-medium">Connected</span></p>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default Home;