import React from 'react';
const House =({ house, onDropItem, isLocked }) => {
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedItem = e.dataTransfer.getData('item');
        if(!droppedItem) return;

        const position = `${e.clientX},${e.clientY}`;
        onDropItem(house.houseid, position);
    };

    const handleDragOver = (e) => e.preventdefault();

        return (
            <div
              className="house"
              onDrop={isLocked ? null : handleDrop}
              onDragOver={isLocked ? null : handleDragOver}
              style={{
                width: '100px',
                height: '100px',
                border: '2px solid black',
                backgroundColor: isLocked ? 'grey' : 'white',
                position: 'relative',
                pointerEvents: isLocked ? 'none' : 'auto',
              }}
            >
              {isLocked ? (
                <p style={{ textAlign: 'center' }}>Locked</p>
              ) : (
                <>
                  <p style={{ textAlign: 'center' }}>Unlocked</p>
                  {house.items.map((item, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '20px',
                        height: '20px',
                        position: 'absolute',
                        top: item.position.split(',')[1],
                        left: item.position.split(',')[0],
                        backgroundColor: 'blue',
                      }}
                    />
                  ))}
                </>
              )}
            </div>
        );
}