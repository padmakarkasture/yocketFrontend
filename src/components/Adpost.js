import React,{useState} from 'react'

export function AdPost() {

    const [postForm,setPostForm]=useState(false)
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')

    const onClickHandler = ()=>{
        setPostForm(true)
    }

    const submitForm=()=>{

    }

    return (
        <>
        <div className="addPost">
{!postForm &&
  <button className='login'    onClick={onClickHandler}>Add Post</button>}
  {postForm &&
    <div className="form-inline">
    <label className="sr-only" htmlFor="inlineFormInputName2">Title</label>
    <input type="text" onChange={(event)=> setTitle} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="title" />
    <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Content</label>
    <div className="input-group mb-2 mr-sm-2">
      <div className="input-group-prepend">

      </div>
      <input type="text" className="form-control" id="inlineFormInputGroupUsername2" placeholder="content" />
    </div>

    <button  className="login" onClick={submitForm}>Add</button>
</div>



  }
        </div>



        </>
    )
}


