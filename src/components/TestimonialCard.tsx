import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  text: string;
  author: string;
  role: string;
}

const TestimonialCard = ({ text, author, role }: TestimonialCardProps) => {
  return (
    <Card className="bg-card border-border h-full">
      <CardContent className="p-8 relative">
        <Quote className="absolute top-6 left-6 w-10 h-10 text-secondary/30" />
        <p className="text-foreground italic mb-6 mt-6 relative z-10">"{text}"</p>
        <div className="border-t border-border pt-4">
          <p className="font-semibold text-primary">{author}</p>
          <p className="text-sm text-muted-foreground">{role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
