export interface Metadata {
  title: string;
  description: string;
  keywords?: string;
  twitter: TwitterSummaryLargeImage;
  og: OpenGraph;
  canonical: string;
}

export interface TwitterSummaryLargeImage {
  card: string;
  site: string;
  title: string;
  description: string;
  images: string[];
}

export interface OpenGraph {
  title: string;
  description: string;
  url: string;
  image: string;
  type: string;
  site_name: string;
}
