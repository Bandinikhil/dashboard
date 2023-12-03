# Admin Dashboard UI

## Deployed Link

[Admin-Dashboard](https://admiin-dashboaard.netlify.app/).

## Overview

This project is a admin dashboard interface that allows users to view, edit, and delete user records fetched from an API. The dashboard includes features such as search functionality, pagination, and bulk row deletion.

## Screenshoots
<br/>
<br/>

![Screenshot (186)](https://github.com/Bandinikhil/dashboard/assets/105233916/ea947148-8c78-422e-b998-f565ee2499d1)


<br/>
<br/>
<br/>


![Screenshot (187)](https://github.com/Bandinikhil/dashboard/assets/105233916/17883835-c1ad-46e7-be8d-638c5f7ab8a7)


<br/>
## Features

1. **Column Titles Visibility:**
   - Column titles are designed to stand out from the entries, ensuring clarity and readability.

2. **Search Functionality:**
   - The dashboard includes a search bar that enables users to filter records based on any property.

3. **Inline Editing:**
   - Users can edit or delete rows in place. Note that edits and deletions are expected to occur in memory and are not persistent.

4. **Pagination:**
   - The pagination system allows users to navigate through the records, with each page containing 10 rows.
   - Pagination updates dynamically based on search/filtering results, ensuring accuracy.

5. **Row Selection:**
   - Users can select one or more rows, with selected rows highlighted using a grayish background color.
   - The 'Delete Selected' button at the top right allows users to delete multiple selected rows simultaneously.

6. **Shortcut Checkbox:**
   - The checkbox on the top left serves as a shortcut to select or deselect all displayed rows on the current page.

7. **Search Box UI Elements:**
   - The search box placeholder text starts with "Search."
   - The search icon/button has a class name as "search-icon" and can trigger search on ENTER.

8. **Action Elements:**
   - Action elements, such as edit, delete, and save, are represented as buttons with specific class names.

9. **Navigation Elements:**
   - Navigation elements (first-page, previous-page, next-page, last-page) are styled as div/buttons for ease of use.

10. **Inline Editing:**
    - Clicking the edit action in a row allows users to edit the row in place.

11. **Libraries:**
    - Feel free to use any libraries that enhance the development process.

## How to Run Locally

Follow these steps to run the project locally on your machine:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/admin-dashboard.git

   2. Navigate to the project directory:

   cd dashboard

   3. Install dependencies:

   npm start

   4. Run the development server:

   npm start

   5. Open your browser and visit http://localhost:3000 to view the admin dashboard.




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
