CloudFace

🚀 CloudFace is a cloud-based facial recognition employee management system built using React (Vite) for the frontend and AWS services (S3, Rekognition, Lambda, API Gateway, Cognito) for backend functionalities.

It enables:

👤 Employee registration with face indexing.

📷 Visitor recognition with image matching.

☁️ Secure image storage in AWS S3.

🔐 Authentication and API access through AWS Cognito & API Gateway.

⚙️ Features

Employee Registration: Upload employee photo → stored in S3 → indexed in Rekognition collection.

Visitor Matching: Compares visitor photos against registered employees.

Secure Storage: Employee and visitor images stored in dedicated S3 buckets.

Serverless Backend: AWS Lambda handles face indexing & recognition logic.

Scalable APIs: REST APIs via AWS API Gateway.

🗂 Project Structure
CloudFace/
│── index.html
│── package.json
│── vite.config.js
│── src/
│   ├── components/       # UI Components (forms, upload, results)
│   ├── pages/            # Pages (RegisterEmployee, VisitorMatch, Dashboard)
│   ├── services/         # API call helpers (Axios → API Gateway)
│   ├── assets/           # Images, logos, icons
│   ├── App.jsx           # Root component
│   └── main.jsx          # Entry point
│── public/               # Static files

🛠️ Tech Stack
Frontend

⚛️ React (Vite)

🎨 Tailwind CSS (for styling)

🔗 Axios (API calls)

Backend (AWS)

🗂 Amazon S3 → Image storage (employee & visitor images)

🧠 Amazon Rekognition → Face indexing & matching

🔔 AWS Lambda → Business logic

🌐 API Gateway → REST API endpoints (/registerEmployee, /matchVisitor)

🔑 Amazon Cognito → Authentication (optional)

🚀 Getting Started
1. Clone Repository
git clone https://github.com/your-username/CloudFace.git
cd CloudFace

2. Install Dependencies
npm install

3. Run Locally
npm run dev

4. Configure AWS

Create S3 buckets:

employee-image-vault

visitor-image-vault

Create Rekognition Collection:

aws rekognition create-collection --collection-id employee-collection --region ap-south-1


Deploy Lambda functions (for /registerEmployee and /matchVisitor).

Connect Lambda with API Gateway (/registerEmployee, /matchVisitor).

📡 API Endpoints
Endpoint	Method	Description
/registerEmployee	POST	Register a new employee with face indexing
/matchVisitor	POST	Match visitor image against registered employees

Example request (Register Employee):

{
  "firstName": "John",
  "lastName": "Doe",
  "employeeId": "123",
  "objectKey": "john-doe.jpeg"
}

📷 Screenshots

Add screenshots of your UI here (registration, visitor match, dashboard).

🤝 Contributing

Fork the repo

Create a feature branch (feature/new-feature)

Commit changes

Push & create PR

📜 License

This project is licensed under the MIT License.
