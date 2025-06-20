import Layout from "@/components/layout/Layout";
import Title from "@/components/layout/Title";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { ChevronDownIcon } from "lucide-react";
import { Accordion } from "radix-ui";
import { useTranslation } from "react-i18next";

export default function Schedule() {
  const events = [
    {
      time: "14-18 February",
      title: "Rio de Janeiro - Carnaval ",
      image: "/images/christ-the-redeemer.svg",
      description: "We're kicking off with an unforgetable adventure. Carnaval in Rio! Get ready for vibrant parades, samba in the streets, and elecdtric atmosphere you'll never forget. Whether you're a Carnaval pro or just curios to experince the magic, we'd love for you to join us.",
      side: "left",
    },
    {
      time: "4:00 PM",
      title: "Guest Arrival",
      description: "Guests are welcome to arrive and be seated in the garden.",
      image: "/images/christ-the-redeemer.svg",
      side: "right",
    },
    {
      time: "4:00 PM",
      title: "Guest Arrival",
      description: "Guests are welcome to arrive and be seated in the garden.",
      image: "/images/christ-the-redeemer.svg",
      side: "left",
    },
  ]
  const { t } = useTranslation();

  return (
    <Layout>
      <Title title={t("schedule")} description={t("schedule_description")} />
      <TooltipProvider>
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-black rounded-full" />

          <div className="space-y-12">
            {events.map((event, index) => {
              const isLeft = event.side === "left" || (!event.side && index % 2 === 0);

              return (
                <div
                  key={index}
                  className={`relative flex items-center ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  <div className={`w-1/2 px-4`}>
                    {createDropDown(index, event)}
                  </div>

                  {/* Dot on the central line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-2 bg-black rounded-full" />
                </div>
              );
            })}
          </div>
        </div>
      </TooltipProvider>
    </Layout>
  );
}

const createDropDown = (index, event) => {
  const justifyContent = event.side === "right" ? "justify-items-start" : "justify-items-end";

  return (
    <Accordion.Root
      type="multiple"
      className="w-10% space-y-3"
    >
      <Accordion.Item
        key={index}
        value={index.toString()}
        className="overflow-hidden rounded-md transition-all"
      >
        <Accordion.Header className="flex">
          <Accordion.Trigger className="grid grid-cols-6 group flex w-full flex-1 cursor-pointer items-center justify-between pl-4 pt-4 pr-4 pb-2 text-left text-wedding-darkgray">
            {event.side === "right" && <img className="col-span-1" src={event.image} />}
            <div className={`bg-white rounded-2xl p-4 col-span-5 ${justifyContent}`}>
              <h3 className="text-lg font-semibold col-span-3">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.time}</p>
              <ChevronDownIcon className="col-span-1 h-5 w-5 transform text-wedding-darkgray transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
            </div>
            {event.side === "left" && <img className="col-span-1" src={event.image} />}
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className="overflow-hidden text-sm text-wedding-gray data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
          <div className="px-4 pb-4">
            <p className="text-sm text-gray-700">{event.description}</p>
          </div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  )
} 