
import { Product, Category } from './types';

export const COLORS = {
  primary: '#A52A2A', // Spice Red
  secondary: '#D4AF37', // Gold
  accent: '#556B2F', // Olive Green (Herbal)
  background: '#FAF9F6', // Creamy White
};

export const CATEGORIES: Category[] = [
  { id: 'blended', name: 'Blended Spices', image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop' },
  { id: 'pure', name: 'Pure Spices', image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=800&auto=format&fit=crop' },
  { id: 'exotic', name: 'Exotic Herbs', image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=800&auto=format&fit=crop' },
];

export const FEATURED_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'ZAYRAH Deggi Mirch',
    category: 'Pure',
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ceb72a?q=80&w=400&auto=format&fit=crop',
    description: 'A unique blend of mild red peppers for vibrant color and flavor.'
  },
  {
    id: 2,
    name: 'ZAYRAH Garam Masala',
    category: 'Blended',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d0c9cb5?q=80&w=400&auto=format&fit=crop',
    description: 'The King of Spices, crafted from hand-picked aromatic ingredients.'
  },
  {
    id: 3,
    name: 'ZAYRAH Turmeric Powder',
    category: 'Pure',
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=400&auto=format&fit=crop',
    description: 'Highly potent and pure turmeric sourced from the finest farms.'
  },
  {
    id: 4,
    name: 'ZAYRAH Chaat Masala',
    category: 'Blended',
    image: 'https://images.unsplash.com/photo-1532336414038-cf19250c5757?q=80&w=400&auto=format&fit=crop',
    description: 'Tangy and flavorful, perfect for snacks and salads.'
  }
];
