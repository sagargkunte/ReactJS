import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'
// import {jsx as _jsx} from 'react/jsx-runtime.js'

export default function MyApp() {
  return (
    <h1>Hello bro this is myApp function</h1>
  )
}
// const anotherElement = (
//   <a href="https://google.com" target="_blank">Vissit to google</a>
// )

//? Here we are using a method known as createElement which is present in react 
// const reactElement = React.createElement( //Generally this is the syntax or rule if we write 
//     'a', // Tag 
//     {
//       href: 'https://google.com',
//       target: '_blank',
//     },
//     'click here to visit google' // placeholder 
// )
createRoot(document.getElementById('root')).render(
    <App />
)
