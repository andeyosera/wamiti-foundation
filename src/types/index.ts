export interface Project {
  id: string;
  title: string;
  description: string;
  location: string;
  area: string;
  imageUrls: string[];
  impact: string | null;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
}