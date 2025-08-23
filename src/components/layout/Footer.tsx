
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="py-12 bg-wedding-offwhite mt-10">
      <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-wedding-gray text-sm">
            {t("our_wedding")}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-wedding-gray text-sm hover:text-wedding-darkgray transition-colors">
          <a href="/" >
            {t("home")}
          </a>
          <a href="/schedule" >
            {t("schedule_navbar")}
          </a>
          <a href="/rsvp" >
            {t("rsvp")}
          </a>
          <a href="/dresscode">
            {t("dresscode")}
          </a>
          <a href="/faq">
            {t("faq")}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
