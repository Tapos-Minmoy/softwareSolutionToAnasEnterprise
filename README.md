# Software Solution to Anas Enterprise

A full-stack software system designed to streamline and automate business operations at Anas Enterprise. This project includes both backend APIs and frontend interfaces to manage inventory, billing, customer data, and vendor information effectively.

---

## Project Overview

Anas Enterprise faced challenges in managing their inventory, billing processes, and vendor/customer data efficiently. This software solution automates these core business functions, providing:

- **Inventory management** with real-time stock tracking
- **Billing and invoicing** automation for faster transactions
- **Customer and vendor management** with secure authentication
- **User-friendly frontend** built for ease of use
- **Modular backend APIs** for scalability and maintenance

---

## Features

- Manage products and inventory levels with automatic updates
- Generate and track bills and invoices
- Maintain detailed vendor and customer profiles
- Secure user login and role-based access control
- RESTful API endpoints using Node.js and Sequelize ORM
- Responsive frontend with React.js

---

## Technology Stack

- **Backend:** Node.js, Express.js, Sequelize ORM, MySQL  
- **Frontend:** React.js, Axios  
- **Database:** MySQL  
- **Version Control:** Git  

---

## Getting Started

### Prerequisites

- Node.js and npm installed  
- MySQL installed and configured  

---

### Installation & Run

1. **Clone the repository**

   git clone https://github.com/Tapos-Minmoy/softwareSolutionToAnasEnterprise.git
   cd softwareSolutionToAnasEnterprise


2. **Install backend dependencies**
   ```
   cd backEnd
   npm install
   ```

3. **Install frontend dependencies**
   ```
   cd ../frontEnd
   npm install
   ```

---

### Configuration

* Setup your MySQL database.
* Create a `.env` file in the `backEnd` folder with the following contents (replace placeholders with your info):
  ```
  DB_HOST=your_mysql_host
  DB_USER=your_mysql_user
  DB_PASS=your_mysql_password
  DB_NAME=your_database_name
  PORT=5000
  ```

---

### Running the Application

1. **Start the backend server**
   ```
   cd ../backEnd
   npm start
   ```

2.**Start the frontend application** (in a new terminal)
    ```
   cd ../frontEnd
   npm start
    ```
  

3.**Open your browser and go to**

   ```
   http://localhost:3000
   ```

---

## Usage

* Manage inventory, vendors, customers, and billing using the frontend UI.
* Backend RESTful APIs handle all business logic and data operations.
* Secure your database credentials and environment before production use.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

---
