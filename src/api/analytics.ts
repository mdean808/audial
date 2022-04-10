import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import mixpanelPlugin from '@analytics/mixpanel';
import { browser } from '$app/env';

let e;
if (browser) {
  e = Analytics({
    app: 'audial',
    plugins: [
      googleTagManager({ containerId: 'GTM-TNTJT9T' }),
      mixpanelPlugin({ token: '69da06a4f6f6e3802f4ae5b4c3a716c2' })
    ]
  });
} else {
  e = {
    track: () => null,
    page: () => null,
    identify: () => null
  };
}
export default e;
