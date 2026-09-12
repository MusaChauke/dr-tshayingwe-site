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
  hpcsaLookup: 'https://hpcsaonline.custhelp.com/app/i_reg_form',
  practiceNumber: '1345028',
  opened: 'June 2026',
};

const WA_NUMBER = '27716700634';

/** Build a wa.me link with a prefilled message. Line breaks are allowed. */
export const whatsappLink = (message: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;

export const contact = {
  phoneDisplay: '071 670 0634',
  phoneE164: '+27716700634',
  tel: 'tel:+27716700634',
  whatsapp: whatsappLink('Hello Dr Tshayingwe, I would like to make an appointment.\nName:\nWhat I need:'),
  whatsappVirtual: whatsappLink('Hello Dr Tshayingwe, I would like a virtual consultation (video or phone call).\nName:\nWhat I need:'),
  whatsappPlain: `https://wa.me/${WA_NUMBER}`,
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
  /** Location-bearing title used on the group's own page and in search results. */
  seoTitle: string;
  icon: 'people' | 'heart' | 'testtube' | 'syringe' | 'child' | 'female' | 'male';
  summary: string;
  items: { name: string; detail?: string }[];
};

export const services: ServiceGroup[] = [
  {
    slug: 'general-care',
    title: 'General care',
    seoTitle: 'GP consultations and medicals in Mbekweni, Paarl',
    icon: 'people',
    summary: 'Everyday medical care for adults and children, from a sore throat to a check-up before a new job.',
    items: [
      { name: 'Medical consultations', detail: 'Diagnosis and treatment of acute illness, with sick notes and referral letters when needed.' },
      { name: 'Medical emergencies', detail: 'Seen during opening times. Come straight in, or call 071 670 0634 on the way. If hospital care is needed, we arrange the referral or the ambulance.' },
      { name: 'Wellness screenings', detail: 'Blood pressure, blood sugar, weight and general health checks.' },
      { name: 'PDP and medical assessments', detail: 'Medical examinations for professional driving permits and other fitness certificates.' },
      { name: 'Drips and injections', detail: 'Intravenous fluids or medicines given at the practice when you need them, for example for dehydration, so that you can be treated without going to hospital.' },
      { name: 'Medicines dispensed on site', detail: 'Where possible, the medicines you are prescribed are dispensed at the practice, so you leave with them in hand.' },
      { name: 'Home visits', detail: 'Across Paarl, for patients who cannot get to the practice. Please arrange at least one day in advance by WhatsApp or phone.' },
    ],
  },
  {
    slug: 'chronic-disease-care',
    title: 'Chronic disease care',
    seoTitle: 'Hypertension, diabetes and asthma care in Mbekweni, Paarl',
    icon: 'heart',
    summary: 'Ongoing care and repeat prescriptions for long-term conditions, with regular monitoring.',
    items: [
      { name: 'Hypertension', detail: 'Blood pressure control, medication review and lifestyle support.' },
      { name: 'Diabetes', detail: 'Blood sugar monitoring, medication review and regular foot checks, with referral for eye screening when needed.' },
      { name: 'Asthma', detail: 'Inhaler technique, control plans and treatment of flare-ups.' },
    ],
  },
  {
    slug: 'prevention-and-testing',
    title: 'Prevention and testing',
    seoTitle: 'HIV testing and family planning in Mbekweni, Paarl',
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
    seoTitle: 'Minor surgical procedures and circumcision in Mbekweni, Paarl',
    icon: 'syringe',
    summary: 'Small procedures done here at the practice, so you do not need to go to hospital for them.',
    items: [
      { name: 'Lumps and bumps removal', detail: 'Removal of small skin lumps under local anaesthetic.' },
      { name: 'Wound care and suturing (stitches)', detail: 'Cleaning, dressing and stitching of cuts and wounds, and removal of stitches.' },
      { name: 'Abscess (boil) drainage', detail: 'Drainage of abscesses under local anaesthetic.' },
      {
        name: 'Medical circumcision',
        detail:
          "Under local anaesthetic, for adults and boys aged 16 and over, with their own consent. Younger boys can be circumcised only for medical or religious reasons, as the Children's Act requires.",
      },
    ],
  },
  {
    slug: 'childrens-health',
    title: "Children's health",
    seoTitle: "Children's doctor and immunisations in Mbekweni, Paarl",
    icon: 'child',
    summary: 'Care for babies and children, from routine check-ups to treatment when they are sick.',
    items: [
      { name: 'Immunisations', detail: 'Routine childhood vaccines according to the South African schedule, recorded in the Road to Health booklet.' },
      { name: 'Child wellness check-ups' },
      { name: 'Growth monitoring' },
      { name: 'Childhood illness treatment' },
    ],
  },
  {
    slug: 'womens-health',
    title: "Women's health",
    seoTitle: "Women's health and Pap smears in Mbekweni, Paarl",
    icon: 'female',
    summary: 'Screening and care in a private, respectful setting.',
    items: [
      { name: 'Pap smears', detail: 'Cervical cancer screening, with results explained to you.' },
      { name: 'Breast examination' },
      { name: 'Pregnancy testing' },
    ],
  },
  {
    slug: 'mens-health',
    title: "Men's health",
    seoTitle: "Men's health and STI treatment in Mbekweni, Paarl",
    icon: 'male',
    summary: 'Straightforward, confidential care for the things men often put off.',
    items: [
      { name: 'Prostate screening' },
      { name: 'Sexual health' },
      { name: 'STI testing and treatment', detail: 'Confidential testing and treatment of sexually transmitted infections.' },
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
    'Emergencies and injuries: come straight to the practice during opening times',
    'Problems that need a physical examination, a procedure or an injection (a home visit across Paarl can be arranged a day ahead if you cannot travel)',
    'A first consultation for a chronic condition',
  ],
  steps: [
    { title: 'Message or call us', body: 'WhatsApp or phone 071 670 0634 during opening hours and ask for a virtual consultation.' },
    { title: 'Agree a time and pay', body: 'We confirm a time, the fee and how to pay before the call.' },
    {
      title: 'Have your consultation',
      body: 'Dr Tshayingwe calls you by video or phone. He first confirms who you are and where you are, and asks you to agree to a telehealth consultation and its limits. If a prescription, sick note or letter is appropriate, it is sent to you afterwards. Some medicines cannot be prescribed without an in-person examination.',
    },
  ],
};

export const emergency = {
  ambulance: { label: 'Ambulance (EMS)', number: '10177', tel: 'tel:10177' },
  cell: { label: 'Emergency from a cell phone', number: '112', tel: 'tel:112' },
  hospital: { label: 'Paarl Hospital', number: '021 860 2500', tel: 'tel:+27218602500' },
};

/** Home visits, confirmed by the doctor on 2026-09-12. */
export const homeVisits = {
  area: 'Paarl',
  notice: 'at least one day in advance',
  summary: 'Home visits are available across Paarl for patients who cannot get to the practice. Please arrange at least one day in advance.',
};

/** Languages the doctor consults in, confirmed 2026-09-12. */
export const languages = ['English', 'isiXhosa', 'Afrikaans'];

/** Payment options, confirmed 2026-09-12. Card payments run through an iKhokha machine. */
export const payments = ['Medical aid', 'Card (debit or credit)', 'Cash'];

/**
 * Facts the doctor confirms before they are shown on the site.
 * `confirmed: true` means he has signed off on the wording (answers received 2026-09-12).
 */
export const toConfirm = {
  languages: {
    confirmed: true,
    text: 'Consultations in isiXhosa, English and Afrikaans.',
  },
  medicalAid: {
    confirmed: true,
    text: 'We accept medical aid, card (debit or credit) and cash. Please bring your medical aid card and tell us your scheme when you book so we can confirm how your claim works.',
  },
  fees: {
    confirmed: false,
    text: 'Ask about consultation fees when you call or message us.',
  },
  bioExtra: {
    confirmed: true,
    text: 'Dr Tshayingwe opened this practice with a simple conviction: quality healthcare should be within reach of every South African, not only those who can travel far or afford a private hospital. He wanted a doctor’s rooms in the community itself, where you are greeted in your own language, given the time to explain what is wrong, and treated as a person rather than a number. Whether you walk in from down the street or he comes to your home, his aim is the same: honest, careful and compassionate care for you and your family, close to where you live.',
  },
};

export const bio = {
  short:
    'Dr Sivuyile Tshayingwe is a general practitioner who holds both a nursing degree (BCur, University of Fort Hare) and a medical degree (MBChB, Walter Sisulu University). He opened his practice in Mbekweni, Paarl in June 2026, and consults in isiXhosa, English and Afrikaans.',
  approach: [
    'Time to talk. You get the time to explain what is wrong and to understand what happens next.',
    'Plain language. Diagnoses, medicines and results are explained in words you can use.',
    'The same doctor every time. Dr Tshayingwe sees you at every visit and keeps your record up to date.',
    'The whole family. Children, adults and older patients are all seen at the practice.',
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
