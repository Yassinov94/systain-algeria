export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://systain-algeria.vercel.app/#organization",
    name: "Systain Algeria",
    alternateName: "Sarl Systain Algeria",
    url: "https://systain-algeria.vercel.app",
    logo: "https://systain-algeria.vercel.app/images/logos/logo.png",
    description:
      "Strategic Climate, Carbon & ESG Advisory firm supporting companies across Europe and MENA in navigating ESG regulations, CBAM requirements and Scope 1-3 emissions.",
    foundingDate: "2025",
    founder: {
      "@type": "Person",
      name: "Sarah Ruschkowski",
      jobTitle: "Founder & Managing Director",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Villa 18, Rue Said HADJAR",
      addressLocality: "Saoula",
      postalCode: "16095",
      addressRegion: "Algiers",
      addressCountry: "DZ",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+213-660-685-372",
      contactType: "customer service",
      email: "contact@systain-algeria.com",
      availableLanguage: ["English", "French", "Arabic"],
    },
    areaServed: [
      { "@type": "Continent", name: "Europe" },
      { "@type": "Place", name: "North Africa" },
      { "@type": "Place", name: "Middle East" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Algeria" },
    ],
    knowsAbout: [
      "Carbon Footprint Assessment",
      "ESG Strategy",
      "CBAM Compliance",
      "CSRD Reporting",
      "Science Based Targets",
      "GHG Protocol",
      "EU Taxonomy",
      "Decarbonisation",
      "Sustainable Supply Chains",
      "Circular Economy",
      "Climate Finance",
    ],
    sameAs: [],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://systain-algeria.vercel.app/#business",
    name: "Systain Algeria",
    image: "https://systain-algeria.vercel.app/images/logos/logo.png",
    url: "https://systain-algeria.vercel.app",
    telephone: "+213-660-685-372",
    email: "contact@systain-algeria.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Villa 18, Rue Said HADJAR",
      addressLocality: "Saoula",
      postalCode: "16095",
      addressCountry: "DZ",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "09:00",
      closes: "17:00",
    },
    priceRange: "$$",
    serviceType: [
      "Carbon Footprint Assessment",
      "ESG Strategy Consulting",
      "CBAM Advisory",
      "CSRD Compliance",
      "Decarbonisation Strategy",
      "Climate Regulation Advisory",
    ],
  };
}

export function getServicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Systain Algeria Services",
    itemListElement: [
      {
        "@type": "Service",
        position: 1,
        name: "Carbon Accounting",
        description: "Corporate Carbon Footprint across Scope 1, 2 and 3 emissions with science-based decarbonisation strategies.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 2,
        name: "ESG Strategy & Reporting",
        description: "ESG strategy development, CSRD compliance, EU Taxonomy alignment and sustainability reporting frameworks.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 3,
        name: "CBAM Advisory",
        description: "Carbon Border Adjustment Mechanism implementation, export readiness and cross-border compliance strategies.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 4,
        name: "Decarbonisation Strategies",
        description: "SBTi alignment, net-zero pathways, emission reduction roadmaps and climate transition planning.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 5,
        name: "Sustainable Supply Chain Management",
        description: "Scope 3 emissions mapping, supplier sustainability programmes and climate risk analysis in value chains.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 6,
        name: "Circular Economy & Resource Strategy",
        description: "Life Cycle Assessment, material flow analysis, circular business models and resource optimisation.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
      {
        "@type": "Service",
        position: 7,
        name: "Climate Finance & Innovation",
        description: "Climate investment strategies, access to international funding programmes and sustainable finance frameworks.",
        provider: { "@id": "https://systain-algeria.vercel.app/#organization" },
      },
    ],
  };
}

export function getWebPageSchema(title, description, url, lang) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    inLanguage: lang,
    isPartOf: {
      "@type": "WebSite",
      name: "Systain Algeria",
      url: "https://systain-algeria.vercel.app",
    },
    publisher: { "@id": "https://systain-algeria.vercel.app/#organization" },
  };
}

export function getFAQSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
