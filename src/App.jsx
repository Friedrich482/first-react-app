import './App.css'
import "./assets/style.css"
import Header from './Header'
import Footer from './Footer'
function App() {
  const root = document.querySelector("#root");
  root.classList.add("flex", "justify-center", "align-center", "flex-col", "gap-16")
  return (
    <>
     <Header />
     <Footer />
    </>
  )
}

export default App
