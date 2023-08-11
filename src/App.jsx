import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage.jsx";
import { Home } from "./pages/Home.jsx";
import { Root } from "./pages/Root.jsx";
import { AdminCreateCategoriesPage } from "./pages/admin/categories/create.jsx";
import { AdminEditCategoriesPage } from "./pages/admin/categories/edit.jsx";
import { AdminIndexCategoriesPage } from "./pages/admin/categories/index.jsx";
import { CreatePost } from "./pages/posts/CreatePost.jsx";
import { PostPage } from "./pages/posts/PostPage.jsx";
import { Login } from "./pages/user/Login.jsx";
import { Profile } from "./pages/user/Profile.jsx";
import { Signup } from "./pages/user/Singup.jsx";
import { UserContextProvider } from "./utils/UserContext.jsx";

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
        path: "createpost",
        element: <CreatePost/>,
      },
      {
        path: "post/:id",
        element: <PostPage/>
      },
      {
        path: "user/profile",
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
    <UserContextProvider>
      <RouterProvider router={router}/>
    </UserContextProvider>
  )
}

export default App
