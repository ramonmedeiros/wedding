
import Layout from "@/components/layout/Layout";
import PhotoSlider from "@/components/home/PhotoSlider";

const Home = () => {
  // Sample photos - in a real app, these would come from your assets or a CMS
  const photos = [
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05",
      alt: "Couple at sunset"
    },
    {
      url: "https://images.unsplash.com/photo-1500673922987-e212871fec22",
      alt: "Engagement photo in nature"
    },
    {
      url: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Wedding venue"
    },
  ];

  return (
    <Layout>
      <PhotoSlider photos={photos} />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-2 fade-in">Kübra & Ramon </h1>
            <p className="text-wedding-gray text-lg italic fade-in-delay-1">February, 27, 2026 • San Francisco, CA</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center fade-in-delay-2">
            <div>
              <h2 className="text-2xl mb-4 font-light text-wedding-darkgray">Our Story</h2>
              <p className="mb-4">
                We met during a rainy evening in November 2018 at a local coffee shop. Sarah was working on her laptop while John was meeting a friend who never showed up. Fate had other plans that day.
              </p>
              <p className="mb-4">
                After three years of adventures, travels, and building a life together, John proposed during a surprise weekend getaway to the mountains. The rest, as they say, is history.
              </p>
              <p>
                We are excited to celebrate our special day with our closest friends and family. Thank you for being part of our journey.
              </p>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img 
                src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05" 
                alt="Sarah and John" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-wedding-offwhite">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl mb-8 font-light text-wedding-darkgray">Join Us for Our Special Day</h2>
          <p className="mb-8">
            We're excited to celebrate our wedding with you. Please RSVP by August 15, 2025.
          </p>
          <a 
            href="/rsvp" 
            className="inline-block px-8 py-3 bg-wedding-darkgray text-white rounded-md hover:bg-black transition-colors duration-300"
          >
            RSVP Now
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
