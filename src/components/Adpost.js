import React, { useState } from 'react'

export function AdPost() {

  const [postForm, setPostForm] = useState(false)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [adding,setAdding]=useState(false)
  const [alert,setAlert]=useState({
    type:'danger',
    message:"",
    isVisible:false
  })

  const onClickHandler = () => {
    setPostForm(true)
  }

  const submitForm = async () => {
    setAdding(true)

    const rawResponse = await fetch(`http://localhost:3004/posts`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, content:content })
    });
    const result = await rawResponse.json();
    console.log(result)
    if(result.statusCode===201){
      setAlert({
        type:'success',
      message:result.message,
      isVisible:true

      }
    )
      setTimeout(()=>{
        setAlert({
          type:'',
        message:"",
        isVisible:false

        }
      )},3000)
    }

    else if(result.result['isAlreadyPresent']==true){

        setAlert({
          type:'warning',
        message:result.message,
        isVisible:true

        }
      )
      setTimeout(()=>{
        setAlert({
          type:'',
        message:"",
        isVisible:false

        }
      )},3000)


    }
    setPostForm(false)





  }

  return (
    <>
      <div className="addPost">
        {alert.isVisible && <div className={`alert alert-${alert.type}`} role="alert">
  {alert.message}
</div>}
        {!postForm &&
          <button className='login' onClick={onClickHandler}>Add Post</button>}
        {postForm &&
          <div className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputName2">Title</label>
            <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="title" />
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Content</label>
            <div className="input-group mb-2 mr-sm-2">
              <input type="text" value={content} onChange={(event) => setContent(event.target.value)} className="form-control" id="inlineFormInputGroupUsername2" placeholder="content" />
            </div>

            <button className="login" onClick={submitForm}>Add</button>
          </div>



        }
      </div>



    </>
  )
}


