import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<head>
  <title>constante</title>
</head>

<body>
  

   <header>
<nav>
         <a href="#" className='logo'>C<span>o</span>nstante Wavess</a>
           <ul className='nav-menu'>
             <li className='nav-item'><a href="#">Home</a></li>
             <li className='nav-item'><a href="#">Quem somos</a></li>
             <li className='nav-item'><a href="#">Feedbacks</a></li>
             <li className='nav-item'><a href="#">Serviços</a></li>
             <li className='nav-item'><a href="#">Contatos</a></li>
             <li className='nav-item'><a href="#">Politica de privacidade</a></li>
          </ul>
</nav>
          </header>

  </body>
    </>
  )
}

export default App
