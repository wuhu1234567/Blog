'use strict';

hexo.extend.filter.register('after_render:html', function(html) {
  return html.replace(
    /<meta name="viewport" content="width=device-width">/,
    '<meta name="viewport" content="width=device-width, initial-scale=1.0">'
  );
});
