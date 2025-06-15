
import Layout from "@/components/layout/Layout";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { Accordion } from "radix-ui";
import { useTranslation } from "react-i18next";

export interface FaqItemData {
  question: string;
  answer: string;
}


const FAQ = () => {
  const { t } = useTranslation();

  const faqItems: FaqItemData[] = [
    /*
    {
      question: "When and where is the wedding?",
      answer: "📍 Ceremony & reception details are [insert address and time here]. See our map for parking + transport tips."
    },
    {
      question: "What should I wear?",
      answer: "👗 Dress code: Garden Party Chic / Cocktail.\nThink: [brief mood—e.g. “dressy but dance-ready” or “chic but comfy”]."
    },
    {
      question: "Where should we stay?",
      answer: "🏨 Yes! We’ve reserved a block of rooms at [Hotel Name] under “[Your Last Name] Wedding.” More options listed [here]."
    },
    {
      question: "Will the event be indoors or outdoors?",
      answer: "☀️ The event will be indoors, inside a cozy hall. Bring a light layer just in case!"
    },
    {
      question: "How do we get to and from the wedding venue?",
      answer: "We will provide shuttle buses to and from the venue. For those driving their own cars, there will be plenty of parking available."
    },
    */
    {
      question: t("plus_one_question"),
      answer: t("plus_one_answer")
    },
    {
      question: t("kids_question"),
      answer: t("kids_answer")
    },
    {
      question: t("food_question"),
      answer: t("food_answer")
    },
    {
      question: t("parking_question"),
      answer: t("parking_answer")
    },
    {
      question: t("gifts_question"),
      answer: t("gifts_answer")
    },
    {
      question: t("faq_question"),
      answer: t("faq_answer")
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto py-16 md:px-80 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-wedding-darkgray mb-3 fade-in">{t("faq")}</h1>
          </div>
        </div>

        <Accordion.Root
          type="multiple"
          className="w-10% space-y-3"
        >
          {faqItems.map((item, index) => (
            <Accordion.Item
              key={index}
              value={index.toString()}
              className="overflow-hidden rounded-md border border-wedding-gray/30 bg-white shadow-sm transition-all focus-within:ring-2 focus-within:ring-wedding-darkgray/50"
            >
              <Accordion.Header className="flex">
                <Accordion.Trigger className="group flex w-full flex-1 cursor-pointer items-center justify-between p-4 text-left text-wedding-darkgray hover:bg-wedding-offwhite/50">
                  <span className="text-base font-medium md:text-base">
                    {`${index + 1}. ${item.question}`}
                  </span>
                  <ChevronDownIcon className="h-5 w-5 transform text-wedding-darkgray transition-transform duration-300 ease-in-out group-data-[state=open]:rotate-180" />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden text-sm text-wedding-gray data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                <div className="px-4 pb-4 pt-2">
                  {item.answer.split('\n').map((line, i) => (
                    <p key={i} className="mb-2 last:mb-0">
                      {line}
                    </p>
                  ))}
                </div>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </div>
    </Layout>
  );
};

export default FAQ;