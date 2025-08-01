import './Bottle.css';

const Bottle = ({bottle, handleBottles}) => {
    // console.log(bottle)
    // console.log(handleBottles);
    const {name, img, price} = bottle;
    return (
        <div className="bottle">
            <h4>Name: {name}</h4>
            <img src={img} alt="" />
            <p>Price: ${price}</p>
            <button onClick={() => handleBottles(bottle)}>Purchase</button>
        </div>
    );
};

export default Bottle;