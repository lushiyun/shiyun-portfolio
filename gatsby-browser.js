exports.onServiceWorkerUpdateReady = () => typeof window !== 'undefined' && window.location.reload(true)
