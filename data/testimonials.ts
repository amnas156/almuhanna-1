export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  company: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Their team consistently delivers the right industrial electrical products on time, with dependable technical guidance for our project specifications.",
    name: "Khalid Al-Harbi",
    role: "Procurement Manager",
    company: "Infrastructure Contractor",
  },
  {
    id: 2,
    quote:
      "From automation components to power distribution equipment, the product quality and sourcing support have made them a trusted supply partner.",
    name: "Faisal Al-Qahtani",
    role: "Project Engineer",
    company: "Industrial Systems Group",
  },
  {
    id: 3,
    quote:
      "Fast response, clear quotations, and reliable availability across our recurring industrial supply requirements in Saudi Arabia.",
    name: "Noura Al-Shehri",
    role: "Operations Lead",
    company: "Electrical Services Company",
  },
];
