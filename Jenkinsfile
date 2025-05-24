pipeline {
  agent {
    kubernetes {
      yaml """
apiVersion: v1
kind: Pod
spec:
  serviceAccountName: jenkins-admin
  containers:
  - name: build-tool
    image: ganeshwalkoli/ubuntu-build-tool:kubectl-v0.4
    command:
    - cat
    tty: true
    volumeMounts:
    - name: docker-sock
      mountPath: /var/run/docker.sock
  - name: jnlp
    image: jenkins/inbound-agent:latest
  volumes:
  - name: docker-sock
    hostPath:
      path: /var/run/docker.sock
"""
      defaultContainer 'build-tool'
    }
  }

  environment {
    IMAGE_NAME = "test-nginx-app"
    IMAGE_TAG = "v1.0.${BUILD_NUMBER}"
    REGISTRY = "docker.io/ganeshwalkoli"
    FULL_IMAGE = "${REGISTRY}/${IMAGE_NAME}:${IMAGE_TAG}"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/ganeshwalkoli/angular_project.git'
      }
    }
    
     stage('SonarQube Analysis') {
      steps {
        withSonarQubeEnv('SonarQube') {
          withCredentials([string(credentialsId: 'sonarqube-token', variable: 'SONAR_TOKEN')]) {
            sh '''
              sonar-scanner \
                -Dsonar.projectKey=base-nginx \
                -Dsonar.sources=. \
                -Dsonar.inclusions=**/*.html \
                -Dsonar.host.url=$SONAR_HOST_URL \
                -Dsonar.login=$SONAR_TOKEN \
                -Dsonar.projectVersion=v1.0.$BUILD_NUMBER
            '''
          }
        }
      }
    }

    stage('Build and Push Image') {
      steps {
        sh 'npm install'
        sh 'ng build'

        sh 'docker build -t $FULL_IMAGE .'

        withCredentials([usernamePassword(credentialsId: 'dockerhub-ganesh', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
          sh '''
            echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
            docker push $FULL_IMAGE
          '''
        }
      }
    }

    stage('Deploy to Kubernetes') {
      steps {
        sh '''
          kubectl set image deployment/nginx-app nginx-app=$FULL_IMAGE --namespace=default || kubectl apply -f k8s/deployment.yaml
        '''
      }
    }
  }
}

