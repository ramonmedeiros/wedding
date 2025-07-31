import Layout from "@/components/layout/Layout";
import Title from "@/components/layout/Title";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion } from "radix-ui";
import { useTranslation } from "react-i18next";

const events = [
    {
      time: "15-20 February",
      title: "Rio de Janeiro - Carnaval",
      anchor: "rio",
      description: `
          To kick things off, Ramon and I are heading to Rio for Carnaval, and we’re turning it into a pre-wedding celebration! 🎭🥳

          Carnaval officially begins on Feb 14, but we’ll be arriving on the night of the 15th and staying until the 20th, based at Hotel ibis Copacabana Posto 2.

          Some awesome friends are already in and we’d LOVE for more of you to join! Expect beach days, bloco parties, caipirinhas, and maybe even a night at the Sambódromo..

          Important: Hotels are booking up fast, so we recommend reserving your accommodations as soon as possible!

          If you want a more relaxed vibe after the Carnaval craziness, we definitely suggest staying a few extra days to enjoy some calmer beach time or explore other parts of Brazil — it’s the perfect way to recharge! 🌴🌞

          Rough plan:
          * Feb 16–19 – blocos, beach, street parties, and general good chaos
          * Feb 20 – farewell breakfast near the hotel

          We seriously can’t wait to celebrate with you all and this is just the beginning! 💕
          Let’s make it unforgettable! 🌞💃🕺
          `
    },
    {
      time: "21-24 February",
      title: "Our family time",
      anchor: "family-time",
      description: "We will keep with our parents the week before"
    },
    {
      time: "25 February",
      title: "Pre-wedding",
      anchor: "pre-wedding",
      description: "Let's meet 2 days before the wedding, so we can meet each other and get the party started"
    },
  ];

export default function Schedule() {
  const { t } = useTranslation();

  return (
    <Layout>
      <Title title={t("schedule")} description={t("schedule_description")} />
      <div className="relative mx-auto w-full max-w-4xl flex justify-around items-center">
        {/* Horizontal Line */}
        <div className="absolute top-10 left-0 right-0 h-0.5 -translate-y-1/2 bg-gray-300 -z-10" />
        {events.map((event, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="mb-2 bg-white px-2">
              <a className="text-lg font-semibold" href={`#${event.anchor}`}>{event.title}</a>
            </div>
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="mt-2 bg-white px-2">
              <p className="text-sm text-gray-500">{event.time}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-20 md:px-80 fade-in-delay-2">
        <Accordion.Root type="multiple" className="w-10% space-y-3">
          {events.map((item, index) => (
            <Accordion.Item
              key={index}
              value={index.toString()}
              className="overflow-hidden rounded-md border border-wedding-gray/30 bg-white shadow-sm transition-all focus-within:ring-2 focus-within:ring-wedding-darkgray/50"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex w-full flex-1 cursor-pointer items-center justify-between p-4 text-left text-wedding-darkgray hover:bg-wedding-offwhite/50">
                  <span className="text-base font-medium md:text-base">
                    {`${index + 1}. ${item.title}`}
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transform text-wedding-darkgray transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm text-wedding-gray data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-4 pb-4 pt-2">
                  {item.description}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Layout>
  );
}
