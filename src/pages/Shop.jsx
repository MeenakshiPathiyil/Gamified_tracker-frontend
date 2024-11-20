import React, { useState, useEffect } from "react";
import './shop.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Shop() {
    const [showElements, setShowElements] = useState(false);
    const [showLockedEle, setShowLockedEle] = useState(false);

    const [coins, setCoins] = useState(() => 20); 
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

    const shopFlowers =
    [
        {name:"Flower 1",imagePath:"/images/map/flower1.png",cost:10},
        {name:"Flower 2",imagePath:"/images/map/flower2.png",cost:20},
        {name:"Flower 3",imagePath:"/images/map/flower3.png",cost:40},
        {name:"Flower 4",imagePath:"/images/map/flower4.png",cost:5},
        {name:"Flower 5",imagePath:"/images/map/flower5.png",cost:50},
        {name:"Flower 6",imagePath:"/images/map/flower6.png",cost:40},
        {name:"Flower 7",imagePath:"/images/map/flower7.png",cost:30},

    ];

    const shopTrees = [
        {name:"Tree 1",imagePath:"/images/map/tree1.png",cost:10},
        {name:"Tree 2",imagePath:"/images/map/tree2.png",cost:25},
        {name:"Tree 3",imagePath:"/images/map/tree3.png",cost:40},
        {name:"Tree 4",imagePath:"/images/map/tree4.png",cost:25},
        {name:"Tree 5",imagePath:"/images/map/tree5.png",cost:30},
        {name:"Tree 7",imagePath:"/images/map/tree7.png",cost:20},
        {name:"Tree 8",imagePath:"/images/map/tree8.png",cost:20},
    ];

    const shopMisc = [
        { name: "Heart", imagePath: "/images/map/heart.png", cost: 50 },
        { name: "Hen", imagePath: "/images/map/hen.png", cost: 60 },
        { name: "Rabbit", imagePath: "/images/map/rabbit.png", cost: 60 },
        { name: "Dog", imagePath: "/images/map/dog.png", cost: 50 },
        { name: "House", imagePath: "/images/map/house.png", cost: 45 },
        { name: "Tower", imagePath: "/images/map/tower.png", cost: 50 },
        { name: "Bush", imagePath: "/images/map/bush.png", cost: 20 },
        { name: "Cloud 1", imagePath: "/images/map/cloud1.png", cost: 55 },
        { name: "Cloud 2", imagePath: "/images/map/cloud2.png", cost: 30 },

        
    ];

    const purchaseElement = async () => {
        
            if (!selectedElement) {
                alert('No element selected');
                setShowModal(false);
                return;
            }
        
            try {
                const response = await axios.post(
                    'http://localhost:5000/api/shop/purchase', 
                    { purchasedItem: selectedElement }, 
                    { 
                        withCredentials: true,
                        headers: {
                            'Content-Type': 'application/json'
                        }
                    }
                );
        
                if (response.status === 200) {
                    // Assuming the response contains the updated user object
                    const updatedUser = response.data.user;
        
                    // Update the user's purchased items
                    // You might want to update your state or context with the new user data
                    alert(`You purchased ${selectedElement.name} successfully!`);
        
                    // Optional: Update the local state or context
                    // For example:
                    // setUser(updatedUser);
                    // or update purchased items list
                    // setPurchasedItems(updatedUser.purchasedItems);
                }
            } catch (error) {
                console.error('Error purchasing item:', error.response?.data || error.message);
                
                // Detailed error handling
                if (error.response) {
                    // Server responded with an error
                    alert(error.response.data.message || 'Failed to purchase item');
                } else if (error.request) {
                    // Request made but no response received
                    alert('No response from server. Please check your connection.');
                } else {
                    // Error in setting up the request
                    alert('Error in purchase request');
                }
            } finally {
                setShowModal(false);
            
        };
        if (selectedElement && coins >= selectedElement.cost) {
            try {
                const response = await axios.post(
                    'http://localhost:5000/api/shop/purchase', 
                    { purchasedItem: selectedElement }, 
                    { withCredentials: true } 
                );
    
                if (response.status === 200) {
                    setCoins(coins - selectedElement.cost); 
                    alert(`You purchased ${selectedElement.name} for ${selectedElement.cost} coins!`);
                }
            } catch (error) {
                console.error('Error purchasing item:', error);
                alert('Failed to purchase item. Please try again.');
            }
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
            <img src="/images/shop.png" alt="shop" className="shop-img"/>

            <div className="coins-display">
                <img src="/images/coin.png" alt="Coins" className="coin-icon" />
                <span>{coins} Coins</span>
            </div>

            {showElements && (
                <div className="element-block">
                    
                    {shopFlowers.map((element,index)=>(
                        <div key={index} className="flower-item">
                        <img src={element.imagePath} alt={element.name} className="flower-image" onClick={() => handlePurchase(element)} />
                        
                             <p className="element-name">{element.name}</p>
                             <p className="element-cost">Cost: {element.cost} coins</p>
                        
                    </div>
                    ))}

                    
                    {shopTrees.map((element,index)=>(
                        <div key={index} className="tree-item">
                        <img src={element.imagePath} alt={element.name} className="tree-image" onClick={() => handlePurchase(element)} />
                        
                             <p className="element-name">{element.name}</p>
                             <p className="element-cost">Cost: {element.cost} coins</p>
                        
                    </div>
                    ))}

                    
                    {shopMisc.map((element,index)=>(
                        <div key={index} className="misc-item">
                        <img src={element.imagePath} alt={element.name} className="misc-image" onClick={() => handlePurchase(element)} />
                        
                             <p className="element-name">{element.name}</p>
                             <p className="element-cost">Cost: {element.cost} coins</p>
                        
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
                <div className="shopmodal-overlay">
                    <div className="shopmodal">
                        <h2 className="confirm-pur">Confirm Purchase</h2>
                        <br/>
                        <p className="confirm-purchase">
                            Do you want to purchase <strong>{selectedElement.name}</strong> for{" "}
                            <strong>{selectedElement.cost}</strong> coins?
                        </p>
                        <br/>
                        <div className="shopmodal-buttons">
                            
                            <button className="confirm-but" onClick={purchaseElement}>Confirm</button>
                            <button className="cancel-but" onClick={cancelPurchase}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Shop;