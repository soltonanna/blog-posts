import About from "../pages/About";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import Login from "../pages/Login";

export const privateRoutes = [
    {
        path: '/about',
        component: <About/>,
        exact: true
    },
    {
        path: '/todo-list',
        component: <Posts/>,
        exact: true
    },
    {
        path: '/posts/:id',
        component: <PostIdPage/>,
        exact: true
    },
    {
        path: '*',
        component: <NotFound/>,
        exact: true
    },
];


export const publicRoutes = [
    {
        path: '/login',
        component: <Login />,
        exact: true
    },
    {
        path: '*',
        component: <NotFound/>,
        exact: true
    },
]