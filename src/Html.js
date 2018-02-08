import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom/server';
import Helmet from 'react-helmet/lib/Helmet';

export default function Html({
    assets, component
}) {
    const content = component ? ReactDOM.renderToString(component) : '';
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
            {
              Object.keys(assets.styles).map(style => (
                <link href={assets.styles[style]} key={style} media="screen, projection" rel="stylesheet" type="text/css" charSet="UTF-8" />
              ))
            }
          </head>
          <body>
            <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
            <script async defer src={assets.javascript.main} charSet="UTF-8" />
          </body>
        </html>
      );
}