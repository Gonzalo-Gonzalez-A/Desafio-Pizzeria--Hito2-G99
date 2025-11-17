import React, { useEffect, useState } from 'react'


export function UsoApis() {
    const apiUrl = "https://api.thecatapi.com/v1/images/search?limit=10"
    const [cats, setCats] = useState([])

    const getCats = async () => {
        const res = await fetch(apiUrl)
        const data = await res.json()
        setCats(data)
    }   

    useEffect(() => {
        getCats()
    }, [])

    return (
        <div>
            <h2>Cat Images</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {cats.map((cat) => (
                    <div key={cat.id} style={{ margin: '10px' }}>
                        <img src={cat.url} alt="Cat" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UsoApis