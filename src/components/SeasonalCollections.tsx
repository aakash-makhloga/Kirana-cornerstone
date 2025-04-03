import React, { useState, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Box } from "lucide-react";
import SpiceDisplay3D from "./SpiceDisplay3D";
import ErrorBoundary from "./ErrorBoundary";

const seasonalCollections = [
  {
    id: "summer-collection",
    name: "Summer Delights",
    description: "Cool off with our refreshing summer collection.",
    imageUrl: "/images/summer-collection.jpg",
    products: [
      { id: "watermelon", name: "Watermelon", price: 10 },
      { id: "lemonade", name: "Lemonade", price: 5 },
    ],
  },
  {
    id: "winter-collection",
    name: "Winter Warmers",
    description: "Warm up with our cozy winter collection.",
    imageUrl: "/images/winter-collection.jpg",
    products: [
      { id: "hot-chocolate", name: "Hot Chocolate", price: 7 },
      { id: "gingerbread", name: "Gingerbread", price: 8 },
    ],
  },
  {
    id: "autumn-collection",
    name: "Autumn Harvest",
    description: "Enjoy the flavors of fall with our autumn harvest collection.",
    imageUrl: "/images/autumn-collection.jpg",
    products: [
      { id: "pumpkin-spice-latte", name: "Pumpkin Spice Latte", price: 6 },
      { id: "apple-pie", name: "Apple Pie", price: 9 },
    ],
  },
  {
    id: "spring-collection",
    name: "Spring Bloom",
    description: "Celebrate the season of renewal with our spring bloom collection.",
    imageUrl: "/images/spring-collection.jpg",
    products: [
      { id: "strawberry-smoothie", name: "Strawberry Smoothie", price: 8 },
      { id: "flower-bouquet", name: "Flower Bouquet", price: 12 },
    ],
  },
];

const FallbackComponent = () => (
  <div className="flex items-center justify-center h-48">
    <Box className="mr-2 h-4 w-4 animate-spin" /> Loading 3D Spice...
  </div>
);

const SeasonalCollections = () => {
  const [error, setError] = useState(false);

  if (error) {
    return <div>Oops! Something went wrong. Please try again later.</div>;
  }

  return (
    <section className="container py-12">
      <h2 className="text-3xl font-bold mb-8">Seasonal Collections</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {seasonalCollections.map((collection) => (
          <div
            key={collection.id}
            className="rounded-lg border overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src={collection.imageUrl}
              alt={collection.name}
              className="object-cover w-full h-48"
            />
            <div className="p-4">
              <h3 className="font-medium text-xl mb-2">{collection.name}</h3>
              <p className="text-muted-foreground text-sm mb-4">
                {collection.description}
              </p>
              <div className="flex items-center justify-between mt-2">
                <Link to={`/collections/${collection.id}`}>
                  <Button variant="outline" size="sm">
                    Shop Now <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Suspense fallback={<FallbackComponent />}>
                  <ErrorBoundary
                    fallback={
                      <div className="text-red-500">
                        Error loading 3D spice.
                      </div>
                    }
                    onError={() => setError(true)}
                  >
                    <SpiceDisplay3D spiceName={collection.products[0].name} />
                  </ErrorBoundary>
                </Suspense>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SeasonalCollections;
