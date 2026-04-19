# 🚀 ChatOps AI Platform

This is a full-stack chatbot application built using **Next.js (frontend)** and **FastAPI (backend)**.

I built this project mainly to understand how things actually work in real DevOps environments — not just building the app, but taking it all the way from local setup to CI/CD, Docker, Kubernetes, and monitoring.

---

## 🧠 What I was trying to do

Initially, I started with a simple chatbot idea — just build a UI and connect it to a backend.

But while working on it, I extended it step by step:

- Containerizing the application  
- Automating builds using GitHub Actions  
- Adding security scans (Trivy + Gitleaks)  
- Deploying to Kubernetes (EKS)  
- Setting up GitOps using Argo CD  
- Adding monitoring and logging  

So over time, it became a full end-to-end DevOps project.

---

## 🏗️ How the app works


User → Frontend (Next.js) → Backend (FastAPI) → Response → UI


---

## ⚙️ Tech Stack

### Frontend
- Next.js  
- React  
- TypeScript  

### Backend
- FastAPI  
- Python  

### DevOps & Cloud
- Docker  
- GitHub Actions  
- Kubernetes (EKS)  
- Argo CD  
- Argo Rollouts  

### Monitoring & Logging
- Prometheus  
- Grafana  
- ELK Stack  
- AWS CloudWatch  

---

## 📁 Project Structure


chatops-ai-platform/
│
├── frontend/
├── backend/
├── docker-compose.yml
│
└── .github/workflows/
├── ci.yml
└── security.yml


---

## 🐳 Docker Setup

After building the app locally, I containerized both frontend and backend.

- Created separate Docker images  
- Used multi-stage builds to keep images optimized  
- Pushed images to Docker Hub  

Run locally:


docker compose up --build


---

## 🔁 CI/CD Pipeline

I set up CI/CD using GitHub Actions with two workflows.

### CI Pipeline (`ci.yml`)

Handles build, scan, and push for both frontend and backend.

- Install dependencies  
- Build application  
- Build Docker image  
- Tag images (`latest` + commit SHA)  
- Run Trivy scan  
- Push images (only on `main` branch)  

### Security Pipeline (`security.yml`)

- Runs Gitleaks  
- Scans for secrets in the repository  
- Runs on every push and pull request  

---

## 🔐 Security

Security is part of the pipeline, not something added later.

- **Trivy** → scans Docker images for vulnerabilities  
- **Gitleaks** → detects exposed secrets  

---

## 🚀 Deployment

### Step 1 — EC2
Initially deployed using Docker on EC2 to validate everything.

### Step 2 — Kubernetes (EKS)
Then moved to Kubernetes:

- Created deployments and services  
- Backend exposed internally using ClusterIP  
- Frontend communicates using service name  

---

## 🔄 GitOps (Argo CD)

Instead of manual deployments:

- Kubernetes manifests are stored in a GitOps repository  
- Argo CD continuously watches for changes  
- Any update triggers automatic deployment  

Also used **Argo Rollouts** for blue/green deployments.

---

## 📊 Monitoring & Observability

To simulate a real production setup:

- Prometheus → collects metrics  
- Grafana → dashboards  
- ELK → logs  
- CloudWatch → AWS-level monitoring  

---

## ⚠️ Challenges I faced

- Frontend couldn’t reach backend  
  → fixed using correct Kubernetes service name  

- Docker builds failed  
  → fixed dependency issues in Dockerfile  

- Environment variables not working  
  → fixed using `NEXT_PUBLIC_API_BASE_URL`  

- ALB not getting created  
  → issue with IAM / OIDC configuration  

- Services not reachable  
  → fixed service and port configuration  

---

## 🧪 Useful Commands


kubectl get pods -A
kubectl logs <pod-name>
kubectl describe pod <pod-name>
kubectl get svc
kubectl get ingress -A

curl http://<service-ip>:8000/api/chat


---

## 🎯 Outcome

- Fully working full-stack application  
- CI/CD pipeline implemented  
- Dockerized and Kubernetes-ready  
- GitOps deployment working  
- Blue/Green deployment setup  
- Monitoring and logging integrated  
