import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  taskQueue: 'async',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      // baseUrl: 'https://myapp.local/',
    },
  ],
  plugins: [
    sass({
      includePaths: ['./node_modules', './src/styles']
    })
  ]
};
