import { Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-secondary/5 px-4 py-20">
      <div className="max-w-6xl w-full mx-auto text-center space-y-8">
        <div className="relative inline-block">
          <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-pulse">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
              <div className="w-44 h-44 rounded-full bg-muted flex items-center justify-center text-6xl font-bold text-primary">
                NA
              </div>
            </div>
          </div>
        </div>
        
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Neha Alla
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Backend Developer | Spring Boot Enthusiast | Computer Engineering Student
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building scalable backend systems with Spring Boot, RESTful APIs, and cloud technologies.
            Currently pursuing B.Tech in Computer Engineering at FCRIT with a CGPA of 9.38.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center items-center">
          <Button variant="default" size="lg" asChild>
            <a href="mailto:nehareddy.alla17@gmail.com">
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/allanehareddy" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href="https://linkedin.com/in/neha-reddy-alla-775566298" target="_blank" rel="noopener noreferrer">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </a>
          </Button>
        </div>

        <div className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4" />
            <span>+91 9136060722</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span>nehareddy.alla17@gmail.com</span>
          </div>
        </div>
      </div>
    </section>
  );
};
