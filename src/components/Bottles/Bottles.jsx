import { useEffect, useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css';
import { addToLocalStorage, getStoredCart } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // Load Bottle Data From LS 
    useEffect(() => {
        // console.log(bottles.length)
        if (bottles.length > 0) {
            const storedData = getStoredCart();
            // console.log(storedData, bottles);

            const savedCart = [];
            for(const id of storedData){
                // console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    savedCart.push(bottle);
                }
            }
            // console.log('Save Cart: ', savedCart);
            setCart(savedCart)
        }
    }, [bottles])

    const handleBottles = (bottle) => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLocalStorage(bottle.id)
    }

    return (
        <div>
            <h3>Bottles Available: {bottles.length}</h3>
            <Cart key={cart.id} cart={cart}></Cart>
            <div className="bottle-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        bottle={bottle}
                        handleBottles={handleBottles}
                    ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;