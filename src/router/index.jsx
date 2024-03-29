import Register from "../features/register";
import BookCollections from "../features/BookCollections";

export const  ROUTES= [
    {
        path:"",
        element :<Register/>
    },
    {
        path: "/main",
        element: <BookCollections/>
    }
]