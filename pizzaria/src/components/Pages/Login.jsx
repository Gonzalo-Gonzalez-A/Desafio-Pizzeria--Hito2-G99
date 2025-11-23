import { useState } from "react"

<h3>Login</h3>

const Formulario = () => {
    //estados del formulario
    const [email, setEmail] = useState("")
    const [contraseña, setContraseña] = useState("")


    //Estado para los errores
    const [error, setError] = useState(false)

    //funcion antes de enviar el formulario
    const validarDatos = (e) => {
        e.preventDefault();

        //validacion de los datos
        if (!email.trim() || !contraseña.trim()) {
            alert("Todos los campos son obligatorios");
            setError(true)
            return;
        };
        setError(false);
        setEmail("");
        setContraseña("");
    };

    return (
        <>
            <form action="formulario" onSubmit={validarDatos}>{error ? <p>Todos los campos son obligatorios</p> : null};
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input
                        type="text"
                        name="contraseña"
                        className="form-control"
                        onChange={(e) => setContraseña(e.target.value)}
                        value={contraseña}
                    />
                </div>

                <button type="submit" className="btn
btn-primary">
                    Login
                </button>
            </form>
            <hr />
            <h1>Acceso Correcto</h1>
            {email} - {contraseña}
        </>
    );
};


export default Formulario;
