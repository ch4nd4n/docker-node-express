pipeline {
  agent {
    docker {
      image 'node:alpine'
      args '-p 3000:3000'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      environment {
        ci = 'true'
      }
      steps {
        sh 'npm test'
      }
    }
  }
}