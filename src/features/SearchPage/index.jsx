import style from "./index.module.css"
import FilledButton from "../../component/reuseable/button";
import {useState} from "react";
import axios from "axios";
import print from "../../component/reuseable/global";
const MainPage = ()=>{
    const[title,setTitle]= useState("")
    const [userId,setUserId] = useState("")

    function refreshPage() {
        window.location.reload(false);
    }


    const handleSubmit = async (e)=> {
        e.preventDefault()

        const user = localStorage.getItem("user")
        setUserId(user)

        const search = {
            userId: user,
            title: title
        }

        await axios.post('http://localhost:8080/api/v1/search', search)
            .then((response) => {
                refreshPage()
            })
            .catch(error => console.log(error))
    }




    return(
        <div className={style.cont}>
        <div className={style.mainCont}>
        <form className={style.form}>
                <input type={"text"}
                       name={"title"}
                       placeholder={"search"}
                       onChange={(e)=>setTitle(e.target.value)}
                       className={style.search}></input>
    </form>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <FilledButton text={"Search"} text_color={"dodgerblue"} background_color={"#ffffff"}/>
            </form>
</div>
</div>)
}

export default MainPage