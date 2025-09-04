# 🌩️ CloudFace

**CloudFace** is a cloud-based **facial recognition employee management system** built with **React (Vite)** on the frontend and **AWS services** (S3, Rekognition, Lambda, API Gateway, Cognito) on the backend.  

It enables:  
- 👤 Employee registration with face indexing.  
- 📷 Visitor recognition with image matching.  
- ☁️ Secure image storage in AWS S3.  
- 🔐 Authentication & API access via AWS Cognito & API Gateway.  

---

## ⚙️ Features  

- **Employee Registration** → Upload employee photo → stored in S3 → indexed in Rekognition.  
- **Visitor Matching** → Compare visitor photos against registered employees.  
- **Secure Storage** → Employee & visitor images stored in dedicated S3 buckets.  
- **Serverless Backend** → AWS Lambda handles face indexing & recognition logic.  
- **Scalable APIs** → REST APIs via AWS API Gateway.  

---

## 🗂 Project Structure  

