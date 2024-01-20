                                                              GitHub User Repositories Viewer

This project is a simple web application that allows users to enter a GitHub username and view their public repositories along with some user details.

Installation
Before running the application, make sure you have the following packages installed:
express: A web application framework for Node.js.
body-parser: Middleware to handle HTTP POST requests.
axios: A promise-based HTTP client for making requests.
ejs

To install the required packages, run the following command in your terminal:
npm install express body-parser axios ejs

Running the Application
After installing the required packages, you can run the application using the following command:
node app.js

Once the application is running, you can access it by visiting http://localhost:3000 in your web browser.

Usage
Open your web browser and go to http://localhost:3000.
Enter a GitHub username in the provided form.
Click the "Submit" button.
View the user's public repositories, along with their profile picture and bio.


Code Explanation
The main components of the code include:

Express Setup: Configuration of the Express web application framework.

Routes:

GET "/": Serves the main HTML file.
POST "/repos": Handles form submissions, makes API calls to GitHub to fetch user repositories and details.
GET "/repos": Renders the repositories view.

Axios Requests:
Two asynchronous HTTP requests are made to GitHub API:
Fetch repositories: https://api.github.com/users/${username}/repos
Fetch user details: https://api.github.com/users/${username}
Rendering with EJS: The application uses the EJS template engine to dynamically render HTML views. The rendered views include the user's repositories, profile picture, bio, and pagination.

Note
Ensure that you have an internet connection as the application relies on making requests to the GitHub API.
If the user is not found or there is an error during API calls, an error view is displayed.
If you are getting this error : "AxiosError: Request failed with status code 403" this you have exceeded your limit for unauthorized api request to github.
