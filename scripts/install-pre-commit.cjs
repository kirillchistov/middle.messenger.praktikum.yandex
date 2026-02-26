const fs = require('fs');
const path = require('path');

const hooksDir = path.join(__dirname, '..', '.git', 'hooks');
const hookPath = path.join(hooksDir, 'pre-commit');

if (!fs.existsSync(hooksDir)) {
  process.exit(0);
}

const script = '#!/usr/bin/env sh\nscripts/pre-commit.sh\n';

try {
  fs.writeFileSync(hookPath, script, { mode: 0o755 });
  // eslint-disable-next-line no-console
  console.log('pre-commit hook installed');
} catch (e) {
  // eslint-disable-next-line no-console
  console.error('Failed to install pre-commit hook', e);
}
