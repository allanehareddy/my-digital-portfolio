import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, ExternalLink, FileText } from "lucide-react";

export const Achievements = () => {
  const achievements = [
    {
      title: "MIT-ADT SOCICON 2024 (IEEE Conference)",
      award: "1st Prize",
      description: "As team leader, won 1st prize for designing and presenting a Smart Plant Monitoring System integrating IoT sensors with cloud-based analytics to enable real-time plant health tracking and resource optimization.",
      link: "https://ieeexplore.ieee.org/document/10575109",
      certificate: "/documents/certificate-1.pdf"
    },
    {
      title: "Strategitech Ideathon (SPIT)",
      award: "2nd Prize",
      description: "Led a 4-member team to secure 2nd prize for presenting a strategic solution that enhanced the EatSure app's customer traffic and improved system efficiency through data-driven recommendations.",
      link: null,
      certificate: "/documents/2nd-prize.pdf"
    }
  ];

  return (
    <section id="achievements" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Achievements</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card key={index} className="border-primary/20 hover:border-primary/40 transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="flex items-center gap-2 text-xl mb-2">
                      <Trophy className="h-6 w-6 text-yellow-500" />
                      {achievement.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold text-primary">
                      {achievement.award}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{achievement.description}</p>
                <div className="flex flex-wrap gap-2">
                  {achievement.link && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={achievement.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        IEEE Publication
                      </a>
                    </Button>
                  )}
                  {achievement.certificate && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={achievement.certificate} target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-4 w-4" />
                        Certificate
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
