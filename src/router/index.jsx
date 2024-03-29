import Register from "../features/register";
import BookCollections from "../features/BookCollections";

export const  ROUTES= [
    {
        path:"/register",
        element :<Register/>
    },
    {
        path: "/main",
        element: <BookCollections/>
    }
]