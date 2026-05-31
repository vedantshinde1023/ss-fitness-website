import { useState } from 'react';
import Header from '@/components/Header';
import BeforeAfterSlider from '@/components/BeforeAfterSlider';
import { MapPin, Clock, Phone, Mail, Dumbbell, Users, Zap, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - could integrate with backend or email service
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 relative overflow-hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="space-y-2">
                <div className="divider-gold"></div>
                <p className="text-accent font-semibold text-sm tracking-widest">WELCOME TO SS FITNESS</p>
              </div>
              <h1 className="h1 leading-tight">
                Transform Your Body, <span className="text-accent">Elevate Your Life</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-md">
                Experience premium fitness in Handewadi with state-of-the-art equipment, expert trainers, and a supportive community dedicated to your transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary"
                >
                  Start Your Journey
                </button>
                <button
                  onClick={() => document.getElementById('transformation')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-secondary"
                >
                  See Transformations
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden animate-slide-in-right">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/hero-gym-environment-DbaB3EeohQdzwHGtdaX7ye.webp"
                alt="Premium Gym Environment"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section-spacing bg-secondary/30 relative">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider-gold"></div>
            </div>
            <h2 className="h2 mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive fitness solutions designed for every goal and fitness level
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Dumbbell,
                title: 'Strength Training',
                description: 'Advanced equipment and programs for muscle building and strength development',
              },
              {
                icon: Zap,
                title: 'Cardio & Conditioning',
                description: 'High-intensity cardio workouts to boost endurance and burn calories',
              },
              {
                icon: Users,
                title: 'Personal Training',
                description: 'One-on-one coaching with certified trainers tailored to your goals',
              },
              {
                icon: Award,
                title: 'Group Classes',
                description: 'Yoga, Zumba, and other group fitness classes for all levels',
              },
            ].map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="p-8 bg-card rounded-lg hover:bg-card/80 transition-all duration-300 group cursor-pointer hover:scale-105"
                >
                  <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="h3 text-lg mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section id="transformation" className="section-spacing">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="divider-gold"></div>
            </div>
            <h2 className="h2 mb-4">Real Transformations</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Drag the slider to see the incredible before and after results from our members
            </p>
          </div>

          <div className="flex justify-center">
            <BeforeAfterSlider
              beforeImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/transformation-before-after-concept-bkRwc2CDJoZMtAG7qSa8oZ.webp"
              afterImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/transformation-before-after-concept-bkRwc2CDJoZMtAG7qSa8oZ.webp"
              beforeLabel="Before"
              afterLabel="After"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <div className="divider-gold"></div>
            </div>
            <h2 className="h2 mb-4">What Our Members Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories from real people who transformed their lives at SS Fitness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ajinkya Bhujbal',
                rating: 5,
                text: 'Well managed environment, Friendly behaviour, Excellent equipment, And also Hands down the best gym experience I\'ve ever had! A true 5-star fitness haven.',
              },
              {
                name: 'Shubham Singh',
                rating: 5,
                text: 'More than just a gym, it\'s a community! The management truly understands what fitness enthusiasts need. Highly recommended!',
              },
              {
                name: 'OMKAR ARLEKAR (Om)',
                rating: 5,
                text: 'Best gym with advance machines and very clean environment. Those who are not part of fitness should be careful, but this gym is best for all things.',
              },
              {
                name: 'Atul Palode',
                rating: 5,
                text: 'SS Fitness Gym is a fantastic place to work out. Clean, spacious, with modern machines and friendly trainers. Perfect for all fitness levels.',
              },
              {
                name: 'Jai Nagda',
                rating: 5,
                text: 'I\'ve been a member for six months and love it! Facilities are clean, staff is knowledgeable, and the community atmosphere is motivating.',
              },
              {
                name: 'Navnath Chavan',
                rating: 5,
                text: 'Best gym in Handewadi, known for cleanliness and discipline. Modern equipment with proper safety precautions and kind staff.',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 bg-card rounded-lg hover:shadow-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{testimonial.text}</p>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-2">Overall Rating</p>
            <div className="flex justify-center items-center gap-2">
              <span style={{ fontFamily: '"Playfair Display", serif', fontWeight: 800 }} className="text-4xl text-accent">4.8</span>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i} className="text-2xl text-accent">★</span>
                ))}
              </div>
              <span className="text-muted-foreground ml-2">(117 reviews)</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-spacing">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 md:h-full min-h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/gym-trainer-client-Dbffipx9WqRNwd4Kc2JAL2.webp"
                alt="Personal Training"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <div className="divider-gold mb-4"></div>
                <h2 className="h2 mb-4">About SS Fitness</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                SS Fitness is Handewadi's premier fitness destination, dedicated to helping individuals achieve their transformation goals. With state-of-the-art equipment, certified trainers, and a supportive community, we create an environment where fitness enthusiasts of all levels can thrive.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to cleanliness, safety, and excellence has made us the trusted choice for hundreds of members seeking real results and lasting lifestyle changes.
              </p>
              <div className="pt-4 space-y-3">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Modern, well-maintained equipment</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Expert trainers and supportive community</span>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="w-5 h-5 text-accent flex-shrink-0" />
                  <span>Diverse class schedule for all fitness levels</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Hours Section */}
      <section id="contact" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <div className="mb-8">
                <div className="divider-gold mb-4"></div>
                <h2 className="h2 mb-2">Get Started Today</h2>
                <p className="text-muted-foreground">Fill out the form and our team will contact you shortly</p>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleFormChange}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your fitness goals..."
                    value={formData.message}
                    onChange={handleFormChange}
                    rows={4}
                    className="bg-card border-border text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button type="submit" className="btn-primary w-full">
                  Send Inquiry
                </Button>
              </form>
            </div>

            {/* Info & Hours */}
            <div className="space-y-8">
              <div>
                <div className="divider-gold mb-4"></div>
                <h2 className="h2 mb-6">Visit Us</h2>
              </div>

              {/* Address */}
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    Autadwadi Handewadi<br />
                    Handewadi, Pune<br />
                    Maharashtra 412308
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-3">Hours</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p><span className="font-medium text-foreground">Monday - Saturday:</span> 6:00 AM - 10:00 PM</p>
                    <p><span className="font-medium text-foreground">Tuesday - Wednesday:</span> 6:00 AM - 10:00 PM</p>
                    <p><span className="font-medium text-foreground">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Contact</h3>
                  <p className="text-muted-foreground">Call or WhatsApp us for more information</p>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Follow Us</h3>
                  <p className="text-muted-foreground">
                    Instagram: <a href="https://instagram.com/ss.fitness_club" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">@ss.fitness_club</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary border-t border-border py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-muted-foreground text-sm">
              © 2026 SS Fitness. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm">
              Premium Fitness in Handewadi, Pune
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
