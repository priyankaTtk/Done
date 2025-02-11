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
                script {
                    def lintScriptExists = sh(script: "npm run | grep lint", returnStatus: true) == 0
                    if (lintScriptExists) {
                        sh 'npm run lint'
                    } else {
                        echo 'Skipping lint: No lint script found in package.json'
                    }
                }
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
