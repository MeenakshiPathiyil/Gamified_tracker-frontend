import React, { useState, useEffect } from "react";
import './shop.css';
import { Link } from 'react-router-dom';

function Shop() {
    const [showElements, setShowElements] = useState(false);
    const [showLockedEle, setShowLockedEle] = useState(false);

    const [coins, setCoins] = useState(100);
    const [selectedElement, setselectedElement] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        setShowElements(true);
        setShowLockedEle(true);
    }, []);

    const handlePurchase = (element) =>{
        setselectedElement(element);
        setShowModal(true);
    }
    const shopElements =
    [
        {name:"Flower 1",imagePath:"/images/map/flower1.png",cost:10},
        {name:"Flower 2",imagePath:"/images/map/flower2.png",cost:20},
        {name:"Flower 3",imagePath:"/images/map/flower3.png",cost:40},
        {name:"Flower 4",imagePath:"/images/map/flower4.png",cost:5},
        {name:"Flower 5",imagePath:"/images/map/flower5.png",cost:50},
        {name:"Flower 6",imagePath:"/images/map/flower6.png",cost:40},
        {name:"Flower 7",imagePath:"/images/map/flower7.png",cost:30},
        {name:"Tree 1",imagePath:"/images/map/tree1.png",cost:10},
        {name:"Tree 2",imagePath:"/images/map/tree2.png",cost:25},
        {name:"Tree 3",imagePath:"/images/map/tree3.png",cost:40},
        {name:"Tree 4",imagePath:"/images/map/tree4.png",cost:25},
        {name:"Tree 5",imagePath:"/images/map/tree5.png",cost:30},
        {name:"Tree 7",imagePath:"/images/map/tree7.png",cost:20},
        {name:"Tree 8",imagePath:"/images/map/tree8.png",cost:20},
        { name: "Cloud 1", imagePath: "/images/map/cloud1.png", cost: 55 },
        { name: "Cloud 2", imagePath: "/images/map/cloud2.png", cost: 30 },
        { name: "Bush", imagePath: "/images/map/bush.png", cost: 20 },
        { name: "Heart", imagePath: "/images/map/heart.png", cost: 50 },
        { name: "Hen", imagePath: "/images/map/hen.png", cost: 60 },
        { name: "Rabbit", imagePath: "/images/map/rabbit.png", cost: 60 },
        { name: "House", imagePath: "/images/map/house.png", cost: 45 },
        { name: "Tower", imagePath: "/images/map/tower.png", cost: 50 },
    ];

    const purchaseElement = () => {
        if (selectedElement && coins >= selectedElement.cost) {
            setCoins(coins - selectedElement.cost); // Deduct cost from coins
            alert(`You purchased ${selectedElement.name} for ${selectedElement.cost} coins!`);
        } else {
            alert(`You don't have enough coins to purchase ${selectedElement.name}`);
        }
        setShowModal(false); 
    };

    const cancelPurchase = () => {
        setselectedElement(null); // Reset selected element
        setShowModal(false); // Close modal
    };

    return (
        <div className="shop-container">
            <img src="/images/shop.png" alt="shop" />

            {showElements && (
                <div className="element-block">
                    <img src={'/images/elements.png'} classname="Element" alt="element" />
                    {shopElements.map((element,index)=>(
                        <div key={index} className="shop-item">
                        <img
                            src={element.imagePath}
                            alt={element.name}
                            className="shop-image"
                            onClick={() => handlePurchase(element)}
                        />
                        <p>{element.name}</p>
                        <p>Cost: {element.cost} coins</p>
                    </div>
                    ))}
                </div>
            )}

            
            
            

            
            {showLockedEle && (
                <div className="locked-elements">
                    <p>Some elements are locked</p>
                </div>
            )}

{showModal && selectedElement && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h2>Confirm Purchase</h2>
                        <p classname="confirm-purchase">
                            Do you want to purchase <strong>{selectedElement.name}</strong> for{" "}
                            <strong>{selectedElement.cost}</strong> coins?
                        </p>
                        <div className="modal-buttons">
                            <br></br>
                            <button onClick={purchaseElement}>Confirm</button>
                            <br></br>
                            <button onClick={cancelPurchase}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;
