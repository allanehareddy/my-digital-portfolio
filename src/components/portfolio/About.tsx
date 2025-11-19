import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Schooling
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2">New Horizon Public School</h3>
                <p className="text-muted-foreground">Khanda Colony, New Panvel</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  Completed my secondary education with excellent academic performance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-6 w-6 text-primary" />
                Technical Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Languages</h4>
                <p className="text-muted-foreground">Java, SQL, HTML5, CSS, JavaScript</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Frameworks</h4>
                <p className="text-muted-foreground">Spring Boot, ReactJS, PostgreSQL, MySQL</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Tools</h4>
                <p className="text-muted-foreground">AWS, Docker, Git, Postman, Jira, PowerBI</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
