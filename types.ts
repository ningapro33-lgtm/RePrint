export interface TeamMember {
  id: string;
  name: string;
  role: string;
}

export interface TimelineEvent {
  id: string;
  title: string;
  date: string;
  description: string;
  icon: 'search' | 'wrench' | 'cpu' | 'code' | 'printer';
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  description: string;
  color: string;
}