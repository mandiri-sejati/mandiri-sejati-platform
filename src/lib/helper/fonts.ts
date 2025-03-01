import localFont from 'next/font/local';

const SFPro = localFont({
  src: [
    {
      path: './../../../public/fonts/SF-Pro-Text-Black.otf',
      weight: '900',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-BlackItalic.otf',
      weight: '900',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Heavy.otf',
      weight: '800',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-HeavyItalic.otf',
      weight: '800',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Semibold.otf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-SemiboldItalic.otf',
      weight: '600',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-RegularItalic.otf',
      weight: '400',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Thin.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-ThinItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-Light.otf',
      weight: '200',
      style: 'normal',
    },
    {
      path: './../../../public/fonts/SF-Pro-Text-LightItalic.otf',
      weight: '200',
      style: 'italic',
    },
  ],
  variable: '--font-sfpro',
});

// const greatVibes = localFont({
//   path: './../../../public/fonts/SF-Pro.ttf',
//   variable: '--font-sfpro',
// });

export { SFPro };
