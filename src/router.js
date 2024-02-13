import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {PostsPage} from "./pages/PostsPage";
import {ErrorPage} from "./pages/ErrorPage";
import {CommentsPage} from "./pages/CommentsPage";
import {TodosPage} from "./pages/TodosPage";
import {AlbumsPage} from "./pages/AlbumsPage";

const router = createBrowserRouter([

    {
        path: '', element: <MainLayout/>, errorElement: <ErrorPage />, children:[
            {
                index: true, element: <Navigate to={'comments'}/>
            },
            {
                path: 'comments', element: <CommentsPage />, children: [
                    {
                        path: 'posts', element: <PostsPage />
                    }
                ]
            },
            {
                path: 'todos', element: <TodosPage />
            },
            {
                path: 'albums', element: <AlbumsPage />
            },
        ]
    }
])

export {router}