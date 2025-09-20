import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Shield, Zap } from 'lucide-react';
import abhayPortrait from '@/assets/abhay-portrait.jpg';
import HackingGame from './HackingGame';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden animated-bg cyber-grid">
      {/* Matrix Background Effect */}
      <div className="matrix-bg"></div>
      
      {/* Enhanced Animated Network Background */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating Data Particles */}
        <div className="absolute top-20 left-20 w-3 h-3 bg-primary rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-accent rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-32 left-40 w-2.5 h-2.5 bg-primary rounded-full animate-hologram"></div>
        <div className="absolute bottom-20 right-20 w-2 h-2 bg-accent rounded-full animate-neon-flicker"></div>
        <div className="absolute top-1/2 left-1/4 w-1.5 h-1.5 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse"></div>
        
        {/* Animated Connection Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0"/>
              <stop offset="50%" stopColor="hsl(var(--accent))" stopOpacity="0.6"/>
              <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <line x1="20%" y1="20%" x2="80%" y2="40%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-data-stream" />
          <line x1="80%" y1="40%" x2="40%" y2="80%" stroke="url(#lineGradient2)" strokeWidth="1" className="animate-data-stream" style={{animationDelay: '1s'}} />
          <line x1="40%" y1="80%" x2="20%" y2="20%" stroke="url(#lineGradient1)" strokeWidth="1" className="animate-data-stream" style={{animationDelay: '2s'}} />
          <line x1="60%" y1="10%" x2="10%" y2="60%" stroke="url(#lineGradient2)" strokeWidth="0.8" className="animate-data-stream" style={{animationDelay: '0.5s'}} />
        </svg>
        
        {/* Cyber Scan Lines */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent animate-cyber-scan"></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent animate-cyber-scan" style={{animationDelay: '1.5s'}}></div>
        </div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center fade-in">
          {/* Enhanced Profile Image */}
          <div className="mb-8 flex justify-center">
            <div className="relative cyber-border">
              <img 
                src={abhayPortrait} 
                alt="Abhay Kushwaha - Cybersecurity Expert"
                className="w-36 h-36 rounded-full border-4 border-primary/50 shadow-cyber hover:shadow-cyber-strong transition-all duration-500 hover:scale-110 status-online"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-hologram"></div>
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 hover:opacity-30 transition-opacity duration-500 blur-md"></div>
            </div>
          </div>

          {/* Enhanced Status Badge */}
          <Badge variant="secondary" className="mb-6 text-accent border-accent/40 bg-accent/10 backdrop-blur-sm animate-neon-flicker">
            <Shield className="w-3 h-3 mr-1 animate-pulse" />
            Available for Enterprise Engagements
          </Badge>

          {/* Epic Main Headline with Glitch Effect */}
          <h1 className="text-6xl md:text-8xl font-bold mb-8 glow-text glitch-text" data-text="Abhay Kushwaha">
            Abhay Kushwaha
          </h1>
          
          <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6 terminal-text">
            Cybersecurity — VAPT Expert
          </h2>

          {/* Location & Contact */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 text-muted-foreground">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Pune, Maharashtra</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span> abhilokaman2000@gmail.com</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-muted-foreground rounded-full"></div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91-9519165002</span>
            </div>
          </div>

          {/* Enhanced Value Proposition */}
          <p className="text-xl md:text-3xl mb-16 max-w-4xl mx-auto leading-relaxed">
            Delivering enterprise-grade VAPT, remediation & compliance readiness — 
            <span className="glow-text font-semibold glitch-text" data-text="trusted by startups and enterprises"> trusted by startups and enterprises</span>
          </p>

          {/* CTAs */}
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="cyber-button-primary text-lg px-8 py-6 hover-lift"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Shield className="w-5 h-5 mr-2" />
              Request Security Assessment
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="cyber-button-ghost text-lg px-8 py-6 hover-lift"
              onClick={() => document.getElementById('case-studies')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Zap className="w-5 h-5 mr-2" />
              View Case Studies
            </Button>
          </div>

          {/* Interactive Hacking Game */}
          <div className="mt-16 flex justify-center">
            <HackingGame />
          </div>

          {/* Trust Indicators */}
          <div className="mt-8 pt-8 border-t border-border/20">
            <p className="text-sm text-muted-foreground mb-4">Trusted by enterprises & startups</p>
            <div className="flex justify-center items-center gap-8 text-xs text-muted-foreground">
              <span>CEH Certified</span>
              <span>•</span>
              <span>Security+</span>
              <span>•</span>
              <span>ISO 27001 Ready</span>
              <span>•</span>
              <span>$10k+ Engagements</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;