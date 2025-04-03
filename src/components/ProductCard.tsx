
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FallbackImage } from "@/components/ui/fallback-image";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="group rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/products/${product.id}`} className="block overflow-hidden">
        <div className="relative aspect-square overflow-hidden">
          <FallbackImage
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
          {product.discount > 0 && (
            <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              {product.discount}% OFF
            </span>
          )}
        </div>
      </Link>
      <div className="p-4">
        <Link to={`/products/${product.id}`} className="block">
          <h3 className="font-medium text-lg truncate">{product.name}</h3>
          <p className="text-muted-foreground text-sm mb-2 line-clamp-1">
            {product.category}
          </p>
        </Link>
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-2">
            <span className="font-bold text-lg">₹{product.price}</span>
            {product.originalPrice && (
              <span className="text-muted-foreground line-through text-sm">
                ₹{product.originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" variant="outline" onClick={handleAddToCart}>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  );
}
