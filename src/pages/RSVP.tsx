import Layout from "@/components/layout/Layout";
import Title from "@/components/layout/Title";
import RsvpForm from "@/components/rsvp/RsvpForm";
import { useTranslation } from "react-i18next";

const RSVP = () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <Title title={t("rsvp")} description={t("please_rsvp")} />
      <div className="container mx-auto max-w-4xl mx-auto fade-in-delay-2">
        <RsvpForm />
      </div>
    </Layout>
  );
};

export default RSVP;
