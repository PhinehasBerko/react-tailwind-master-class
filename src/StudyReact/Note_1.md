# React

## What is React?

React is an open source javaScript library for building user interfaces.

## Why Learn React.

1. Created and maintained by Facebook
2. More than 100k starts on Github
3. Huge community
4. In demand skillset

5. Component based Architecture
6. Reusable code
7. React is declarative ? Tell react what you want and React will build the actual UI
8. React will handle efficiently updating and rendering of the components
9. DOM updates are handle gracefully in React
10. Seamlessly integrate react into any of your application

## Prerequisites

1. HTML, CSS and JavaScript fundamentals

2. ES6 - let & const, arrow functions, template literals, default parameters, object literals, rest and spread operators and destructuring assignment.

3. JavaScript - this keyword, filter map and reduce

## creating a react applications => npx vite@latest create-react-app <folder-name>

## how react application runs on the web browser.

when the command >> npm run start is initialed>> the command enter the index.html which contains the root dom node with id root >> the command therefore enters the main.tsx and the reactDom renders the app component onto the dom node with id root >> this then renders the app component onto the brower for display.

## Component

component is a part of the user interface and a javascript file.
they are re-useable and can be nested inside other components
there are two types of component

1. Stateless Functional component
2. Stateful Class Component

## Functional Component

Functional component is a javascript function that can accepts an input of properties and returns HTML/Jsx that describes the UI.

## Class Component

A class component is a javascript es6 class that can optionally receive input properties and render HTML/Jsx that describes the UI

## Functional vs Class components

<!-- Functional -->

simple functions
use function components as much as possible
absence of this keyword
solution without using state
mainly responsible for the UI
stateless/ Dumb/ Presentational

<!-- Class -->

more feature rich
maintain their own private data- state
complex UI logic
provides lifecycle hooks
stateful/ smart/ containers

## JSX - JavaScript XML => Extension to the Javascript language syntax.
