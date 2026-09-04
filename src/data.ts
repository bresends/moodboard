export const categories = [
  'Soft Interface Glow',
  'Dither Mono',
  'Vast Quiet Cinematic',
] as const

export type Category = (typeof categories)[number]

export interface Reference {
  id: number
  title: string
  note: string
  category: Category
  styles: string[]
  tags: string[]
  searchTerms: string[]
  image: string
  alt: string
  referenceStyle: boolean
}

export const references: Reference[] = [
  {
    id: 1,
    title: 'Fluma',
    note: 'soft SaaS × luminous UI',
    category: 'Soft Interface Glow',
    styles: ['soft UI', 'neo-minimalism', 'SaaS modern'],
    tags: [
      'electric blue gradient',
      'soft outer glow',
      'dashboard mockup',
      'bold neo-grotesk type',
    ],
    searchTerms: [
      'soft UI SaaS landing page',
      'blue glow web design',
      'neo minimal dashboard UI',
    ],
    image: 'images/fluma.png',
    alt: 'Landing page da Fluma com tipografia preta, detalhes em azul luminoso e mockup de dashboard.',
    referenceStyle: true,
  },
  {
    id: 2,
    title: 'Voidpixel',
    note: 'pixel-tech × monochrome SaaS',
    category: 'Dither Mono',
    styles: ['bitmap', 'digital brutalism', 'monochrome'],
    tags: [
      'pixel display type',
      'black and white',
      'dither dot field',
      'technical dashboard',
    ],
    searchTerms: [
      'pixel font brutalist website',
      'monochrome dither web design',
      'bitmap SaaS landing page',
    ],
    image: 'images/voidpixel.png',
    alt: 'Landing page da Voidpixel em preto e branco com título pixelado, textura dither e mockup de dashboard.',
    referenceStyle: true,
  },
  {
    id: 3,
    title: 'Castle',
    note: 'halftone monument × editorial serif',
    category: 'Dither Mono',
    styles: ['editorial', 'halftone', 'neo-classical'],
    tags: [
      'one-bit halftone',
      'high-contrast serif',
      'asymmetric split',
      'monochrome restraint',
    ],
    searchTerms: [
      'halftone editorial website',
      'monochrome castle dither',
      'high contrast serif landing page',
    ],
    image: 'images/castle.png',
    alt: 'Landing page da Castle em preto e branco, com título serifado e uma grande imagem de castelo em halftone.',
    referenceStyle: true,
  },
  {
    id: 4,
    title: 'Layered Drop Shadow',
    note: 'soft depth × interface detail',
    category: 'Soft Interface Glow',
    styles: ['soft UI', 'neo-minimalism', 'layered depth'],
    tags: [
      'layered shadows',
      'low opacity',
      'soft radius',
      'subtle elevation',
    ],
    searchTerms: [
      'layered subtle CSS box shadow',
      'soft UI shadow system',
      'low opacity elevation UI',
    ],
    image: 'images/layered-drop-shadow.png',
    alt: 'Comparação antes e depois de um botão branco com três camadas sutis de sombra configuradas em uma ferramenta de design.',
    referenceStyle: true,
  },
  {
    id: 5,
    title: 'CodeFlare Login Studies',
    note: 'cinematic mono × auth layouts',
    category: 'Vast Quiet Cinematic',
    styles: ['cinematic UI', 'dark minimalism', 'glassmorphism'],
    tags: [
      'monochrome photography',
      'radial light trails',
      'split-screen login',
      'dark glass panel',
    ],
    searchTerms: [
      'cinematic monochrome login UI',
      'dark glassmorphism auth screen',
      'motion blur photography web design',
    ],
    image: 'images/codeflare-login-studies.png',
    alt: 'Dois estudos de tela de login da CodeFlare, combinando fotografia monocromática cinematográfica com formulários claros e escuros.',
    referenceStyle: true,
  },
]
