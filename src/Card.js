import React, { Component } from 'react';

const Cards = (props) => {
    return props.cards.map(card => {
        return (
            <div className="card" key={card.id} >
                <div className="cardImageContainer">
                    {/* <img src="https://via.placeholder.com/300x220" alt="Product" className="productImage" /> */}
                    <img src="https://avatars1.githubusercontent.com/u/12484697?s=460&v=4" alt="Product" className="productImage" />
                </div>
                <div className={card.isActive ? "cardInfoContainer active" : "cardInfoContainer"}>
                    <div className="cardTitle">
                        {card.name}
                        <div className="btn" data-id={card.id} onClick={this.handleClick}>
                            {card.isActive ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                    <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                            ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none" /><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                )}
                        </div>
                    </div>
                    <div className="cardDescription">
                        {/* <div className="svgWrapper">
                            <img src={js} alt="Product" className="productImage" />
                        </div>
                        <div className="svgWrapper">
                            <img src={react} alt="Product" className="productImage" />
                        </div>
                        <div className="svgWrapper">
                            <img src={nodejs} alt="Product" className="productImage" />
                        </div> */}
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards;