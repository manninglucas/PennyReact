PennyReact
==========

An implementation of Bob Dondero's famous Penny app in React.

## Installation

- Install the node.js envirnoment [here](https://nodejs.org/en/)

- In the project directory run ```npm init```

- Run ```npm install react react-dom --save-dev```

- Run ```npm install babel-core babel-loader --save-dev ```

- Run ```npm install babel-preset-es2015 babel-preset-react --save-dev```

- Run  ```npm install webpack --save-dev```

Once these tools are all properly installed you can run

```npm run build```

If this succeeds, then everything is installed correctly. You can run
the server with the ```runserver``` script to see the app.

## Why so many installs? What's the deal with modern JavaScript anyway?

The modern JavaScript ecosystem is fast moving and complex. Most developers
prefer to use frameworks and advanced versions of the JavaScript so they
don't have to deal with all of the language's quirks. This is especially true
for larger projects, where javaScript's ambiguity in design and lack of 
modern features make code difficult to manage.

The first major install is for node.js. Node is a JavaScript runtime based on
Google's (fast) V8 JS engine. It can execute javascript outside of the browser
context. Node is the backbone of many recently popular web frameworks 
(Meteor, Express, Ember.js, Sails.js, ect...) are built on. These frameworks
sell the idea of one language on the client and server side, as well as node's
unique non-blocking asychronous IO model. Node comes with a package manager npm,
which much of the javascript ecosystem uses to distribute and share code. 

You can read more about node and npm [here](https://nodejs.org/en/) and [here](https://www.npmjs.com/)

Our next major install is react. It's important to note that React itself does
not depend on the node.js back end, and only exists as a tool to help develop
front end code. It exists in the view layer of most applications, and is
mostly used for interacitve apps that must handle a lot of state. React uses
a special superset of JavaScript call JSX. It's essentially Javascript with
XML tags that operate in a very similar way to html tags. The main ideas
behind react modularity, composability, and immutability. React components exist
entirely as their own modules, and can be reused and imported at will. This
allows for more flexibility and less custom code than vanilla JS. As a 
consequence React components are very composable in nature. It's encouraged
to nest components within other components, as it helps separate concerns.
Immutability is enorced within a component's state. State cannot be modified
directly by the programmer, it is modified through library calls. Immutibility
of state helps structure the data flow of applications. 

React was created by Facebook, has an enormous community of developers, and it
very well documented. Read more about it [here](https://reactjs.org/).

Lastly, there is babel and webpack. In short, babel is used to transpile 
(essentially the same as compile) JSX and the newer versions of Javascript
to JavaScript gaurunteed to be compatible with almost all browsers (in some
cases, new versions of JS take a long time to be implemented in all browsers).
Webpack is a tool that allows us to take all our files and smash then together
in one app file that is easy to include in a sindle script tag.

You can read more about Babel and Webpack [here](https://babeljs.io/) and [here](https://webpack.js.org/).

## A note on the design of this Penny App

The structure of this app is quite a deviation from other client side versions.
TODO: More to be written on this later...