/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './card.css';

class CardRYM extends Component{
    constructor(props){
        super(props)
        this.state = {
         
        }
    }


    //Neceitamos un evento onClick
    render(){
        console.log(this.props);
        return (
            <div className="character-card">
                <img src={this.props.dataPersonaje.image} alt="" />
                <h4>{this.props.dataPersonaje.name}</h4>
                <p>{this.props.dataPersonaje.status} - {this.props.dataPersonaje.species}</p>           
                <p className='more' onClick={()=>this.props.remove(this.props.dataPersonaje.id)}>borrar</p>
            </div>
        );
    }
}

export default CardRYM