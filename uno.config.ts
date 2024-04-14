// uno.config.ts
import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";

export default defineConfig({
  shortcuts: {
    "btn": "px-6 py-1 rounded-3xl",
    "btn-primary": "bg-amber-5 text-white btn",
    "btn-secondary": "bg-violet-3 text-white btn",
    "btn-neutral": "btn border border-gray-2",
    "container-center": "flex justify-center items-center",
  },
  theme: {
    colors: {},
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {},
    }),
  ],
  transformers: [
      transformerDirectives(), 
      transformerVariantGroup()
  ],
});
