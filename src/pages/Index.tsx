import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Shield, Zap, Search, FileText, CheckCircle, ArrowRight, Download, Calendar, Star } from 'lucide-react';
import abhayPortrait from '@/assets/abhay-portrait.jpg';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import CredentialsSection from '@/components/CredentialsSection';
import CaseStudiesSection from '@/components/CaseStudiesSection';
import ProcessSection from '@/components/ProcessSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Section */}
      <ServicesSection />

      {/* Credentials Section */}
      <CredentialsSection />

      {/* Case Studies Section */}
      <CaseStudiesSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-8 border-t border-border/20">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2024 Abhay Kushwaha. Enterprise-grade cybersecurity solutions.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;