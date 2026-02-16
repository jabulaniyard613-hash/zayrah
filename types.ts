
export interface Product {
  id: number;
  name: string;
  category: 'Blended' | 'Pure' | 'Exotic';
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  image: string;
}
