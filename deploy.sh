#!/bin/bash
yarn build
mv build/. ~/dev.denadis.com/public/dashboard/
cd  ~/dev.denadis.com/
pm2 restart all
