
@customElement('service-worker')

class ServiceWorkerElement extends Polymer.Element {
  @property({notify: true})
  notificationsStatus: string;

  ready() {
    super.ready();

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').then((registration) => {
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (!installingWorker)
            return;

          installingWorker.addEventListener('statechange', () => {
            if (installingWorker.state === 'installed' && !navigator.serviceWorker.controller) {
              this.$.installedMessage.classList.add('visible');
              setTimeout(() => {
                this.$.installedMessage.classList.remove('visible');
              }, 5000);
            }
          });
        });

        if ('PushManager' in window && 'Notification' in window) {
          registration.pushManager.getSubscription().then((subscription) => {
            this.notificationsStatus = subscription ? 'subscribed' : 'unsubscribed';
          });
        }
      });

      // Check to see if the service worker controlling the page at initial load
      // has become redundant, since this implies there's a new service worker with fresh content.
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.addEventListener('statechange', (event: any) => {
          if (event.target.state === 'redundant') {
            this.$.updatedMessage.classList.add('visible');
          }
        });
      }
    }
  }

  _reload() {
    window.location.reload();
  }
}