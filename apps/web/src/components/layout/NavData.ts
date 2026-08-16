import { layers, features } from "@/app/features/data";
import { industries, useCases } from "@/app/solutions/data";

export const featureMenu = {
  hubHref: "/features/",
  groups: layers.map((layer) => ({
    id: layer.id,
    title: layer.title,
    items: features
      .filter((feature) => feature.layer === layer.id)
      .map((feature) => ({
        label: feature.title,
        href: `/features/${feature.slug}/`,
        icon: feature.icon,
      })),
  })),
};

export const solutionsMenu = {
  hubHref: "/solutions/",
  industries: {
    title: "By Industry",
    items: industries.map((industry) => ({
      label: industry.title,
      href: `/solutions/industries/${industry.slug}/`,
      icon: industry.icon,
    })),
  },
  useCases: {
    title: "By Use Case",
    items: useCases.map((useCase) => ({
      label: useCase.title,
      href: `/solutions/use-cases/${useCase.slug}/`,
      icon: useCase.icon,
    })),
  },
};

export const primaryNav = [
  { label: "Docs", href: "/docs/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
];

export const footerNav = {
  Features: featureMenu.groups.flatMap((group) => group.items).slice(0, 6),
  Solutions: [
    ...solutionsMenu.industries.items.slice(0, 3),
    ...solutionsMenu.useCases.items.slice(0, 3),
  ],
  Resources: [
    { label: "Docs", href: "/docs/" },
    { label: "Blog", href: "/resources/" },
    { label: "FAQ", href: "/faq/" },
  ],
  Company: [
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  Legal: [
    { label: "Privacy Policy", href: "/legal/privacy-policy/" },
    { label: "Terms of Service", href: "/legal/terms-of-service/" },
    { label: "Cookie Policy", href: "/legal/cookie-policy/" },
  ],
};
