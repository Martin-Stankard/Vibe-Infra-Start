const fs = require('fs');
const path = require('path');
const tmpl = fs.readFileSync(
  path.join(__dirname, 'tmpl', 'container.tmpl'),
  'utf8'
);

exports.publish = function(taffyData, opts, tutorials) {
  const docs = taffyData().get();
  docs.forEach(doc => {
    if (doc.kind === 'function') {
      const filename = doc.meta && doc.meta.filename ? doc.meta.filename : '';
      const dirname = path.dirname(filename);
      const basename = path.basename(filename);
      const html = tmpl
        .replace('{{title}}', doc.name)
        .replace('{{dirname filename}}', dirname)
        .replace('{{basename filename}}', basename)
        .replace('{{name}}', doc.name)
        .replace('{{description}}', doc.description || '')
        .replace('{{#params}}', doc.params ? doc.params.map(p => `- ${p.name} (${p.type.names.join(', ')})`).join('\n') : '')
        .replace('{{/params}}', '')
        .replace('{{returns.type.names}}', doc.returns && doc.returns.length ? doc.returns[0].type.names.join(', ') : 'void');
      fs.writeFileSync(path.join(opts.destination, `${doc.name}.html`), html, 'utf8');
    }
  });
};
