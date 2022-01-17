
import React from 'react'
import { Post } from './Post'
import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
export function Banner(props) {

    const [postArray, setPostArray] = useState([])
    const [page, setPage] = useState(1)
    const [dataLength, setDataLength] = useState(0)



    const getPosts = async (pageNo) => {


        const url = `http://0.0.0.0:3004/posts?page=${pageNo}&size=${props.size}`;
        let data = await fetch(url)
        if (!data) {
            console.log("something eror")

        }
        const posts = await data.json()
            console.log(posts)
            setPage(page+1)
            setDataLength(posts.totalCount)

            const newPosts = [...postArray, ...posts.result]
            setPostArray(newPosts)







    }
    useEffect(() => {
        getPosts(1)
    }, [])

    return (
        <>
            <InfiniteScroll
                dataLength={dataLength} //This is important field to render the next data
                next={() => {
                    getPosts(page + 1)
                }}
                hasMore={() => {
                    if (dataLength > page * props.size) {
                        return true
                    } else {
                        return false
                    }
                }}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }

            >


                <div className="container mt-5">

                    <div className="BannerArea">
                        <div className="row">
                            {postArray.map((ele) => {

                                return <div className="col-lg-6 col-sm-12">
                                    <Post title={ele.title} content={ele.content} />
                                </div>
                            })}


                        </div>

                    </div>

                </div>

            </InfiniteScroll>
        </>
    )
}


