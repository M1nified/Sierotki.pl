<!DOCTYPE html>
<html manifest="sierotki.appcache">

<head>
  <title>Sierotki.pl</title>
  <link rel="manifest" href="sierotki.manifest.json">
  <meta name="viewport" content="width=device-width, initial-scale=1">
</head>

<body>
  <div class="content">
    <h1>Sierotki.js</h1>
    <div class="settings">
      <p>
        <input type="checkbox" id="select-after-paste"><label for="select-after-paste"><span>Select after paste</span></label>
        <input type="checkbox" id="focus-after-focus"><label for="focus-after-focus"><span>Focus after focus</span></label>
      </p>
      <!--<p><label><input type="checkbox" id="copy-on-paste"> Auto copy after paste</label></p>-->
      <!--<p><label><input type="checkbox" id="auto-copy"> Auto-copy</label></p>-->
    </div>
    <div class="inout">
      <p><textarea name="" id="input" class="" placeholder="HTML input..."></textarea></p>
      <p><textarea name="" id="output" class="" placeholder="HTML output..." readonly></textarea></p>
    </div>
    <footer>
      <hr>
      <p>Implements <a href="https://www.npmjs.com/package/sierotki.js">sierotki.js</a> npm package.</p>
    </footer>
    <a href="https://github.com/M1nified/Sierotki.pl" class="only-wide">
      <img style="position: absolute; top: 0; right: 0; border: 0;" src="lib/fork_me_on_github.png"
        alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png"></a>
  </div>
  <style><?php echo preg_replace("/[\n\t]|\s{2,}|/", "", file_get_contents(__DIR__.'/sierotki.main.css')); ?></style>
  <script>
    (function (i, s, o, g, r, a, m) { i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () { (i[r].q = i[r].q || []).push(arguments) }, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga'); ga('create', 'UA-18744559-10', 'auto'); ga('send', 'pageview');
  </script>
  <script type="text/javascript" src="node_modules/sierotki/index.js"></script>
  <script type="text/javascript" src="sierotki.main.js"></script>
</body>

</html>