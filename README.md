Poll Voting System
=====================

Description
-----------
Dizplai Voting System is a web application that allows users to participate in polls. Users can view, vote, and see the real-time results.

Future Improvements & Additions
-------------------------------
Hub for Poll Selection:
- Integrate a centralized hub for users to effortlessly navigate and select polls based on preferences, enhancing the overall user experience.

User-Generated Polls and API Storage:
- Enable users to create and submit custom polls with secure backend API storage, fostering a dynamic, community-driven engagement aspect.

Tailwind CSS for Enhanced UX:
- Leverage more Tailwind CSS features for responsive design, styling, and theming to elevate the overall user interface and experience.

Table of Contents
-----------------
1. [Installation](#installation)
2. [Usage](#usage)
3. [Endpoints](#endpoints)
4. [File Structure](#file-structure)
5. [Dependencies](#dependencies)
6. [Testing](#testing)
7. [Security Considerations](#security-considerations)
8. [Contributing](#contributing)
9. [License](#license)

Installation
------------
To set up the Dizplai Voting System locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Teewizza/poll.git`
2. Navigate to the project directory: `cd poll`
3. Navigate to the Server directory: `cd server`
4. Run the following in the Visual Studio Terminal: 'npm init -y'
5. Install Express.js in the Visual Studio Terminal: 'npm i express'
6. Start the server: `npm start`

Usage
-----
Once the server is running on port 3000, open your browser and go to `http://localhost:3000/poll` to access the API (I would recommend POSTMAN for this).

Endpoints
---------
The Dizplai Voting System exposes the following endpoints:

- `GET /poll`: Retrieve poll data, including the labels and percentages.
- `POST /poll`: Submit a vote for a specific poll option.

File Structure
--------------
The project structure is organized as follows:

client/
|-- main.css
|-- main.js
|-- index.html
|-- data.json
|-- logo.png
|-- background.jpg
|-- Outfit-VariableFont_wght.ttf -- node_modules/ (generated upon running npm install)

server/
|-- index.js
|-- data.json

Dependencies
------------
The Dizplai Voting System relies on the following dependencies:

- Express: Web framework for handling server functionality.
- fs.promises: Promisified version of the Node.js `fs` module for file operations.
- path: Utility module for working with file and directory paths.

Testing
-----------------------
Front-End Testing:
Cypress played a crucial role in frontend testing, offering an end-to-end testing framework. It facilitated the simulation of user interactions.

Back-End Testing:
I utilized Postman to create a comprehensive suite of API tests.
This included validating various endpoints, handling different HTTP methods, and ensuring correct responses. 
Postman's user-friendly interface and environment variables feature allowed efficient testing under diverse conditions, contributing to the backend's reliability.
Security Considerations

-----------------------
- **Cross-Site Scripting (XSS):** Ensure that user inputs are sanitized and validated to prevent XSS attacks.
- **CORS (Cross-Origin Resource Sharing):** Configure proper CORS headers to restrict access to trusted domains.
- **Token-based Authentication:** Implement user authentication using secure methods. Consider using tokens (e.g., x-auth-token) for secure communication between the client and server.

Contributing
------------
We welcome contributions! To contribute to Dizplai Voting System, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make changes and submit a pull request.

Please adhere to the [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript) when contributing.

License
-------
Poll Voting System is licensed under the [MIT License](LICENSE).

---

Feel free to customize the sections and content based on additional details or requirements specific to your project.
