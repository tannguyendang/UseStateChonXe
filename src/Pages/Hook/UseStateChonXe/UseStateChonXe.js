import React, { useState } from 'react'

export default function UseStateChonXe() {

    const [state, setState] = useState(
        { img: "./img/car/products/black-car.jpg" }
    );

    console.log(state);

    let changeColor = (color) => {
        let newState = { img: `./img/car/products/${color}-car.jpg` }
        setState(newState)
        console.log(setState, 'setState');
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src={state.img} className="w-100" />
                </div>
                <div className="col-6">
                    <div className="row">
                        <div className="col-3">
                            <button style={{ backgroundColor: 'black', cursor: 'pointer' }} onClick={() =>
                                changeColor('black')
                            }> black car</button>
                        </div>
                        <div className="col-3">
                            <button style={{ backgroundColor: 'red', cursor: 'pointer' }} onClick={() =>
                                changeColor('red')
                            }>red car</button>
                        </div>
                        <div className="col-3">
                            <button style={{ backgroundColor: 'silver', cursor: 'pointer' }} onClick={() =>
                                changeColor('silver')
                            }>red car</button>
                        </div>
                        <div className="col-3">
                            <button style={{ backgroundColor: 'gray', cursor: 'pointer' }} onClick={() =>
                                changeColor('steel')
                            }>red car</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
