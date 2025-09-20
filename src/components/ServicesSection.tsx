import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Globe, Server, Cloud, Shield, Users, FileCheck, ArrowRight, IndianRupee, DollarSign } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Application Pentest",
      description: "OWASP Top 10 + business logic vulnerabilities",
      deliverables: ["Comprehensive vulnerability assessment", "Business logic flaw analysis", "Authentication & authorization testing"],
      timeframe: "2-4 weeks",
      pricing: {
        starter: "₹80k",
        standard: "₹250k", 
        enterprise: "Custom"
      }
    },
    {
      icon: Server,
      title: "Network & Infrastructure VAPT",
      description: "VLAN, MITM, packet analysis & network security",
      deliverables: ["Network topology mapping", "VLAN security assessment", "MITM attack simulation"],
      timeframe: "3-5 weeks",
      pricing: {
        starter: "₹120k",
        standard: "₹350k",
        enterprise: "Custom"
      }
    },
    {
      icon: Cloud,
      title: "API Security Testing",
      description: "REST/GraphQL API security assessment",
      deliverables: ["API endpoint analysis", "Authentication bypass testing", "Rate limiting assessment"],
      timeframe: "1-3 weeks",
      pricing: {
        starter: "₹60k",
        standard: "₹180k",
        enterprise: "Custom"
      }
    },
    {
      icon: Shield,
      title: "Cloud & Server Hardening",
      description: "Secure configuration review & hardening",
      deliverables: ["Configuration review", "Security baseline implementation", "Compliance gap analysis"],
      timeframe: "2-3 weeks",
      pricing: {
        starter: "₹100k",
        standard: "₹300k",
        enterprise: "Custom"
      }
    },
    {
      icon: Users,
      title: "Red Teaming & Phishing",
      description: "Advanced persistent threat simulation",
      deliverables: ["Social engineering campaigns", "Physical security testing", "Employee awareness assessment"],
      timeframe: "4-8 weeks",
      pricing: {
        starter: "₹200k",
        standard: "₹500k",
        enterprise: "Custom"
      }
    },
    {
      icon: FileCheck,
      title: "Compliance Readiness",
      description: "ISO 27001, PCI-DSS, GDPR advisory",
      deliverables: ["Compliance gap analysis", "Policy documentation", "Audit preparation"],
      timeframe: "3-6 weeks",
      pricing: {
        starter: "₹150k",
        standard: "₹400k",
        enterprise: "Custom"
      }
    }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge variant="secondary" className="mb-4 text-accent border-accent/30">
            <Shield className="w-3 h-3 mr-1" />
            Enterprise Services
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Security Services & Pricing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive cybersecurity solutions with transparent pricing. 
            <span className="text-accent font-semibold"> Enterprise engagements typically start at $10</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="cyber-card hover-lift fade-in group">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {/* Deliverables */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Deliverables:</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 mt-1 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Timeframe */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Timeframe:</span>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {service.timeframe}
                    </Badge>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3 pt-4 border-t border-border/20">
                    <h5 className="font-semibold text-sm">Investment Tiers:</h5>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="text-center">
                        <div className="text-muted-foreground">Starter</div>
                        <div className="font-semibold text-primary">{service.pricing.starter}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">Standard</div>
                        <div className="font-semibold text-accent">{service.pricing.standard}</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">Enterprise</div>
                        <div className="font-semibold">{service.pricing.enterprise}</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enterprise CTA */}
        <div className="mt-16 text-center fade-in">
          <Card className="cyber-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <DollarSign className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Enterprise Engagements</h3>
              <p className="text-muted-foreground mb-6">
                Typical enterprise security assessments start at $10 USD. 
                Custom scoping available for complex environments.
              </p>
              <Button 
                className="cyber-button-accent"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Discuss Enterprise Scope
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;