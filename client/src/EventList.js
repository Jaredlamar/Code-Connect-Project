import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Image } from "cloudinary-react";
import EventModal from "./EventModal";

function EventList({ postedEvent, currentUser }) {
  const [postedComments, setPostedComments] = useState("");
  const [postedComment, setPostedComment] = useState([]);
  const [imageSelected, setImageSelected] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [eventModal, setEventModal]= useState(false)

  useEffect(() => {
    if (imageUrl) {
      handleUpdatePost();
    }
  }, [imageUrl]);

  function handleUpdatePost() {
    console.log("patching post to backend");
    console.log(`imageUrl: ${imageUrl}`);

    const post = {
      image: imageUrl,
    };

    fetch(`/posts/${postedEvent.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(post),
    }).then((res) => res.json());
  }

  const handleComment = (event) => {
    event.preventDefault();
    const comments = {
      user_id: currentUser.id,
      post_id: postedEvent.id,
      content: postedComments,
    };

    fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(comments),
    })
      .then((res) => res.json())
      .then((data) => {
        postedEvent.comments.push(data);
        setPostedComments("");
      });
  };

  function handlePostDelete() {
    fetch(`/posts/${postedEvent.id}`, {
      method: "DELETE",
    }).catch((error) => console.log(error.message));
  }

  const uploadImage = () => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "de3dvas3");

    Axios.post(
      "http://api.cloudinary.com/v1_1/djj0rrbaw/image/upload",
      formData
    ).then((response) => {
      console.log(`response.data.url: ${response.data.url}`);
      setImageUrl(response.data.url);
    });
  };

  return (
    <>
      <div className="postEvents">
        <div className="post">
          <div className="postHeader">
            <div className="title">
              <h1 className="logo-1">{postedEvent.event}</h1>
              <h2 className="logo-1">{postedEvent.date}</h2>
            </div>
            <div className="deletePost">
              <button onClick={handlePostDelete}> &#128465; </button>
            </div>
          </div>
          <div>
            <input
              onChange={(event) => {
                setImageSelected(event.target.files[0]);
              }}
              type="file"
            />
            <button onClick={uploadImage}>Upload Image</button>
          </div>
          <div className="postImage-container">
            <img onClick={()=> {setEventModal(true)}}
              className="selected-image"
              src={postedEvent.image || imageUrl}
            />
          </div>
          <div>
            <em>
              {postedEvent.comments.length > 0 &&
                postedEvent.comments.map((coment) => {
                  return <ul>-{coment.content}</ul>;
                })}
            </em>
          </div>
          <div>
            <input
              type="text"
              placeholder="Leave Comment"
              value={postedComments}
              onChange={(e) => setPostedComments(e.target.value)}
            ></input>{" "}
            <button onClick={(e) => handleComment(e)}>Comment</button>
          </div>
        </div>
        {eventModal && <EventModal closeEventModal={setEventModal} postedEvent={postedEvent}/>}
      </div>
    </>
  );
}

export default EventList;
{
  /* <div className='post'> 
    <div className='postHeader'> 
        <div className='postTitle'>
        <h1>{postedEvents.event}</h1>
        </div>
    </div>  
    <h4>{postedEvents.date}</h4>
    <h5>Comments</h5>
    <ul>
        {postedEvents.comments.length>0 && postedEvents.comments.map(coment=>{
        return <li>{coment.content}</li>
        })}
    </ul>
        

    <input type="text" value={postedComments} onChange={(e) => setPostedComments(e.target.value)}></input> <button onClick={(e)=>handleComment(e)}>Comment</button>
</div> */
}
