How to Run

# Clone the project: git clone https://github.com/francesca-vago/crypto-ticker.git
# Install the dependencies: npm install
# Run the React app: npm start
# Run the Database Server in a separate terminal:  npm run dev-server

Design Decisions

# Web Framework: For this project I decided to use React as web framework it is the most up to date JavaScript technology at the time of writing. Also, I consider it the more clean and flexible, allowing to write separate re-usable Components.

#Client API: I decided to use the CoinGecko API Client for Node.js to simplify the contact with the API.

#Database: In this case I decided to use a lightweight npm package json-server, which allowed me to quickly create a backend server managing a json-file-based database for this prototype.

To run it locally please use the command npm run dev-server, which will start the server on port 8080 and save the data in db.json file (located in the root of the project).

For a more complex MVP I would implement a MERN stack app, which involves MongoDB as database, Express.js as web framework, React as front-end library to build user interfaces and Node.js as backend.

# I separated each Ticker into a component. I also implemented the method to refresh the list every minute and also the checkboxes to allow the user to customise the dashboard.

# Regarding UI, I decided to keep the interface design simple and minimal, instead focusing on a strong and clean logic.



