import React, { Component } from 'react';
import PizzaImage from '../components/PizzaImage/PizzaImage';

class Pizza extends Component{
    render(){
        return(
            <div>
                <h1>Pizza</h1>
                <PizzaImage />
            </div>
        );
    }
}

export default Pizza;