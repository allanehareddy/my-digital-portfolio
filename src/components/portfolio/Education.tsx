import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, ExternalLink, FileText } from "lucide-react";
import cetReceipt from "@/assets/cet-receipt.jpeg";

export const Education = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Education</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {/* College */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Father Conceicao Rodrigues Institute of Technology</CardTitle>
              <CardDescription>Bachelor of Computer Engineering | Minors in Data Science</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[200px]">
                  <p className="text-sm text-muted-foreground">CGPA</p>
                  <p className="text-2xl font-bold text-primary">9.38</p>
                </div>
                <div className="flex-1 min-w-[200px]">
                  <p className="text-sm text-muted-foreground">Expected Graduation</p>
                  <p className="text-lg font-semibold">May 2026</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Key Courses</p>
                <p className="text-foreground">Operating System, Computer Network, Data Structures and Algorithm, Software Engineering, AWS, Docker</p>
              </div>
            </CardContent>
          </Card>

          {/* 12th Grade */}
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Class XII (HSC)
              </CardTitle>
              <CardDescription>New Horizon Public School, Khanda Colony, New Panvel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Percentage</p>
                  <p className="text-3xl font-bold text-primary">90.2%</p>
                </div>
                <Button variant="outline" asChild>
                  <a href="/documents/12th-marksheet.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    View Marksheet
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* 10th Grade */}
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-6 w-6 text-primary" />
                Class X (SSC)
              </CardTitle>
              <CardDescription>New Horizon Public School, Khanda Colony, New Panvel</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Percentage</p>
                  <p className="text-3xl font-bold text-primary">95.4%</p>
                </div>
                <Button variant="outline" asChild>
                  <a href="/documents/10th-marksheet.pdf" target="_blank" rel="noopener noreferrer">
                    <FileText className="mr-2 h-4 w-4" />
                    View Marksheet
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Entrance Exams */}
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle>Entrance Examination Scores</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-lg">MHT-CET</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <a href={cetReceipt} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                  <p className="text-3xl font-bold text-primary">98.13 Percentile</p>
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">JEE Main</h3>
                  <p className="text-3xl font-bold text-primary">94 Percentile</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
