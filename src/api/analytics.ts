import Analytics from 'analytics';
import googleTagManager from '@analytics/google-tag-manager';
import { browser } from '$app/env';

let e;
if (browser) {
  e = Analytics({
    app: 'audial',
    plugins: [googleTagManager({ containerId: 'GTM-TNTJT9T' })]
  });
} else {
  e = {
    track: () => null,
    page: () => null,
    identify: () => null
  };
}
export default e;
