# 🚀 ChatOps AI Platform

A full-stack chatbot application built with **Next.js (Frontend)** and **FastAPI (Backend)**, containerized using Docker and integrated with a complete **DevOps CI/CD pipeline**.

---

## 🧠 Project Overview

This project demonstrates a real-world DevOps workflow including:

- Full-stack application development
- Containerization using Docker (multi-stage builds)
- CI/CD pipeline using GitHub Actions
- Security scanning (Trivy + Gitleaks)
- Docker image publishing to Docker Hub
- Cloud deployment on AWS EC2

---

## 🏗️ Architecture

```
Browser → Frontend (Next.js) → Backend (FastAPI) → Response
```

---

## ⚙️ Tech Stack

### Frontend
- Next.js
- React
- TypeScript

### Backend
- FastAPI
- Python 3.12

### DevOps & Tools
- Docker (multi-stage builds)
- Docker Compose
- GitHub Actions (CI/CD)
- Trivy (vulnerability scanning)
- Gitleaks (secret scanning)
- AWS EC2 (deployment)

---

## 📁 Project Structure

```
chatops-ai-platform-app/
│
├── frontend/              # Next.js frontend
│   ├── Dockerfile
│   └── app/
│
├── backend/              # FastAPI backend
│   ├── Dockerfile
│   └── app/
│
├── docker-compose.yml
├── .github/workflows/    # CI/CD pipelines
│   ├── ci.yml
│   └── security.yml
└── README.md
```

---

## 🐳 Docker Setup

### Build and run locally

```bash
docker compose up --build
```

### Access application

- Frontend: http://localhost:3000
- Backend: http://localhost:8000/docs

---

## 📦 Docker Images

Published to Docker Hub:

- Frontend: `rampo3/chatops-frontend`
- Backend: `rampo3/chatops-backend`

Supports:
- `latest`
- commit SHA tagging (immutable builds)

---

## 🔁 CI/CD Pipeline (GitHub Actions)

Pipeline automatically triggers on:

- Push to `main`
- Pull requests

### Pipeline Stages

1. Install dependencies  
2. Build application  
3. Build Docker images  
4. Security scanning (Trivy)  
5. Push images to Docker Hub  

---

## 🔐 Security (DevSecOps)

### 🔍 Trivy (Container Scanning)
- Scans Docker images for vulnerabilities  
- Checks OS + dependencies  
- Reports HIGH & CRITICAL issues  

### 🔑 Gitleaks (Secret Detection)
- Detects hardcoded secrets in repo  
- Prevents credential leaks  

---

## 🚀 Deployment

Deployed on AWS EC2:

- Docker containers running frontend & backend  
- Public access via EC2 IP  

Example:
```
http://<EC2_PUBLIC_IP>:3000
```

---

## 🧪 API Testing

### Health Check

```bash
curl http://<IP>:8000/health
```

### Chat API

```bash
curl -X POST http://<IP>:8000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message":"hello"}'
```

---

## 💡 Key DevOps Features

- Multi-stage Docker builds  
- Containerized full-stack app  
- Automated CI/CD pipeline  
- Vulnerability scanning integration  
- Immutable image tagging (SHA-based)  
- Real cloud deployment experience  

---

## 📌 Future Enhancements

- Kubernetes deployment (EKS)  
- GitOps (ArgoCD)  
- Ingress controller (ALB)  
- Blue/Green deployment  
- Monitoring (Prometheus + Grafana)  

---

## 👨‍💻 Author

**Ram (DevOps Engineer)**  
- AWS | Kubernetes | CI/CD | Cloud Security  

