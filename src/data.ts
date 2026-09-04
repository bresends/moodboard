export const categories = [
  'Print-Tech Paper',
  'Soft Interface Glow',
  'Dither Mono',
  'Vast Quiet Cinematic',
  'Data-As-Texture',
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
  sourceUrl?: string
  styleSourceUrl?: string
  guide?: {
    palette: { name: string; value: string }[]
    typography: string[]
    principles: string[]
  }
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
  {
    id: 6,
    title: 'Caldera',
    note: 'forge fire × warm limestone',
    category: 'Print-Tech Paper',
    styles: ['print-tech', 'industrial editorial', 'flat design'],
    tags: [
      'orange violet halftone',
      'ultrabold condensed type',
      'warm limestone canvas',
      'large pill controls',
    ],
    searchTerms: [
      'industrial condensed typography web design',
      'orange purple halftone website',
      'warm paper flat design landing page',
    ],
    image: 'images/caldera.jpg',
    alt: 'Home do Caldera com título preto condensado, fundo cinza quente e grandes campos de halftone laranja e violeta.',
    referenceStyle: true,
    sourceUrl: 'https://caldera.xyz/',
    styleSourceUrl: 'https://styles.refero.design/style/fe8cdcf9-c850-4d52-be07-5ad269bf9ebf',
    guide: {
      palette: [
        { name: 'Ember', value: '#fc5000' },
        { name: 'Plasma Violet', value: '#524ae9' },
        { name: 'Sulfur', value: '#f5f28e' },
        { name: 'Obsidian', value: '#070607' },
        { name: 'Pumice', value: '#e2e2df' },
        { name: 'Limestone', value: '#f7f6f2' },
      ],
      typography: [
        'PP Neue Corp Compact — display',
        'DM Sans Medium — body',
      ],
      principles: [
        'Use display type at architectural scale.',
        'Keep surfaces flat and free of drop shadows.',
        'Reserve vivid orange for actions and focal points.',
        'Use 40px radii and fully rounded pill controls.',
      ],
    },
  },
  {
    id: 7,
    title: 'Phantom',
    note: 'lavender candy × playful finance',
    category: 'Soft Interface Glow',
    styles: ['soft minimalism', 'playful fintech', 'rounded modern'],
    tags: [
      'aubergine lavender world',
      'whisper-weight display type',
      'pill-shaped geometry',
      'expressive ghost mascot',
    ],
    searchTerms: [
      'playful fintech landing page',
      'lavender crypto wallet web design',
      'pill navigation soft minimal website',
    ],
    image: 'images/phantom.jpg',
    alt: 'Home do Phantom com navegação em cápsula, hero escuro abstrato, título branco e botão lavanda.',
    referenceStyle: true,
    sourceUrl: 'https://phantom.com/',
    styleSourceUrl: 'https://styles.refero.design/style/6144c3ae-fc57-4efe-b6ed-2b5eab2dc108',
    guide: {
      palette: [
        { name: 'Aubergine', value: '#3c315b' },
        { name: 'Ghost Lavender', value: '#e2dffe' },
        { name: 'Periwinkle', value: '#ab9ff2' },
        { name: 'Buttercream', value: '#ffffc4' },
        { name: 'Blush Mist', value: '#ffdadc' },
        { name: 'Paper White', value: '#fdfcfe' },
      ],
      typography: [
        'Phantom — display and body, weights 350–400',
        'Inter / Söhne / DM Sans — practical fallback',
      ],
      principles: [
        'Use pill geometry for navigation, buttons, and tags.',
        'Keep typography light with tight negative tracking.',
        'Alternate airy near-white and intimate aubergine sections.',
        'Use lavender as the main action and mascot accent.',
      ],
    },
  },
  {
    id: 8,
    title: 'Ramp',
    note: 'finance journal × neon signal',
    category: 'Data-As-Texture',
    styles: ['editorial fintech', 'neo-grotesk minimalism', 'data-led design'],
    tags: [
      'chartreuse action signal',
      'warm monochrome canvas',
      'hairline card borders',
      'single-weight hierarchy',
    ],
    searchTerms: [
      'editorial fintech landing page',
      'chartreuse monochrome web design',
      'financial data product website',
    ],
    image: 'images/ramp.jpg',
    alt: 'Home da Ramp com título preto em fundo claro, chamada em amarelo chartreuse e visualização de dados financeiros.',
    referenceStyle: true,
    sourceUrl: 'https://ramp.com/',
    styleSourceUrl: 'https://styles.refero.design/style/b38702a0-75ab-474c-9106-00b624535825',
    guide: {
      palette: [
        { name: 'Highlighter Yellow', value: '#e4f222' },
        { name: 'Ink', value: '#0c0a08' },
        { name: 'Obsidian', value: '#1a1919' },
        { name: 'Ash', value: '#6d6c6b' },
        { name: 'Hairline', value: '#e5e7eb' },
        { name: 'Bone', value: '#f4f2f0' },
      ],
      typography: [
        'Lausanne 400 — display, body, and interface',
        'Inter / IBM Plex Sans / Söhne — practical fallback',
      ],
      principles: [
        'Build hierarchy through size and tracking, not font weight.',
        'Reserve chartreuse for actions, counters, and active states.',
        'Use hairline borders instead of drop shadows.',
        'Keep headlines left-aligned with tight display leading.',
      ],
    },
  },
  {
    id: 9,
    title: 'Acctual',
    note: 'paper invoice × frosted glass',
    category: 'Soft Interface Glow',
    styles: ['product editorial', 'soft minimalism', 'paper UI'],
    tags: [
      'bright white canvas',
      'geometric rounded type',
      'pill-shaped controls',
      'layered invoice mockups',
    ],
    searchTerms: [
      'paper UI fintech landing page',
      'minimal invoicing SaaS website',
      'floating document mockup web design',
    ],
    image: 'images/acctual.jpg',
    alt: 'Home do Acctual com fundo branco, título central, detalhes em azul e faturas empilhadas sobre uma mesa clara.',
    referenceStyle: true,
    sourceUrl: 'https://www.acctual.com/',
    styleSourceUrl: 'https://styles.refero.design/style/aeefc294-a8f7-443d-b76a-538dddc29afe',
    guide: {
      palette: [
        { name: 'Electric Blue', value: '#0098f2' },
        { name: 'Iris', value: '#6c56fc' },
        { name: 'Magenta', value: '#f200ca' },
        { name: 'Midnight', value: '#0d111b' },
        { name: 'Mist', value: '#ccd1da' },
        { name: 'Paper', value: '#ffffff' },
      ],
      typography: [
        'Open Runde 500–600 — display, body, and interface',
        'Caveat 600 — testimonial signatures only',
      ],
      principles: [
        'Use tight tracking on geometric display headlines.',
        'Keep primary actions dark and reserve blue for punctuation.',
        'Use 16px cards, 32px feature panels, and pill controls.',
        'Create depth with slightly rotated, overlapping documents.',
      ],
    },
  },
  {
    id: 10,
    title: 'Resend',
    note: 'black velvet × violet syntax',
    category: 'Vast Quiet Cinematic',
    styles: ['dark minimalism', 'editorial tech', 'terminal luxury'],
    tags: [
      'pure black canvas',
      'serif sans mono contrast',
      'graphite hairline borders',
      'sculptural 3D cube',
    ],
    searchTerms: [
      'dark developer tool landing page',
      'editorial serif tech website',
      'black terminal luxury web design',
    ],
    image: 'images/resend.jpg',
    alt: 'Home do Resend em fundo preto com título serifado Email for developers e um cubo tridimensional escuro.',
    referenceStyle: true,
    sourceUrl: 'https://resend.com/',
    styleSourceUrl: 'https://styles.refero.design/style/0d914ef0-fa84-4c60-a9aa-cef0b5eb6e5d',
    guide: {
      palette: [
        { name: 'Void Black', value: '#000000' },
        { name: 'Graphite Hairline', value: '#292d30' },
        { name: 'White', value: '#ffffff' },
        { name: 'Bone White', value: '#f0f0f0' },
        { name: 'Ash Gray', value: '#a1a4a5' },
        { name: 'Iris Violet', value: '#9281f7' },
      ],
      typography: [
        'Domaine 400 — hero display',
        'aBC Favorit — section headlines',
        'Inter — body and interface',
        'Commit Mono — code and developer strings',
      ],
      principles: [
        'Use pure black as the continuous page canvas.',
        'Separate layers with graphite hairlines instead of shadows.',
        'Reserve violet for code strings and developer identifiers.',
        'Pair editorial serif display with sans-serif UI and mono code.',
      ],
    },
  },
  {
    id: 11,
    title: 'Linear',
    note: 'midnight precision × acid signal',
    category: 'Vast Quiet Cinematic',
    styles: ['dark product minimalism', 'precision interface', 'neo-grotesk tech'],
    tags: [
      'near-black layered surfaces',
      'half-pixel hairline borders',
      'acid-lime primary action',
      'product screenshot hero',
    ],
    searchTerms: [
      'dark precision SaaS landing page',
      'midnight product interface design',
      'acid lime developer tool website',
    ],
    image: 'images/linear.jpg',
    alt: 'Home do Linear em fundo quase preto com título branco e uma grande captura escura da interface do produto.',
    referenceStyle: true,
    sourceUrl: 'https://linear.app/',
    styleSourceUrl: 'https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1',
    guide: {
      palette: [
        { name: 'Void', value: '#08090a' },
        { name: 'Carbon', value: '#0f1011' },
        { name: 'Graphite', value: '#23252a' },
        { name: 'Fog', value: '#8a8f98' },
        { name: 'Paper', value: '#ffffff' },
        { name: 'Acid Lime', value: '#e4f222' },
      ],
      typography: [
        'Inter Variable 400–510 — display, body, and interface',
        'Berkeley Mono 400 — issue IDs and technical metadata',
      ],
      principles: [
        'Treat near-black darkness as the continuous substrate.',
        'Use acid lime for only one primary action per view.',
        'Build elevation with surface steps and hairline borders.',
        'Let real product UI provide the page visual texture.',
      ],
    },
  },
  {
    id: 12,
    title: 'ElevenLabs',
    note: 'eggshell paper × chromatic sound',
    category: 'Soft Interface Glow',
    styles: ['warm editorial minimalism', 'bauhaus tech', 'soft product UI'],
    tags: [
      'warm eggshell canvas',
      'whisper-weight headlines',
      'fully rounded pill controls',
      'gradient audio spheres',
    ],
    searchTerms: [
      'warm editorial AI landing page',
      'bauhaus cream paper website',
      'soft gradient sphere web design',
    ],
    image: 'images/elevenlabs.jpg',
    alt: 'Home do ElevenLabs sobre fundo eggshell com título leve, botões pill e esferas coloridas representando produtos de áudio.',
    referenceStyle: true,
    sourceUrl: 'https://elevenlabs.io/',
    styleSourceUrl: 'https://styles.refero.design/style/031056ff-7af1-46db-8daa-115f731c5d26',
    guide: {
      palette: [
        { name: 'Eggshell', value: '#fdfcfc' },
        { name: 'Warm Taupe', value: '#f5f3f1' },
        { name: 'Stone', value: '#ebe8e4' },
        { name: 'Ink', value: '#000000' },
        { name: 'Violet Spark', value: '#0447ff' },
        { name: 'Ember Orange', value: '#ff4704' },
      ],
      typography: [
        'Waldenburg 300 — whisper-weight display headlines',
        'Inter 400–500 — body, navigation, and controls',
        'Geist Mono 400 — technical microcopy',
      ],
      principles: [
        'Stack eggshell, warm taupe, and stone instead of cold whites.',
        'Keep display headlines light with tight negative tracking.',
        'Reserve violet and orange for product imagery, never UI chrome.',
        'Use black and outlined pill buttons as the complete action hierarchy.',
      ],
    },
  },
  {
    id: 13,
    title: 'Steep',
    note: 'serif analytics × blush paper',
    category: 'Print-Tech Paper',
    styles: ['editorial analytics', 'serif product design', 'soft data UI'],
    tags: [
      'oversized editorial serif',
      'floating analytics fragments',
      'rare blush peach accent',
      'pill-shaped action pairs',
    ],
    searchTerms: [
      'editorial analytics landing page',
      'serif data product website',
      'floating dashboard fragments design',
    ],
    image: 'images/steep.jpg',
    alt: 'Home do Steep com grande título serifado sobre campo branco e rosado, cercado por cartões flutuantes de analytics.',
    referenceStyle: true,
    sourceUrl: 'https://steep.app/',
    styleSourceUrl: 'https://styles.refero.design/style/75fdb89f-ca64-41b3-af36-7a78bd09448e',
    guide: {
      palette: [
        { name: 'Ink Black', value: '#17191c' },
        { name: 'Paper White', value: '#ffffff' },
        { name: 'Mist Gray', value: '#f2f2f3' },
        { name: 'Slate Gray', value: '#777b86' },
        { name: 'Blush Peach', value: '#fbe1d1' },
        { name: 'Sienna Brown', value: '#5d2a1a' },
      ],
      typography: [
        'Signifier 400 — oversized editorial display',
        'Söhne 400–500 — body, navigation, and interface',
      ],
      principles: [
        'Use regular serif display type to whisper rather than shout.',
        'Limit blush peach to one editorial emphasis per page.',
        'Float product fragments around copy instead of using a dashboard shell.',
        'Pair a filled dark pill with a matching ghost action.',
      ],
    },
  },
  {
    id: 14,
    title: 'Dub',
    note: 'rice paper × electric link',
    category: 'Data-As-Texture',
    styles: ['editorial SaaS', 'border-first minimalism', 'compact dashboard'],
    tags: [
      'white-on-white hairline surfaces',
      'electric blue signal',
      'colored feature pills',
      'product dashboard hero',
    ],
    searchTerms: [
      'border first SaaS landing page',
      'frosted white analytics dashboard',
      'compact product UI website design',
    ],
    image: 'images/dub.jpg',
    alt: 'Home do Dub com painel branco de atribuição de links, pequenos indicadores coloridos e logotipos em escala de cinza.',
    referenceStyle: true,
    sourceUrl: 'https://dub.co/',
    styleSourceUrl: 'https://styles.refero.design/style/b0d80806-b724-4ed1-a1d1-074edd3c9bc9',
    guide: {
      palette: [
        { name: 'Canvas White', value: '#ffffff' },
        { name: 'Paper Mist', value: '#f5f5f5' },
        { name: 'Ash Border', value: '#e5e5e5' },
        { name: 'Charcoal', value: '#171717' },
        { name: 'Electric Blue', value: '#2563eb' },
        { name: 'Deep Sapphire', value: '#1e40af' },
      ],
      typography: [
        'Satoshi 500 — contemporary display headlines',
        'Inter 400–600 — body, interface, and navigation',
        'Geist Mono 400–500 — code and technical metadata',
      ],
      principles: [
        'Define white surfaces with one-pixel borders before using shadows.',
        'Reserve deep sapphire for one primary action per surface.',
        'Give each feature pill exactly one chromatic accent.',
        'Use real product UI and desaturated logos as the imagery system.',
      ],
    },
  },
]
