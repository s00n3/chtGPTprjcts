export type NavItem = { label: string; href: string };

export type CardItem = {
  title: string;
  description: string;
  href?: string;
  tags?: string[];
  status?: string;
};

export type Subdivision = {
  title: string;
  slug: string;
  type: 'center' | 'department' | 'lab' | 'chair';
  description: string;
  lead: string;
  competencies: string[];
  contacts: {
    email: string;
    phone: string;
  };
  linkedProjects: string[];
};

export type Project = {
  title: string;
  slug: string;
  challenge: string;
  solution: string;
  status: 'concept' | 'pilot' | 'clinical-validation' | 'deployed';
  tags: string[];
  results: string[];
  partners: string[];
};

export type Program = {
  title: string;
  slug: string;
  audience: string[];
  format: string;
  duration: string;
  outcomes: string[];
  modules: string[];
  contacts: {
    email: string;
    phone: string;
  };
};
