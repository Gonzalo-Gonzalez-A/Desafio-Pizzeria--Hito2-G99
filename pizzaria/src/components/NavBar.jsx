const Navbar = () => {
  const total = 25000;
  const token = false; // cámbialo a true para probar estado logueado

  return (
    <nav className="navbar navbar-expand-lg bg-dark p-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div>
          <button className="btn btn-outline-light me-2">🍕 Home</button>
        </div>
        <div>
          {token ? (
            <>
              <button className="btn btn-outline-light me-2">🔓 Profile</button>
              <button className="btn btn-outline-light me-2">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-outline-light me-2">🔐 Login</button>
              <button className="btn btn-outline-light me-2">🔐 Register</button>
            </>
          )}
          <button className="btn btn-success">
            🛒 Total: ${total.toLocaleString("es-CL")}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;