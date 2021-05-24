import React, { useState } from 'react'

const TrafficLigth = () => {

    const statInicial = 'fas fa-circle m-0 text-secondary'

    const [colorRojo, setColorRojo] = useState(statInicial);
    const [colorAmarillo, setColorAmarillo] = useState(statInicial);
    const [colorVerde, setColorVerde] = useState(statInicial);

    
    const cambiarRojo = () => {
        console.log('rojo')
        setColorRojo('fas fa-circle m-0 text-danger border-luz')
        setColorAmarillo(statInicial)
        setColorVerde(statInicial)
    }
    const cambiarAmarillo = () => {
        console.log('amarillo')
        setColorRojo(statInicial)
        setColorAmarillo('fas fa-circle m-0 text-warning border-luz')
        setColorVerde(statInicial)
    }
    const cambiarVerde = () => {
        console.log('verde')
        setColorRojo(statInicial)
        setColorAmarillo(statInicial)
        setColorVerde('fas fa-circle m-0 text-success border-luz')
    }

    return ( 
        <ul className="list-group list-group-flush text-center rounded-circle">
            <li className="p-0 list-group-item color-fondo">
                <h1 className="mx-3 mt-3">
                    <i className={colorRojo}
                        onClick={ cambiarRojo }
                    ></i>
                </h1>
            </li>
            <li className="p-0 list-group-item color-fondo">
                <h1 className="mx-3">
                    <i className={colorAmarillo}
                        onClick={ cambiarAmarillo }
                    ></i>
                </h1>
            </li>
            <li className="p-0 list-group-item color-fondo">
                <h1 className="mx-3 mb-3">
                    <i className={colorVerde}
                        onClick={ cambiarVerde }
                    ></i>
                </h1>
            </li>
        </ul>
    );
}
 
export default TrafficLigth;