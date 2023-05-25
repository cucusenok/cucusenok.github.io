# Personal page with plans to create ready-to-use components for development

### [Result](https://cucusenok.github.io/)

## Road Map

1. Refactoring and optimization
2. Move components to the library
3. SSR friendly, [Fresnel](https://github.com/artsy/fresnel) for media queries and condition rendering with viewport. Maybe will better solutions.
4. Create a search-tooltip component for searching in technologies stack. 
Possible to use [tags dataset from kaggle](https://www.kaggle.com/datasets/isaacwen/stack-overflow-tags-data)
or [stackexchange](https://data.stackexchange.com/stackoverflow), [an example](https://data.stackexchange.com/stackoverflow/query/edit/1697139)
5. Maybe use [notion.so](https://www.notion.so/) for creation of posts and use [Notion API](https://developers.notion.com/)
6. Full search on the site. Look on `/src/Components/Typography/SearchableTypography.tsx`.
I han several experiments with [fusejs](https://fusejs.io/), for fuzzy-searching on the client side.
I rejected this idea because it's look's unusable for searching in Stack/Project, 
but maybe it would be a good solution for full site search


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

### `npm run deploy`

### `npm run deploy -- -m "commit message here"`

**Note: Deploy app to [github pages](https://pages.github.com/)
more about deploy react apps to github pages [here](https://github.com/gitname/react-gh-pages) and [here](https://www.npmjs.com/package/gh-pages).**