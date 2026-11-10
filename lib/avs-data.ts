import type { BlogPost, ClinicInformation, ServiceDetail, TeamProfile } from './clinic-data';
export type DentistProfile = TeamProfile;

const phone = '+1 615-383-3339';
const businessId = 'green-hills-plumbing';
const photo = '/images/plumbing-technician.jpg';

export const CLINIC_INFO: ClinicInformation = {
  name: 'Green Hills Plumbing',
  legalName: 'Green Hills Plumbing',
  tagline: 'Residential and commercial plumbing across Madison and Nashville, Tennessee.',
  primaryLocation: {
    street: '905 E Old Hickory Blvd', suite: '', city: 'Madison', state: 'TN', postalCode: '37115', country: 'US',
    directions: '905 E Old Hickory Blvd, Madison, TN 37115, United States',
    landmarks: 'Serving Madison, Nashville and surrounding Middle Tennessee communities.',
  },
  contact: { phone, emergencyPhone: phone, whatsapp: phone, email: 'greenhillsplumbing@gmail.com', website: 'https://greenhillsplumbingtn.co/' },
  identityHighlights: ['24-hour emergency plumbing', 'Residential and commercial service', 'Straightforward, professional work'],
  schedule: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => ({ day, hours: 'Open 24 hours' })),
  verifiedStats: [{ value: 61, suffix: '', label: 'Google reviews', description: 'Customer reviews for Green Hills Plumbing.' }],
  accreditations: [],
};

export const DENTISTS: TeamProfile[] = [
  {
    id: 'mark', slug: 'mark', name: 'Mark', title: 'Plumbing technician', qualifications: 'Plumbing technician',
    specialization: 'Water heater repairs and leak detection', experienceYears: 0,
    bio: 'Customers mention Mark for prompt leak response, clear diagnosis and professional water heater repairs.',
    philosophy: 'Find the source of the problem, explain the options and complete the agreed repair.',
    education: [], memberships: [], specialties: ['Water heater repair', 'Leak detection', 'Drainage issues'],
    image: '/images/team-stock-01.jpg', warmImage: '/images/team-stock-02.jpg',
  },
  {
    id: 'luis', slug: 'luis', name: 'Luis', title: 'Plumbing technician', qualifications: 'Plumbing technician',
    specialization: 'Backflow, drains and fixture repairs', experienceYears: 0,
    bio: 'Customer feedback recognizes Luis for courteous, professional work on backflow devices, drains, toilets and sinks.',
    philosophy: 'Arrive prepared, work carefully and leave customers with plumbing that works as it should.',
    education: [], memberships: [], specialties: ['Backflow service', 'Drain cleaning', 'Toilet and sink repairs'],
    image: '/images/team-stock-02.jpg', warmImage: '/images/team-stock-03.jpg',
  },
  {
    id: 'josh', slug: 'josh', name: 'Josh', title: 'Plumbing technician', qualifications: 'Plumbing technician',
    specialization: 'Fixture installation and property service', experienceYears: 0,
    bio: 'Customers praise Josh for dependable appointments, clear communication and fixture installation.',
    philosophy: 'Communicate clearly and take care with every visit.',
    education: [], memberships: [], specialties: ['Tap installation', 'Property maintenance', 'Residential plumbing'],
    image: '/images/team-stock-03.jpg', warmImage: '/images/team-stock-04.jpg',
  },
];

