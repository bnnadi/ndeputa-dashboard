pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''#!/bin/sh <<EOF
yarn install
yarn build
exit
EOF'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''#!/bin/sh <<EOF
cp -a /dist /home/dev/ndeputa/public/
cd /home/dev/ndeputa
pm2 restart all
exit
EOF'''
      }
    }
  }
}