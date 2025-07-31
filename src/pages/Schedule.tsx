import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";

const events = [
  {
    time: "15-20 February",
    title: "Rio de Janeiro",
    anchor: "rio",
    description: "To kick things off, Ramon and I are heading to Rio for Carnaval, and we’re turning it into a pre-wedding celebration! 🎭🥳\nCarnaval officially begins on Feb 14, but we’ll be arriving on the night of the 15th and staying until the 20th, based at Hotel ibis Copacabana Posto 2.\nSome awesome friends are already in and we’d LOVE for more of you to join! Expect beach days, bloco parties, caipirinhas, and maybe even a night at the Sambódromo.\n\nImportant: Hotels are booking up fast, so we recommend reserving your accommodations as soon as possible!\n\nIf you want a more relaxed vibe after the Carnaval craziness, we definitely suggest staying a few extra days to enjoy some calmer beach time or explore other parts of Brazil — it’s the perfect way to recharge! 🌴🌞\n\nRough plan:\n* Feb 16–19 – blocos, beach, street parties, and general good chaos\n* Feb 20 – farewell breakfast near the hotel\n\nWe seriously can’t wait to celebrate with you all and this is just the beginning! 💕\nLet’s make it unforgettable! 🌞💃🕺\n"
  },
  {
    time: "21-25 February",
    title: "Our family time",
    anchor: "family-time",
    description: "We will keep with our parents the week before. Unfortunately we will not be available to enjoy with you guys."
  },
  {
    time: "26 February",
    title: "Pre-wedding",
    anchor: "pre-wedding",
    description: "Let's meet 1 day before the wedding, have a meal and some drinks together, so we can kickoff the party mode"
  },
];

export default function Schedule() {
  const { t } = useTranslation();

  return (
    <Layout>
      <div className="container mx-auto pt-20 pb-10 text-center">
        <h2 className="text-wedding-darkgray fade-in font-serif">{t("schedule")}</h2>
        <p className="mt-5 whitespace-pre-wrap text-wedding-gray text-base max-w-4xl mx-auto fade-in-delay-1 pt-7">
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
          <div key={index} id={item.anchor}>
            <h1 className="group flex w-full flex-1 items-center justify-between p-4 text-left text-wedding-darkgray hover:bg-wedding-offwhite/50">
              <span className="text-base font-medium md:text-base">{item.title}</span>
            </h1>
            <h2 className="px-4 pb-4 pt-2 overflow-hidden text-wedding-gray text-sm">
              {item.description.split('\n').map((line, i) => (
                    <p key={i}>
                      {line}
                    </p>
                  ))}
            </h2>
          </div>
        ))}
      </div>
    </Layout>
  );
}
