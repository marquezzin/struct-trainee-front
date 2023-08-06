import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Root } from "./pages/Root.jsx";
import { Login } from "./pages/user/Login.jsx";
import { Profile } from "./pages/user/Profile.jsx";
import { Signup } from "./pages/user/Singup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "login",
        element: <Login/>
      },
      {
        path: "signup",
        element: <Signup/>
      },
      {
        path: "profile",
        element: <Profile/>,
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
