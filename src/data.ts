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
  tags: string[]
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
    tags: [
      'electric blue gradient',
      'soft outer glow',
      'dashboard mockup',
      'bold neo-grotesk type',
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
    tags: [
      'pixel display type',
      'black and white',
      'dither dot field',
      'technical dashboard',
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
    tags: [
      'one-bit halftone',
      'high-contrast serif',
      'asymmetric split',
      'monochrome restraint',
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
    tags: [
      'layered shadows',
      'low opacity',
      'soft radius',
      'subtle elevation',
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
    tags: [
      'monochrome photography',
      'radial light trails',
      'split-screen login',
      'dark glass panel',
    ],
    image: 'images/codeflare-login-studies.png',
    alt: 'Dois estudos de tela de login da CodeFlare, combinando fotografia monocromática cinematográfica com formulários claros e escuros.',
    referenceStyle: true,
  },
]
