// All projects in one unified array.
// Featured / hero projects come first, then the remaining published apps,
// then internal Philippine systems at the tail.

import amiImg from '../assets/projects/ami.png'
import orowalletImg from '../assets/projects/orowallet.png'
import alphaImg from '../assets/projects/alpha.png'
import powerplayImg from '../assets/projects/powerplay.jpg'
import vjunImg from '../assets/projects/vjun.jpg'
import pannsineImg from '../assets/projects/pannsine.jpg'
import myevImg from '../assets/projects/myev.jpg'
import joyImg from '../assets/projects/joy.jpg'
import ezypetImg from '../assets/projects/ezypet.jpg'
import goldenrocImg from '../assets/projects/goldenroc.jpg'
import amuImg from '../assets/projects/amu.jpg'
import ezystampImg from '../assets/projects/ezystamp.png'
import ezystampMerchantImg from '../assets/projects/ezystamp-merchant.jpg'
import vendingImg from '../assets/projects/vendingapp.jpg'
import mobileposImg from '../assets/projects/oromobilepos.png'
import desktopposImg from '../assets/projects/orodesktoppos.png'
import driverImg from '../assets/projects/eaxidriver.png'
import parkingImg from '../assets/projects/carparking.png'
import cjQmsImg from '../assets/projects/cj-qms.jpg'

