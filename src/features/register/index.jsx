import style from "./index.module.css"
import FilledButton from "../../component/reuseable/button";
import {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import print from "../../component/reuseable/global";
const Register = () => {
    document.body.style= 'background:hsl(600 20% 60%/80%)'
    const [formData,setFormData] = useState(
        {
            username: '',
            email: '',
            password: "",
        }
    );

    const  handleInput = (e)=>{
        const {name,value} = e.target;
        setFormData({
            ...formData,
                [name]:value

        });
    };

    const handleSubmit = async (e)=>  {
        e.preventDefault()


      await  axios.post('http://localhost:8080/api/v1/register', formData)
            .then(response => {
                print(response.data.userId)

                localStorage.setItem('user',response.data.userId)

        }).catch(error=>{
            console.log(error)
        })
    }


    return(
        <div className={style.inputDiv}>
            <h1 style={{color: "#ffffff", textAlign: "center"}}>Register</h1>
            <form onSubmit={(e) => handleSubmit(e)} className={style.form}>
                <input type={"text"} placeholder={"Username"}
                       name={"username"}
                       className={style.inputs} onChange={(e) => handleInput(e)}/>

                <input type={"text"} placeholder={"Email"} className={style.inputs}
                       name={"email"}
                       onChange={(e) => handleInput(e)}/>

                <input type={"text"} placeholder={"Password"} className={style.inputs}
                       name={"password"}
                       onChange={(e) => handleInput(e)}/>
                <FilledButton text_color={"#000000"} text={"Register"} background_color={"#ffffff"}/>
                </form>

        </div>)

}

export default Register

