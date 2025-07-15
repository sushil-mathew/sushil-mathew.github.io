(function() {
  const validHostnames = ['sushil-mathew.github.io']; 
  if (!validHostnames.includes(location.hostname)) return;

  const script = document.createElement('script');
  script.src = 'https://www.googletagmanager.com/gtag/js?id=G-8F6ZH0Z1ZB';
  script.async = true;
  document.head.appendChild(script);

  script.onload = function () {
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-8F6ZH0Z1ZB'); 
  };
})();
