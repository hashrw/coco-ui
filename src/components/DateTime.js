import React, { useState, useEffect } from 'react';
import '../App.css';

export default function DateTime() {
    const [dateTime, setDateTime] = useState(new Date());
    //posicion 0 estado, posicion 1 setter . deconstruccion del array
    //useEffect ejecuta callback cuando se lo indico
    var d = new Date();
    //array asignar día semana
    var diaSemana = new Array(7);
    diaSemana[0] = "Domingo";
    diaSemana[1] = "Lunes";
    diaSemana[2] = "Martes";
    diaSemana[3] = "Miércoles";
    diaSemana[4] = "Jueves";
    diaSemana[5] = "Viernes";
    diaSemana[6] = "Sábado";

    var n = diaSemana[d.getDay()];

    useEffect(() => {
        setInterval(() => {
            setDateTime(new Date())
        }, 1000)
    }, [])

    return <div className="dateTime">
        <p>
            {n+", "} {dateTime.toLocaleDateString()+"."} {dateTime.toLocaleTimeString()+" h"}
        </p>
    </div>
}