const serviceEntries = [
  { slug: 'emergency-plumbing', name: '24-Hour Emergency Plumbing', description: 'Emergency plumbing help for urgent leaks, backups and burst pipes, available day and night.', focus: ['A pipe has burst or a leak is active', 'A drain backup needs urgent attention', 'You need plumbing help outside regular business hours'] },
  { slug: 'leak-detection', name: 'Leak Detection', description: 'Leak investigation to identify plumbing leaks and help limit water loss or property damage.', focus: ['You notice unexplained dampness or water use', 'A hidden pipe may be leaking', 'You need help finding the source of a leak'] },
  { slug: 'drain-cleaning', name: 'Drain Cleaning & Hydro Jetting', description: 'Drain cleaning for clogged, slow or recurring drains, with hydro jetting available for suitable lines.', focus: ['A sink, tub or shower drains slowly', 'A drain is clogged or backing up', 'You notice recurring drainage problems'] },
  { slug: 'water-heater-repair', name: 'Water Heater Repair', description: 'Water heater troubleshooting and repairs to help restore reliable hot water.', focus: ['Your water heater is not producing hot water', 'You notice a leak around the unit', 'The system is making unusual noises or behaving differently'] },
  { slug: 'water-heater-installation', name: 'Water Heater Installation', description: 'Water heater replacement and installation, including tankless system options.', focus: ['Your existing heater needs replacement', 'You are planning a water heater upgrade', 'You want to discuss a tankless water heater'] },
  { slug: 'backflow-testing', name: 'Backflow Testing & Replacement', description: 'Backflow device testing, repair and replacement to help protect the water supply.', focus: ['You need a backflow test', 'Your device did not pass an inspection', 'A backflow device needs repair or replacement'] },
  { slug: 'fixture-install-replacement', name: 'Fixture, Sink & Toilet Service', description: 'Faucet, sink, toilet, shower and other plumbing fixture installation and replacement.', focus: ['A faucet, sink or toilet needs replacing', 'You are updating a kitchen or bathroom', 'A plumbing fixture is leaking or not working properly'] },
  { slug: 'garbage-disposal', name: 'Garbage Disposal Installation & Repair', description: 'Garbage disposal installation and repair for jammed, leaking or malfunctioning units.', focus: ['Your disposal is jammed or not working', 'You need a disposal replaced', 'You are adding a disposal to your sink'] },
  { slug: 'grease-traps', name: 'Grease Traps & Interceptors', description: 'Grease trap and interceptor installation and service for commercial kitchens.', focus: ['You operate a commercial kitchen', 'A grease trap needs service', 'You need to discuss an interceptor installation'] },
  { slug: 'commercial-plumbing', name: 'Commercial Plumbing', description: 'Plumbing repairs, maintenance and installations for offices, restaurants and other commercial properties.', focus: ['You manage a business or commercial property', 'A plumbing issue is interrupting operations', 'You need plumbing installation or maintenance'] },
];

