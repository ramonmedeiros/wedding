
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
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-2 fade-in text-6xl md:text-8xl mt-10 font-serif">Kübra & Ramon</h1>
            <p className="text-wedding-darkgray text-lg fade-in-delay-1 pt-2">{t("date")}</p>
            <p className="text-wedding-darkgray text-lg fade-in-delay-1 pt-2">{t("location")}</p>
          </div>

          <div className="container grid md:grid-cols-2 gap-12 items-center fade-in-delay-2">
            <div>
              <p className="mb-4">{t("story_line_one")}</p>
              <p className="mb-4">{t("story_line_two")}</p>
              <p className="mb-4">{t("story_line_three")}</p>
            </div>
            <PhotoSlider />
          </div>
          <iframe
            data-testid="embed-iframe"
            className="md:col-start-2 mt-10 mx-auto"
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/playlist/3r69De7EiLiRNUqM2xeST1?utm_source=generator"
            width="90%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </section>
    </Layout>
  );
};

export default Home;
