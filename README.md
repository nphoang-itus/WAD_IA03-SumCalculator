# WAD_IA03-SumCalculator
Exercise IA03 Web Application Development - Sum Calculator using React

## **🧮 Assignment: Build a Sum Calculator App using React**

### **🎯 Objective**

Students will create a simple **React application** that allows users to input two numbers and display their sum dynamically.  
 This exercise helps you understand:

* How to handle **state** with React Hooks (`useState`)  
* How to create **controlled components** (form inputs)  
* How to handle **events** (onChange, onClick)  
* How to structure a **React component** and render dynamic UI

---

### **🧠 Requirements**

#### **1\. Functional Requirements**

Your React app must include:

* Two input boxes for user input (`number1` and `number2`)  
* A button labeled **"Calculate Sum"**  
* A display area showing the result of the sum  
* Proper validation: if inputs are empty or not numbers, show an error message

#### **2\. Technical Requirements**

* Built using **React functional components**  
* Use **useState** to manage input values and the sum  
* Code should be properly formatted and commented  
* The project must be **hosted publicly** using any hosting platform (e.g. Vercel, Netlify, GitHub Pages)

---

### **📁 Project Structure Example**

`sum-app/`  
`├── src/`  
`│   ├── components/`  
`│   │   └── SumCalculator.jsx`  
`│   ├── App.jsx`  
`│   ├── index.js`  
`│   └── App.css`  
`├── package.json`  
`└── README.md`

---

### **🧩 Sample UI (Concept)**

`----------------------------`  
 `Sum Calculator`  
`----------------------------`  
 `Number 1: [   10   ]`  
 `Number 2: [   20   ]`  
 `[ Calculate Sum ]`  
`----------------------------`  
 `Result: 30`  
`----------------------------`

---

### **🧱 Grading Rubric**

| Criteria | Description | Points |
| ----- | ----- | ----- |
| UI Functionality | Inputs, button, and output work correctly | 30 |
| State Management | Correct use of `useState` and React component structure | 25 |
| Validation | Handles invalid input gracefully | 15 |
| Code Quality | Well-structured, readable, and commented code | 20 |
| Public Hosting | App is deployed and accessible via a public link | 10 |
| **Total** |  | **100** |