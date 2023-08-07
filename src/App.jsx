import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Root } from "./pages/Root.jsx";
import { Post } from "./pages/posts/Post.jsx";
import { Login } from "./pages/user/Login.jsx";
import { Profile } from "./pages/user/Profile.jsx";
import { Signup } from "./pages/user/Singup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "user",
        element: <Profile/>
      },
      {
        path: "/user/login",
        element: <Login/>
      },
      {
        path: "/user/signup",
        element: <Signup/>
      },
      {
        path: "post",
        element: <Post/>,
      },
    ]
  },
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
}

export default App
