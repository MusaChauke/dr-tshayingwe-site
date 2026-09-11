/**
 * Single source of truth for everything the site says about the practice.
 * Change facts here, never in the pages. Anything under `toConfirm` is
 * hidden from the rendered site until `confirmed` is set to true.
 */

// Update once the domain is registered (drtshayingwe.co.za was available on 2026-09-11).
export const SITE_URL = 'https://www.drtshayingwe.co.za';

export const doctor = {
  fullName: 'Dr Sivuyile Tshayingwe',
  shortName: 'Dr S Tshayingwe',
  surname: 'Tshayingwe',
  qualifications: 'MBChB (WSU), BCur (UFH)',
  qualificationsLong: [
    { abbr: 'MBChB (WSU)', full: 'Bachelor of Medicine and Bachelor of Surgery, Walter Sisulu University' },
    { abbr: 'BCur (UFH)', full: 'Bachelor of Nursing (Baccalaureus Curationis), University of Fort Hare' },
  ],
  role: 'General Practitioner',
  hpcsaNumber: 'MP 1012347',
  hpcsaLookup: 'https://hpcsaonline.custhelp.com/app/iregister',
  practiceNumber: '1345028',
  opened: 'June 2026',
};

export const contact = {
  phoneDisplay: '071 670 0634',
  phoneE164: '+27716700634',
  tel: 'tel:+27716700634',
  whatsapp:
    'https://wa.me/27716700634?text=' +
    encodeURIComponent('Hello Dr Tshayingwe, I would like to make an appointment.'),
  whatsappPlain: 'https://wa.me/27716700634',
  email: 'drstshayingwe@gmail.com',
  mailto: 'mailto:drstshayingwe@gmail.com',
};

export const address = {
  street: '3 Matakata Street',
  suburb: 'Mbekweni',
  city: 'Paarl',
  province: 'Western Cape',
  // 7655 is the SA Post Office street code for Mbekweni (7626 is the box code, as printed on the sign).
  postalCode: '7655',
  country: 'South Africa',
  countryCode: 'ZA',
  landmark: 'Opposite Mbekweni Library',
  landmarkInSentence: 'opposite Mbekweni Library',
  oneLine: '3 Matakata Street, Mbekweni, Paarl, 7655',
};

export const geo = { lat: -33.6754115, lng: 18.9924869 };

export const maps = {
  google: `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=17`,
  googleDirections: `https://www.google.com/maps/dir/?api=1&destination=${geo.lat},${geo.lng}`,
  waze: `https://waze.com/ul?ll=${geo.lat},${geo.lng}&navigate=yes`,
  apple: `https://maps.apple.com/?ll=${geo.lat},${geo.lng}&q=${encodeURIComponent('Dr S Tshayingwe')}`,
  embed: `https://www.google.com/maps?q=${geo.lat},${geo.lng}&z=16&output=embed`,
};

export type DayHours = { days: string; open: string; close: string; note?: string };

export const hours: DayHours[] = [
  { days: 'Monday to Friday', open: '09:00', close: '17:00' },
  { days: 'Saturday, Sunday and public holidays', open: '09:00', close: '14:00' },
];

/** Opening times in the shape schema.org expects. */
export const openingHoursSpecification = [
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '17:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Saturday', 'Sunday'],
    opens: '09:00',
    closes: '14:00',
  },
  {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: 'PublicHolidays',
    opens: '09:00',
    closes: '14:00',
  },
];

export const tagline = 'Compassionate care. Focused on you.';
export const slogan = 'Caring for you, every day.';

export type ServiceGroup = {
  slug: string;
  title: string;
  icon: 'people' | 'heart' | 'testtube' | 'syringe' | 'child' | 'female' | 'male';
  summary: string;
  items: { name: string; detail?: string }[];
};

