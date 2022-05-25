import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
  // transformerDirectives,
  // transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'text-[0.9em] inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    ['input-label', 'block text-white-700 text-sm font-bold mb-2'],
    ['input-text', 'shadow appearance-none border rounded w-full py-2 px-3 text-white-700 leading-tight focus:outline-none'],
    ['dropdown', 'block appearance-none w-full bg-none border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none'],
    ['card-container', 'mb-4 border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-none rounded-b lg:rounded-b lg:rounded-l lg:rounded-r p-4 justify-between leading-normal'],
    ['alert-good', 'bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md'],
    ['alert-warn', 'bg-yellow-100 border-t-4 border-yellow-500 rounded-b text-yellow-900 px-4 py-3 shadow-md'],
    ['alert-error', 'bg-red-100 border-t-4 border-red-500 rounded-b text-red-900 px-4 py-3 shadow-md'],
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
  ],
  // transformers: [
  //   transformerDirectives(),
  //   transformerVariantGroup(),
  // ],
})
