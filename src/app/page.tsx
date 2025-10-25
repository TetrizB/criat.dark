import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle, Download, Film, Palette, ShoppingCart, Zap } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const getPlaceholderImage = (id: string) => {
  return PlaceHolderImages.find((img) => img.id === id);
};

const productMockup = getPlaceholderImage('reels-bundle-devices');
const founderPortrait = getPlaceholderImage('founder-portrait');
const testimonial1Avatar = getPlaceholderImage('testimonial-1-avatar');
const testimonial2Avatar = getPlaceholderImage('testimonial-2-avatar');
const testimonial3Avatar = getPlaceholderImage('testimonial-3-avatar');

export default function HomePage() {
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

  const testimonials = [
    {
      quote: 'This bundle transformed our social media presence overnight. The quality is unmatched and the variety is incredible.',
      name: 'Alex Johnson',
      title: 'Social Media Manager',
      avatar: testimonial1Avatar,
    },
    {
      quote: 'I was skeptical about the price, but this is the best investment I\'ve made for my brand. The engagement on our reels has skyrocketed.',
      name: 'Samantha Lee',
      title: 'Founder, Luxe Apparel',
      avatar: testimonial2Avatar,
    },
    {
      quote: 'As a freelancer, this saves me countless hours. I can deliver high-end content to my clients without the high-end cost.',
      name: 'David Chen',
      title: 'Content Creator',
      avatar: testimonial3Avatar,
    },
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
  ];
  
  const trustedByLogos = [
    { name: 'DIOR', width: 80, height: 40 },
    { name: 'TOMBOY®', width: 120, height: 40 },
    { name: 'VERSACE', width: 140, height: 40 },
    { name: 'HUGO BOSS', width: 150, height: 40 },
    { name: 'FORBES', width: 100, height: 40 },
  ];

  return (
    <div className="relative min-h-screen w-full text-white">
      <main className="container mx-auto flex flex-col items-center p-4 pt-20 sm:pt-28">
        <div className="z-10 grid w-full max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Left Column: Image */}
          <div className="flex items-center justify-center">
            {productMockup && (
              <Image
                src={productMockup.imageUrl}
                alt={productMockup.description}
                width={600}
                height={400}
                className="rounded-lg shadow-2xl shadow-accent/20"
                data-ai-hint={productMockup.imageHint}
              />
            )}
          </div>

          {/* Right Column: Offer Details */}
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

        {/* Trusted By Section */}
        <section className="z-10 mt-24 w-full max-w-6xl">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-400">
            Trusted by the world's most innovative brands
          </h3>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 md:justify-between">
            {trustedByLogos.map((logo) => (
              <div key={logo.name} className="text-2xl font-bold text-gray-500" style={{width: logo.width}}>
                {logo.name}
              </div>
            ))}
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="z-10 mt-24 w-full max-w-6xl">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-accent sm:text-5xl">{stat.value}</p>
                <p className="mt-2 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="z-10 mt-24 w-full max-w-6xl">
          <h2 className="text-center text-3xl font-bold">What Our Clients Say</h2>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                  <p className="italic">"{testimonial.quote}"</p>
                  <div className="mt-4 flex items-center gap-4">
                    {testimonial.avatar && (
                      <Image
                        src={testimonial.avatar.imageUrl}
                        alt={`Avatar of ${testimonial.name}`}
                        width={40}
                        height={40}
                        className="rounded-full"
                        data-ai-hint={testimonial.avatar.imageHint}
                      />
                    )}
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Founder Section */}
        <section className="z-10 mt-24 w-full max-w-4xl">
            <Card className="bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6">
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="flex justify-center">
                            {founderPortrait && <Image src={founderPortrait.imageUrl} alt={founderPortrait.description} width={150} height={150} className="rounded-full" data-ai-hint={founderPortrait.imageHint} />}
                        </div>
                        <div className="md:col-span-2">
                            <h3 className="text-2xl font-bold">A word from our founder</h3>
                            <p className="mt-4 text-gray-300">"We didn't just create a product; we created a solution. In my years of e-commerce, I saw countless brands struggle with creating high-quality, engaging content consistently. This bundle is our answer. We play the long game, providing value that lasts a lifetime."</p>
                            <p className="mt-4 font-semibold">- Jane Doe, Founder of hyperformance.ai</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
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
    </div>
  );
}