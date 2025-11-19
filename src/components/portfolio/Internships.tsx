import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase, FileText, MapPin } from "lucide-react";

export const Internships = () => {
  const internships = [
    {
      company: "Kashsam Data Solutions Private Limited",
      role: "Full Stack Developer",
      duration: "June 2025 - July 2025",
      location: "Chennai",
      description: [
        "Designed and developed key application modules including a new Opinion feature in Angular, secure user registration with Spring Security (authentication & authorization), backend pagination, and dynamic Jasper Reports, significantly enhancing usability and reporting efficiency.",
        "Improved backend performance by implementing optimized SQL JOIN queries and refining API workflows, achieving a 30% reduction in response time while ensuring scalable data handling and high-quality full-stack delivery."
      ],
      certificate: null
    },
    {
      company: "Ikspida India Pvt",
      role: "Backend Engineer Intern",
      duration: "June 2024 - September 2024",
      location: "Bangalore",
      description: [
        "Contributed to the integration of 5 RESTful APIs, enabling seamless communication between frontend and backend systems.",
        "Crafted a Spring Boot application with a Drools logic engine, containerized it using Docker, and seamlessly deployed it on AWS using EC2, strategically allocating cloud resources to ensure enhanced scalability and reliability."
      ],
      certificate: "/documents/internship-letter.pdf"
    }
  ];

  return (
    <section id="internships" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Internship Experience</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {internships.map((internship, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-colors">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="flex items-center gap-2 text-xl">
                      <Briefcase className="h-5 w-5 text-primary" />
                      {internship.role}
                    </CardTitle>
                    <CardDescription className="text-lg">{internship.company}</CardDescription>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span>{internship.duration}</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {internship.location}
                      </span>
                    </div>
                  </div>
                  {internship.certificate && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={internship.certificate} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        View Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {internship.description.map((point, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="text-primary mt-1.5">•</span>
                      <span className="text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
