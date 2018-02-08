import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet/lib/Helmet';

export default function Html({
    styles, js, component
}) {
    const content = component ? ReactDOM.renderToString(component) : '';
    console.log('styles: ');
    console.log(styles);
    console.log(styles.app);
    console.log(JSON.stringify(styles.app))
    console.log('js: ');
    console.log(js);
    const {
        base, title, meta, link, script,
      } = Helmet.rewind();
    return (
        <html lang="en">
          <head>
            <meta charSet="utf-8" />
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            { base.toComponent() }
            { title.toComponent() }
            { meta.toComponent() }
            { link.toComponent() }
            { script.toComponent() }    
            {/* styles (will be present only in production with webpack extract text plugin) */}
            <link rel="stylesheet" href={styles.app} />
            
          </head>
          <body>
            <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
            <script async defer src={js.main} charSet="UTF-8" />
          </body>
        </html>
      );
}