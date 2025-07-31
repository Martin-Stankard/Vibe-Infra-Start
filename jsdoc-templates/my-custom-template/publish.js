const fs = require('fs');
const path = require('path');

exports.publish = function(taffyData, opts, tutorials) {
  const docs = taffyData().get();
  docs.forEach(doc => {
    if (doc.kind === 'function') {
      const filename = doc.meta && doc.meta.filename ? doc.meta.filename : '';
      const dirname = path.dirname(filename);
      const basename = path.basename(filename);
      const html = `
        <html>
        <head><title>${doc.name}</title></head>
        <body>
          <h1>Function: ${doc.name}</h1>
          <p><strong>File:</strong> ${basename}</p>
          <p><strong>Folder:</strong> ${dirname}</p>
          <p><strong>Description:</strong> ${doc.description || ''}</p>
          <hr>
        </body>
        </html>
      `;
      fs.writeFileSync(path.join(opts.destination, `${doc.name}.html`), html, 'utf8');
    }
  });
};
