export type Area = {
  link: string;
  heroHeading: string;
  heroSubheading: string;
  mainHeading: string;
  mainContent: string;
  description: string;
  title: string;
  name: string;
};

export type Service = {
  link: string;
  heroHeading: string;
  heroSubheading: string;
  mainHeading: string;
  mainContent: string;
  title: string;
  description: string;
};

export type Pages = {
  index: {
    title: string;
    description: string;
    heroHeading: string;
    heroSubheading: string;
    mainHeading: string;
    mainContent: string;
  };
  about: {
    title: string;
    description: string;
    content: string;
  };
  contact: {
    title: string;
    description: string;
    content: string;
  };
};

export type TopbarItem = {
  icon: string;
  label: string;
};

export type DesignerCredit = {
  url: string;
  label: string;
  ariaLabel: string;
  title?: string;
};
