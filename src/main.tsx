import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import ReactApp from './ReactApp.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* This component below is created for seperate tutorial on
     react 121 videos */}
     <ReactApp/>
  </StrictMode>,
)
