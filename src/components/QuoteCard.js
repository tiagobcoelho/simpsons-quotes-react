import React, { Component } from 'react';
import './QuoteCard.css'

class QuoteCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favourite : false
        }
    }
    render(){
        const { character, image, quote } = this.props
        return (
            <figure className="QuoteCard">
                <img
              src={image} alt={character}/>
                <figcaption>
                    <blockquote>{quote}</blockquote>
                    <p>
                        <cite>{character}</ cite>
                        <span className={this.state.favourite ? 'is-favorite': ''}
                        onClick={event => {
                            const newFav = !this.state.favourite;
                            this.setState({favourite: newFav});
                        }}
                        >
                            &#9733;
                        </span>
                    </p>
                </figcaption>
            </figure>  
        )

    }
   
}

export default QuoteCard