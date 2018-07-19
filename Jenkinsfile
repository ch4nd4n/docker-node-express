pipeline {
  agent {
    dockerfile {
      filename 'Dockerfile'
    }

  }
  stages {
    stage('Test') {
      steps {
        sh 'node --version'
        sh 'npm install -g mocha'
        sh 'npm run test'
      }
    }
  }
}
