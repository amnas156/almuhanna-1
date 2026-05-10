export interface Client {
  id: number;
  name: string;
  logo: string;
  industry: string;
  location: string;
  description: string;
}

export const clients: Client[] = [
  {
    id: 1,
    name: "Saudi Aramco Contractors",
    logo: "/images/clients/aramco-contractors.png",
    industry: "Oil & Gas",
    location: "Saudi Arabia",
    description:
      "Industrial electrical supply support for large-scale oil and gas projects.",
  },

  {
    id: 2,
    name: "Al Fanar Projects",
    logo: "/images/clients/al-fanar-projects.png",
    industry: "Electrical Infrastructure",
    location: "Riyadh, Saudi Arabia",
    description:
      "Trusted industrial supply collaboration for electrical infrastructure projects.",
  },

  {
    id: 3,
    name: "Saudi Industrial Group",
    logo: "/images/clients/saudi-industrial-group.png",
    industry: "Industrial Manufacturing",
    location: "Saudi Arabia",
    description:
      "Reliable partner for industrial automation and electrical component supply.",
  },

  {
    id: 4,
    name: "Riyadh Metro Contractors",
    logo: "/images/clients/riyadh-metro.png",
    industry: "Infrastructure",
    location: "Riyadh, Saudi Arabia",
    description:
      "Electrical and mechanical support solutions for infrastructure developments.",
  },

  {
    id: 5,
    name: "National Construction Co.",
    logo: "/images/clients/national-construction.png",
    industry: "Construction",
    location: "Saudi Arabia",
    description:
      "Supplying industrial electrical products for commercial construction projects.",
  },

  {
    id: 6,
    name: "Modern Energy Systems",
    logo: "/images/clients/modern-energy.png",
    industry: "Energy Solutions",
    location: "Saudi Arabia",
    description:
      "Power management and monitoring equipment supply partner.",
  },

  {
    id: 7,
    name: "Gulf Engineering Solutions",
    logo: "/images/clients/gulf-engineering.png",
    industry: "Engineering Services",
    location: "Saudi Arabia",
    description:
      "Industrial engineering support and premium component sourcing.",
  },

  {
    id: 8,
    name: "Advanced Control Systems",
    logo: "/images/clients/advanced-control.png",
    industry: "Automation",
    location: "Riyadh, Saudi Arabia",
    description:
      "Automation and control panel product supply partnership.",
  },

  {
    id: 9,
    name: "Desert Power Technologies",
    logo: "/images/clients/desert-power.png",
    industry: "Electrical Solutions",
    location: "Saudi Arabia",
    description:
      "Trusted supplier for industrial power and distribution components.",
  },

  {
    id: 10,
    name: "Vision Build Co.",
    logo: "/images/clients/vision-build.png",
    industry: "Commercial Projects",
    location: "Saudi Arabia",
    description:
      "Industrial materials and electrical support for modern development projects.",
  },
];