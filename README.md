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

CloudFace/
│── index.html
│── package.json
│── vite.config.js
│── src/
│ ├── components/ # UI Components (forms, upload, results)
│ ├── pages/ # Pages (RegisterEmployee, VisitorMatch, Dashboard)
│ ├── services/ # API call helpers (Axios → API Gateway)
│ ├── assets/ # Images, logos, icons
│ ├── App.jsx # Root component
│ └── main.jsx # Entry point
│── public/ # Static files

2️⃣ Install Dependencies
npm install

3️⃣ Run Locally
npm run dev

4️⃣ Configure AWS

Create S3 buckets:

employee-image-vault

visitor-image-vault

Create Rekognition Collection:

aws rekognition create-collection \
  --collection-id employee-collection \
  --region ap-south-1


Deploy Lambda Functions

registerEmployee (for employee registration & face indexing)

matchVisitor (for visitor recognition)

Set up API Gateway

Create REST API → /registerEmployee (POST), /matchVisitor (POST)

Integrate with corresponding Lambda functions

📡 API Endpoints
Endpoint	Method	Description
/registerEmployee	POST	Register a new employee & index face
/matchVisitor	POST	Match visitor image against employees
Example Request (Register Employee)
{
  "firstName": "John",
  "lastName": "Doe",
  "employeeId": "123",
  "objectKey": "john-doe.jpeg"
}

📷 Screenshots

Add UI screenshots here (Employee Registration, Visitor Match, Dashboard).

🤝 Contributing

Fork this repository

Create a feature branch (feature/new-feature)

Commit changes

Push your branch & create a PR

📜 License

This project is licensed under the MIT License.


---

⚡ Mohit, do you want me to also **add a step-by-step AWS backend deployment guide** (Lambda + API Gateway 
