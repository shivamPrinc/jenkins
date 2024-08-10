pipeline {
    agent any

    environment {
        NODE_VERSION = '14.x'  // Specify the Node.js version to use
    }

    stages {
        stage('Setup Node.js') {
            steps {
                script {
                    // Install the Node.js version specified in the environment variable
                    bat '''
                        @echo off
                        set NODE_VERSION=%NODE_VERSION%
                        powershell -Command "iex ((New-Object System.Net.WebClient).DownloadString('https://deb.nodesource.com/setup_$env:NODE_VERSION'))"
                        npm install --global node
                    '''
                }
            }
        }

        stage('Checkout') {
            steps {
                // Clone the repository
                git 'https://github.com/shivamPrinc/jenkins.git' // Replace with your repository URL
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install npm dependencies
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build the application
                echo 'Building the application...'
            }
        }
    }

    post {
        always {
            // Clean up workspace if necessary
            cleanWs()
        }

        success {
            echo 'Pipeline succeeded!'
        }

        failure {
            echo 'Pipeline failed!'
        }
    }
}
