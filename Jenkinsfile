pipeline {
    agent any

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/priyankaTtk/Done.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }

        stage('Lint Code') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test -- --coverage'
            }
        }

        stage('Build Application') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                archiveArtifacts artifacts: 'build/**', fingerprint: true
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed. Check errors in the logs.'
        }
    }
}
