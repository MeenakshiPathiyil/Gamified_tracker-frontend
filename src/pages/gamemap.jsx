// import React, { useState, useEffect } from 'react';
// import { fetchGameState, placeItem } from '../services/gameApi';

// const GameMap = () => {
//   const [gameState, setGameState] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);

//   useEffect(() => {
//     const loadGameState = async () => {
//       try {
//         const state = await fetchGameState();
//         setGameState(state);
//       } catch (error) {
//         console.error('Failed to load game state:', error);
//       }
//     };
//     loadGameState();
//   }, []);

//   const handlePlaceItem = async (event) => {
//     if (!selectedItem) return;

//     const mapRect = event.target.getBoundingClientRect();
//     const position = {
//       x: event.clientX - mapRect.left,
//       y: event.clientY - mapRect.top
//     };

//     try {
//       await placeItem(selectedItem._id, position);
//       const updatedState = await fetchGameState();
//       setGameState(updatedState);
//       setSelectedItem(null);
//     } catch (error) {
//       console.error('Failed to place item:', error);
//     }
//   };

//   if (!gameState) return <div>Loading...</div>;

//   return (
//     <div className="game-map" onClick={handlePlaceItem} style={{ width: '800px', height: '600px', position: 'relative', border: '1px solid black' }}>
//       {gameState.placedItems.map((placedItem, index) => (
//         <img
//           key={index}
//           src={`/images/map/${placedItem.imagePath}`}
//           alt={placedItem.item.name}
//           style={{
//             position: 'absolute',
//             left: `${placedItem.position.x}px`,
//             top: `${placedItem.position.y}px`,
//             width: '50px',
//             height: '50px'
//           }}
//         />
//       ))}
//       <div className="inventory">
//         {gameState.unlockedItems.map((item) => (
//           <img
//             key={item._id}
//             src={`/images/map/${item.name}.png`}
//             alt={item.name}
//             onClick={() => setSelectedItem(item)}
//             style={{ width: '50px', height: '50px', cursor: 'pointer' }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default GameMap;