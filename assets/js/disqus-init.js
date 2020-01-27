(function() {
    var disqus_shortname = document.currentScript.getAttribute('disqus_username');
    var d = document, s = d.createElement('script');
    s.src = 'https://' + disqus_shortname + '.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
})();