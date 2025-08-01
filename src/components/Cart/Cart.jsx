import './Cart.css'
const Cart = ({cart}) => {
    // console.log(cart.[0].img)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cartBottle">
                {
                    cart.map(bottle => <img src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

export default Cart;