pipeline {
    agent any

    environment {
        DOCKER_IMAGE = 'zero41/sample-web-app'
        registry = "lequocvinh140213@gmail.com/zero41/sample-web-app" 
        registryCredential = 'zero41' 
        dockerImage = '' 
    }

    stages {
        stage('Clone project') {
            steps {
                git branch: "/main", url: 'https://github.com/quocvinh0401/sample-devops-practice.git'
            }
        }
        stage('Build Docker Image') {
            environment {
                EMAIL_CONTACT = credentials('email_contact')
                GMAIL_APP_PASSWORD = credentials('gmail_app_password')
                EMAIL_RECEIVER = credentials('email_receiver')
                NEXT_PUBLIC_RECAPTCHA_SITE_KEY = credentials('next_public_recaptcha_site_key')
                RECAPTCHA_SECRET_KEY = credentials('recaptcha_secret_key')
            }

            steps {
                sh 'docker build -f frontend/Dockerfile -t $DOCKER_IMAGE --build-arg email_contact=$EMAIL_CONTACT --build-arg gmail_app_password=$GMAIL_APP_PASSWORD --build-arg email_receiver=$EMAIL_RECEIVER --build-arg next_public_recaptcha_site_key=$NEXT_PUBLIC_RECAPTCHA_SITE_KEY --build-arg recaptcha_secret_key=$RECAPTCHA_SECRET_KEY'
            }
        }
        stage('Push Image to Docker Hub') {
            steps {
                sh 'docker push $DOCKER_IMAGE'
            }
        }
    }
}