export const projects = [
  // ── FEATURED — top of the wall ──────────────────────────────────────
  {
    id: 'cj-qms',
    name: 'CJ Group QMS',
    tagline: 'Microservices QMS replacing a legacy system',
    description:
      'Modernization project for CJ Group, Korea. Architected and built a new microservices-based Quality Management System replacing their legacy platform — covering production quality control, inspections, defect tracking, and compliance reporting across the factory floor.',
    tech: ['React', 'TypeScript', 'Spring Boot', 'Microservices', 'REST API', 'Enterprise'],
    category: ['Web', 'Internal'],
    icon: 'Factory',
    accent: 'from-red-500 to-orange-500',
    image: cjQmsImg,
    internal: true,
  },
  {
    id: 'amu',
    name: 'AMU Travel Booking',
    tagline: 'Hotel booking platform — launched in Mongolia',
    description:
      'Hotel booking application for web and mobile. Designed the database schema and RESTful APIs for users, bookings, rooms, and payments.',
    tech: ['React', 'React Native', 'Spring Boot', 'Java', 'MySQL'],
    category: ['Mobile', 'Web'],
    icon: 'Hotel',
    accent: 'from-cyan-500 to-blue-500',
    image: amuImg,
    android: 'https://play.google.com/store/apps/details?id=com.amullc.app',
    ios: 'https://apps.apple.com/us/app/amu-travel-booking/id6749428154',
  },
  {
    id: 'powerplay',
    name: 'Power Play',
    tagline: 'Fitness app with video purchases & IAP',
    description:
      'Fitness app where users purchase exercise videos and track workouts. Integrated Facebook/Apple login, in-app purchases, and Firebase push notifications.',
    tech: ['React Native', 'GraphQL', 'Firebase', 'In-App Purchase'],
    category: ['Mobile'],
    icon: 'Dumbbell',
    accent: 'from-rose-500 to-pink-500',
    image: powerplayImg,
    android: 'https://play.google.com/store/apps/details?id=com.axratech.powerplay',
    ios: 'https://apps.apple.com/us/app/power-play-fitness/id6444821979',
  },
  {
    id: 'grpos',
    name: 'GRPOS',
    tagline: 'Prepaid card POS for Golden ROC Hotel Group',
    description:
      'Prepaid card POS used in hotels, spas, and restaurants. Currently serving Mandalay and Shan State, expanding to Yangon — handling thousands of transactions.',
    tech: ['React Native', 'Android POS', 'NFC', 'Mifare Classic'],
    category: ['POS', 'Mobile'],
    icon: 'CreditCard',
    accent: 'from-amber-500 to-orange-500',
    image: goldenrocImg,
    internal: true,
  },
  {
    id: 'alphamm',
    name: 'ALPHA MM',
    tagline: 'Internal ERP for Alpha International',
    description:
      'ERP application for managing wholesalers, resellers, delivery, and internal operations. Managed full development lifecycle from frontend to GraphQL backend.',
    tech: ['React Native', 'Node.js', 'GraphQL'],
    category: ['Mobile', 'ERP'],
    icon: 'Building2',
    accent: 'from-indigo-500 to-violet-500',
    image: alphaImg,
    android: 'https://play.google.com/store/apps/details?id=com.axratech.alphamm',
    ios: 'https://apps.apple.com/us/app/alpha-mm/id6569254469',
  },
  {
    id: 'ezystamp',
    name: 'EzyStamp',
    tagline: 'No cards. No hassle. Just rewards.',
    description:
      'A Customer Return System that helps local businesses increase repeat customers, reduce churn, and build predictable recurring revenue. Replaces paper stamp cards with an effortless digital rewards ecosystem. Owned database design, client meetings, requirement gathering, and end-to-end implementation.',
    tech: ['React Native', 'React', 'Next.js', 'Node.js', 'Express', 'GraphQL', 'PostgreSQL'],
    category: ['Mobile', 'Web'],
    icon: 'Stamp',
    accent: 'from-orange-500 to-amber-500',
    image: ezystampImg,
    android: 'https://play.google.com/store/apps/details?id=com.ezystamp',
    ios: 'https://apps.apple.com/app/ezystamp/id6753874831',
  },
  {
    id: 'ezystamp-merchant',
    name: 'EzyStamp Merchant',
    tagline: 'Your simple customer return system.',
    description:
      'The merchant side of the EzyStamp ecosystem. Lets businesses manage loyalty programs, scan customer QR codes, give stamps, redeem rewards, and monitor customer activity from one app.',
    tech: ['React Native', 'React', 'Next.js', 'Node.js', 'GraphQL', 'PostgreSQL'],
    category: ['Mobile'],
    icon: 'Store',
    accent: 'from-amber-500 to-yellow-500',
    image: ezystampMerchantImg,
    android: 'https://play.google.com/store/apps/details?id=com.ezystampmerchant',
    ios: 'https://apps.apple.com/app/ezystamp-merchant/id6756578446',
  },
  {
    id: 'ezypet',
    name: 'EzyPet',
    tagline: 'Pet care: spa, hotels, medical records',
    description:
      'App for pet owners to find nearby spas and hotels and track medical records. Integrated AdMob, Firebase, and social sign-in. Managed AWS UAT and production.',
    tech: ['React Native', 'Laravel', 'AWS', 'Firebase', 'AdMob'],
    category: ['Mobile'],
    icon: 'PawPrint',
    accent: 'from-teal-500 to-cyan-500',
    image: ezypetImg,
    android: 'https://play.google.com/store/apps/details?id=com.ezypet',
    ios: 'https://apps.apple.com/app/ezypet/id6504876526',
  },

  // ── PUBLIC STORE APPS — the rest ────────────────────────────────────
  {
    id: 'orowallet',
    name: 'ORO Wallet',
    tagline: 'Mobile wallet — running across Manila',
    description:
      'Cross-platform mobile wallet for transportation in major Philippine cities. Integrated with payment gateway proxy, QR reader, biometrics, eKYC, and Java Card NFC (ISO 7816).',
    tech: ['React Native', 'Node.js', 'eKYC', 'Java Card', 'NFC'],
    category: ['Mobile'],
    icon: 'Wallet',
    accent: 'from-yellow-500 to-amber-500',
    image: orowalletImg,
    android: 'https://play.google.com/store/apps/details?id=com.aici.orowallet',
    ios: 'https://apps.apple.com/sg/app/oro-wallet-app/id1603281764',
  },
  {
    id: 'nmre',
    name: 'AMI for NMRE',
    tagline: 'Smart-meter & IoT for Myeik Islands grid',
    description:
      'Advanced Metering Infrastructure integrating solar and hydro power with smart meters and IoT devices. Government-level energy infrastructure project.',
    tech: ['React Native', 'IoT', 'Backend', 'Device Protocols'],
    category: ['IoT', 'Mobile'],
    icon: 'Zap',
    accent: 'from-emerald-500 to-teal-500',
    image: amiImg,
    android: 'https://play.google.com/store/apps/details?id=com.nmre',
    ios: 'https://apps.apple.com/app/nmre-emeter/id6740324526',
  },
  {
    id: 'joymypuppy',
    name: 'Joy My Puppy',
    tagline: 'Pet spa booking + multi-vendor + community',
    description:
      'Pet-owner app with GPS-based pet spa booking, multi-vendor e-commerce, and a social community feature. Built end-to-end.',
    tech: ['React Native', 'React', 'Node.js', 'PostgreSQL'],
    category: ['Mobile', 'Web'],
    icon: 'Dog',
    accent: 'from-orange-500 to-amber-500',
    image: joyImg,
    android: 'https://play.google.com/store/apps/details?id=com.axratech.joy',
    ios: 'https://apps.apple.com/us/app/joy-my-puppy/id6475634062',
  },
  {
    id: 'vjun',
    name: 'V.Jun',
    tagline: 'E-commerce with in-app cover customization',
    description:
      'E-commerce app for a well-known mobile accessories retailer. Built in-app phone cover customization — pick your photo, change colors, add stickers.',
    tech: ['React Native', 'GraphQL'],
    category: ['Mobile', 'E-commerce'],
    icon: 'ShoppingBag',
    accent: 'from-pink-500 to-purple-500',
    image: vjunImg,
    android: 'https://play.google.com/store/apps/details?id=com.vjun',
    ios: 'https://apps.apple.com/us/app/v-jun/id1617216233',
  },
  {
    id: 'pannsine',
    name: 'Pann Sine',
    tagline: 'Florist & gardening e-commerce',
    description:
      'E-commerce app selling flowers, plants, and gardening tools, with floral services for a shop located at the National Kandawgyi Botanical Gardens.',
    tech: ['React Native', 'Node.js', 'GraphQL'],
    category: ['Mobile', 'E-commerce'],
    icon: 'Flower2',
    accent: 'from-green-500 to-emerald-500',
    image: pannsineImg,
    android: 'https://play.google.com/store/apps/details?id=com.pannsine',
    ios: 'https://apps.apple.com/in/app/power-play-fitness/id6444821979',
  },
  {
    id: 'myev',
    name: 'My EV Myanmar',
    tagline: 'Find & navigate to EV charging stations',
    description:
      'Cross-platform EV app where users can search nearby charging stations and navigate to them.',
    tech: ['React Native', 'Express', 'Maps'],
    category: ['Mobile'],
    icon: 'BatteryCharging',
    accent: 'from-lime-500 to-green-500',
    image: myevImg,
    android: 'https://play.google.com/store/apps/details?id=com.axratech.myev',
    ios: 'https://apps.apple.com/us/app/myev-myanmar/id6470975492',
  },
  {
    id: 'shwepadauk',
    name: 'Shwe Padauk Taxi',
    tagline: 'Major Myanmar taxi app — thousands of drivers',
    description:
      'Popular Myanmar taxi app, used by thousands of drivers. Led feature development and trained junior developers. Building a new SPTS Customer app launching soon.',
    tech: ['React Native', 'REST', 'GPS'],
    category: ['Mobile'],
    icon: 'Car',
    accent: 'from-yellow-500 to-orange-500',
    android: 'https://play.google.com/store/apps/details?id=com.shwepadauktaxi.app',
  },
  {
    id: 'naksport',
    name: 'NAKSport',
    tagline: 'E-commerce for sportswear & shoes',
    description: 'E-commerce app selling sporting gear, clothes, and shoes.',
    tech: ['React Native'],
    category: ['Mobile', 'E-commerce'],
    icon: 'Shirt',
    accent: 'from-blue-500 to-indigo-500',
    android: 'https://play.google.com/store/apps/details?id=com.naksport',
    ios: 'https://apps.apple.com/us/app/naksport/id1616217027',
  },
  {
    id: 'gotuktuk',
    name: 'Go Tuk Tuk',
    tagline: 'KM-based taxi metering — Mandalay region',
    description:
      'KM-based taxi metering service with online booking from a customer app. Currently running in the Mandalay region of Myanmar.',
    tech: ['React Native', 'GPS'],
    category: ['Mobile'],
    icon: 'Bike',
    accent: 'from-red-500 to-rose-500',
    internal: true,
  },

  // ── INTERNAL — Philippines hardware & ops apps ──────────────────────
  {
    id: 'mobilepos',
    name: 'Mobile POS',
    tagline: 'Sunmi P2 Pro handheld POS',
    description:
      'POS app built for Sunmi P2 Pro handheld devices. Integrated built-in payment, scanner, and printer. Developed an in-house React Native library for contactless card payments.',
    tech: ['React Native', 'Sunmi SDK', 'NFC'],
    category: ['POS', 'Internal'],
    icon: 'Smartphone',
    accent: 'from-zinc-500 to-slate-500',
    image: mobileposImg,
    internal: true,
  },
  {
    id: 'desktoppos',
    name: 'Desktop POS',
    tagline: 'Sunmi D2s Combo desktop POS',
    description:
      'Built for the Sunmi D2s Combo Android desktop POS. Integrated printer, cash drawer, Sunmi Blink QR reader, and ACS card reader.',
    tech: ['React Native', 'Sunmi SDK'],
    category: ['POS', 'Internal'],
    icon: 'Monitor',
    accent: 'from-stone-500 to-neutral-500',
    image: desktopposImg,
    internal: true,
  },
  {
    id: 'vendingapp',
    name: 'Vending Machine App',
    tagline: 'Running in Makati shopping malls',
    description:
      'Android-based vending machine selling food and drink, communicating over serial port. Includes QR and contactless card payment.',
    tech: ['React Native', 'Serial Port', 'NFC'],
    category: ['POS', 'Internal'],
    icon: 'Coffee',
    accent: 'from-rose-500 to-amber-500',
    image: vendingImg,
    internal: true,
  },
  {
    id: 'driver',
    name: 'Driver App',
    tagline: 'GPS tracking for delivery & taxi',
    description:
      'App for drivers and delivery workers to track and report their location via device GPS.',
    tech: ['React Native', 'GPS'],
    category: ['Mobile', 'Internal'],
    icon: 'MapPin',
    accent: 'from-sky-500 to-cyan-500',
    image: driverImg,
    internal: true,
  },
  {
    id: 'parking',
    name: 'Car Parking System',
    tagline: 'QR ticketing + auto fee calculation',
    description:
      'Prints QR-coded parking tickets and auto-calculates fees on exit. Two coordinated Sunmi P2 Pro apps with integrated printer and QR scanner. Running across condos and housing in the Philippines.',
    tech: ['React Native', 'QR', 'Sunmi SDK'],
    category: ['POS', 'Internal'],
    icon: 'ParkingSquare',
    accent: 'from-violet-500 to-purple-500',
    image: parkingImg,
    internal: true,
  },
  {
    id: 'busvalidator',
    name: 'Bus Ticket Validator',
    tagline: 'Validate tickets, print receipts',
    description:
      'App for bus drivers to validate tickets and print receipts directly from the device.',
    tech: ['React Native', 'Printer'],
    category: ['Mobile', 'Internal'],
    icon: 'TicketCheck',
    accent: 'from-fuchsia-500 to-pink-500',
    internal: true,
  },
  {
    id: 'barrier',
    name: 'Barrier Operator App',
    tagline: 'Cash collection + receipt printing',
    description:
      'App for barrier operators to manually collect cash and print receipts.',
    tech: ['React Native', 'Printer'],
    category: ['Mobile', 'Internal'],
    icon: 'BadgeCheck',
    accent: 'from-emerald-500 to-green-500',
    internal: true,
  },
  {
    id: 'tasktracking',
    name: 'Task Tracking App',
    tagline: 'Field reporting for handymen & electricians',
    description:
      'App for electricians, handymen, and other workers in bus terminals and condos to track and report their tasks.',
    tech: ['React Native'],
    category: ['Mobile', 'Internal'],
    icon: 'ClipboardList',
    accent: 'from-blue-500 to-sky-500',
    internal: true,
  },
]
