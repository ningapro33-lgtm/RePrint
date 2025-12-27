import { TeamMember, TimelineEvent } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
  { id: '1', name: 'Hamza Mahmoud', role: 'Mechanical Lead' },
  { id: '2', name: 'Mohamed Amer', role: 'Electronics Specialist' },
  { id: '3', name: 'Mostafa Rashad', role: 'Software Engineer' },
  { id: '4', name: 'Yousef Ahmed', role: 'Project Manager' },
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    id: '1',
    title: 'Sourcing Parts',
    date: 'Phase 1',
    description: 'Scavenged NEMA 17 motors and smooth rods from obsolete inkjet printers.',
    icon: 'search'
  },
  {
    id: '2',
    title: 'Frame Assembly',
    date: 'Phase 2',
    description: 'Constructed vibration-dampening frame using 18mm synthetic wood.',
    icon: 'wrench'
  },
  {
    id: '3',
    title: 'Circuit Repair',
    date: 'Phase 3',
    description: 'Restored burned MOSFETs on RAMPS 1.4 shield and repurposed ATX PSU.',
    icon: 'cpu'
  },
  {
    id: '4',
    title: 'Firmware Coding',
    date: 'Phase 4',
    description: 'Configured Marlin Firmware to calibrate for scavenged motor steps.',
    icon: 'code'
  },
  {
    id: '5',
    title: 'First Print',
    date: 'Phase 5',
    description: 'Successful calibration cube print proving dimensional accuracy.',
    icon: 'printer'
  }
];

export const NAV_LINKS = [
  { name: 'Mission', href: '#mission' },
  { name: 'Methodology', href: '#methodology' },
  { name: 'Results', href: '#results' },
  { name: 'Timeline', href: '#timeline' },
  { name: 'Team', href: '#team' },
];