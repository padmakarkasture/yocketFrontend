import React from 'react'
import logo from '../yocket_logo.png'

export function Post(props) {
    return (
        <>
            <div className="card" >
                <img src={logo} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                </div>
            </div>

        </>
    )
}


