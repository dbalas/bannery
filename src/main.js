import { createApp } from 'vue';
import deepmerge from 'deepmerge';

import Banner from './Banner.vue';

const DEFAULTS = {
  enabled: true,
  position: 'bottom',
  themeClass: 'bannery-default-theme',
  buttons: {},
};

let app;

function Bannery({ url, key, options = {}, hooks = {} }) {
  if (app) app.unmount();

  const elem = document.createElement('div');
  document.body.appendChild(elem);

  app = createApp(Banner);
  app.provide('key', key);
  app.provide('teleportEl', elem);
  app.provide('url', url);
  app.provide('options', deepmerge(DEFAULTS, options));
  app.provide('hooks', hooks);

  app.mount(elem);
  return app;
}

export default Bannery;

if (import.meta.env.DEV) {
  window.Bannery = Bannery;
}

if (window.Cypress) {
  window.appReady = true;
}
