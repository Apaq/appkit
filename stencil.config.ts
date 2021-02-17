import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'webstorejs',
  globalScript: 'src/api/index.ts',
  preamble: 'Built with webstore',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements-bundle',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
