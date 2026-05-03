import type { DesignerCredit, TopbarItem } from "./types";

/** Production site URL (used by Astro `site` for canonicals, sitemaps). */
export const SITE_URL = "https://www.tyreemergencyltd.co.uk";

export const NAME = "Tyre Emergency Ltd";
export const DESCRIPTION =
  "Tyre Emergency Ltd delivers 24/7 emergency tyre replacement, mobile fitting, repair and locking wheel nut removal with a 30-minute average ETA across Nottinghamshire.";
export const PHONE = "01623 325 123";
/** E.164 for `tel:` links and structured data (display `PHONE` in UI). */
export const PHONE_E164 = "+441623325123";
export const EMAIL = "contact@tyreemergency.com";
export const ADDRESS = "Bilsthorpe";
export const CITY = "Newark";
export const COUNTY = "Nottinghamshire";
export const POSTCODE = "NG22 8GA";
export const ADDRESS_COUNTRY = "GB";

export const VAT_NO = "GB456597051";
export const COMPANY_NO = "15362025";

export const FACEBOOK = "tyreemergencyltd";
export const INSTAGRAM = "tyreemergencyltd";
export const YOUTUBE = "@TyreEmergencyLtd";
export const TWITTER = "tyre_emergency";
export const GMB = "UglmQxsSPUYKmNpQM";
export const TIKTOK = "@TyreEmergencyLtd";

export const YEAR = "2026";

export const GOOGLE_REVIEWS = 458;
export const GOOGLE_RATING = 5.0;

/** Set to "" to disable Google Tag Manager. */
export const GTM_ID = "GTM-KFM4G4RT";

/** Shown in the header top bar (Bootstrap Icons suffix, e.g. clock-fill → bi-clock-fill). */
export const TOPBAR_ITEMS: TopbarItem[] = [
  { icon: "clock-fill", label: "Available 24/7" },
  { icon: "person-vcard-fill", label: "REACT Licensed" },
];

/**
 * Schema.org OpeningHoursSpecification entries for JSON-LD.
 * Default: 24/7 every day. Replace with your own slots when needed.
 */
export const OPENING_HOURS_SPECIFICATION: Record<string, unknown>[] = [
  {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
];

/** Cookie policy “Last updated” line (ISO or human-readable). */
export const COOKIE_POLICY_LAST_UPDATED = "30 April 2026";

/** Footer credit; set to null to hide. */
export const DESIGNER_CREDIT: DesignerCredit | null = {
  url: "https://tyredigital.co.uk",
  label: "Website designed by Tyre Digital",
  ariaLabel: "Tyre Digital website (opens in a new tab)",
  title: "Tyre Digital — opens in a new tab",
};
