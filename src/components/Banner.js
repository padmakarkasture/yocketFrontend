
import React from 'react'
import { Post } from './Post'
import { useEffect, useState } from 'react';
export function Banner(props) {

    const [articles,setArticles]=useState([])
    const [page, setPage]=useState(1)

    useEffect(() => {

         fetch(`http://localhost:3004/posts?page=${page}&size=${props.size}`)
        .then(res=> res.json())
        .then(json=>setArticles([...articles,...json.result]))


    }, [page])

const scrollToEnd = ()=>{
    setPage(page+1)
}

    window.onscroll= function(){
        // to the bottom ?
    if( window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
        scrollToEnd()
    }
    }

    return (
        <>




                <div className="container mt-5">

                    <div className="BannerArea">
                        <div className="row">
                            {articles.map((ele,idx) => {

                                return <div key={`element${idx}`} className="col-lg-6 col-sm-12">
                                    <Post title={ele.title} content={ele.content} />
                                </div>
                            })}

                            {/* {console.log(page)}
                           {console.log(dataLength)} */}
                            {/* <p>postarray : {postArray}</p> */}



                        </div>

                    </div>

                </div>

        </>
    )
}


