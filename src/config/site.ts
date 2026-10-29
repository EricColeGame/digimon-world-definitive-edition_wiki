export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  officialUrl: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Digimon World Definitive Edition Wiki",
  shortName: "Digimon World Definitive Edition",
  logoText: "D",
  tagline: "Guides, Gameplay, Evolution & Fan Project Updates",
  description: "Your fan-made guide to Digimon World Definitive Edition! Explore beginner guides, Digimon details, evolution tips, gameplay features, and development updates.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://digimon-world-definitive-edition.wiki",
  officialUrl: "https://digimon.net/",
  supportEmail: "support@digimon-world-definitive-edition.wiki",
  gameUrl: "https://www.youtube.com/watch?v=MfRXYzcOUkQ",
  heroVideoId: "MfRXYzcOUkQ",
  social: {
    discord: "https://www.reddit.com/r/digimon/",
    youtube: "https://www.youtube.com/@IAnimeEstudio",
  },
  locales: ["en", "es", "pt"],
  defaultLocale: "en",
};
