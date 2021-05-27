import React, {useEffect, useState} from 'react';
import axios from 'axios';
import moment from 'moment';
import {navigate} from '@reach/router';

const Edit = (props) => {
    const [quoteinfo, setquoteinfo] = useState({
        content:"",
        author:"",
        quotedOn:""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=>{
                console.log(res)
                setquoteinfo(res.data.results)
            })
            .catch(err=>console.log(err))

    },[])


    const updateInfo = (e)=>{
        e.preventDefault();
        axios.put(`http://localhost:8000/api/quotes/update/${props.id}`, quoteinfo)
            .then(res=>{
                console.log(res)
                navigate("/")

            })
            .catch(err=>console.log(err))

    }

    const changehandler = (e)=>{
        setquoteinfo({
            ...quoteinfo,
            [e.target.name]:e.target.value
        })
    }

    return (
        <div>
            <h3>Edit Quote</h3>
            <form onSubmit= {updateInfo}>
                <div className="form-group">
                    <label>Quoted By:</label>
                    <input onChange={changehandler} type="text" name="author" id="" className="form-control" value={quoteinfo.author}/>
                </div>
                <div className="form-group">
                    <label>Content:</label>
                    <textarea  onChange={changehandler} name="content" id="" cols="30" rows="10" className="form-control" value={quoteinfo.content}></textarea>
                </div>
                <div className="form-group">
                    <label>Quoted On:</label>
                    <input onChange={changehandler} type="date" name="quotedOn" id="" className="form-control" value= {moment(quoteinfo.quotedOn).add(1,'d').format("YYYY-MM-DD")}/>
                </div>
                <p>{quoteinfo.quotedOn}</p>
                <p>{moment(quoteinfo.quotedOn).format("YYYY-MM-DD")}</p>

                <input type="submit" value="Update Quote!"/>
            </form>
        </div>
    );
};


export default Edit;

