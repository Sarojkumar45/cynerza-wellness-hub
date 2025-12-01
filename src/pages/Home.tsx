import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Leaf, Heart, Shield, Sparkles } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import TestimonialCard from "@/components/TestimonialCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-ayurveda.jpg";
import productChurna from "@/assets/product-churna.jpg";
import productNeem from "@/assets/product-neem.jpg";
import productHairOil from "@/assets/product-hair-oil.jpg";

const Home = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "100% Natural",
      description: "Pure herbal formulations with no chemicals or artificial additives",
    },
    {
      icon: Heart,
      title: "Holistic Healing",
      description: "Treat the root cause, not just symptoms, for lasting wellness",
    },
    {
      icon: Shield,
      title: "Ancient Wisdom",
      description: "5000+ years of proven Ayurvedic healing traditions",
    },
    {
      icon: Sparkles,
      title: "Modern Science",
      description: "Scientifically validated formulations for maximum efficacy",
    },
  ];

  const featuredProducts = [
    {
      image: productChurna,
      name: "Digestive Churna",
      price: "₹299",
      description: "Improves gut health and digestion naturally",
    },
    {
      image: productNeem,
      name: "Neem Skin Capsules",
      price: "₹399",
      description: "Anti-acne detox formula for clear skin",
    },
    {
      image: productHairOil,
      name: "Hair Revive Oil",
      price: "₹499",
      description: "Strengthens roots and reduces hair fall",
    },
  ];

  const testimonials = [
    {
      text: "Cynerza transformed my health! The digestive churna has completely resolved my gut issues. Highly recommend their authentic Ayurvedic approach.",
      author: "Priya Sharma",
      role: "Wellness Enthusiast",
    },
    {
      text: "I've tried many skincare products, but Cynerza's Neem capsules gave me clear skin within weeks. The consultation was personalized and professional.",
      author: "Rahul Verma",
      role: "Software Engineer",
    },
    {
      text: "As someone who believes in natural healing, Cynerza's products and treatments are exceptional. The hair oil has made a visible difference!",
      author: "Anjali Desai",
      role: "Yoga Instructor",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={heroImage}
            alt="Ayurvedic herbs and natural healing"
            className="w-full h-full object-cover"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>

        <div className="container mx-auto px-4 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
              Heal Naturally Through Ayurveda
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Experience authentic Ayurvedic treatments and herbal wellness products backed by ancient wisdom and modern science
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg" className="bg-accent hover:bg-accent/90 text-foreground shadow-hover">
                  Book Appointment
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="outline" size="lg" className="border-2 border-primary-foreground bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Shop Now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              Why Choose Cynerza?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the power of nature's healing with our authentic Ayurvedic approach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-card shadow-soft hover:shadow-hover transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3 text-primary">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              Featured Products
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Handcrafted herbal wellness products for your holistic health
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.name} {...product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <Link to="/products">
              <Button variant="hero" size="lg">
                View All Products
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 gradient-soft">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from people who've experienced natural healing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