const serviceImagePairs: Record<string, [string, string]> = {
  'emergency-plumbing': ['/images/plumbing-technician.jpg', '/images/plumbing-repair.jpg'],
  'leak-detection': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'],
  'drain-cleaning': ['/images/plumbing-pipes.jpg', '/images/plumbing-radiator.jpg'],
  'water-heater-repair': ['/images/plumbing-hot-water.jpg', '/images/plumbing-radiator.jpg'],
  'water-heater-installation': ['/images/plumbing-radiator.jpg', '/images/plumbing-hot-water.jpg'],
  'backflow-testing': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'],
  'fixture-install-replacement': ['/images/plumbing-repair.jpg', '/images/plumbing-pipes.jpg'],
  'garbage-disposal': ['/images/plumbing-repair.jpg', '/images/plumbing-technician.jpg'],
  'grease-traps': ['/images/plumbing-pipes.jpg', '/images/plumbing-repair.jpg'],
  'commercial-plumbing': ['/images/plumbing-technician.jpg', '/images/plumbing-radiator.jpg'],
};
function makeService(entry: typeof serviceEntries[number]): ServiceDetail {
  const imagePair = serviceImagePairs[entry.slug] ?? ['/images/plumbing-technician.jpg', '/images/plumbing-repair.jpg'];
  const overview = 'Green Hills Plumbing provides residential and commercial plumbing service in Madison, Nashville and surrounding Middle Tennessee communities. Call to describe the issue and discuss availability.';
  const steps = [
    ['Tell us what is happening', 'First contact', 'Describe the plumbing issue, the property and when you are available.', 'For urgent problems, explain whether water is actively leaking or a drain is backing up.'],
    ['Assess the plumbing', 'By arrangement', 'The plumber reviews the issue and explains the recommended next steps.', 'The work depends on the plumbing system, access and condition of the affected area.'],
    ['Review the work', 'Before work begins', 'Discuss the work scope, price and timing before proceeding.', 'Ask any questions about the repair or installation.'],
    ['Complete the agreed service', 'As arranged', 'The agreed plumbing work is completed at your property.', 'The plumber can explain the completed work and any follow-up.'],
  ];
  return {
    ...entry, shortDescription: entry.description, navLabel: entry.name,
    tagline: entry.name + ' in Madison and Nashville, TN.', clinicalExplanation: overview,
    whoNeeds: entry.focus, benefits: ['Clear communication about the work', 'Prompt scheduling when available', 'Residential and commercial service'],
    indications: entry.focus.map((condition) => ({ condition, explanation: 'Call Green Hills Plumbing to describe the issue and discuss a suitable next step.' })),
    procedureSteps: steps.map(([title, duration, description, clinicalDetails], index) => ({ stepNumber: index + 1, title, duration, description, clinicalDetails })),
    recoveryTimeline: [
      { period: 'Before the visit', expectedSensations: 'Share the plumbing concern and arrange a suitable time.', careProtocol: 'If water is leaking, shut off the nearest safe valve if you can and describe the leak when you call.' },
      { period: 'During the work', expectedSensations: 'The plumber assesses the issue and completes the agreed work.', careProtocol: 'Discuss access, the work scope and any property-specific arrangements with the team.' },
      { period: 'After the work', expectedSensations: 'Review the completed work and any follow-up notes.', careProtocol: 'Contact Green Hills Plumbing if you have questions about the completed service.' },
    ],
    costTransparency: { baseRange: 'Call to discuss the plumbing issue and request a quote.', factors: ['The type and condition of the plumbing', 'Property access and materials required', 'The agreed work scope'], whatIsIncluded: ['Discussion of the issue and options', 'Agreed scope of work', 'Quote and timing information'], note: 'Pricing depends on the issue and agreed scope. Contact Green Hills Plumbing for a quote.' },
    beforeAfterCase: { category: entry.name, clinicalContext: 'Representative plumbing imagery. Contact Green Hills Plumbing to discuss work at your property.', beforeLabel: 'Pipework', afterLabel: 'Plumbing repair', beforeImage: imagePair[0], afterImage: imagePair[1], timeframe: 'Timing depends on the service and agreed work.' },
    assignedDentistId: 'mark',
    faqs: [
      { question: 'How do I arrange ' + entry.name.toLowerCase() + '?', answer: 'Call ' + phone + ' to describe the plumbing issue and discuss availability.' },
      { question: 'What areas do you serve?', answer: 'Green Hills Plumbing serves Madison, Nashville and surrounding Middle Tennessee communities. Call to confirm service for your address.' },
      { question: 'Do you offer emergency plumbing?', answer: 'Green Hills Plumbing is listed as open 24 hours. Call ' + phone + ' for urgent plumbing needs.' },
      { question: 'How do I request a quote?', answer: 'Call ' + phone + ' to describe the work and request a quote.' },
    ],
  };
}

