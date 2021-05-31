import React from 'react';
import classes from './PizzaImage.css';
import PizzaImage from '../../assets/8.1 pizza.jpg.jpg';

const pizzaImage = (props) => (
    <div className={classes.PizzaImage}>
        <img src={PizzaImage} alt='Pizza Image' className={classes.PizzaImg} />
    </div>    
);
export default pizzaImage;