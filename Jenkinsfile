pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh '''#!/bin/sh
yarn install --production 
yarn build'''
      }
    }
    stage('Deploy') {
      steps {
        sh '''#!/bin/sh 
pm2 restart all'''
      }
    }
  }
}