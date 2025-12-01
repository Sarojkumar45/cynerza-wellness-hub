import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import productChurna from "@/assets/product-churna.jpg";
import productNeem from "@/assets/product-neem.jpg";
import productHairOil from "@/assets/product-hair-oil.jpg";
import productTulsi from "@/assets/product-tulsi.jpg";
import productBalm from "@/assets/product-balm.jpg";

const Products = () => {
  const products = [
    {
      image: productChurna,
      name: "Cynerza Digestive Churna",
      price: "₹299",
      description: "Improves gut health with cumin, fennel & coriander. Relieves bloating and indigestion naturally.",
    },
    {
      image: productNeem,
      name: "Cynerza Neem Skin Capsules",
      price: "₹399",
      description: "Anti-acne detox formula that purifies blood and promotes clear, healthy skin from within.",
    },
    {
      image: productHairOil,
      name: "Cynerza Hair Revive Oil",
      price: "₹499",
      description: "Strengthens roots and reduces hair fall with bhringraj, amla & hibiscus extracts.",
    },
    {
      image: productTulsi,
      name: "Cynerza Tulsi Immunity Drops",
      price: "₹349",
      description: "Boosts immunity naturally with holy basil essence. Fights infections and builds resilience.",
    },
    {
      image: productBalm,
      name: "Cynerza Pain Relief Balm",
      price: "₹279",
      description: "Natural relief for joints and muscle pain with eucalyptus, wintergreen & camphor.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-primary mb-6">
              Our Ayurvedic Products
            </h1>
            <p className="text-lg text-muted-foreground">
              Handcrafted herbal wellness solutions made with 100% natural ingredients and time-tested Ayurvedic formulations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {products.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              Why Choose Our Products?
            </h2>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Natural Ingredients
              </h3>
              <p className="text-muted-foreground">
                Every product is made from 100% natural herbs, roots, and botanicals sourced from certified organic farms. No chemicals, no synthetics, no compromises.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Traditional Formulations
              </h3>
              <p className="text-muted-foreground">
                Our formulations are based on classical Ayurvedic texts like Charaka Samhita and Sushruta Samhita, refined over thousands of years.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Quality Assured
              </h3>
              <p className="text-muted-foreground">
                Each batch undergoes rigorous quality testing and is prepared following Good Manufacturing Practices (GMP) standards.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-card p-6 rounded-lg shadow-soft"
            >
              <h3 className="font-heading text-xl font-semibold text-primary mb-3">
                Safe & Effective
              </h3>
              <p className="text-muted-foreground">
                No harmful side effects. Our products work with your body's natural healing mechanisms for sustainable wellness.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Products;
