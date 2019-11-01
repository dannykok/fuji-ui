import { useEffect } from 'react';
/*
useServiceWorker
This hook is to register service worker, at the same time check for service worker update.
This should replace the use of serviceWorker.register() call in CRA's index.html.
Encapsulate the logic in a hook can help managing the trigger of checking app update, and allow user to be acknowledged by visual prompt (notification)

Set checkInterval = 0 to suppress the periodic check.

Todo: remove the dependency of original out-of-the-box service-worker.js from CRA
*/

const DEFAULT_CHECK_INTERVAL = 86400000; // 1 day

var swReg;

const requestUpdate = () => {
  console.log('[useServiceWorker] requestUpdate');
  swReg.update();
};

const addPeriodicUpdate = interval => {
  if (process.env.NODE_ENV !== 'production') {
    console.log('[useServiceWorker] not going to run in dev mode');
    return;
  }
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready.then(reg => {
      console.log('[useServiceWorker] ready');
      swReg = reg;
      setInterval(requestUpdate, interval);
    });
  } else {
    console.warn('Service worker is not supported.');
  }
};

export const useServiceWorker = (
  register,
  onUpdate,
  checkInterval = DEFAULT_CHECK_INTERVAL,
) => {
  // const [worker, setWorker] = useState();
  useEffect(() => {
    console.log('[useServiceWorker]');
    register({ onUpdate: onSWUpdate });
    addPeriodicUpdate(checkInterval);
    // register({ onRegister: reg => {
    //   // here we add a periodic update interval
    //   if (checkInterval !== 0) {
    //     const interval = setInterval(() => {
    //       console.log('[serviceworker] periodic update');
    //       reg.update();
    //     }, checkInterval);
    //   }
    // }, onUpdate: onSWUpdate, });
    // }
    // return null;
  }, []);

  const performUpdate = () => {
    console.log('[useServiceWorker] performUpdate', swReg.waiting);
    swReg.waiting?.postMessage({ type: 'SKIP_WAITING' });
    window.location.reload(true);
  };

  const onSWUpdate = registration => {
    console.log('[serviceworker] onSWUpdate');
    onUpdate?.(performUpdate);
    swReg = registration;
  };
};

// const isLocalhost = Boolean(
//   window.location.hostname === 'localhost' ||
//     // [::1] is the IPv6 localhost address.
//     window.location.hostname === '[::1]' ||
//     // 127.0.0.1/8 is considered localhost for IPv4.
//     window.location.hostname.match(
//       /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/,
//     ),
// );
//
// function register(config) {
//   if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//     // The URL constructor is available in all browsers that support SW.
//     const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
//     if (publicUrl.origin !== window.location.origin) {
//       // Our service worker won't work if PUBLIC_URL is on a different origin
//       // from what our page is served on. This might happen if a CDN is used to
//       // serve assets; see https://github.com/facebook/create-react-app/issues/2374
//       console.warn(
//         'publicUrl origin is different from current origin',
//         publicUrl.origin,
//         window.location.origin,
//       );
//       return;
//     }
//
//     window.addEventListener('load', () => {
//       const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
//
//       if (isLocalhost) {
//         // This is running on localhost. Let's check if a service worker still exists or not.
//         checkValidServiceWorker(swUrl, config);
//
//         // Add some additional logging to localhost, pointing developers to the
//         // service worker/PWA documentation.
//         navigator.serviceWorker.ready.then(() => {
//           console.log(
//             'This web app is being served cache-first by a service ' +
//               'worker. To learn more, visit https://bit.ly/CRA-PWA',
//           );
//         });
//       } else {
//         // Is not localhost. Just register service worker
//         registerValidSW(swUrl, config);
//       }
//     });
//   }
// }
//
// function registerValidSW(swUrl, config) {
//   navigator.serviceWorker
//     .register(swUrl)
//     .then(registration => {
//       /****
//         this is the cb added in order to get registration handler for update
//       ****/
//       if (config && config.onRegister) {
//         config.onRegister(registration);
//       }
//       /*** end ****/
//       registration.onupdatefound = () => {
//         const installingWorker = registration.installing;
//         if (installingWorker == null) {
//           return;
//         }
//         installingWorker.onstatechange = () => {
//           if (installingWorker.state === 'installed') {
//             if (navigator.serviceWorker.controller) {
//               // At this point, the updated precached content has been fetched,
//               // but the previous service worker will still serve the older
//               // content until all client tabs are closed.
//               console.log(
//                 'New content is available and will be used when all ' +
//                   'tabs for this page are closed. See https://bit.ly/CRA-PWA.',
//               );
//
//               // Execute callback
//               if (config && config.onUpdate) {
//                 config.onUpdate(registration);
//               }
//             } else {
//               // At this point, everything has been precached.
//               // It's the perfect time to display a
//               // "Content is cached for offline use." message.
//               console.log('Content is cached for offline use.');
//
//               // Execute callback
//               if (config && config.onSuccess) {
//                 config.onSuccess(registration);
//               }
//             }
//           }
//         };
//       };
//     })
//     .catch(error => {
//       console.error('Error during service worker registration:', error);
//     });
// }
//
// function checkValidServiceWorker(swUrl, config) {
//   // Check if the service worker can be found. If it can't reload the page.
//   fetch(swUrl)
//     .then(response => {
//       // Ensure service worker exists, and that we really are getting a JS file.
//       const contentType = response.headers.get('content-type');
//       if (
//         response.status === 404 ||
//         (contentType != null && contentType.indexOf('javascript') === -1)
//       ) {
//         // No service worker found. Probably a different app. Reload the page.
//         navigator.serviceWorker.ready.then(registration => {
//           registration.unregister().then(() => {
//             window.location.reload();
//           });
//         });
//       } else {
//         // Service worker found. Proceed as normal.
//         registerValidSW(swUrl, config);
//       }
//     })
//     .catch(() => {
//       console.log(
//         'No internet connection found. App is running in offline mode.',
//       );
//     });
// }
//
// export function unregister() {
//   if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.ready.then(registration => {
//       registration.unregister();
//     });
//   }
// }
