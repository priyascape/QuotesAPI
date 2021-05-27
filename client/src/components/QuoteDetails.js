import React, {useState, useEffect} from 'react';
import axios from 'axios'
import {navigate, Link} from '@reach/router';

const QuoteDetails = (props) => {
    const [quoteinfo, setQuoteinfo]= useState({})

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/quotes/${props.id}`)
            .then(res=>{
                console.log(res)
                setQuoteinfo(res.data.results)
            })
            .catch(err=> console.log(err))
    },[])


    const deleteQuoteClickHandler =()=>{
        axios.delete(`http://localhost:8000/api/quotes/delete/${props.id}`)
            .then(res=>{
                console.log("***********")
                console.log(res)
                console.log("***********")
                navigate("/")

            })
            .catch(err=>{
                console.log(err)
            })

    }


    return (
        <div>
            <h1>Details about this quote numer: {props.id} </h1>
            <h1>Quote Author: {quoteinfo.author}</h1>
            <p>Content: {quoteinfo.content}</p>
            <p>Quoted on: {quoteinfo.quotedOn}</p>
            <button onClick = {deleteQuoteClickHandler} className="btn-danger">Delete</button>
            <Link to={`/quotes/edit/${props.id}`}><button className="btn-warning">Edit</button></Link>

        </div>
    );
};


export default QuoteDetails;