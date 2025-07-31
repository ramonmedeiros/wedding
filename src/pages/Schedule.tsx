import Layout from "@/components/layout/Layout";
import { useTranslation } from "react-i18next";

const events = [
  {
    time: "15-20 February",
    title: "Rio - Carnaval",
    anchor: "rio",
    location: "Copacabana & Ipanema (see map)",
    description: "We’re kicking off our wedding vacation with one of the world’s most iconic celebrations—Carnival in Rio!\nJoin us for sun, samba, and unforgettable moments as we dive into the heart of Brazilian culture.\n\nCarnival officially begins on February 14, but we’ll be arriving the night of February 15 and staying until February 20, based in Copacabana at the Hotel ibis Copacabana Posto 2—right by the beach.\n\nWhile most of the biggest Carnival parties and blocos happen in Downtown Rio (Centro), getting there is easy—Uber is safe, reliable, and affordable, so you’ll be able to go back and forth without hassle.\n\nExpect beach days, bloco parties (street parades), flowing caipirinhas, and maybe even a night at the legendary Sambódromo.🌴🍹🌞\n\n✨ What to Expect:\nFeb 16–19 – Blocos, beach, street parties, and beautiful chaos\nFeb 19 – Group dinner to unwind and catch up\n\nCome for the dancing, stay for the memories. Whether you're down for the full Carnival experience or just want to enjoy the vibes by the beach, we can't wait to celebrate with you. 🌞💃🕺",
  },
  {
    time: "21-25 February",
    title: "Family time",
    anchor: "family-time",
    description: "After the high energy of Carnival, we’re setting aside some quiet time for our families to connect before the big day.\nSince many of our loved ones haven’t had the chance to meet yet, we’ll be spending a few days in Campinas with both sides of the family.\n\nThis time is especially important to us, and we’re so excited to see our families come together.\n\nWe’ll be off the grid (just a bit!) during this period, focusing on family time before the celebrations continue.\n That said, we’ll still be keeping an eye on the group chats and, if the opportunity arises, we might join you for a spontaneous hangout or two!"
  },
  {
    time: "26 February",
    title: "Pre-wedding",
    anchor: "pre-wedding",
    location: "Campinas - São Paulo (see map)",
    description: "Details coming soon. Stay tuned"
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
          <div className="font-semibold text-wedding-darkgray pb-5" key={index} id={item.anchor}>
            <span>
              <h3 className="text-xl font-semibold">{item.title}</h3>
            </span>
            {item.location && <h4 className="pt-2 pb-2 font-semibold">Location to stay at: {item.location}</h4>}
            <span className="wrap-anywhere whitespace-pre-wrap pb-4 pt-2 font-light text-wedding-darkgray text-sm">{item.description}</span>
          </div>
        ))}
      </div>
    </Layout>
  );
}
