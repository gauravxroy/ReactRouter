# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## ---------------------------------
## APIs call
When you use a regular variable to store data in a React component:

Static Storage: The variable's value is stored statically within the function. If the data is fetched from an API, the variable will hold that data once, but React won't monitor it for changes. This means if the data changes (e.g., through another API call or user interaction), React won't re-render the component with the new data.

On the Other Hand, Using useState:
Dynamic Updates: When you store data in a useState variable, React tracks that state. If you update the state (e.g., by setting the API response to the state variable), React automatically triggers a re-render of the component. This ensures the UI always reflects the most current data.

### -----------------------------------

 can  create a custom hook to handle API calls and use it across multiple components. This is a common practice in React to keep your code DRY (Don't Repeat Yourself) and to manage API logic in one place.

### Steps to Create a Custom API Hook:

1. **Create the Custom Hook:**
   - The custom hook will encapsulate the logic for fetching data from the API. You can also include error handling, loading states, and any other logic related to the API call.

2. **Use the Hook in Components:**
   - Once the custom hook is created, you can import and use it in any component where you need the API data.

### Example: Creating and Using a Custom API Hook

1. **Create a Custom Hook (`useFetch.js`):**
   ```javascript
   import { useState, useEffect } from 'react';
  
  //main useFetch -hooks , just a function
   const useFetch = (url) => {
     const [data, setData] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     useEffect(() => {
       const fetchData = async () => {
         try {
           const response = await fetch(url);
           if (!response.ok) {
             throw new Error('Network response was not ok');
           }
           const result = await response.json();
           setData(result);
         } catch (error) {
           setError(error);
         } finally {
           setLoading(false);
         }
       };

       fetchData(); //calling fetch data whenever useEffect is triggered
     }, [url]);

     return { data, loading, error }; //returning data so , can be used in another components
   };

   export default useFetch;
   ```

2. **Use the Custom Hook in Components:**

   **Component 1:**
   ```javascript
   import React from 'react';
   import useFetch from './useFetch';

   const GitHubProfile = () => {
     const { data, loading, error } = useFetch('https://api.github.com/users/gauravxroy');

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         <h1>{data.name}</h1>
         <p>Followers: {data.followers}</p>
       </div>
     );
   };

   export default GitHubProfile;
   ```

   **Component 2:**
   ```javascript
   import React from 'react';
   import useFetch from './useFetch';

   const GitHubRepos = () => {
     const { data, loading, error } = useFetch('https://api.github.com/users/gauravxroy/repos');

     if (loading) return <p>Loading...</p>;
     if (error) return <p>Error: {error.message}</p>;

     return (
       <div>
         <h2>Repositories:</h2>
         <ul>
           {data.map(repo => (
             <li key={repo.id}>{repo.name}</li>
           ))}
         </ul>
       </div>
     );
   };

   export default GitHubRepos;
   ```

### Benefits of Using a Custom Hook:
- **Reusability**: The API logic is written once and reused across multiple components.
- **Separation of Concerns**: The components focus on rendering UI, while the custom hook manages the data fetching logic.
- **Clean Code**: Reduces duplication and keeps the components clean and focused on their core functionality.

By creating a custom hook, you can easily manage API calls and share the logic across your React application, making your codebase more maintainable and scalable.

## -----------------------------------

#NOTE 0: Memoization
#NOTE 1: Learn use and functionalities of useRef and useParams
#NOTE 2: Revise Routing 
#NOTE 3: Revise Previous Notes and practices
#SYNTAX 4: Revise and practice syntaxes of react-router-dom , react jsx , Hooks, Custom Hooks ,APIs calls methods
#SYNTAX 5: Json and Objects creating any syntax# ReactRouter
