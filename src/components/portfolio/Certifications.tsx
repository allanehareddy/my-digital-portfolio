import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Award, FileText } from "lucide-react";

export const Certifications = () => {
  const certifications = [
    {
      title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
      issuer: "Oracle",
      date: "2025",
      certificate: "/documents/certificate-1.pdf"
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
      issuer: "Oracle",
      date: "2025",
      certificate: "/documents/certificate-2.pdf"
    },
    {
      title: "Wipro TalentNext Java Full Stack Certification",
      issuer: "Wipro",
      date: "2024",
      certificate: null
    }
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Certifications</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg flex flex-col">
              <CardHeader>
                <div className="flex items-start gap-3 mb-2">
                  <Award className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <CardTitle className="text-lg line-clamp-2">{cert.title}</CardTitle>
                </div>
                <CardDescription className="flex items-center justify-between">
                  <span>{cert.issuer}</span>
                  <Badge variant="secondary">{cert.date}</Badge>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 flex items-end">
                {cert.certificate && (
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <a href={cert.certificate} target="_blank" rel="noopener noreferrer">
                      <FileText className="mr-2 h-4 w-4" />
                      View Certificate
                    </a>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
