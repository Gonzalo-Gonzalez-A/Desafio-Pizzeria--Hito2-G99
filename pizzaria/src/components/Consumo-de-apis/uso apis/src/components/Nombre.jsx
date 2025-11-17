import React, { useEffect, useState } from 'react'

export default function Nombre() {

    const [nombre, setNombre] = useState("")
    // almacenando en el localStorage el nombre
    const nombreAlmacenado = localStorage.getItem("nombre")

    useEffect(() => {
        if (nombreAlmacenado) {
            setNombre(nombreAlmacenado)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("nombre", nombre)
    }, [nombre])    

    // funcion para actualizar el nombre
    return (
        <div>
            <h1>Hola {nombre}!</h1>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </div>
    )
}