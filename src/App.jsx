import { BrowserRouter, Routes,Route } from "react-router-dom"
import Posts from './pages/posts'
import Comments from "./pages/comments"
import Photos from "./pages/photos"
import Albums from "./pages/albums"
import Todos from "./pages/todos"
import Users from "./pages/users"
import Home from "./pages/home"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/comments" element={<Comments />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/todos" element={<Todos />} />
        <Route path="/users" element={<Users />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App






