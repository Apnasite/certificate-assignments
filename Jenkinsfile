pipeline {
    agent any

    environment {
        PROJECT_NAME = 'certificate-viewer'
        GIT_REPO_URL = "https://github.com/Apnasite/${PROJECT_NAME}.git"
        GIT_BRANCH = 'main'
        GIT_CREDENTIALS = 'github-tejal'
        
        DOCKER_IMAGE_TAG = "vilasshetkar/test:${PROJECT_NAME}"
        DOCKER_HUB_CREDENTIALS = 'docker-credential'
        
        APP_PORT = '8080'
        PORT = '3017'
        
        REMOTE_HOST = '98.70.75.239' // Replace with your actual remote server's IP address or domain name
        REMOTE_USER = 'azureuser' // Replace with your actual remote server's username
        SSH_CREDENTIALS = 'azuredocker' // Replace with the ID of your SSH credentials
        
    }

    stages {
        stage('Git Checkout') {
            steps {
                git branch: GIT_BRANCH, credentialsId: GIT_CREDENTIALS, url: GIT_REPO_URL
            }
        }

        stage('Docker Build & Push') {
            steps {
                script {
                    docker.build(DOCKER_IMAGE_TAG)
                    docker.withRegistry('https://index.docker.io/v1/', DOCKER_HUB_CREDENTIALS) {
                        docker.image(DOCKER_IMAGE_TAG).push()
                    }
                }
            }
        }
        
        stage('Docker Image Remove') {
            steps {
                script {
                    sh "docker rmi ${DOCKER_IMAGE_TAG}"
                }
            }
        }

        stage('Deploy to Remote Server') {
            steps {
                script {
                    sshagent([SSH_CREDENTIALS]) {
                        sh "ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} 'docker pull ${DOCKER_IMAGE_TAG}'"
                        sh "ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} 'docker stop ${PROJECT_NAME} || true'"
                        sh "ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} 'docker rm ${PROJECT_NAME} || true'"
                        sh "ssh -o StrictHostKeyChecking=no ${REMOTE_USER}@${REMOTE_HOST} 'docker run -p ${PORT}:${APP_PORT} -d --name ${PROJECT_NAME} ${DOCKER_IMAGE_TAG}'"
                    }
                }
            }
        }
    }

    options {
        timestamps()
    }
}
 
