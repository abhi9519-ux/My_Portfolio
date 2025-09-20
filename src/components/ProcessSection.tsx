import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, Shield, Zap, FileText, CheckCircle, ArrowRight } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      title: "1. Reconnaissance",
      description: "Information gathering and attack surface mapping",
      activities: [
        "Passive reconnaissance & OSINT",
        "Subdomain enumeration",
        "Technology stack identification",
        "Attack surface analysis"
      ],
      timeline: "1-2 days"
    },
    {
      icon: Shield,
      title: "2. Vulnerability Assessment", 
      description: "Systematic vulnerability identification and classification",
      activities: [
        "Automated scanning with manual verification",
        "OWASP Top 10 comprehensive testing",
        "Business logic vulnerability analysis",
        "Configuration security review"
      ],
      timeline: "3-5 days"
    },
    {
      icon: Zap,
      title: "3. Exploitation",
      description: "Controlled exploitation to demonstrate impact",
      activities: [
        "Proof-of-concept development",
        "Privilege escalation attempts",
        "Data access validation",
        "Impact assessment"
      ],
      timeline: "2-4 days"
    },
    {
      icon: FileText,
      title: "4. Detailed Reporting",
      description: "Comprehensive documentation with CVSS scoring",
      activities: [
        "Executive summary for leadership",
        "Technical findings with CVSS scores",
        "Prioritized remediation roadmap",
        "Proof-of-concept scripts and evidence"
      ],
      timeline: "2-3 days"
    },
    {
      icon: CheckCircle,
      title: "5. Remediation Retest",
      description: "Validation of implemented security fixes",
      activities: [
        "Verification of remediation efforts",
        "Regression testing",
        "Updated security posture assessment",
        "Final compliance verification"
      ],
      timeline: "1-2 days"
    }
  ];

  const deliverables = [
    {
      title: "Executive Summary",
      description: "High-level overview for C-suite and management",
      audience: "Leadership"
    },
    {
      title: "Technical Report",
      description: "Detailed technical findings with evidence",
      audience: "IT Teams"
    },
    {
      title: "CVSS Scoring",
      description: "Industry-standard vulnerability scoring",
      audience: "Security Teams"
    },
    {
      title: "Remediation Guide",
      description: "Step-by-step fix instructions with priorities",
      audience: "Developers"
    },
    {
      title: "PoC Scripts",
      description: "Proof-of-concept code for validation",
      audience: "Technical Teams"
    },
    {
      title: "Compliance Mapping",
      description: "Alignment with regulatory requirements",
      audience: "Compliance"
    }
  ];

  return (
    <section id="process" className="py-24 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge variant="secondary" className="mb-4 text-accent border-accent/30">
            <Shield className="w-3 h-3 mr-1" />
            VAPT Process
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            5-Step Security Assessment
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Systematic approach ensuring comprehensive coverage and actionable results for your security team.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid gap-8 mb-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="cyber-card hover-lift fade-in">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-3 gap-8 items-start">
                    {/* Step Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold">{step.title}</h3>
                          <Badge variant="outline" className="mt-1 border-accent/30 text-accent">
                            {step.timeline}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Activities */}
                    <div className="md:col-span-2">
                      <h4 className="font-semibold mb-4">Key Activities:</h4>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-background/50 border border-border/20">
                            <ArrowRight className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Deliverables */}
        <div className="fade-in">
          <h3 className="text-3xl font-bold text-center mb-12 glow-text">
            Assessment Deliverables
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((deliverable, index) => (
              <Card key={index} className="cyber-card hover-lift">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">{deliverable.title}</CardTitle>
                  <Badge variant="secondary" className="w-fit text-xs">
                    {deliverable.audience}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{deliverable.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process CTA */}
        <div className="mt-16 text-center fade-in">
          <Card className="cyber-card max-w-3xl mx-auto">
            <CardContent className="p-8">
              <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Ready to Strengthen Your Security?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our proven 5-step process ensures comprehensive coverage and actionable results. 
                Most assessments are completed within 2-4 weeks with immediate remediation guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  className="cyber-button-primary px-8 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Start Security Assessment
                </button>
                <button 
                  className="cyber-button-ghost px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                  onClick={() => {
                    // Schedule consultation
                    window.open('https://calendly.com/abhilokaman2000', '_blank');
                  }}
                >
                  Schedule Consultation
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;