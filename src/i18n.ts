export type Locale = 'en' | 'am';

const dict: Record<Locale, Record<string, string>> = {
  en: {
    dashboard: 'Dashboard',
    menu: 'Menu',
    inventory: 'Inventory',
    staff: 'Staff',
    logout: 'Logout',
    pending: 'Pending',
    history: 'History',
    ready: 'Ready',
    orders: 'Orders',
    tables: 'Tables',
    createOrder: 'Create Order',
    generatingBill: 'Generating bill',
    total: 'Total',
    markAsPaid: 'Mark as Paid',
    mobileBanking: 'Mobile Banking',
    cash: 'Cash',
    viewPaymentImage: 'View Payment Image',
    order: 'Order',
    table: 'Table',
    orderReadyForPickup: 'Ready for Pickup',
    offlineBanner: 'Offline mode: changes will sync when you reconnect',
    backOnline: 'Back online. Syncing...',
    offlineNotice: 'You are offline. Some features are unavailable.',
  },
  am: {
    dashboard: 'ዳሽቦርድ',
    menu: 'ሜኑ',
    inventory: 'እቃ መጋጠሚያ',
    staff: 'ሰራተኞች',
    logout: 'መውጣት',
    pending: 'ለማረጋገጥ',
    history: 'ታሪክ',
    ready: 'ዝግ',
    orders: 'ትዕዛዞች',
    tables: 'ጠረጴዛዎች',
    createOrder: 'ትዕዛዝ ይፍጠሩ',
    generatingBill: 'ቢል በመፍጠር ላይ',
    total: 'ጠቅላላ',
    markAsPaid: 'ክፍያ ተከፍሏል ይሉ',
    mobileBanking: 'ሞባይል ባንክ ክፍያ',
    cash: 'ጥሬ ገንዘብ',
    viewPaymentImage: 'የክፍያ ምስል ይመልከቱ',
    order: 'ትዕዛዝ',
    table: 'ጠረጴዛ',
    orderReadyForPickup: 'ለመውሰድ ዝግ ነው',
    offlineBanner: 'ኦፍላይን ሁነታ፡ ለውጦች ሲገናኙ ይቀመጣሉ',
    backOnline: 'መስመር ላይ ተመልሷል። በመስተካከል ላይ...',
    offlineNotice: 'ኦፍላይን ነዎት። አንዳንድ ባህሪዎች አይገኙም።',
  },
};

const STORAGE_KEY = 'vrm_locale';

export function getLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'am' || saved === 'en') return saved;
  } catch {}
  return 'en';
}

export function setLocale(lc: Locale) {
  try {
    localStorage.setItem(STORAGE_KEY, lc);
  } catch {}
}

export function t(key: string, lc: Locale = getLocale()): string {
  return dict[lc][key] ?? key;
}