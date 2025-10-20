import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";



export default function Schedule() {
  const { t } = useTranslation();

  const events = [
    {
      time: t("rio_time"),
      title: t("rio_title"),
      anchor: "rio",
      location: t("rio_location"),
      description: t("rio_description"),
    },
    {
      time: t("family_time"),
      title: t("family_title"),
      anchor: "family-time",
      description: t("family_description"),
    },
    {
      time: t("prewedding_time"),
      title: t("prewedding_title"),
      anchor: "pre-wedding",
      location: t("prewedding_location"),
      description: t("prewedding_description"),
      map: '<iframe src="https://www.google.com/maps/d/embed?mid=1g1tqB_X8AJj4nnkq0oIYDadT3zi79U8&ehbc=2E312F" width="640" height="480"></iframe>'
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto pt-20 pb-10 text-center">
        <h2 className="text-wedding-darkgray fade-in font-serif">{t("schedule")}</h2>
        <p className="mt-5 whitespace-pre-wrap text-wedding-gray text-base max-w-3xl mx-auto fade-in-delay-1 pt-7">
          {t("schedule_description")}
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-3xl flex justify-around items-center mt-10">
        {/* Horizontal Line */}
        <div className="absolute top-9 left-0 right-0 h-0.5 -translate-y-1/2 bg-gray-300 -z-10" />
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-2 bg-white px-2">
              <a className="text-base font-semibold" href={`#${event.anchor}`}>{event.title}</a>
            </div>
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="mt-2 bg-white px-2">
              <p className="text-sm text-gray-500">{event.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-20 md:px-80 fade-in-delay-2">
        {events.map((item, index) => (
          <div className="font-semibold text-wedding-darkgray pb-5" key={index} id={item.anchor}>
            <span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </span>
            {item.location && <h4 className="pt-2 pb-2 font-semibold">{t("location_stay")} {item.location}</h4>}
            {item.map && (
              <div
                className="relative h-0 overflow-hidden pt-[75%] [&>iframe]:absolute [&>iframe]:top-0 [&>iframe]:left-0 [&>iframe]:h-full [&>iframe]:w-full"
                dangerouslySetInnerHTML={{ __html: item.map }}
              />
            )}
            <span className="wrap-anywhere whitespace-pre-wrap pb-4 pt-2 font-light text-wedding-darkgray text-sm">{item.description}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
