# React

React intro step by step recap

## Steps

1. Installation: install the application using `npm create vite@latest` (remember to create the scaffold in the repo's root folder - no sub directories)
2. Clean up: clean the App.jsx component
3. Macro components: Create one component for each macro layout item (header, main, footer)
4. Dependecies: Install additional dependencies

### Installation

Run the following command in the terminal to start the scaffolding from the CLI

```bash

 npm create vite@latest

 ```

### Clean up

Now you need to cleaan up the App.jsx file that will look like:

- remove all imports
- remove the variable before the return
- remove all tags within the App.jsx `<></>`
- remove the styles

The final result should be

```jsx


function App() {
  

  return (
    <>
      
    </>
  )
}

export default App


```

> Note:
> there are two ways to import images assets with
> import reactLogo from './assets/react.svg' (the asset is inside assets/)
> import viteLogo from '/vite.svg' (the asset is inside the public/)

**remove the styles**

- remove the file App.css (delete the file entirely)
- keep the file index.css but remove its css rules

index.css

```css

/* Your css here it is globally applied to every component on the page */

```

### Macro components

Now you can create 3 main components

1. create a folder: src/components
2. create a AppHeader componetn
3. create an AppMain component
4. create an AppFooter component
5. import: after the component is ready import it.

Create AppHeaer inside src/components/AppHeader.jsx

```jsx

export default function AppHeader(){


  return (
    <header> 
      Header
    </header>
  )
}

```

> Remember to import it in App.jsx later

Create AppHeaer inside src/components/AppMain.jsx

```jsx

export default function AppMain(){


  return (
    <main> 
      Main
    </main>
  )
}

```

> Remember to import it in App.jsx later

Create AppFooter inside src/components/AppFooter.jsx

```jsx

export default function AppFooter(){


  return (
    <footer> 
      Footer
    </footer>
  )
}

```

> Remember to import it in App.jsx later

#### Impor the components in App.jsx

Now with the 3 components ready, you can import them inside App.jsx

- import the component at the top
- use the component inside the markup

Import first

```jsx
import AppHeader from './components/AppHeader'

```

then use it

```jsx
// Imported above 🔝
import AppHeader from './components/AppHeader'
function App() {
  
 // Use the component below
  return (
    <>
      <AppHeader />
    </>
  )
}

export default App


```

**Repeat for each component**

Next -> build the layout with html/css

### Dependecies

To install a package in your project you need to use NPM and refer to the package documentation for instructions.
For example:

- bootstrap
- fonts

#### Bootstrap installation

To install bootstrap you need to do the following

```bash

npm i --save bootstrap @popperjs/core

```

Once the installation completes you need to import css and js from the library, here is how:

Import the javascript bootstrap's library inside **main.jsx**

```jsx
import * as bootstrap from 'bootstrap'
```

The final **main.jsx** will look like the following

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap' // 👈 Insert this line here
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

Now insert the css inside **index.css** like so

```css
/* Your css here it is globally applied to every component on the page */
@import url('bootstrap')
```

[Documentation]('https://getbootstrap.com/docs/5.3/getting-started/vite/')

#### Font source

To import fonts without using the CDN you can install via fontsource
[Docs]('https://fontsource.org/fonts/raleway/install')

select a font from the website -> click install -> select the installation command ex. `npm install @fontsource-variable/open-sans`
and run it in a terminal window (maybe stop the server first then once done restrt it.)

> `crtl+c` to stop the npm server
> `npm run dev` to restart the server

Install it

```bash

npm install @fontsource-variable/open-sans
```

Inside main.jsx add the following import

```jsx
// Supports weights 300-800
import '@fontsource-variable/open-sans';

```

Final file:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap' 
import '@fontsource-variable/open-sans'; // 👈 Insert this line here
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

```

Add the css property to the body, now inside **index.css**

```css
body {
  font-family: 'Open Sans Variable', sans-serif;
}

```
