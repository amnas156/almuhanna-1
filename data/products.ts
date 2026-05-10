export interface Product {
  id: number;
  title: string;
  code: string;
  category: string;
  image: string;
  description: string;
}

export const productCategories = [
  "Low Voltage Components",
  "Enclosures",
  "Copper Products",
  "Terminal Blocks",
  "Power Monitoring",
  "Thermal Management",
  "Transformers",
  "Industrial Accessories",
  "Cable Management",
  "Control Components",
];

export const products: Product[] = [
  // LOW VOLTAGE COMPONENTS
  {
    id: 1,
    title: "Industrial Circuit Breaker",
    code: "LCB-101",
    category: "Low Voltage Components",
    image: "/images/products/circuit-breaker.jpg",
    description:
      "High-performance industrial circuit breaker designed for reliable power protection.",
  },
  {
    id: 2,
    title: "Power Contactor",
    code: "PC-205",
    category: "Low Voltage Components",
    image: "/images/products/contactor.jpg",
    description:
      "Durable heavy-duty contactor for industrial automation and control systems.",
  },

  // ENCLOSURES
  {
    id: 3,
    title: "Metal Electrical Enclosure",
    code: "ME-330",
    category: "Enclosures",
    image: "/images/products/enclosure.jpg",
    description:
      "Premium-grade electrical enclosure with corrosion-resistant finishing.",
  },
  {
    id: 4,
    title: "Weatherproof Control Box",
    code: "WCB-110",
    category: "Enclosures",
    image: "/images/products/control-box.jpg",
    description:
      "Industrial outdoor enclosure suitable for harsh environmental conditions.",
  },

  // COPPER PRODUCTS
  {
    id: 5,
    title: "Copper Busbar",
    code: "CB-880",
    category: "Copper Products",
    image: "/images/products/copper-busbar.jpg",
    description:
      "High conductivity copper busbar for electrical distribution applications.",
  },
  {
    id: 6,
    title: "Copper Earth Rod",
    code: "CER-420",
    category: "Copper Products",
    image: "/images/products/earth-rod.jpg",
    description:
      "Heavy-duty grounding solution for industrial electrical safety systems.",
  },

  // TERMINAL BLOCKS
  {
    id: 7,
    title: "DIN Rail Terminal Block",
    code: "DTB-702",
    category: "Terminal Blocks",
    image: "/images/products/terminal-block.jpg",
    description:
      "Reliable terminal block designed for safe industrial electrical connections.",
  },
  {
    id: 8,
    title: "Modular Connector Terminal",
    code: "MCT-119",
    category: "Terminal Blocks",
    image: "/images/products/modular-terminal.jpg",
    description:
      "Compact modular terminal solution for control panel installations.",
  },

  // POWER MONITORING
  {
    id: 9,
    title: "Digital Power Meter",
    code: "DPM-550",
    category: "Power Monitoring",
    image: "/images/products/power-meter.jpg",
    description:
      "Advanced energy monitoring system with accurate industrial measurement.",
  },
  {
    id: 10,
    title: "Energy Analyzer",
    code: "EA-905",
    category: "Power Monitoring",
    image: "/images/products/energy-analyzer.jpg",
    description:
      "Smart analyzer for monitoring power quality and consumption.",
  },

  // THERMAL MANAGEMENT
  {
    id: 11,
    title: "Industrial Cooling Fan",
    code: "ICF-204",
    category: "Thermal Management",
    image: "/images/products/industrial-fan.jpg",
    description:
      "Efficient cooling fan designed for industrial panel ventilation systems.",
  },
  {
    id: 12,
    title: "Panel Air Conditioner",
    code: "PAC-990",
    category: "Thermal Management",
    image: "/images/products/panel-ac.jpg",
    description:
      "Industrial-grade thermal management solution for electrical cabinets.",
  },

  // TRANSFORMERS
  {
    id: 13,
    title: "Distribution Transformer",
    code: "DT-430",
    category: "Transformers",
    image: "/images/products/transformer.jpg",
    description:
      "Reliable transformer engineered for industrial power distribution.",
  },
  {
    id: 14,
    title: "Control Transformer",
    code: "CT-721",
    category: "Transformers",
    image: "/images/products/control-transformer.jpg",
    description:
      "Compact transformer suitable for industrial automation systems.",
  },

  // INDUSTRIAL ACCESSORIES
  {
    id: 15,
    title: "Industrial Push Button",
    code: "IPB-221",
    category: "Industrial Accessories",
    image: "/images/products/push-button.jpg",
    description:
      "Durable industrial push button for machinery and control applications.",
  },
  {
    id: 16,
    title: "Emergency Stop Switch",
    code: "ESS-771",
    category: "Industrial Accessories",
    image: "/images/products/emergency-switch.jpg",
    description:
      "High-visibility emergency stop switch for industrial safety systems.",
  },

  // CABLE MANAGEMENT
  {
    id: 17,
    title: "Cable Tray System",
    code: "CTS-880",
    category: "Cable Management",
    image: "/images/products/cable-tray.jpg",
    description:
      "Heavy-duty cable tray system for organized industrial wiring.",
  },
  {
    id: 18,
    title: "Flexible Cable Duct",
    code: "FCD-602",
    category: "Cable Management",
    image: "/images/products/cable-duct.jpg",
    description:
      "Premium cable duct solution for clean cable routing and protection.",
  },

  // CONTROL COMPONENTS
  {
    id: 19,
    title: "PLC Controller",
    code: "PLC-500",
    category: "Control Components",
    image: "/images/products/plc-controller.jpg",
    description:
      "Advanced programmable logic controller for industrial automation.",
  },
  {
    id: 20,
    title: "Industrial Relay Module",
    code: "IRM-404",
    category: "Control Components",
    image: "/images/products/relay-module.jpg",
    description:
      "Reliable relay module for industrial switching and automation systems.",
  },
];