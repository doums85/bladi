export default [
  {
    name: 'Accueil',
    link: '/',
  },
  {
    name: 'Produits',
    link: '/products',
  },
  {
    name: 'À propos',
    link: '/about',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

export interface MenuItem {
    name: string;
    link: string;
  }
