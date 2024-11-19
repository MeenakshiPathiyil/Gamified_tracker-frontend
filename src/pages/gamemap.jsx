import React, {useEffect, useState} from "react";
import axios from 'axios';
import House from './House';
import Shop from './Shop';
import './gm.css';
import { Link } from 'react-router-dom';

export const GameMap = ({ houses, unlockedHouses, onHouseClick }) => {
    return (
        <div className="game-map">
            {houses.map((house) => (
                <div
                    key={house._id}
                    className={ `house ${unlockedHouses.includes(house._id) ? 'unlocked' : 'locked'}`}
                    onClick={() => onHouseClick(house._id)}
                >
                        <img src={`/assets/houses/${house.name}.png`} alt={house.name} />
                </div>
            ))}
        </div>
    );
};

export default GameMap;