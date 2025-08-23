import Layout from "@/components/layout/Layout";
import Title from "@/components/layout/Title";
import { useTranslation } from "react-i18next";

const DressCode = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Title title={t("dresscode")} />
       <div className="container mx-auto text-center fade-in-delay-1">
        <img
          src={"/images/dresscode.png"}
          alt={"/images/dresscode.jpg"}
          className="mx-auto md:h-[50vh] md:w-[110vh] h-[20vh] w-[60vh] object-center md:object-center object-cover md:object-cover"
        />
        <p className="whitespace-pre-wrap text-wedding-gray text-base max-w-3xl mx-auto">
          {t("dresscode_description")}
        </p>
      </div>
    </Layout>
  );
};

export default DressCode;