import React from 'react';
const plcd_image = 'https://imgs.search.brave.com/-Sob40ttdYv15EhwMqEHCGUNGYkJ7DYJSgKEoIBTUdY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2ZkL2I0/LzNjL2ZkYjQzYzVl/YmNkNDZlZmEwZGI0/M2Y4NWIyNTk1MDA5/LmpwZw';


const MusicSheetSidebar = () => {
  const sheets = [
    { id: 1, name: 'Piece Number 1', image: '/path/to/image1.jpg' },
    { id: 2, name: 'Piece Number 2', image: '/path/to/image2.jpg' },
    { id: 3, name: 'Piece Number 3', image: '/path/to/image3.jpg' },
    { id: 4, name: 'Piece Number 4', image: '/path/to/image4.jpg' },
  ];

  return (
    <div className="p-2 mt-7 relative">
      {sheets.map((sheet, index) => (
        <div 
          key={sheet.id} 
          className="absolute w-64 h-80 transition-all duration-300 "
          style={{
            top: `${index * 130}px`,
            left: '-100px', 
            transform: `rotate(${20 - index * 2}deg)`,
            transformOrigin: 'top left',
          }}
        >
          <div className="relative w-full h-full bg-white shadow-md overflow-hidden">
            <img 
              src={plcd_image} 
              alt={sheet.name} 
              className="w-full h-full object-cover"
            />
            <div 
              className="absolute bottom-0 right-0 bg-white px-2 py-1 transform rotate-90 origin-bottom-right"
              style={{
                transformOrigin: 'bottom right',
                whiteSpace: 'nowrap',
                transform: 'rotate(-90deg)',
              }}
            >
              {sheet.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicSheetSidebar;
