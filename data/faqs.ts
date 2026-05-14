// data/faqs.ts

export interface FAQ {
  id: number;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 1,
    question: "What products does ANS Trade supply?",
    answer:
      "We supply a wide range of electrical and mechanical industrial products including low voltage components, enclosures, copper products, terminal blocks, transformers, power monitoring systems, cable management solutions, and industrial accessories.",
  },

  {
    id: 2,
    question: "Do you provide products across Saudi Arabia?",
    answer:
      "Yes. We supply industrial electrical and mechanical products to clients and contractors across Riyadh and throughout Saudi Arabia.",
  },

  {
    id: 3,
    question: "Can I request product details through WhatsApp?",
    answer:
      "Absolutely. Every product on our website includes a direct WhatsApp inquiry button that automatically sends the product name and code for faster communication.",
  },

  {
    id: 4,
    question: "Do you offer technical support for products?",
    answer:
      "Yes. Our experienced technical team assists clients with product selection, specifications, and industrial application support.",
  },

  {
    id: 5,
    question: "Do you provide bulk industrial supply solutions?",
    answer:
      "Yes. We support contractors, industrial projects, factories, and engineering companies with bulk supply and sourcing solutions.",
  },

  {
    id: 6,
    question: "Where is your company located?",
    answer:
      "Our office is located in Ghorabi Electrical Market, Batha, Riyadh, Saudi Arabia.",
  },

  {
    id: 7,
    question: "What industries do you serve?",
    answer:
      "We serve construction companies, industrial facilities, infrastructure projects, automation sectors, power distribution projects, and commercial engineering contractors.",
  },

  {
    id: 8,
    question: "Do you work with international brands?",
    answer:
      "Yes. We work with globally recognized industrial and electrical brands to ensure quality and reliability.",
  },

  {
    id: 9,
    question: "Can your company source special industrial products?",
    answer:
      "Yes. We can source specialized industrial electrical and mechanical products based on project requirements and technical specifications.",
  },

  {
    id: 10,
    question: "How can I contact your sales team?",
    answer:
      "You can contact us directly via WhatsApp, phone, or email through the contact section of our website.",
  },
];