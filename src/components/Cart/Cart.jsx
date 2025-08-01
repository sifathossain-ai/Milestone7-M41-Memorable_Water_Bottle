import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {
    // console.log(cart.[0].img)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cartBottle">
                {
                    cart.map(bottle => 
                    <div className='innerCart' key={bottle.id}>
                        <img src={bottle.img}></img>
                        <br />
                        <button onClick={() => handleRemoveFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.propTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;