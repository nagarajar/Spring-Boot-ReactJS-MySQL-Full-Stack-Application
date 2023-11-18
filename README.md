# Spring-Boot-React-MySQL-Full-Stack-App

## Home Page

![Home Page](/assets/Home.jpeg)

## View Employees

> (Without using react-data-table)

![Employees](/assets/Employees.jpeg)

## View Employees Data Table

> (Using react-data-table)

![Employees Data Table](/assets/Employees_DT.jpeg)

## View Employee Profile

![View Employee Profile](/assets/Employee_Profile.jpeg)

## Update Employee

![Update Employee](/assets/Update.jpeg)

## Add Employee

![Add Employee](/assets/Add.jpeg)

## Backend API Details

### Application Name: `spring-boot-back-end-app`

> #### Tools & Technologies:

```
1. Java
2. Spring Boot 3.1.x
3. Spring Data JPA
4. Maven 3.11.x
5. JDK 17
6. Embedded Tomcat 10.1.x
7. MySQL Database
8. STS IDE
```

> #### Rest API's:

#### `base url` = `http://localhost:9090/api/v1/employee/`

```
1. Post  : "create"
2. Put   : "update/{id}"
3. Get   : "all"
4. Get   : "{id}"
5. Delete: "{id}"
```

## Frontend API Details

### Application Name: `react-rfc-front-end-app` _(Implemented using Functional Component)_

> #### Tools & Technologies:

```
1. React 18.2.x
2. JavaScript(ES6)
3. Node JS and NPM 18.12.x
4. VS Code IDE
5. Create react app CLI
6. Bootstrap
7. Axios HTTP Library
6. React-router-dom
7. React-icons
8. React-data-table-component
```

> #### Eniromental Setup:

1. Node JS

   - Download: https://nodejs.org/en
   - install
   - verify: cmd: node --version

2. VS Code

   - Download: https://code.visualstudio.com/
   - install

3. Create React App

   - cmd: npx create-react-app react-rfc-front-end-app
   - start app: npm start

4. Install Reactjs code snippets & prettier in VS Code Click

   - Extensions
   - Search
   - es7 -> ES7 React/Redux/GraphQL/React-Native snippets -> install first one or (check name: rodrigovallades)
   - prettier -> Prettier - Code formatter -> install -> click on Setting -> search save -> check format on save

5. Install axios for third party api communication

   - cmd: npm i axios
   - verify the dependency in package.json

6. Install Bootstrap

   - 1st way:

     - take cdn from : https://getbootstrap.com/docs/5.0/getting-started/introduction/
     - insert in index.html under head tag

   - 2nd Way:
     - cmd: npm install bootstrap --save
     - verify the dependency in package.json
     - index.js: import 'bootstrap/dist/css/bootstrap.min.css'

7. Install router for navigation

   - cmd: npm install react-router-dom
   - verify the dependency in package.json

8. Install react-icons instead of using button

   - cmd: npm install react-icons
   - verify the dependency in package.json

9. Install react-data-table-component
   - cmd: npm i react-data-table-component
   - verify the dependency in package.json

## Implementations Steps:

1. Home.js -> short cut for code snippet -> rafce

> Create a folder: components under src -> create below components under components folder

2. EmployeeListComponent.js

   - Refer table classes -> [Bootstrap Tables](https://getbootstrap.com/docs/4.1/content/tables/)

> Create a folder: common under src -> create below components under components folder

3. NavBar.js

   - short cut for code snippet -> rafce
   - Refer code -> https://getbootstrap.com/docs/4.1/components/navbar/ here and use it as per our requirement.
   - import {Link} from 'react-router-dom';

4. Configure router in app.js

   - import { BrowserRouter as Router, Route, Routes } - from "react-router-dom";
   - Routes is to handle single navigation at a time.

5. AddEmployee.js

6. EditEmployee.js

   - Copy the same code from the AddEmployee, change the names and url.
   - get the employee by id -> so call this method in useEffect.
   - Create a router in App.js
   - create a variable id with useParams() so it take dynamic variable from the url.

7. EmployeeProfile.js
   - get the employee by id -> so call this method in useEffect.
   - Create a router in App.js
   - create a variable id with useParams() so it take dynamic variable from the url.
8. EmployeeListDataTable.js
   - Need to implement search, pagination, sorting functionality for employee list table.
   - React provided the data table dependency so will use it.
   - [React DataTable Ref-1](https://www.npmjs.com/package/react-data-table-component)
   - [React DataTable Ref-2](https://www.youtube.com/watch?v=1dDK_N909Xo&list=PLKY8itN_9uQ1UIJk-ymhOx4oiFCwwW7cn&index=1)
   - [React DataTable Ref-3](https://youtu.be/aveI4Mj11tc?si=99EtEf3lIsA3kDag)

> Create a folder: serices under src -> create below js under services folder

1. EmployeeService.js:
   - Here we can call the third party rest apis like(Post, Put, Get, Delete)

> [!NOTE]
>
> - Problem: CORS policy: No 'Access-Control-Allow-Origin'
> - Solution: @CrossOrigin(origins = "http://localhost:3000") add in backed api controller class

> [!IMPORTANT]
>
> 1. package.json -> contains the version and dependency related information.
> 2. node_modules -> contains all the files related to the node js.
> 3. Application Execution Flow: index.html -> index.js -> App.js
