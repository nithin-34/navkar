if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker.register('/navkar/sw.js');
            });
        }
        else {
  console.log('Service workers are not supported.');
}
