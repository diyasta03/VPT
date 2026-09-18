export type Language = 'EN' | 'ID' | 'JP';

export interface ServiceItem {
  id: string;
  categoryId: string;
  categoryName: {
    EN: string;
    ID: string;
    JP: string;
  };
  subCategory?: {
    EN: string;
    ID: string;
    JP: string;
  };
  code?: string;
  name: {
    EN: string;
    ID: string;
    JP: string;
  };
  shortDescription: {
    EN: string;
    ID: string;
    JP: string;
  };
  overview: {
    EN: string;
    ID: string;
    JP: string;
  };
  whoFor: {
    EN: string[];
    ID: string[];
    JP: string[];
  };
  requirements: {
    EN: string[];
    ID: string[];
    JP: string[];
  };
  processSteps: {
    step: string;
    title: { EN: string; ID: string; JP: string };
    desc: { EN: string; ID: string; JP: string };
  }[];
  duration: {
    EN: string;
    ID: string;
    JP: string;
  };
  importantInfo: {
    EN: string;
    ID: string;
    JP: string;
  };
  faqs: {
    question: { EN: string; ID: string; JP: string };
    answer: { EN: string; ID: string; JP: string };
  }[];
  imageUrl: string;
}

export interface ServiceCategory {
  number: string;
  id: string;
  title: {
    EN: string;
    ID: string;
    JP: string;
  };
  description: {
    EN: string;
    ID: string;
    JP: string;
  };
  imageUrl: string;
  imageAlt: string;
  services: ServiceItem[];
}

export interface Testimonial {
  id: string;
  rating: number;
  quote: {
    EN: string;
    ID: string;
    JP: string;
  };
  role: {
    EN: string;
    ID: string;
    JP: string;
  };
  companyType: {
    EN: string;
    ID: string;
    JP: string;
  };
  location: string;
}

export interface FaqItem {
  id: string;
  question: {
    EN: string;
    ID: string;
    JP: string;
  };
  answer: {
    EN: string;
    ID: string;
    JP: string;
  };
  tag: string;
}
