import React, {useEffect, useState} from "react";
import axios from 'axios';
import House from './House';
import Shop from './Shop';
import './gm.css';
import { Link } from 'react-router-dom';

const GameMap = ({ userId }) => {
    const [gameMap, setgameMap] = useState(null);
    const [selectedItem, setSelectedItem] = useState(null);
    
    useEffect(() => {
        const fetchGameMap = async () => {
            try {
                const response = await axios.get(`/api/gameMap/${userId}`);
                setgameMap(response.data);
            }
            catch(error) {
                console.error('Error fetching game map: ', error.message);
            }
        };

        fetchGameMap();
    }, [userId]);

    // handle dropping an item in a house
    const handleDropItem = async (houseId, position) => {
        if (!selectedItem) return;

        try {
            await axios.post(`/api/gameMap/${userId}/add-item`, {
                houseId,
                itemId: selectedItem.itemId,
                position,
            });

            //update the local state after successful drop
            setgameMap((prev) => ({
                ...prev,
                houses: prev.houses.map((house) =>
                house.houseId === houseId
                ? { ...house, items: [...house.items, { ...selectedItem, position }]}
                : house
                ),
            }));
            setSelectedItem(null);
        }
        catch (error) {
            console.error('Error adding item: ', error.message);
        }
    };

    if (!gameMap) return <div>Loading game map...</div>;

    return (
        <div style={{ display: 'flex', flexDirection: 'row', gap: '20px'}}>
            <div className="game-map" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 100px)', gridTemplateRows: 'repeat(3, 100px)',gap: '10px', position: 'relative'}}>
                {gameMap.houses.map((house, index) => (
                    <div key={house.houseId} style={{ gridColumn: house.gridColumn, gridRow: house.gridRow}}>
                        <House house={house} onDropItem={handleDropItem} isLocked={house.isLocked} />
                    </div>
                ))}
            </div>

            <Shop onSelectItem={(item) => setSelectedItem(item)} />
        </div>
    );
};

export default GameMap;