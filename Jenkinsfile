pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                echo 'Checking out source code...'
                // If running locally, Jenkins workspace handles the files
            }
        }
        
        stage('Install & Test') {
            steps {
                echo 'Running unit tests...'
                // Using Node container or local node tool
                sh 'npm ci'
                sh 'npm test'
            }
        }
        
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                // Uses the Docker socket shared from WSL host
                sh 'docker build -t my-node-app:${BUILD_NUMBER} .'
            }
        }
    }
    
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed during execution.'
        }
    }
}