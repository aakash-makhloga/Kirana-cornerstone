
import React from "react";
import { Button } from "@/components/ui/button";
import { ShareOnWhatsApp } from "./SeasonalCollections";
import { useCart } from "@/contexts/CartContext";

const CartActions = () => {
  const { items, totalPrice } = useCart();
  
  // Create a cart summary text for WhatsApp sharing
  const getCartSummaryText = () => {
    const itemsList = items.map(item => `${item.name} (${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}`).join("\n");
    return `My Cart (${items.length} items):\n${itemsList}\n\nTotal: $${totalPrice.toFixed(2)}`;
  };

  return (
    <div className="flex flex-col gap-2 mt-4">
      <Button className="w-full">Proceed to Checkout</Button>
      <ShareOnWhatsApp text={getCartSummaryText()} />
    </div>
  );
};

export default CartActions;
