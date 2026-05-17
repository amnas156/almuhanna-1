export interface AssociateCompany {
  id: number;
  name: string;
  logo: string;
  industry: string;
  description: string;
  location: string;
}

export const associates: AssociateCompany[] = [
  {
    id: 1,
    name: "Al Masar Yellow Co",
    logo: "/images/associates/al-masar-yellow.png",
    industry: "Industrial Construction",
    description:
      "Trusted partner in industrial infrastructure and engineering solutions across Saudi Arabia.",
    location: "Riyadh, Saudi Arabia",
  },

  {
    id: 2,
    name: "Shapoorji Pallonji Co.",
    logo: "/images/associates/shapoorji-pallonji.png",
    industry: "Construction & Engineering",
    description:
      "Globally recognized construction company associated with large-scale industrial developments.",
    location: "Saudi Arabia",
  },

  {
    id: 3,
    name: "United Construction Co.",
    logo: "/images/associates/united-construction.png",
    industry: "Civil & Industrial Projects",
    description:
      "Professional construction partner specializing in commercial and industrial execution.",
    location: "Riyadh, Saudi Arabia",
  },

  {
    id: 4,
    name: "New Feb Co",
    logo: "/images/associates/new-feb.png",
    industry: "Industrial Supply",
    description:
      "Reliable supplier supporting industrial electrical and mechanical operations.",
    location: "Saudi Arabia",
  },

  {
    id: 5,
    name: "Al Makateb Co.",
    logo: "/images/associates/al-makateb.png",
    industry: "Trading & Contracting",
    description:
      "Experienced company delivering industrial and commercial project solutions.",
    location: "Riyadh, Saudi Arabia",
  },

  {
    id: 6,
    name: "Saudi Icon Co.",
    logo: "/images/associates/saudi-icon.png",
    industry: "Engineering Services",
    description:
      "Specialized engineering and industrial support provider for major projects.",
    location: "Saudi Arabia",
  },

  {
    id: 7,
    name: "CEPCO",
    logo: "/images/associates/cepco.png",
    industry: "Electrical Products",
    description:
      "Leading electrical manufacturing and industrial supply company in the region.",
    location: "Saudi Arabia",
  },

  {
    id: 8,
    name: "First Fix",
    logo: "/images/associates/first-fix.png",
    industry: "MEP Solutions",
    description:
      "Professional MEP and industrial support company delivering quality project execution.",
    location: "Saudi Arabia",
  },

  {
    id: 9,
    name: "Al Fanar",
    logo: "/images/associates/al-fanar.png",
    industry: "Electrical Manufacturing",
    description:
      "Major electrical and energy solutions provider serving industrial markets.",
    location: "Riyadh, Saudi Arabia",
  },
];