export const services: ServiceGroup[] = [
  {
    slug: 'general-care',
    title: 'General care',
    icon: 'people',
    summary: 'Everyday medical care for adults and children, from a sore throat to a check-up before a new job.',
    items: [
      { name: 'Medical consultations', detail: 'Diagnosis and treatment of acute illness, with sick notes and referral letters when needed.' },
      { name: 'Wellness screenings', detail: 'Blood pressure, blood sugar, weight and general health checks.' },
      { name: 'PDP and medical assessments', detail: 'Medical examinations for professional driving permits and other fitness certificates.' },
    ],
  },
  {
    slug: 'chronic-disease-care',
    title: 'Chronic disease care',
    icon: 'heart',
    summary: 'Ongoing care and repeat prescriptions for long-term conditions, with regular monitoring.',
    items: [
      { name: 'Hypertension', detail: 'Blood pressure control, medication review and lifestyle support.' },
      { name: 'Diabetes', detail: 'Blood sugar monitoring, medication and foot and eye care reminders.' },
      { name: 'Asthma', detail: 'Inhaler technique, control plans and treatment of flare-ups.' },
    ],
  },
  {
    slug: 'prevention-and-testing',
    title: 'Prevention and testing',
    icon: 'testtube',
    summary: 'Confidential testing and advice so problems are found early or avoided altogether.',
    items: [
      { name: 'HIV testing and counselling', detail: 'Confidential testing with pre- and post-test counselling.' },
      { name: 'Family planning and contraceptives', detail: 'Advice on the options available and prescriptions for the one that suits you.' },
    ],
  },
  {
    slug: 'minor-surgical-procedures',
    title: 'Minor surgical procedures',
    icon: 'syringe',
    summary: 'Small procedures done in the practice under local anaesthetic, without a hospital visit.',
    items: [
      { name: 'Lumps and bumps removal' },
      { name: 'IV therapy' },
      { name: 'Wound care and suturing' },
      { name: 'Abscess drainage' },
      { name: 'Medical circumcision' },
    ],
  },
  {
    slug: 'child-health',
    title: "Child's health",
    icon: 'child',
    summary: 'Care for babies and children, from routine check-ups to treatment when they are sick.',
    items: [
      { name: 'Immunisations' },
      { name: 'Child wellness check-ups' },
      { name: 'Growth monitoring' },
      { name: 'Childhood illness treatment' },
    ],
  },
  {
    slug: 'womens-health',
    title: "Women's health",
    icon: 'female',
    summary: 'Screening and care in a private, respectful setting.',
    items: [
      { name: 'Pap smears' },
      { name: 'Breast examination' },
      { name: 'Pregnancy testing' },
    ],
  },
  {
    slug: 'mens-health',
    title: "Men's health",
    icon: 'male',
    summary: 'Straightforward, confidential care for the things men often put off.',
    items: [
      { name: 'Prostate screening' },
      { name: 'Sexual health' },
      { name: 'STI testing and treatment' },
    ],
  },
];

export const virtualConsultation = {
  summary:
    'If you cannot get to the practice, Dr Tshayingwe can consult with you by video call or telephone during opening hours.',
  goodFor: [
    'Follow-up visits and repeat prescriptions for a condition already under treatment',
    'Discussing test results',
    'Minor illnesses where an examination is not essential',
    'Advice on whether you need to be seen in person',
  ],
  notFor: [
    'Emergencies, chest pain, difficulty breathing or serious injuries',
    'Problems that need a physical examination, a procedure or an injection',
    'A first consultation for a chronic condition',
  ],
  steps: [
    { title: 'Message or call us', body: 'WhatsApp or phone 071 670 0634 during opening hours and ask for a virtual consultation.' },
    { title: 'Agree a time and pay', body: 'We confirm a time, the fee and how to pay before the call.' },
    { title: 'Have your consultation', body: 'Dr Tshayingwe calls you by video or phone. Prescriptions and letters are sent to you afterwards.' },
  ],
};

export const emergency = {
  ambulance: { label: 'Ambulance (EMS)', number: '10177', tel: 'tel:10177' },
  cell: { label: 'Emergency from a cell phone', number: '112', tel: 'tel:112' },
  hospital: { label: 'Paarl Hospital', number: '021 860 2500', tel: 'tel:+27218602500' },
};

/**
 * Facts the doctor still needs to confirm before they are shown on the site.
 * Set `confirmed: true` once he has signed off on the exact wording.
 */
export const toConfirm = {
  languages: {
    confirmed: false,
    text: 'Consultations in isiXhosa and English.',
  },
  medicalAid: {
    confirmed: false,
    text: 'Medical aid and private (cash) patients are welcome. Please tell us your scheme when you book so we can confirm how your claim works.',
  },
  fees: {
    confirmed: false,
    text: 'Ask about consultation fees when you call or message us.',
  },
  bioExtra: {
    confirmed: false,
    text: '',
  },
};

export const bio = {
  short:
    'Dr Sivuyile Tshayingwe is a general practitioner who trained first in nursing (BCur, University of Fort Hare) and then in medicine (MBChB, Walter Sisulu University). He opened his practice in Mbekweni, Paarl in June 2026.',
  approach: [
    'Unhurried consultations. You get the time to explain what is wrong and to understand what happens next.',
    'Plain language. Diagnoses, medicines and results are explained in words you can use.',
    'Continuity. The same doctor sees you at every visit and keeps your record up to date.',
    'Whole family. Children, adults and older patients are all seen at the practice.',
  ],
};

export const nav = [
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/virtual-consultations/', label: 'Virtual consultations' },
  { href: '/contact/', label: 'Contact' },
];

export const areaServed = ['Mbekweni', 'Paarl', 'Wellington', 'Dal Josaphat', 'Huguenot', 'Drakenstein'];

export const medpagesUrl = 'https://www.medpages.info/sf/index.php?page=person&personcode=1981288';
