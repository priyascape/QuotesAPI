import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link, navigate} from "@reach/router";

const AllQuotes = () => {
    const [quotes, setQuotes] = useState([])
    // const [deleteClicked, setdeleteClicked] = useState(0)
    const [deleteClicked, setdeleteClicked] = useState(false)


    useEffect(()=>{
        axios.get("http://localhost:8000/api/quotes")
        .then(res =>{
            console.log("*********")
            console.log(res)
            console.log("*********")
            setQuotes(res.data.results)

        })
        .catch(err=>{
            console.log(err)
        })

    }, [deleteClicked])

    
    const deleteQuoteClickHandler =(e, quoteId)=>{
        axios.delete(`http://localhost:8000/api/quotes/delete/${quoteId}`)
            .then(res=>{
                console.log("***********")
                console.log(res)
                console.log("***********")
                setdeleteClicked(!deleteClicked)
                // navigate("/")

            })
            .catch(err=>{
                console.log(err)
            })

    }




    return (
        <div>
            {
                quotes.map((quote,i)=>{
                    return <div key={i}className="card">
    <div className="card-body">
    <h4 className="card-title">Author: {quote.author}</h4>
    <h6 className="card-subtitle mb-2 text-muted">Quoted on this date: {quote.quotedOn}</h6>
<p className="card-text">
                        {quote.content}
</p>
                      {/* <a href={`/quotes/${quote._id}`} className="card-link">View Details</a> */}
<Link to = {`/quotes/${quote._id}`} className="card-link" >View Details</Link>
<Link onClick= {(e)=>deleteQuoteClickHandler(e, quote._id )} to="#!" className="card-link text-danger">Delete</Link>
                    </div>
</div>
                })
            }
            
        </div>
    );
};

export default AllQuotes;