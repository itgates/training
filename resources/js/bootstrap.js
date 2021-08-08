window._ = require('lodash')

/**
 * We'll load the axios HTTP library which allows us to easily issue requests
 * to our Laravel back-end. This library automatically handles sending the
 * CSRF token as a header based on the value of the "XSRF" token cookie.
 */

window.axios = require('axios');

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

axios.defaults.withCredentials = true;

import router from "./router";
import store from "./store";

axios.interceptors.response.use(
  (response) => {
    // Call was successful, don't do anything special.
    return response;
  },
  (error) => {
    switch (error.response.status) {
    case 401: // Not logged in
      router.push({ name: 'auth-signin' })
      break;
    case 419: // Expired session
      router.push({ name: 'auth-signin' })
      break;
    case 403: // forbidden access
      router.push({ name: 'error' });
      break;
    case 404: // Not found
      router.push({ name: 'error' });
      break;
    case 500: // server error
      router.push({ name: 'error-unexpected' })
      break;
    case 429: // Too many attempts
      store.dispatch('app/showError', { message: 'Too many attempts.' });
      break;
    }

    return Promise.reject(error);
  }
);

/**
 * Echo exposes an expressive API for subscribing to channels and listening
 * for events that are broadcast by Laravel. Echo and event broadcasting
 * allows your team to easily build robust real-time web applications.
 */

// import Echo from 'laravel-echo';

// window.Pusher = require('pusher-js');

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: process.env.MIX_PUSHER_APP_KEY,
//     cluster: process.env.MIX_PUSHER_APP_CLUSTER,
//     forceTLS: true
// });
