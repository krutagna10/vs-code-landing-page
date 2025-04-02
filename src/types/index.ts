interface NavLink {
  name: string;
  href: string;
}

interface Customization {
  title: string;
  description: string;
  image: {
    light: string;
    dark: string;
  }
}

export type { NavLink, Customization }