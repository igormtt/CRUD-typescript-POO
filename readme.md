## CRUD application made in Typescript with object-oriented programming

### I cloned the repository, what should I do next?

* [on console] npm i (to install the dependencies)
* [on console] npx prisma migrate dev
* now, you can do the next steps bellow!

### How to use this application?

1. **POST** http://localhost:8080/users/create
  Send a JSON in the body of the request containing name, email, password and address. As shown below:

  ```
  {
	  "name": "Igor",
	  "email": "igor@gmail.com",
	  "password": "yourpass",
	  "address": "your address"
  }
  ```

2. **GET** http://localhost:8080/users/findUsers
  This request will return all users;

3.**GET** http://localhost:8080/users/getUser/{id}
  This request will return the user who has an ID equal to the one passed as a parameter in the URL.

4. **PATCH** http://localhost:8080/users/updateUser/{id}
   This request will change the data passed in the body (JSON) of the request, not necessarily all data. Example below:

   ```
   {
	  "name": "Jhon",
	  "email": "Jhon@gmail.com"
   }   
   ```

   This action will change the name and email of the user.

5. **DELETE** http://localhost:8080/users/deleteUser/{id}
   This request will delete the user with the ID passed by the database parameter.
 
