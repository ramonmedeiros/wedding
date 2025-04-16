
import Layout from "@/components/layout/Layout";
import ScheduleItem from "@/components/schedule/ScheduleItem";

const Schedule = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-3 fade-in">Wedding Day Schedule</h1>
            <p className="text-wedding-gray text-lg max-w-lg mx-auto fade-in-delay-1">
              September 15, 2025 • San Francisco, CA
            </p>
          </div>
          
          <div className="mt-16 fade-in-delay-2">
            <div className="mb-12">
              <h2 className="text-2xl mb-6 font-light text-wedding-darkgray">Ceremony</h2>
              <div className="space-y-6">
                <ScheduleItem 
                  time="4:00 PM" 
                  title="Guest Arrival" 
                  description="Guests are welcome to arrive and be seated in the garden." 
                />
                <ScheduleItem 
                  time="4:30 PM" 
                  title="Ceremony Begins" 
                  description="The ceremony will take place in the rose garden." 
                  highlight
                />
                <ScheduleItem 
                  time="5:15 PM" 
                  title="Cocktail Hour" 
                  description="Enjoy drinks and hors d'oeuvres on the terrace." 
                />
              </div>
            </div>
            
            <div className="mb-12">
              <h2 className="text-2xl mb-6 font-light text-wedding-darkgray">Reception</h2>
              <div className="space-y-6">
                <ScheduleItem 
                  time="6:30 PM" 
                  title="Dinner" 
                  description="A seated dinner will be served in the main hall." 
                />
                <ScheduleItem 
                  time="8:00 PM" 
                  title="First Dance" 
                  highlight
                />
                <ScheduleItem 
                  time="8:15 PM" 
                  title="Dancing & Celebration" 
                  description="Join us on the dance floor for a night of celebration." 
                />
                <ScheduleItem 
                  time="11:00 PM" 
                  title="Farewell" 
                  description="Official end of the festivities." 
                />
              </div>
            </div>
            
            <div className="mt-16 p-6 bg-wedding-offwhite rounded-lg text-center fade-in-delay-3">
              <h3 className="text-xl mb-3 font-light text-wedding-darkgray">Venue Information</h3>
              <p className="text-wedding-gray mb-2">
                Golden Gate Park Conservatory
              </p>
              <p className="text-wedding-gray mb-2">
                100 John F Kennedy Dr, San Francisco, CA 94118
              </p>
              <p className="text-wedding-gray text-sm mt-4">
                Parking is available on-site. Shuttle service will be available from select hotels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Schedule;
