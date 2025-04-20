
import Layout from "@/components/layout/Layout";
import RsvpForm from "@/components/rsvp/RsvpForm";
import { useTranslation } from "react-i18next";

const RSVP = () => {

  const { t } = useTranslation()
  return (
    <Layout>
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <h1 className="text-wedding-darkgray mb-3 fade-in">{t("rsvp")}</h1>
            <p className="text-wedding-gray text-lg max-w-lg mx-auto fade-in-delay-1">
              {t("we_would_like_have_you")}
            </p>
          </div>

          <div className="fade-in-delay-2">
            <RsvpForm />
          </div>

          <div className="mt-5 text-center fade-in-delay-3">
            <p className="text-wedding-gray text-sm">
              If you have any questions, please contact us.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RSVP;
