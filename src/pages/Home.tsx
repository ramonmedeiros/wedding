
import Layout from "@/components/layout/Layout";
import PhotoSlider from "@/components/home/PhotoSlider";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="relative w-full md:h-[80vh] h-[60vh] overflow-hidden bg-wedding-offwhite">
      <img
        src={"/images/colombia.jpg"}
        alt={"/images/colombia.jpg"}
        className="w-full md:h-[80vh] h-[60vh] md:object-[57%_42%] object-[40%_41%] object-center md:object-center object-cover md:object-cover "
      />
      </div>
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-2 fade-in text-6xl md:text-8xl lmt-10">Kübra & Ramon</h1>
            <p className="text-wedding-darkgray text-lg fade-in-delay-1 pt-2">{t("date")}</p>
            <p className="text-wedding-darkgray text-lg fade-in-delay-1 pt-2">{t("location")}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center fade-in-delay-2">
            <div>
              <p className="mb-4">
                We’re so happy you’re here. As you probably know by now… we’re getting married! After sharing so many memories, laughs, and late-night snacks together, we’re ready to take the next step and say “I do”, and we couldn’t imagine doing it without the love and support of our favorite people.
              </p>
              <p className="mb-4">
                This website is your go-to spot for all the details about our big day. You’ll find info about the ceremony and reception, travel and accommodations, the schedule, and a few other fun things along the way. We’ve created it with love (and a little bit of coffee), and we hope it helps make planning your trip as easy and exciting as possible.
              </p>
              <p>
                Thank you from the bottom of our hearts for being part of our lives. We can’t wait to celebrate, dance, and make new memories with you all.
              </p>
            </div>
            <PhotoSlider />
          </div>
        </div>
      </section>

      <section className="py-20 bg-wedding-offwhite">
        <div className="container mx-auto text-center max-w-2xl">
          <h2 className="text-2xl mb-8 font-light text-wedding-darkgray">{t("join_special_day")}</h2>
          <p className="mb-8">
            {t("please_rsvp")}
          </p>
          <a href="/rsvp" className="inline-block px-8 py-3 bg-wedding-darkgray text-white rounded-md hover:bg-black transition-colors duration-300">{t("rsvp_now")}</a>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
