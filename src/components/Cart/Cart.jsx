import PropTypes from 'prop-types';
import './Cart.css'

const Cart = ({cart}) => {
    // console.log(cart.[0].img)
    return (
        <div>
            <h4>Cart: {cart.length}</h4>
            <div className="cartBottle">
                {
                    cart.map(bottle => <img key={bottle.id} src={bottle.img}></img>)
                }
            </div>
        </div>
    );
};

Cart.PropTypes = {
    cart: PropTypes.array.isRequired
}

export default Cart;