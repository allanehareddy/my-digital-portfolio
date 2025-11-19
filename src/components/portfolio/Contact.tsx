import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="mailto:nehareddy.alla17@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="tel:+919136060722">
              <Phone className="mr-2 h-5 w-5" />
              Call Me
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center pt-8">
          <Button variant="ghost" size="lg" asChild>
            <a href="https://github.com/allanehareddy" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="ghost" size="lg" asChild>
            <a href="https://linkedin.com/in/neha-reddy-alla-775566298" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="pt-12 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Neha Alla. Built with React, TypeScript & Tailwind CSS.
          </p>
        </div>
      </div>
    </section>
  );
};
