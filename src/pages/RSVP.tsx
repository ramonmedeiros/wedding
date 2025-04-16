
import Layout from "@/components/layout/Layout";
import RsvpForm from "@/components/rsvp/RsvpForm";

const RSVP = () => {
  return (
    <Layout>
      <div className="container mx-auto py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-3 fade-in">RSVP</h1>
            <p className="text-wedding-gray text-lg max-w-lg mx-auto fade-in-delay-1">
              We would be delighted to have you join us on our special day. Please let us know if you can make it.
            </p>
          </div>
          
          <div className="fade-in-delay-2">
            <RsvpForm />
          </div>
          
          <div className="mt-16 text-center fade-in-delay-3">
            <p className="text-wedding-gray text-sm">
              If you have any questions, please contact us at <a href="mailto:sarahandjohn@example.com" className="text-wedding-darkgray hover:underline">sarahandjohn@example.com</a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RSVP;
