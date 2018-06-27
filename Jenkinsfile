pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Build') {
      steps {
        sh 'docker build .'
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