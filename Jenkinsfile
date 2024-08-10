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
                    sh '''
                        curl -sL https://deb.nodesource.com/setup_$NODE_VERSION | sudo -E bash -
                        sudo apt-get install -y nodejs
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
                sh 'npm install'
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
