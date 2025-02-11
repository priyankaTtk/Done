pipeline {
    agent any

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/priyankaTtk/Done.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    // Install Node.js dependencies
                    sh 'npm install'
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    // Run your tests
                    sh 'npm test'
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    // Build the React app
                    sh 'npm run build'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    // Deploy the app (this can vary based on your deployment method)
                    // For example, you can use a simple command to copy files to a server
                    sh 'scp -r build/* user@yourserver:/path/to/deploy'
                }
            }
        }
    }
}