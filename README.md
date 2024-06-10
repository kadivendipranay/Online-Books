The Online Bookstore project is a web application that allows users to browse and purchase books online. It includes features like user authentication, book listings, a shopping cart, and a checkout process.

SetUp:
# Online Bookstore Application

## Installation

```bash
# Clone the repository
git clone https://github.com/kadivendipranay/Online-Books.git

# Navigate to the project directory
cd online-bookstore

# Create a new React app
npx create-react-app .


# Initialize npm and install dependencies
npm init -y && npm install react react-dom axios dotenv node-sass prop-types


# Create a `.env` file in the root directory and add your Google Books API key:
echo "REACT_APP_GOOGLE_BOOKS_API_KEY=your_api_key" > .env


# Install firebase for user authentication
npm install firebase



# Run the application
npm start

the application will be running at http://localhost:3000.
