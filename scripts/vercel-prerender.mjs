import { execSync } from 'child_process'
import { readdirSync, writeFileSync } from 'fs'

console.log('Building...')
execSync('npm run build', { stdio: 'inherit' })

const files = readdirSync('dist/client/assets')
const css = files.find(f => f.endsWith('.css'))
const js = files.find(f => f.endsWith('.js'))

console.log('css:', css, 'js:', js)

writeFileSync('dist/client/index.html', '<!DOCTYPE html>\n<html lang="it">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width,initial-scale=1">\n<title>ANCoSIX</title>\n<link rel="stylesheet" href="/assets/' + css + '">\n</head>\n<body>\n<div id="root"></div>\n<script type="module" src="/assets/' + js + '"></script>\n</body>\n</html>')

console.log('index.html created OK')
