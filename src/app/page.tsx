import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Download, Film, Palette, ShoppingCart, Zap, Flame } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import Link from 'next/link';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const productMockup = getPlaceholderImage('reels-bundle-devices');
const founderPortrait = getPlaceholderImage('founder-portrait');
const testimonial1Avatar = getPlaceholderImage('testimonial-1-avatar');
const diorLogo = getPlaceholderImage('dior-logo');
const tomboyLogo = getPlaceholderImage('tomboy-logo');


export default function HomePage() {
  const navLinks = ['Homepage', 'Products', 'Testimonial', 'Portfolio', 'About Us', 'Contact Us'];

  const features = [
    { icon: Zap, text: 'Entrega Instantânea por Link' },
    { icon: Palette, text: '100% Customizável' },
    { icon: Film, text: 'Editável no Canva' },
    { icon: Download, text: 'Plug & Play' },
  ];

  const stats = [
    { value: '$1.2M', label: 'revenue generated for clients in 2023' },
    { value: '$350K', label: 'ad spend for clients in 2023' },
    { value: '$58K', label: 'record revenue from a single creative' },
    { value: '8,000+', label: 'creatives produced in 2023' },
  ];

  const faqs = [
    {
      question: 'Are the Canva templates editable?',
      answer: 'Yes! Everything is 100% editable in the free version of Canva. You can change colors, fonts, text, and add your own logo to match your brand.',
    },
    {
      question: 'How do I receive the digital files?',
      answer: 'Immediately after your purchase, you will receive an email with a secure link to download all the files.',
    },
    {
      question: 'What if I\'m not satisfied?',
      answer: 'We offer a 14-day hassle-free return policy. If you\'re not happy for any reason, just contact us for a full refund. Fewer than 1% of clients ever request one!',
    },
    {
      question: 'Is this a one-time payment?',
      answer: 'Absolutely. You pay once and get lifetime access to all 18,000+ reels and any future updates to this bundle.',
    },
    {
      question: 'Is there support if I need help?',
      answer: 'Yes, we have a dedicated support team ready to help you with any questions you might have. We\'re here to ensure you get the most out of your purchase.'
    }
  ];
  
  const allInOneFeatures = [
    'Static Ad', 'Story & Reels', 'Editable in Canva', 'Plug & Play', '100% Customizable', 'Instant Delivery'
  ];

  return (
    <div className="relative min-h-screen w-full text-white">
      {/* Header */}
      <header className="z-20 fixed top-0 left-0 right-0 bg-background/80 backdrop-blur-sm">
        <div className="bg-red-600 text-center py-2 text-sm font-bold flex items-center justify-center">
            <Flame className="mr-2 h-4 w-4" /> -5% with code: PERFORMANCE5
        </div>
        <nav className="container mx-auto flex items-center justify-between p-4">
            <div className="text-xl font-bold">hyperformance.ai</div>
            <div className="hidden md:flex items-center space-x-6">
                {navLinks.map(link => (
                    <Link key={link} href="#" className="text-sm hover:text-accent transition-colors">
                        {link}
                    </Link>
                ))}
            </div>
            <Button variant="outline" size="sm" className="hidden md:block">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Zap className="h-5 w-5"/>
            </Button>
        </nav>
      </header>
      
      <main className="container mx-auto flex flex-col items-center px-4 pt-40 sm:pt-48">
        {/* Product Section */}
        <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="flex items-center justify-center">
            {productMockup && (
              <Image
                src={productMockup.imageUrl}
                alt={productMockup.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-accent/20"
                data-ai-hint={productMockup.imageHint}
                priority
              />
            )}
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              18.000+ Luxury Aesthetic Reels Bundle
            </h1>
            <p className="mt-4 text-lg text-gray-300">
              Scroll-stopping visuals made to trend. Stand out and position your brand as a leader.
            </p>
            <div className="my-6 flex items-baseline gap-4">
              <span className="text-5xl font-bold text-accent">$18</span>
              <span className="text-2xl text-gray-400 line-through">$109.90</span>
            </div>
            <div className="flex flex-col gap-4">
              <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-lg font-bold h-12">
                <ShoppingCart className="mr-2" />
                ADD TO CART
              </Button>
              <Button size="lg" variant="outline" className="w-full bg-purple-600 hover:bg-purple-700 border-purple-600 text-lg font-bold h-12">
                Buy with Shop Pay
              </Button>
            </div>
            <p className="mt-4 text-sm text-center text-gray-400">
              Enjoy 14 days of hassle-free returns — with fewer than 1% of clients ever requesting a refund.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 text-sm">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <feature.icon className="h-5 w-5 text-accent" />
                  <span>{feature.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Authority and Results Section */}
        <section className="z-10 mt-24 w-full max-w-6xl text-center">
          <h2 className="text-3xl font-bold">Luxury Travel Reels for Tiktok</h2>
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* All-in-One System Section */}
        <section className="z-10 mt-24 w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold">An All-in-One System, Not Just Templates</h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto">This is a complete creative toolkit designed to elevate your content strategy. We provide everything you need to produce stunning visuals that capture attention and drive engagement.</p>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {allInOneFeatures.map((feature, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm p-4 flex items-center gap-3">
                 <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                 <span className="font-semibold">{feature}</span>
              </Card>
            ))}
          </div>
        </section>

        {/* Founder Authority Section */}
        <section className="z-10 mt-24 w-full max-w-4xl">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="flex justify-center">
                            {founderPortrait && <Image src={founderPortrait.imageUrl} alt={founderPortrait.description} width={150} height={150} className="rounded-full" data-ai-hint={founderPortrait.imageHint} />}
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold">Why work with an expert from hyperformance?</h3>
                            <p className="mt-4 text-gray-300">"We didn't just create a product; we created a solution. In my years of e-commerce, I saw countless brands struggle with creating high-quality, engaging content consistently. This bundle is our answer. We play the long game, providing value that lasts a lifetime."</p>
                            <p className="mt-4 font-semibold">- Jane Doe, Founder of hyperformance.ai</p>
                            <Button className="mt-6">Contact us</Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </section>
        
        {/* Social Proof & Portfolio Section */}
        <section className="z-10 mt-24 w-full max-w-6xl">
            <h2 className="text-center text-3xl font-bold">Trusted By The Best</h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <Card className="bg-card/80 backdrop-blur-sm">
                    <CardContent className="pt-6">
                        <div className="flex justify-center mb-4">
                           {diorLogo && <Image src={diorLogo.imageUrl} alt={diorLogo.description} width={100} height={50} data-ai-hint={diorLogo.imageHint} />}
                        </div>
                        <p className="italic text-center">"This bundle transformed our social media presence overnight. The quality is unmatched and the variety is incredible."</p>
                        <div className="mt-4 flex items-center gap-4 justify-center">
                            {testimonial1Avatar && <Image src={testimonial1Avatar.imageUrl} alt={`Avatar`} width={40} height={40} className="rounded-full" data-ai-hint={testimonial1Avatar.imageHint} />}
                            <div>
                                <p className="font-semibold">Alex Johnson</p>
                                <p className="text-sm text-gray-400">Social Media Manager, DIOR</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <div className="flex flex-col gap-8">
                  <Card className="bg-card/80 backdrop-blur-sm p-6 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Recent Work: DIOR</h3>
                      {diorLogo && <Image src={diorLogo.imageUrl} alt={diorLogo.description} width={80} height={40} data-ai-hint={diorLogo.imageHint} />}
                  </Card>
                  <Card className="bg-card/80 backdrop-blur-sm p-6 flex items-center justify-between">
                      <h3 className="text-xl font-bold">Recent Work: TOMBOY®</h3>
                       {tomboyLogo && <Image src={tomboyLogo.imageUrl} alt={tomboyLogo.description} width={120} height={40} data-ai-hint={tomboyLogo.imageHint} />}
                  </Card>
                </div>
            </div>
        </section>


        {/* FAQ Section */}
        <section className="z-10 my-24 w-full max-w-4xl">
          <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="mt-8 w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card/50 backdrop-blur-sm border-border rounded-lg mb-2 px-4">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-300">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

      </main>

      {/* Footer */}
      <footer className="z-10 w-full border-t border-border/50 bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-8">
          <div>
            <h3 className="font-bold text-lg">hyperformance.ai</h3>
            <p className="text-sm text-gray-400 mt-2">Elevating brands with scroll-stopping visuals.</p>
          </div>
          <div>
            <h4 className="font-semibold">Navigate</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              {navLinks.slice(0,4).map(link => <li key={link}><Link href="#" className="hover:text-accent">{link}</Link></li>)}
            </ul>
          </div>
           <div>
            <h4 className="font-semibold">Company</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              {navLinks.slice(4).map(link => <li key={link}><Link href="#" className="hover:text-accent">{link}</Link></li>)}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-300">
              <li><Link href="#" className="hover:text-accent">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-accent">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 py-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} hyperformance.ai. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
