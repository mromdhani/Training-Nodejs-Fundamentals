# Lab 05- Accessing MongoDB Data bases 
---


### Lab Steps

- [Step 1: Set up a MongoDB Server using Docker and a VS Code Extension for MongoDB](#step-1-set-up-a-mongodb-server-using-docker-and-a-vs-code-extension-for-mongodb)
- [Step 2: Accessing MongoDB using MongoClient](#step-2-accessing-mongodb-using-mongoclient)
- [Step 3: Accessing MongoDB using the Mongoose ODM](#step-3-accessing-mongodb-using-the-mongoose-odm)
- [Step 4: Building a CRUD service using Express and Mongoose](#step-4-building-a-crud-service-using-express-and-mongoose)


# Step 1: Set up a MongoDB Server using Docker and a VS Code Extension for MongoDB
Docker enables to spin up quickly a MongoDB Server as an isolated container.

- Create the following Docker-compose file, named it `docker-compose.yaml`

```yaml
version: "3.8"
services:
  mongodb:
     image : mongo
     container_name: mongodb
     volumes:
        - ./mongodb:/data/db
     ports:
       - 27017:27017
     restart: unless-stopped
```
- Start the container using the command:
```shell
docker-compose up
```
- To stop the the container, rum the command:
```shell
docker-compose down
```
- Install the **MongoDB Extension for VS Code** extension in order to use it as client to the MongoDB server.
  
# Step 2: Accessing MongoDB using MongoClient

Implement the step by step examples to get started with MongoClient and MongoDB.

- node-01-connect-to-mongodb
- node-01-connect-to-mongodb-async-await
- node-02-insert-new-document
- node-03-find-all-document
- node-04-update-document
- node-05-delete-document

# Step 3: Accessing MongoDB using the Mongoose ODM
Implement the step by step examples to get started with Mongoose ODM.
 - node-mongoose-demo

# Step 4: Building a CRUD service using Express and Mongoose 
Walk through the CRUD application example provided in the project `mongoose-express-CRUD`. Modify the code to add new functionnalities.
 

