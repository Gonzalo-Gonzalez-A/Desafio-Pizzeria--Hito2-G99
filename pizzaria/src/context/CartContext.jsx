import { createContext, useState } from "react";

// Requisito 1: Implementar un Context para el carrito
export const CartContext = createContext();

const CartProvider = ({ children }) => {
    // Estado principal del carrito
    const [cart, setCart] = useState([]); 

    // Lógica para añadir una pizza (Requisito 3)
    const addPizzaToCart = (pizza) => {
        const pizzaIndex = cart.findIndex(item => item.id === pizza.id);

        if (pizzaIndex >= 0) {
            // Si existe, incrementa la cantidad
            const newCart = [...cart];
            newCart[pizzaIndex].quantity += 1;
            setCart(newCart);
        } else {
            // Si no existe, agrégala con cantidad 1
            setCart([...cart, { ...pizza, quantity: 1 }]);
        }
    };

    // Lógica para aumentar cantidad (Requisito 4)
    const incrementItemQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Lógica para disminuir cantidad (Requisito 4)
    const decrementItemQuantity = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id ? { ...item, quantity: Math.max(0, item.quantity - 1) } : item
            ).filter(item => item.quantity > 0) // Elimina si la cantidad llega a 0
        );
    };

    // Lógica para eliminar completamente un ítem (Requisito 4)
    const removeItem = (id) => {
        setCart(prevCart => 
            prevCart.filter(item => item.id !== id)
        );
    };

    // Lógica para calcular el total (Requisito 5)
    const calculateTotal = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    };

    // Objeto 'value' que se compartirá
    const contextValue = {
        cart,
        addPizzaToCart,
        calculateTotal,
        incrementItemQuantity,
        decrementItemQuantity,
        removeItem,
        // Opcional: setCart si se necesita un reseteo o lógica compleja
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;