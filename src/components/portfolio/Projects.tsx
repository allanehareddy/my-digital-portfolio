import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "Sitter Sphere – Pet Sitter Booking Web Application",
      description: "A full-stack web application that allows users to register, search, and view pet sitters using Spring Boot for RESTful APIs, MySQL for data storage, and Thymeleaf with HTML/CSS for the frontend interface.",
      technologies: ["Spring Boot", "MySQL", "Thymeleaf", "HTML/CSS", "RESTful APIs"],
      github: "#" // User will add later
    },
    {
      title: "Chatbot with Your Database using RAG and Spring AI",
      description: "Built an intelligent chatbot that connects directly to a MySQL database and answers natural language questions about stored data. Powered by the Retrieval Augmented Generation (RAG) pattern, integrating Spring Boot, Spring AI, and a locally running Llama LLM model via Ollama.",
      technologies: ["Spring Boot", "Spring AI", "MySQL", "RAG", "Ollama", "Llama LLM"],
      github: "#" // User will add later
    },
    {
      title: "Banking REST API System",
      description: "Built a secure, multi-currency banking backend system using Spring Boot and PostgreSQL, implementing complex entity relationships via JPA. Integrated Spring Security and JWT for authentication, and used Tabnine AI tool for accelerated development. Developed features including account creation, fund transfer, card operations, transaction history, and real-time currency conversion using external API.",
      technologies: ["Spring Boot", "PostgreSQL", "Spring Security", "JWT", "JPA", "Tabnine"],
      github: "#" // User will add later
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg flex flex-col">
              <CardHeader>
                <CardTitle className="text-lg line-clamp-2">{project.title}</CardTitle>
                <CardDescription className="line-clamp-3">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
