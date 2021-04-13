pipeline {
    agent {
        kubernetes {
          inheritFrom 'build-agent'
          defaultContainer 'jnlp'
          yaml """
          apiVersion: v1
          kind: Pod
          metadata:
          labels:
            component: ci
          spec:
            containers:
            - name: jnlp
              image: eilonwy/jenkins-slave:latest
              workingDir: /home/jenkins
              env:
              - name: DOCKER_HOST
                value: tcp://localhost:2375
              resources:
                requests:
                  memory: "900Mi"
                  cpu: "0.3"
                limits:
                  memory: "999Mi"
                  cpu: "0.5"
          """
        }
    }
    
    stages{
        stage('Create Canary') {
            steps {
                // Send http request to trigger create_canary GitHub workflow in repository
                sh 'curl -X POST -H \"Accept: application/vnd.github.v3+json\" -H \"Authorization: Bearer $GITHUB_ACCESS_TOKEN \" https://api.github.com/repos/rss-sre-1/rss-frontend/actions/workflows/create_canary.yml/dispatches -d \'{\"ref\":\"dev\"}\''
            }
        }

       stage('Promote or Reject Canary') {
           steps {
               script {
                   try{
                       input 'Promote Canary to Production?'
                       sh 'curl -X POST -H \"Accept: application/vnd.github.v3+json\" -H \"Authorization: Bearer $GITHUB_ACCESS_TOKEN \" https://api.github.com/repos/rss-sre-1/rss-frontend/actions/workflows/promote_canary.yml/dispatches -d \'{\"ref\":\"dev\"}\''
                   } catch (error) {
                       sh 'curl -X POST -H \"Accept: application/vnd.github.v3+json\" -H \"Authorization: Bearer $GITHUB_ACCESS_TOKEN \" https://api.github.com/repos/rss-sre-1/rss-frontend/actions/workflows/reject_canary.yml/dispatches -d \'{\"ref\":\"dev\"}\''
                   }
               }
           }
        }

    }
}
