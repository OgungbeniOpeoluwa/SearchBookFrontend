import style from "./index.module.css"
import FilledButton from "../../component/reuseable/button";
import {useState} from "react";
import axios from "axios";
import print from "../../component/reuseable/global";
const MainPage = ()=>{
    const[title,setTitle]= useState("")
    const [userId,setUserId] = useState("")


    const handleSubmit = async (e)=> {
        e.preventDefault()

        const user = localStorage.getItem("user")
        setUserId(user)
        console.log(userId)

        const search = {
            userId: user,
            title: title
        }
        console.log(search)

        await axios.post('http://localhost:8080/api/v1/search', search)
            .then((response) => {
                print(response.data)
            })
            .catch(error => console.log(error))
    }




    return(
        <div className={style.cont}>
        <div className={style.mainCont}>
        <form onSubmit={(e)=>handleSubmit(e)} className={style.form}>
                <input type={"text"}
                       name={"title"}
                       placeholder={"search"}
                       onChange={(e)=>setTitle(e.target.value)}
                       className={style.search}></input>
            <FilledButton text={"Search"} text_color={"#ffffff"} background_color={"blue"}/>
    </form>
</div>
</div>)
}

export default MainPage