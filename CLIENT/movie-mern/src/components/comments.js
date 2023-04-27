import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CommentSection() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState({ name: "", text: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Make POST request to create new comment
    await axios.post("http://localhost:4005/api/comments/", newComment);

    // Clear input fields
    setNewComment({ name: "", text: "" });

    // Fetch updated comments from server
    const response = await axios.get("http://localhost:4005/api/comments/");
    setComments(response.data);
  };



  
  const handleDelete = async (id, index) => {
    console.log("id:", id);
    console.log("comments before delete:", comments);

    // check if id is defined
    if (!id) {
      console.error("Invalid comment id:", id);
      return;
    }

    // Make DELETE request to delete comment
    await axios.delete(`http://localhost:4005/api/comments/${id}`);

    // Update state to remove deleted comment
    const newComments = [...comments];
    // delete by (index, how many elements)
    newComments.splice(index, 1);
    console.log("comments after delete:", newComments);
    setComments(newComments);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("http://localhost:4005/api/comments/");
      setComments(response.data);
    };
    fetchData();
  }, []);


  return (
    <div className="card bg-light">
      <div className="card-body">
        {/* <!-- Comment form--> */}
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="mb-3">
            <label htmlFor="nameInput" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={newComment.name}
              onChange={(e) =>
                setNewComment({ ...newComment, name: e.target.value })
              }
              className="form-control"
              id="nameInput"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="commentInput" className="form-label">
              Comment
            </label>
            <textarea
              type="text"
              value={newComment.text}
              onChange={(e) =>
                setNewComment({ ...newComment, text: e.target.value })
              }
              className="form-control"
              rows="3"
              id="commentInput"
              placeholder="Join the discussion and leave a comment!"
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {/* <!-- Comment with nested comments--> */}
        <div className="d-flex mb-4">
          {/* <!-- Parent comment--> */}
          {/*<div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
              alt="..."
            />
            </div>*/}

          <div className="">
            <ul className="comment-container">
              {comments.map((comment, index) => (
                <li className="comment-items" key={index}>
                  <div>
                    <strong>{comment.name}</strong>
                  </div>
                  <div>{comment.text}</div>
                  <button
                    className="delete-todo"
                    onClick={handleDelete.bind(this, comment.comment_id, index)}
                  >
                    x
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* <!-- Single comment--> */}
        <div className="d-flex"></div>
      </div>
    </div>
  );
}
