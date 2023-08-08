import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { Root } from "./pages/Root.jsx";
import { AdminCreateCategoriesPage } from "./pages/admin/categories/create.jsx";
import { AdminEditCategoriesPage } from "./pages/admin/categories/edit.jsx";
import { AdminIndexCategoriesPage } from "./pages/admin/categories/index.jsx";
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
      {
        path: "categories",
        element: <AdminIndexCategoriesPage/>,
      },
      {
        path: "categories/create",
        element: <AdminCreateCategoriesPage/>,
      },
      {
        path: "categories/update/:id",
        element: <AdminEditCategoriesPage/>,
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
