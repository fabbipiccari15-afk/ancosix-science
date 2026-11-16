import type { Lang } from "./i18n";

/* VIDEO 1 — Gli ulivi / Xylella
   Cinematic stills of the Puglia olive grove, played as a looping slideshow. */
export const PROBLEMA_VIDEO_IMAGES = [
  "https://vibe.filesafe.space/1790897558817574139/assets/126f5463-30c7-4240-9eb6-d6c5441ef238.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/86d069fc-e73a-4700-8bbb-e4e90c632eef.png",
  "https://vibe.filesafe.space/1790897558817574139/assets/9da8acb6-66ce-4604-8a79-e6b6360a2298.png",
];

export const PROBLEMA_VIDEO_CAPTIONS: Record<Lang, string[]> = {
  it: [
    "L'ulivo secolare di Puglia — secoli di storia contadina",
    "Vita e morte nello stesso albero: il segno della Xylella",
    "Il patrimonio olivicolo del Mediterraneo minacciato",
  ],
  en: [
    "The centuries-old olive of Puglia — centuries of farming history",
    "Life and death in one tree: the mark of Xylella",
    "The Mediterranean olive heritage under threat",
  ],
  es: [
    "El olivo centenario de Puglia — siglos de historia campesina",
    "Vida y muerte en un mismo árbol: la huella de la Xylella",
    "El patrimonio olivícola del Mediterráneo amenazado",
  ],
};
