import React from 'react';

const House = ({ house, onDropItem, isLocked }) => {
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedItem = e.dataTransfer.getData('item');
    if (!droppedItem) return;

    const position = `${e.clientX},${e.clientY}`;
    onDropItem(house.houseId, position);
  };

  const handleDragOver = (e) => e.preventDefault();

  return (
    <div
      className="house"
      onDrop={isLocked ? null : handleDrop}
      onDragOver={isLocked ? null : handleDragOver}
      style={{
        width: '100px',
        height: '100px',
        position: 'relative',
        backgroundImage: `url(${process.env.PUBLIC_URL}/images/map/house.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        pointerEvents: isLocked ? 'none' : 'auto',
        opacity: isLocked ? 0.5 : 1, // Dim locked houses
        border: '2px solid black',
      }}
    >
      {isLocked && (
        <p
          style={{
            position: 'absolute',
            bottom: '5px',
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            fontSize: '10px',
          }}
        >
          Locked
        </p>
      )}
      {/* Display items inside the house */}
      {house.items.map((item, idx) => (
        <div
          key={idx}
          style={{
            width: '20px',
            height: '20px',
            position: 'absolute',
            top: item.position.split(',')[1],
            left: item.position.split(',')[0],
            backgroundColor: 'blue', // Replace with item images if needed
          }}
        />
      ))}
    </div>
  );
};

export default House;
