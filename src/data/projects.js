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
import cardnetImg from '../assets/projects/cardnet.png'
import mbeautiImg from '../assets/projects/mbeauti.jpg'
import sflinkImg from '../assets/projects/sflink.jpg'

export const projects = [
  // ── FEATURED — top of the wall ──────────────────────────────────────
  {
    id: 'cardnet',
    name: 'CardNet',
    tagline: 'AI digital business card & smart contact scanner',
    description:
      'Create, scan, and share business cards with AI. Design a card and logo in seconds, turn paper cards into contacts with AI OCR, and share via QR code.',
    tech: ['React Native', 'AI', 'OCR', 'QR Code', 'Mobile'],
    category: ['Mobile', 'AI'],
    icon: 'IdCard',
    accent: 'from-violet-500 to-indigo-600',
    image: cardnetImg,
    android: 'https://play.google.com/store/apps/details?id=mm.itwizard.cardnet',
    ios: 'https://apps.apple.com/app/cardnet-digital-business-card/id6783238349',
  },
  {
    id: 'mbeauti',
    name: 'mBeauti',
    tagline: 'AI beauty booking — salons, styles & smart makeovers',
    description:
      'Book top salons across Myanmar for hair, nails, spa, makeup, and more. Try a new look with AI Style Makeover and find salons nearby with GPS. Built the mobile app, merchant dashboard, and admin panel.',
    tech: ['React Native', 'React', 'Node.js', 'AI', 'Maps', 'PostgreSQL'],
    category: ['Mobile', 'Web', 'AI'],
    icon: 'Sparkles',
    accent: 'from-rose-400 to-pink-600',
    image: mbeautiImg,
    android: 'https://play.google.com/store/apps/details?id=mm.itwizard.mbeauti',
    ios: 'https://apps.apple.com/app/mbeauti/id6790342351',
    web: 'https://www.mbeauti.app/',
  },
  {
    id: 'sflink',
    name: 'Seoul Fashion Link',
    tagline: "AI engine powering Seoul\u2019s apparel manufacturing platform",
    description:
      'Connects Seoul fashion brands with apparel manufacturers. I built the full AI engine in Python: OpenAI & Gemini embeddings, a RAG chatbot for consultations, smart manufacturer matching, and AI booking. Developed with Claude Code.',
    tech: ['Python', 'OpenAI', 'Gemini AI', 'Embeddings', 'RAG', 'AI Chatbot', 'React', 'FastAPI'],
    category: ['Web', 'AI'],
    icon: 'BrainCircuit',
    accent: 'from-teal-500 to-cyan-400',
    image: sflinkImg,
    web: 'https://sflink.or.kr/',
  },
  {
    id: 'cj-qms',
    name: 'CJ Group QMS',
    tagline: 'Microservices QMS replacing a legacy system',
    description:
      "Replaced CJ Group's legacy Quality Management System with a new microservices platform. Covers quality control, inspections, defect tracking, and compliance reports on the factory floor.",
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
      'Hotel booking app for web and mobile. Designed the database and REST APIs for users, rooms, bookings, and payments.',
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
      'Buy workout videos and track your training. Added Facebook/Apple login, in-app purchases, and push notifications.',
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
      'Prepaid card POS for hotels, spas, and restaurants. Live in Mandalay and Shan State, expanding to Yangon, with thousands of transactions processed.',
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
      'ERP app for managing wholesalers, resellers, deliveries, and daily operations. Built end-to-end, from mobile UI to GraphQL backend.',
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
      'Digital stamp cards that bring customers back. Replaces paper loyalty cards so local shops get more repeat visits. Led requirements, database design, and full development.',
    tech: ['React Native', 'React', 'Next.js', 'Node.js', 'Express', 'GraphQL', 'PostgreSQL'],
    category: ['Mobile', 'Web'],
    icon: 'Stamp',
    accent: 'from-orange-500 to-amber-500',
    image: ezystampImg,
    android: 'https://play.google.com/store/apps/details?id=com.ezystamp.user',
    ios: 'https://apps.apple.com/app/ezystamp/id6753874831',
  },
  {
    id: 'ezystamp-merchant',
    name: 'EzyStamp Merchant',
    tagline: 'Your simple customer return system.',
    description:
      'The business side of EzyStamp. Scan customer QR codes, give stamps, redeem rewards, and track customer activity in one app.',
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
      'Find nearby pet spas and hotels, and keep medical records in one place. Added AdMob, Firebase, and social login, and managed the AWS servers.',
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
      'Mobile wallet for public transport in major Philippine cities. Supports QR payments, biometrics, eKYC, and NFC cards.',
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
      'Smart meter and IoT system for the Myeik Islands power grid, combining solar and hydro energy. A government-level infrastructure project.',
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
      'Book nearby pet spas, shop from multiple vendors, and join a pet-owner community. Built end-to-end.',
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
      'Shopping app for a popular phone accessories brand. Users design their own phone cover with photos, colors, and stickers.',
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
      'Shop flowers, plants, and garden tools, and book floral services from a shop at the National Kandawgyi Botanical Gardens.',
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
      'Find nearby EV charging stations and get directions to them.',
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
      'Popular Myanmar taxi app used by thousands of drivers. Led feature development and mentored junior developers. New customer app coming soon.',
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
    description: 'Shopping app for sportswear, gear, and shoes.',
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
      'Distance-based taxi meter with online booking. Live in the Mandalay region.',
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
      'POS app for Sunmi P2 Pro handhelds with built-in payment, scanner, and printer. Built our own React Native library for contactless card payments.',
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
      'POS app for the Sunmi D2s desktop terminal, connected to a printer, cash drawer, QR reader, and card reader.',
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
      'Android vending machine app for food and drinks, controlled over serial port. Accepts QR and contactless card payments.',
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
      'Lets drivers and delivery staff share their live GPS location.',
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
      'Prints QR parking tickets and calculates fees automatically at exit. Two linked Sunmi apps, used in condos and housing across the Philippines.',
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
      'Lets bus drivers validate tickets and print receipts on the device.',
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
      'Lets barrier operators collect cash and print receipts.',
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
      'Lets electricians and maintenance staff track and report jobs at bus terminals and condos.',
    tech: ['React Native'],
    category: ['Mobile', 'Internal'],
    icon: 'ClipboardList',
    accent: 'from-blue-500 to-sky-500',
    internal: true,
  },
]
