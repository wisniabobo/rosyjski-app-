#!/usr/bin/env bash
# Wdrożenie na https://rosyjski.wisnia.dev (wymaga klucza SSH do serwera)
set -euo pipefail
cd "$(dirname "$0")/.."
node tools/check.js | tail -1
node tools/build-sw.js
rsync -az --delete --exclude '.git' --exclude 'tools' --exclude '.DS_Store' --exclude '.gitignore' ./ root@185.235.69.108:/var/www/rosyjski/
ssh root@185.235.69.108 'chown -R www-data:www-data /var/www/rosyjski'
echo "✅ Wdrożono: https://rosyjski.wisnia.dev"
