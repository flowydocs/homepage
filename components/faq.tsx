import { Disclosure } from "@headlessui/react";
import { FiChevronUp } from "react-icons/fi";
import { fadeInBottom } from "../styles/animations";

const faqs = [
  {
    question: "When will you launch?",
    answer: "We expect our MVP to be done around July 2022.",
  },
  {
    question: "Will there be a free trial?",
    answer: "No, but there will be a 21 days 100% money back guarantee.",
  },
  {
    question: "How does the generation process work?",
    answer: "We scrape your web-app based on the attributes you've set.",
  },
  {
    question: "How long does it take to generate a documentation?",
    answer: "The generation process takes on average about 3 minutes.",
  },
  {
    question: "Can I customize content after the generation is complete?",
    answer: "Not yet. After the launch we'll focus on adding more customization options, such as apps and text adjustments.",
  },
];

const Faq = () => {
  return (
    <section className="container max-w-4xl px-4 mx-auto mb-40">
      <h1 className="font-extrabold text-slate-900 text-6xl text-center mb-20 mx-auto">
        Frequently asked questions
      </h1>
      <div className="w-full p-2 mx-auto bg-white rounded-md">
        {faqs.map((faq, i) => {
          return (
            <div key={i} className="mb-5">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-10 py-5 text-xl font-medium text-left text-white bg-slate-700 hover:bg-slate-600 rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-blue-500 focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <FiChevronUp
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-8 h-8 text-white`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 font-medium text-md text-slate-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
