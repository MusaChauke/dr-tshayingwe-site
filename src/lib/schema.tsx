import {
  SITE_URL,
  address,
  areaServed,
  contact,
  doctor,
  geo,
  languages,
  maps,
  medpagesUrl,
  openingHoursSpecification,
  services,
  tagline,
} from './practice';

const CLINIC_ID = `${SITE_URL}/#clinic`;
const DOCTOR_ID = `${SITE_URL}/#doctor`;

function typedServices() {
  const out: { '@type': string; name: string }[] = [];
  for (const g of services) {
    for (const item of g.items) {
      let type = 'MedicalTherapy';
      if (g.slug === 'minor-surgical-procedures') type = 'MedicalProcedure';
      if (g.slug === 'prevention-and-testing' || /screen|smear|test|examination|assessment/i.test(item.name)) type = 'MedicalTest';
      if (/consultation/i.test(item.name)) continue;
      out.push({ '@type': type, name: item.name });
    }
  }
  return out;
}

/** Site-wide structured data: the practice (a local business) and the doctor (a person). */
export function siteSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'MedicalClinic',
        '@id': CLINIC_ID,
        name: doctor.shortName,
        alternateName: [doctor.fullName, `${doctor.shortName} General Practitioner`],
        description: `${tagline} General practitioner in Mbekweni, Paarl: consultations, chronic disease care, child and family health, minor procedures, HIV testing, women's and men's health, with home visits across Paarl by arrangement. All consultations are in person, at the practice or at your home. Medicines dispensed on site. Medical emergencies seen during opening times. Consultations in isiXhosa, English and Afrikaans. Medical aid, card and cash accepted. Open seven days a week.`,
        url: `${SITE_URL}/`,
        telephone: contact.phoneE164,
        email: contact.email,
        image: [`${SITE_URL}/photos/entrance.jpg`, `${SITE_URL}/photos/doctor-portrait.jpg`, `${SITE_URL}/photos/waiting-room.jpg`],
        logo: `${SITE_URL}/icon.svg`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: `${address.street}, ${address.suburb}`,
          addressLocality: address.city,
          addressRegion: address.province,
          postalCode: address.postalCode,
          addressCountry: address.countryCode,
        },
        geo: { '@type': 'GeoCoordinates', latitude: geo.lat, longitude: geo.lng },
        hasMap: maps.google,
        openingHoursSpecification,
        areaServed: areaServed.map((name) => ({ '@type': 'Place', name })),
        medicalSpecialty: 'PrimaryCare',
        availableService: typedServices(),
        isAcceptingNewPatients: true,
        currenciesAccepted: 'ZAR',
        paymentAccepted: 'Cash, Credit Card, Debit Card, Medical Aid',
        availableLanguage: languages.map((name) => ({ '@type': 'Language', name })),
        slogan: tagline,
        sameAs: [medpagesUrl],
        employee: { '@id': DOCTOR_ID },
        founder: { '@id': DOCTOR_ID },
      },
      {
        '@type': 'Person',
        '@id': DOCTOR_ID,
        name: doctor.fullName,
        honorificPrefix: 'Dr',
        givenName: 'Sivuyile',
        familyName: doctor.surname,
        jobTitle: doctor.role,
        hasOccupation: { '@type': 'Occupation', name: 'General Practitioner' },
        knowsLanguage: languages,
        description: `${doctor.fullName}, ${doctor.qualifications}, general practitioner in Mbekweni, Paarl.`,
        image: `${SITE_URL}/photos/doctor-portrait.jpg`,
        url: `${SITE_URL}/about/`,
        telephone: contact.phoneE164,
        worksFor: { '@id': CLINIC_ID },
        alumniOf: [
          { '@type': 'CollegeOrUniversity', name: 'Walter Sisulu University' },
          { '@type': 'CollegeOrUniversity', name: 'University of Fort Hare' },
        ],
        hasCredential: [
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'MBChB', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'Walter Sisulu University' } },
          { '@type': 'EducationalOccupationalCredential', credentialCategory: 'degree', name: 'BCur', recognizedBy: { '@type': 'CollegeOrUniversity', name: 'University of Fort Hare' } },
        ],
        identifier: [
          { '@type': 'PropertyValue', propertyID: 'HPCSA registration', value: doctor.hpcsaNumber },
          { '@type': 'PropertyValue', propertyID: 'Practice number (PCNS)', value: doctor.practiceNumber },
        ],
        sameAs: [medpagesUrl],
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: `${SITE_URL}/`,
        name: doctor.shortName,
        inLanguage: 'en-ZA',
        publisher: { '@id': CLINIC_ID },
      },
    ],
  };
}

export function breadcrumb(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [{ name: 'Home', path: '/' }, ...items].map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function JsonLd({ data }: { data: unknown }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
