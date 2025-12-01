import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface ProductCardProps {
  image: string;
  name: string;
  price: string;
  description: string;
  index?: number;
}

const ProductCard = ({ image, name, price, description, index = 0 }: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden hover:shadow-hover transition-all duration-300 h-full flex flex-col">
        <div className="relative overflow-hidden aspect-square">
          <motion.img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <CardContent className="p-6 flex-grow">
          <h3 className="font-heading font-semibold text-xl mb-2 text-primary">{name}</h3>
          <p className="text-muted-foreground text-sm mb-4">{description}</p>
          <p className="text-2xl font-bold text-primary">{price}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <Button variant="hero" className="w-full group-hover:scale-105 transition-transform">
            <ShoppingCart className="w-4 h-4" />
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
