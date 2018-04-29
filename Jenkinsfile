pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''#!/bin/sh
yarn install
yarn build
'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''#!/bin/sh 
cp -a /dist /home/dev/ndeputa/public/
cd /home/dev/ndeputa
pm2 restart all
'''
      }
    }
  }
}