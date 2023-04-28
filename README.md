# NodeJS-Code-Standard-Demo

Structure

- api - This is a root folder which servers all the request.

1. controller - This folder contains all the business logics related details and which is responsible to send the response to any API.
2. helper - This folder is used to access and perform any database related queries.
3. validator - The validator function is used to validate any API from the user and for that we are using joi npm to validate any API.

- routes - The route folder is responsible for manage any API route

- utils

1. common.js - we design this file to keep all the common functions in one place so we can achieve reusability of code.
2. databaseHelper.js - This database file contains all the CRUD and get connection function so we can use it in anywhere in the code.
3. responseHelper.js - This file always contains only two functions which is used for sending success or error response to any API in whole application.

- views - In views holder we will keep all that HTML files which is HTML files with .ejs extension. In case when we want to send any notification with email template so we can read the email template from this folder and attached and send to the email.

- .gitignore - This file used whenever we want to ignore any folder of file to get in git commit. We can add those details into this files.

- app.js - It's a main server app file.

- package.json - This is the entry level file of the server app and which contains all the basic and dependency version related information.

Note:

1. In this example we are connecting to database when server runs.
2. Only use database common function to perform any operation.
3. In untils, All functions must be independent. It should not relay on any other function.
4. Define routes as per modules.
5. Each API must be validate with Joi to secure payload.


<img src="https://github.com/MoonTechnolabs/NodeJS-Code-Standard-Demo/blob/main/public/images/Screenshot_1.png" alt="node.js" width="200"/>
