export interface Service {
  id: string;
  title: string;
  tagline: string;
  items: string[];
  description: string;
  icon: string;
  stat?: {
    value: string;
    label: string;
  };
}

export interface Step {
  number: number;
  title: string;
  description: string;
  duration: string;
  deliverable: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  metric: string;
  metricLabel: string;
  highlight: string;
}

export interface BookingDetails {
  fullName: string;
  email: string;
  companyName: string;
  website?: string;
  stage: 'idea' | 'launched' | 'scaling' | 'enterprise';
  needs: string[];
  message: string;
}
