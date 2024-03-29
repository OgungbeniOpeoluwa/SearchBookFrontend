import style from "./index.module.css"
import {useEffect, useState} from "react";
import axios from "axios";
import print from "../../component/reuseable/global";
import React from "react";
import SearchPage from "../SearchPage";
import {Link} from "react-router-dom";
import FilledButton from "../../component/reuseable/button";

const BookCollections = ()=> {
    document.body.style = "background:blue"
    const [collection, setCollection] = useState([]);
    let id = localStorage.getItem("user");
    print(id)

    let url = "http://localhost:8080/api/v1/readingList/" + id


    useEffect(() => {
        axios.get(url)
            .then(response => {
                print(response.data)
                setCollection(response.data.message)

                print(response.data)
            })
            .catch(error => print(error))
    }, [url]);


    return (
        <div className={style.main}>
            <SearchPage/>
            {collection.map((values, indexes) => {
                    return (
                        <div className={style.mainCont}>
                            <img key={indexes} src={values.imageLink} alt="book"/>
                            <div className={style.aboutBook}>
                                <h2 key={indexes} style={{textAlign:"center"}}>{values.title}</h2>
                                <h3>{"Authors"}</h3>
                                <div>
                                {values.authors.map((author, index) => {
                                    return (
                                        <>
                                            <p key={index}>{"Author name: "}{author.name}</p>
                                        </>

                                    )
                                })}
                                </div>
                                <h3>{"Genre "}</h3>
                                <div className={style.subjects}>
                                    {values.subjects.map((subject, count) => {
                                        return (
                                            <p key={count}>{subject}</p>
                                        )
                                    })}
                                </div>
                                <h3>{"BookShelves: "}</h3>
                                <div>
                                    {values.bookshelves.map((bookshelves, counter) => {
                                        return (
                                            <p key={counter}>{bookshelves}</p>
                                        )
                                    })}
                                </div>
                                <h3>{"Language: "}</h3>
                                <div>
                                    {values.languages.map((language, counter) => {
                                        return (
                                            <p key={counter}>{language}</p>
                                        )
                                    })}
                                </div>
                                <div style={{textAlign:"center"}}>
                                <Link to={values.bookLink} target={"_blank"}>
                                    <FilledButton text={"Now Read"}
                                                  text_color={"dodgerblue"}
                                                  background_color={"#ffffff"}/></Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            )
            }
        </div>
    )
}

export default BookCollections

