import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, CheckCircle, Star } from 'lucide-react';

const CredentialsSection = () => {
  const certifications = [
    {
      name: "Certified Ethical Hacker (CEH)",
      issuer: "EC-Council",
      status: "Active",
      year: "2023"
    },
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      status: "Active", 
      year: "2023"
    },
    {
      name: "IBM Cybersecurity Analyst",
      issuer: "IBM (Coursera)",
      status: "Completed",
      year: "2022"
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      status: "Completed",
      year: "2022"
    },
    {
      name: "CCNA Intro to CyberSecurity",
      issuer: "Cisco",
      status: "Completed",
      year: "2022"
    },
    {
      name: "Python Security Training",
      issuer: "Various Platforms",
      status: "Ongoing",
      year: "2024"
    }
  ];

  const tools = [
    "Burp Suite Professional",
    "Nmap",
    "Metasploit Framework", 
    "Nessus",
    "Kali Linux",
    "Wireshark",
    "OWASP ZAP",
    "Nuclei",
    "Subfinder",
    "Ffuf",
    "SQLMap",
    "Nikto"
  ];

  const testimonial = {
    text: "Abhay's penetration testing identified critical vulnerabilities that could have cost us millions. His detailed reporting and remediation guidance were exceptional.",
    author: "CTO, Fintech Startup",
    company: "Confidential Client",
    rating: 5
  };

  return (
    <section id="credentials" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge variant="secondary" className="mb-4 text-accent border-accent/30">
            <Award className="w-3 h-3 mr-1" />
            Credentials & Trust
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Certifications & Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Industry-recognized certifications and proven expertise with enterprise-grade security tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Certifications */}
          <Card className="cyber-card hover-lift fade-in lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Professional Certifications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-background/50 border border-border/20">
                    <CheckCircle className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-semibold text-sm">{cert.name}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{cert.issuer}</p>
                      <div className="flex items-center gap-2">
                        <Badge 
                          variant={cert.status === 'Active' ? 'default' : 'secondary'} 
                          className="text-xs"
                        >
                          {cert.status}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Client Testimonial */}
          <Card className="cyber-card hover-lift fade-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <Star className="w-6 h-6 text-accent" />
                Client Feedback
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-sm italic text-muted-foreground">
                "{testimonial.text}"
              </blockquote>
              <div className="text-xs">
                <div className="font-semibold">{testimonial.author}</div>
                <div className="text-muted-foreground">{testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Tools & Technologies */}
        <Card className="cyber-card hover-lift fade-in mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3">
              <Award className="w-6 h-6 text-primary" />
              Security Tools & Technologies
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="justify-center py-2 border-primary/30 hover:border-primary hover:bg-primary/10 transition-colors"
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Trust Logos Placeholder */}
        <div className="mt-12 text-center fade-in">
          <p className="text-sm text-muted-foreground mb-6">Trusted by enterprises across fintech, healthtech, and SaaS</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="w-24 h-12 bg-muted/20 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
            <div className="w-24 h-12 bg-muted/20 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
            <div className="w-24 h-12 bg-muted/20 rounded-lg flex items-center justify-center text-xs text-muted-foreground">
              Client Logo
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;