export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
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
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://myseafoodstand.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.youtube.com/watch?v=MfRXYzcOUkQ",
  heroVideoId: "MfRXYzcOUkQ",
  social: {
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
