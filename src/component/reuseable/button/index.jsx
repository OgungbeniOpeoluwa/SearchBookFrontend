import style from "./index.module.css"
const FilledButton =({text,text_color,background_color})=>{
    return(<div>
        <button style={{color:text_color,backgroundColor:background_color}} className={style.buttons}>
            {text}</button>
    </div>)

}

export default FilledButton