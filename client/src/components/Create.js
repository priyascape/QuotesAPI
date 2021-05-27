import axios from 'axios';
import React , {useState} from 'react';
import {navigate} from "@reach/router";

const Create = () => {
    const [forminfo, setforminfo] = useState({
        content:"",
        author:"",
        quotedOn:""
    })


    const [errors, seterrors]= useState({})

    const changehandler = (e)=>{
        console.log("changing inputs!!!!")
        setforminfo({
            ...forminfo,
            [e.target.name]:e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        console.log("submitted!")
        axios.post("http://localhost:8000/api/quotes/create", forminfo)
            .then(res=>{
                console.log("RESPONSE AFTER POSTING!")
                console.log(res)
                if(res.data.results){
                    navigate("/")
                }else{
                    seterrors(res.data.errors)
                }

            })
            .catch(err=> console.log("ERRRORRSS", err))
    }
    


    return (
        <div className="container">
            <h1>Create a new quote below</h1>
            <form onSubmit={submitHandler}>
                <div className="form-group">
                    <label>Quoted By:</label>
                    {errors.author? <p className="text-danger">{errors.author.message}</p>: ""}
                    <input onChange={changehandler} type="text" name="author" id="" className="form-control"/>
                </div>
                <div className="form-group">
                    <label>Content:</label>

                    {errors.content? <p className="text-danger">{errors.content.message}</p>: ""}
                    
                    <textarea onChange={changehandler} name="content" id="" cols="30" rows="10" className="form-control"></textarea>
                </div>
                <div className="form-group">
                    <label>Quoted On:</label>
                    <input onChange={changehandler} type="date" name="quotedOn" id="" className="form-control"/>
                </div>
                <input type="submit" value="Create Quote!"/>
            </form>
        </div>
    );
};


export default Create;