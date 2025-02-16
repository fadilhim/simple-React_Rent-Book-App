import React from 'react'

import './card.css'

export const Card = (props) => (
        <div className='card-container' onClick={() => props.getDetails(props.book.book_id)}>
            <img
                alt={props.book.title}
                src={props.book.image}
            />
            <div className='card-body'>
                <h1> {props.book.title} </h1>
                <p> {props.book.description} </p>
            </div>
        </div>
)