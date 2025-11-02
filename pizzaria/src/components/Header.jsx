const Header = () => {
  return (
    <header
      className="text-center text-light py-5 header-bg"
      style={{
        backgroundImage: "url('/fondo.webp')",
      }}
    >
      <h1>Pizzería Mamma Mía!</h1>
      <p className="lead">¡Tenemos las mejores pizzas que podrás encontrar!</p>
    </header>
  );
};

export default Header;