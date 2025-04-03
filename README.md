
# React

Why use CDN 
what is crossorigin

where place react CDN in your project

buddle:- Web pack, parse, Veet

dev dep
Normal dep

npm install -D parcel

package.json:- configuration of npm

create project:- 
               npm init -y

most import package inour project :- Bondeler like Vite, Parcel(webpack)- bondle or pack properly our project it can be ship to production 


npm install -D  parcel :- dev depe/ normal depe

React combonents :- class based components and functional components

Config-driven UI


# Parcel

-Dev Build
-Local Server
-HMR = Hot Module Replacement
-File Watching Algorithm -written in c++
-Caching - Faster  Builds
-Image Optimization
-Minification
-Bulding
-Compress
-Consistent Hashing
-Code Spliting
-Differential Bundling - support older browsers
-Diagnostic
-Error Handling
-HTTPs
-Tree shaking -remove unused code
-Different dev and prod bundles
-

# Two types of Export/Import

1. Default Export/IMport

     export default Component;
     import Component from "path"
     

2. Named Export/Import
    
    export const Component;
    import {component} from "path"
     

# React Hooks
 (Normal JS utility functions)

  -use State()
  -useEffect() 

# Virtual Dom :-
    is a representation of actual DOM(document object model)


# Condional statement 
  if (listOfRestaurants.length === 0 ){
   return  <shimmer />
  }


  # config drigrn UI

  //if no dependency array => useEffect is called on every render
  //if no dependency array is empty = [] => useEffect is called initial render(render)
   //if no dependency array is [btnName] => called everytime btnName is update
  useEffect(()=>{

  },[])


  # npm i react-router-dom for using defferent routers
  const appRouter =createBrowserRouter([
    {
        path:"/",
        element: <AppLayout/>,
        errorElement: <Error/>
    }
])


#  use Hook for error page becuse showing deataild error
 import { useRouterError } from "react-router-dom"

 # outlet from react-router-dom
   using page load base on route
   replce the article content

# Link component
  button link add for switch to aanother route   

# 2 type routing in web apps
  client side routing
  server side routing 
  
# class base component
  never update state veriables directly
  use this.setState()

 # About page
   data fetch with Github API
   
 #Accordion
  Crate from scratch
  Build manually

# Redux Toolkit

  - Install @reduxjs/toolkit and react-redux
 - Build our store
 - Connect our Store to our app
 - Dispatch(action)
 - Selector
   
  Write data
    dispatch(action)
    fuction
    updata data to redux store(slice)

  Read data
    Redux store(slice)
    Selector(susscribing to the store)
    update data(automatically)
  
