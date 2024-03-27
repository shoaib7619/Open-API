import { BrowserRouter, Routes,Route } from "react-router-dom"
import Header from "./pages/header"
import Posts from './pages/posts'
import Comments from "./pages/comments"
import Photos from "./pages/photos"
import Albums from "./pages/albums"
import Todos from "./pages/todos"
import Users from "./pages/users"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
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






