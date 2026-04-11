import { useSelector } from "react-redux";
import MenuDetails from "./MenuDetails";
import ProductDetails from "./ProductDetails";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  if (cartItems.length === 0) {
    return <h2 className="p-4">Your cart is empty</h2>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>

      <div className="flex flex-col gap-4">
        {cartItems.map((item) => {
          // If item looks like a restaurant (has `name`), render MenuDetails
          if (item.name) {
            return (
              <MenuDetails
                key={item.id}
                name={item.name}
                cuisines={item.cuisines}
                avgRating={item.avgRating}
                cloudinaryImageId={item.cloudinaryImageId}
                sla={item.sla}
                areaName={item.areaName}
                cartItem={item}
              />
            );
          }

          // If item looks like a product (has `title`), render ProductDetails
          if (item.title) {
            return <ProductDetails key={item.id} product={item} />;
          }

          // Fallback: simple display
          return (
            <div key={item.id} className="p-4 border rounded">
              <div className="font-medium">{item.name || item.title || "Item"}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cart;