export const SERVICES: ServiceDetail[] = serviceEntries.map(makeService);
export interface EmergencyCondition { id: string; title: string; urgency: 'Immediate (0–2 hours)' | 'Same-Day (2–6 hours)' | 'Urgent (Within 24 hours)'; symptoms: string[]; immediateAction: string[]; clinicTreatment: string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [];

export const BLOG_POSTS: BlogPost[] = [
  { slug: 'what-to-do-about-a-plumbing-leak', title: 'What to do when you find a plumbing leak', category: 'Leak detection', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'mark', excerpt: 'Simple steps to take while arranging help for an active plumbing leak.', leadImage: '/images/plumbing-repair.jpg', relatedServiceSlug: 'leak-detection', content: { intro: 'If you find a leak, note where it appears and whether water is still flowing. Contact a plumber to discuss the issue and arrange service.', sections: [{ heading: 'Limit water where safe', body: 'If you can safely reach the nearest shutoff valve, turn it off and move belongings away from the water.' }, { heading: 'Share what you noticed', body: 'Tell the plumber where the leak is, when it started and whether you have shut off the water.' }] } },
  { slug: 'water-heater-repair-or-replacement', title: 'Water heater repair or replacement: what to discuss', category: 'Water heaters', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'luis', excerpt: 'What to share when your water heater needs attention.', leadImage: '/images/plumbing-hot-water.jpg', relatedServiceSlug: 'water-heater-repair', content: { intro: 'A plumber can assess the unit and discuss whether repair or replacement is appropriate for its condition and your hot water needs.', sections: [{ heading: 'Describe the symptoms', body: 'Mention changes in hot water, visible leaks, unusual sounds or when the issue began.' }, { heading: 'Discuss the available options', body: 'Ask about the proposed work, expected timing and quote before deciding how to proceed.' }] } },
  { slug: 'backflow-testing-basics', title: 'What to know about backflow testing', category: 'Backflow testing', readTime: '3 min read', publishDate: '2026-11-10', lastUpdated: '2026-11-10', authorId: 'josh', excerpt: 'When to arrange a backflow test and what information to have ready.', leadImage: '/images/plumbing-pipes.jpg', relatedServiceSlug: 'backflow-testing', content: { intro: 'If a backflow inspection is due or a device did not pass, contact a plumbing professional to discuss testing or replacement.', sections: [{ heading: 'Have the notice available', body: 'Share the inspection date, device details and any notice or results you received.' }, { heading: 'Ask about timing', body: 'Discuss the next available appointment and what the service will include.' }] } },
];

export const CUSTOMER_REVIEWS: { name: string; date: string; text: string; rating: number }[] = [
  { name: 'Amber Harris', date: '7 months ago', rating: 5, text: 'Mark did a great job fixing my water heater. He started working right away and was professional and efficient. The repair was done quickly and everything is working perfectly now. I highly recommend Mark and Green Hills Plumbing.' },
  { name: 'Michael Jaeger', date: '11 months ago', rating: 5, text: 'The crew went above and beyond to help us work with our insurance company, with thorough work and in-depth documentation.' },
  { name: 'Jay Nelson', date: 'a month ago', rating: 5, text: 'Mark came out quickly when we had a leak and found the issue in 15 minutes. He was honest and nice. Highly recommend him and Green Hills Plumbing.' },
  { name: 'Troy Woodward', date: '6 months ago', rating: 5, text: 'They came out the next day to address my backflow issue. Luis was amazing and very professional. I would refer them to a friend or anyone with plumbing issues.' },
  { name: 'Rick Rios', date: '3 months ago', rating: 5, text: 'Mark helped us identify our drainage issues and recommended solutions. He responded with the urgency we needed to avoid further flooding and building damage.' },
  { name: 'R J1', date: '7 months ago', rating: 5, text: 'Luis did an excellent job on our toilet and sink repairs. He was prompt, courteous, friendly and professional. Everything is working great now.' },
  { name: 'Rick Greenfield', date: '7 months ago', rating: 5, text: 'Josh was professional and knowledgeable, thorough, and communicated clearly about when he would arrive. Highly recommend.' },
  { name: 'Deborah Brooks', date: '10 months ago', rating: 5, text: 'The plumbing technician did the job well and efficiently, with top-notch customer service. I would highly recommend this company.' },
  { name: 'Joey Wilson', date: '3 weeks ago', rating: 5, text: 'Josh and the GHP team always take great care of us. Reasonable pricing and great service.' },
  { name: 'Robbie Thorpe', date: '8 months ago', rating: 5, text: 'Luis and his coworker were on time and very professional when replacing our water heater. The service was excellent.' },
  { name: 'Kristen Kamal', date: 'a year ago', rating: 5, text: 'Green Hills Plumbing helped us replace our backflow device. The initial assessment was free and next-day availability was fantastic.' },
  { name: 'Nashvillian Chrisman', date: '6 months ago', rating: 5, text: 'Luis came out and worked on a bathtub drain leak until we were able to stop the leak. I highly recommend Green Hills Plumbing and Luis.' },
  { name: 'Sherry Ware', date: 'a month ago', rating: 5, text: 'Luis did a wonderful job. Highly recommend Green Hills Plumbing.' },

  { name: 'David Turner', date: 'a year ago', rating: 5, text: 'Luis and his helper were professional and on time, got our office back up and running, and left the space in great shape.' },
  { name: 'Peter Breazeale', date: '5 months ago', rating: 5, text: 'Always on time and gets the job done. I manage several properties and Green Hills Plumbing is my number one go-to. Ask for Josh.' },
  { name: 'Dennis Wilcox', date: '11 months ago', rating: 5, text: 'Great job changing a wax ring on one toilet and replacing the bolts. The repairman was polite and efficient.' },
];
