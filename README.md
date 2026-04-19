🚀 ChatOps AI Platform

This is a full-stack chatbot application built using Next.js for the frontend and FastAPI for the backend.

I worked on this project mainly to understand how things actually work in real DevOps environments — not just building the app, but taking it all the way from local setup to CI/CD, Docker, Kubernetes, and monitoring.

🧠 What I was trying to do

Initially, I just wanted to build a simple chatbot UI and connect it to a backend.

But while working on it, I extended it step by step to cover:

Containerizing the app
Automating builds using GitHub Actions
Adding security scans
Deploying to Kubernetes (EKS)
Setting up GitOps using Argo CD
Adding monitoring and logging

So it kind of became a full end-to-end DevOps project.

🏗️ How the app works

Pretty simple flow:

User types something in UI → frontend sends API request → backend processes it → response is shown back in UI

⚙️ Tech Stack

Frontend

Next.js
React
TypeScript

Backend

FastAPI
Python

DevOps

Docker
GitHub Actions
Kubernetes (EKS)
Argo CD
Argo Rollouts

Monitoring

Prometheus
Grafana
ELK
CloudWatch
📁 Project Structure
chatops-ai-platform/
│
├── frontend/
├── backend/
├── docker-compose.yml
│
└── .github/workflows/
    ├── ci.yml
    └── security.yml
🐳 What I did with Docker

Once the app was working locally, I created Dockerfiles for both frontend and backend.

Used multi-stage builds
Built separate images
Pushed them to Docker Hub

Also tested everything locally using:

docker compose up --build
🔁 CI/CD (GitHub Actions)

I created two workflows:

CI Pipeline (ci.yml)

This handles build + scan + push.

For both frontend and backend:

Install dependencies
Build app
Build Docker image
Tag with:
latest
commit SHA
Run Trivy scan
Push to Docker Hub (only on main branch)

One thing I handled carefully:

PRs only run build and scan
Push to main actually pushes images
Security Pipeline (security.yml)

This is separate.

Runs Gitleaks
Checks if any secrets are pushed
Runs on every push and PR
🔐 Security part

I didn’t want to skip this because in real projects it matters.

Used Trivy for image scanning
Used Gitleaks for secret detection

Even if it’s a small project, I wanted to follow that practice.

🚀 Deployment
First step

Deployed on EC2 using Docker just to validate everything works end-to-end.

Then moved to Kubernetes
Created deployments and services
Used ClusterIP for backend
Frontend talks using service name
🔄 GitOps (Argo CD)

Instead of manually deploying:

Created a separate GitOps repo
Stored Kubernetes manifests there
Argo CD watches the repo
Any change automatically deploys

Also used Argo Rollouts for blue/green deployment.

📊 Monitoring

I added monitoring mainly to understand how systems behave.

Prometheus → collects metrics
Grafana → dashboards
ELK → logs
CloudWatch → AWS-level metrics
⚠️ Issues I faced

This is where I actually learned the most.

Frontend couldn’t hit backend
→ fixed service name issue
Docker build failed sometimes
→ fixed dependencies and Dockerfile
Env variables not working
→ fixed using NEXT_PUBLIC_API_BASE_URL
ALB not creating
→ issue with IAM role / OIDC
Services not reachable
→ fixed ports and service configs
🧪 Commands I used a lot
kubectl get pods -A
kubectl logs <pod-name>
kubectl describe pod <pod-name>
kubectl get svc
kubectl get ingress -A

curl http://<service-ip>:8000/api/chat
