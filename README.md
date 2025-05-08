**SIT737 Task 9.1P – Adding a database to your application**

This project demonstrates how to deploy a Node.js-based CRUD application integrated with MongoDB in a Kubernetes environment. It includes containerization, persistent storage, secure credential management, service exposure, and testing of CRUD operations using MongoDB Compass and mongosh.

**Project Components**

MongoDB deployed with:

--> Persistent Volume

--> Persistent Volume Claim

--> Secret for credentials

Node.js CRUD application deployed from a Docker image

Kubernetes resources:

--> Deployments

--> Services (NodePort)

--> StorageClass

Verified with:

kubectl, docker, mongosh

MongoDB Compass GUI

**MongoDB Configuration**

Connection URI Used: mongodb://admin:password@mongo-svc:27017/?authSource=admin

Exposed via NodePort: 32000

Connected successfully in MongoDB Compass

CRUD Operations Performed via mongosh

use appdb

// Create
db.items.insertOne({ name: "RK", age: 25, role: "Student" })

// Read
db.items.find().pretty()

// Update
db.items.updateOne({ name: "RK" }, { $set: { age: 30, role: "Student" } })

// Delete
db.items.deleteOne({ name: "RK" })

**Step-by-Step Instructions for SIT737 9.1P**

**Step 1: Setup and Prerequisites** 

Install Docker and Docker Desktop.

Install Kubernetes and enable it via Docker Desktop.

Install kubectl CLI for Kubernetes command-line access.

Install MongoDB Compass for GUI-based verification.

Install Node.js and npm if needed locally for development.

**step 2: Build and Push CRUD App Image**

Create a Dockerfile:

Build and tag the Docker image:

docker build -t preethramadoss/app:latest .

Login and push the image to Docker Hub:

docker login

docker push preethramadoss/app:latest

**Step 3: Deploy MongoDB to Kubernetes**

Apply secret.yaml to create database credentials:

kubectl apply -f secret.yaml

Apply storage resources:

kubectl apply -f storageclass.yaml

kubectl apply -f persistent_volume.yaml

kubectl apply -f persistentvolumechain.yaml

Deploy MongoDB using:

kubectl apply -f deployment.yaml

kubectl apply -f services.yaml

**Step 4: Deploy the CRUD Application**

Apply deployment and service for the CRUD app:

kubectl apply -f app-deployment.yaml

kubectl apply -f app-service.yaml

Confirm pods and services:

kubectl get pods

kubectl get svc

**Step 5: Connect Using MongoDB Compass**

Find the NodePort for mongo-svc (e.g. 32000).

Open MongoDB Compass and use this URI:

mongodb://admin:password@localhost:32000/?authSource=admin

**Step 6: Perform CRUD in mongosh**

Open mongosh from Compass or shell.

use appdb

db.items.insertOne({ name: "RK", age:25, role: "Student" })

db.items.find().pretty()

db.items.updateOne({ name: "RK" }, { $set: { age: 30, role: "Student" } })

db.items.deleteOne({ name: "RK" })

**Step 7: Final Checks**

Ensure all pods are running

Data is visible in Compass

CRUD operations function as expected

All files and screenshots are included in submission

**Author**

**Name**: Preeth Ramadoss

**Unit: SIT737** – Cloud Native Application Development

**Task: 9.1P** – MAdding a database to your application**


