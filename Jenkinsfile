pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        echo 'Building....'
        sh 'yarn install'
        sh 'yarn build'
      }
    }
    // stage('Deploy') {
    //   steps {
    //     echo 'Deploying....'
    //     sh 'cp -a /dist /home/dev/ndeputa/public/'
    //     sh 'cd /home/dev/ndeputa'
    //     sh 'pm2 restart all'
    //   }
    // }
    stage('Deliver') {
      steps {
        sh './jenkins/scripts/deliver.sh'
        input message: 'Finished using the web site? (Click "Proceed" to continue)'
        sh './jenkins/scripts/kill.sh'
      }
    }
  }
}