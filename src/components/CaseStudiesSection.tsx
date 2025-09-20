import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FileText, TrendingUp, Shield, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      title: "Aptotagger - Move Smart Contract Security",
      industry: "Blockchain/DeFi",
      challenge: "Comprehensive security assessment of Move-based smart contracts and React frontend integration with wallet authentication systems.",
      approach: [
        "Move smart contract static analysis",
        "React application security review", 
        "Wallet authentication flow testing",
        "Integration security assessment"
      ],
      findings: {
        critical: 2,
        high: 5,
        medium: 8,
        low: 12
      },
      impact: "Prevented potential $2.3M in smart contract vulnerabilities. Secured wallet integration preventing authentication bypass.",
      techHighlights: [
        "Move language security patterns",
        "React component security",
        "Web3 wallet integration",
        "Blockchain transaction security"
      ],
      cvssAvg: 7.2
    },
    {
      title: "Enterprise Fintech - Web Application VAPT",
      industry: "Financial Services",
      challenge: "Complete security assessment of customer-facing banking application handling sensitive financial data and transactions.",
      approach: [
        "OWASP Top 10 comprehensive testing",
        "Business logic vulnerability analysis",
        "API security assessment",
        "Authentication mechanism review"
      ],
      findings: {
        critical: 1,
        high: 3,
        medium: 7,
        low: 15
      },
      impact: "Identified SQL injection allowing access to 50k+ customer records. Discovered authentication bypass affecting transaction integrity.",
      techHighlights: [
        "Advanced SQL injection techniques",
        "Authentication bypass methods",
        "API rate limiting vulnerabilities",
        "Business logic flaw exploitation"
      ],
      cvssAvg: 8.1
    },
    {
      title: "Healthcare Network - Infrastructure Pentest",
      industry: "Healthcare",
      challenge: "Network security assessment of healthcare infrastructure including VLAN segmentation and medical device security.",
      approach: [
        "Network topology mapping",
        "VLAN hopping techniques",
        "MITM attack simulation",
        "Medical device security testing"
      ],
      findings: {
        critical: 3,
        high: 6,
        medium: 9,
        low: 8
      },
      impact: "Discovered VLAN misconfiguration allowing access to patient data networks. Identified MITM vulnerabilities in medical device communications.",
      techHighlights: [
        "VLAN hopping exploitation",
        "Packet analysis & manipulation",
        "Medical device protocol security",
        "Network segmentation bypass"
      ],
      cvssAvg: 8.8
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'text-red-500';
      case 'high': return 'text-orange-500';
      case 'medium': return 'text-yellow-500';
      case 'low': return 'text-blue-500';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <section id="case-studies" className="py-24 bg-gradient-to-b from-background to-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 fade-in">
          <Badge variant="secondary" className="mb-4 text-accent border-accent/30">
            <FileText className="w-3 h-3 mr-1" />
            Case Studies
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            Security Success Stories
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real-world engagements demonstrating measurable security improvements and risk reduction.
          </p>
        </div>

        <div className="grid gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="cyber-card hover-lift fade-in">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-2xl mb-2">{study.title}</CardTitle>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {study.industry}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-muted-foreground">Avg CVSS Score</div>
                    <div className="text-2xl font-bold text-red-500">{study.cvssAvg}</div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Challenge */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-orange-500" />
                      Challenge
                    </h4>
                    <p className="text-muted-foreground text-sm">{study.challenge}</p>
                  </div>

                  {/* Approach */}
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Shield className="w-4 h-4 text-primary" />
                      Approach
                    </h4>
                    <ul className="space-y-1">
                      {study.approach.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <ArrowRight className="w-3 h-3 mt-1 text-accent flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Findings */}
                <div>
                  <h4 className="font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-accent" />
                    Security Findings
                  </h4>
                  <div className="grid grid-cols-4 gap-4">
                    {Object.entries(study.findings).map(([severity, count]) => (
                      <div key={severity} className="text-center p-4 rounded-xl bg-background/50 border border-border/20">
                        <div className={`text-2xl font-bold ${getSeverityColor(severity)}`}>{count}</div>
                        <div className="text-xs text-muted-foreground capitalize">{severity}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Impact */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-accent" />
                    Impact & Remediation Value
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">{study.impact}</p>
                  
                  {/* Technical Highlights */}
                  <div>
                    <h5 className="font-medium mb-3 text-sm">Technical Highlights:</h5>
                    <div className="flex flex-wrap gap-2">
                      {study.techHighlights.map((highlight, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center fade-in">
          <Card className="cyber-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <FileText className="w-12 h-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Download Sample VAPT Report</h3>
              <p className="text-muted-foreground mb-6">
                See the quality and depth of our security assessments with a sample penetration testing report.
              </p>
              <Button 
                className="cyber-button-ghost"
                onClick={() => {
                  // This would typically trigger a lead magnet form
                  alert('Sample report download would be gated by email capture form');
                }}
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Sample Report
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;