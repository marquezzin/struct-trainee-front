import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Home } from "./pages/Home.jsx";
import { HomeAuth } from "./pages/HomeAuth.jsx";
import { Root } from "./pages/Root.jsx";
import { AdminCreateCategoriesPage } from "./pages/admin/categories/create.jsx";
import { AdminEditCategoriesPage } from "./pages/admin/categories/edit.jsx";
import { AdminIndexCategoriesPage } from "./pages/admin/categories/index.jsx";
import { CreatePost } from "./pages/posts/CreatePost.jsx";
import { PostPage } from "./pages/posts/PostPage.jsx";
import { Login } from "./pages/user/Login.jsx";
import { Signup } from "./pages/user/Singup.jsx";
import { Dados } from "./pages/user/Dados.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path:"/auth",
        element: <HomeAuth/>
      },
      {
        path: "user/dados",
        element: <Dados/>
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
        path: "createpost",
        element: <CreatePost/>,
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
      {
        path: "post/:id",
        element: <PostPage/>
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
