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
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const services = [
    {
      icon: Dumbbell,
      title: 'Strength Training',
      description: 'Advanced equipment and programs for muscle building and strength development',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/strength-training-service-VGugjj27JhvF3zui86Nx5u.webp',
    },
    {
      icon: Zap,
      title: 'Cardio & Conditioning',
      description: 'High-intensity cardio workouts to boost endurance and burn calories',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/cardio-conditioning-service-TqNJGYNGqELZX8ksxK2qVK.webp',
    },
    {
      icon: Users,
      title: 'Personal Training',
      description: 'One-on-one coaching with certified trainers tailored to your goals',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/personal-training-service-S3rmxPY63iNzTeohkWVP6M.webp',
    },
    {
      icon: Award,
      title: 'Group Classes',
      description: 'Yoga, Zumba, and other group fitness classes for all levels',
      image: 'https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/group-classes-service-Qx8zR2V9evxkJzCmZLuQvp.webp',
    },
  ];

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
            {services.map((service, idx) => {
              const Icon = service.icon;
              return (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-lg h-96 cursor-pointer"
                >
                  {/* Background Image */}
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent group-hover:from-background/80 group-hover:via-background/50 transition-all duration-300"></div>
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/40 transition-colors">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="h3 text-lg mb-2 text-white">{service.title}</h3>
                    <p className="text-muted-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {service.description}
                    </p>
                  </div>
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
              beforeImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/transformation-before-overweight-juEeXAfCizjG8nVFEW399L.webp"
              afterImage="https://d2xsxph8kpxj0f.cloudfront.net/310519663554181221/PRJv46fnXuJZ7dsCcY5qhK/transformation-before-fit-man-PS6CUBwcoh5ZYESoKfvvZ7.webp"
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
                SS Fitness is a premium fitness center located in Handewadi, dedicated to transforming lives through fitness. With state-of-the-art equipment, expert trainers, and a supportive community, we provide the perfect environment for your fitness journey.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're a beginner or an advanced athlete, our comprehensive programs and personalized coaching ensure you achieve your fitness goals while enjoying the process.
              </p>
              <div className="flex gap-6 pt-4">
                <div>
                  <p className="text-3xl font-bold text-accent">500+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">15+</p>
                  <p className="text-sm text-muted-foreground">Expert Trainers</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-accent">1000+</p>
                  <p className="text-sm text-muted-foreground">Transformations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-spacing bg-secondary/30">
        <div className="container">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="divider-gold"></div>
            </div>
            <h2 className="h2 mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to start your transformation? Contact us today or visit our gym in Handewadi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">Handewadi, Pune, Maharashtra</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91 (Your Phone Number)</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <p className="text-muted-foreground">info@ssfitness.com</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Hours</h3>
                  <p className="text-muted-foreground">Mon - Sun: 6:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                  placeholder="+91 XXXXX XXXXX"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/50 border-t border-border py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">SS Fitness</h3>
              <p className="text-muted-foreground text-sm">Premium fitness center in Handewadi dedicated to your transformation.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#services" className="hover:text-accent transition">Services</a></li>
                <li><a href="#transformation" className="hover:text-accent transition">Transformations</a></li>
                <li><a href="#about" className="hover:text-accent transition">About</a></li>
                <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Strength Training</li>
                <li>Cardio & Conditioning</li>
                <li>Personal Training</li>
                <li>Group Classes</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <p className="text-muted-foreground text-sm">Connect with us on social media for daily fitness tips and updates.</p>
            </div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 SS Fitness. All rights reserved. | Premium Fitness Center in Handewadi</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
