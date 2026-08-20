export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  metrics: string;
  iconName?: string;
}

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  client: string;
  industry: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    label: string;
    value: string;
    sublabel?: string;
  }[];
  services: string[];
  accentColor?: string;
}

export interface PillarItem {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface AnalyticsMetric {
  key: string;
  name: string;
  headlineValue: string;
  growth: string;
  benchmark: string;
  description: string;
  chartData: { x: string; y: number; baseline: number }[];
  unit: string;
}
