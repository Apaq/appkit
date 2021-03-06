import { Config } from '@stencil/core';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export const config: Config = {
  namespace: 'webstore-elements',
  preamble: 'Built by Apaq',
  rollupPlugins: {
    before: [
      peerDepsExternal()
    ]
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        { src: 'manifest.json' }
      ]
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
