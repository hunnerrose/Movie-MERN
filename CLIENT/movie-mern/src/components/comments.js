import React, { useEffect, useCallback, useState } from "react";
import { useParams } from "react-router-dom";

const API_BASE = "https://rqygsodbcvrutuezcjts.supabase.co/comments";
const API_KEY = "jzmo03tSnlle2YjY";

// export default function Comments({
//   setComment,
//   setNewComment,
//   comment,
//   newComment,
// }) {
//   const getComments = useCallback(() => {
//     fetch(API_BASE, {
//       headers: {
//         apikey: API_KEY,
//       },
//     })
//       .then((result) => result.json())
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setComment(data);
//         } else {
//           console.error("Data is not an array:", data);
//         }
//       })
//       .catch((err) => console.error("Error: ", err));
//   }, [setComment]);

//   useEffect(() => {
//     getComments();
//   }, [getComments]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch(API_BASE, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ comment: newComment }),
//       });
//       if (!response.ok) {
//         throw new Error("Failed to add comment.");
//       }
//       const data = await response.json();
//       setComment([...comment, data.comment]);
//       setNewComment("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleDelete = async (index, id) => {
//     try {
//       const response = await fetch(`${API_BASE}${id}`, {
//         method: "DELETE",
//       });
//       if (!response.ok) {
//         throw new Error("Failed to delete comment.");
//       }
//       const newComments = comment.filter((comment, i) => i !== index);
//       setComment(newComments);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="card bg-light">
//       <div className="card-body">
//         {/* <!-- Comment form--> */}
//         <form onSubmit={handleSubmit} className="mb-4">
//           <textarea
//             type="text"
//             value={newComment}
//             onChange={(e) => setNewComment(e.target.value)}
//             className="form-control"
//             rows="3"
//             placeholder="Join the discussion and leave a comment!"
//           ></textarea>
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </form>
//         {/* <!-- Comment with nested comments--> */}
//         <div className="d-flex mb-4">
//           {/* <!-- Parent comment--> */}
//           <div className="flex-shrink-0">
//             <img
//               className="rounded-circle"
//               src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
//               alt="..."
//             />
//           </div>

//           <div className="ms-3">
//             <ul>
//               {comment.map((comment, index) => (
//                 <li key={index}>
//                   {comment.text}
//                   <button onClick={() => handleDelete(comment.id, index)}>
//                     Delete Comment
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//         {/* <!-- Single comment--> */}
//         <div className="d-flex">
//           <div className="flex-shrink-0">
//             <img
//               className="rounded-circle"
//               src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
//               alt="..."
//             />
//           </div>
//           <div className="ms-3">
//             <div className="fw-bold">Commenter Name</div>
//             When I look at the universe and all the ways the universe wants to
//             kill us, I find it hard to reconcile that with statements of
//             beneficence.
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default function CommentSection({movies}) {
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");
  const { id } = useParams();
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    setComment([...comment, { text: newComment, id: Date.now() }]);
    setNewComment("");
  };

  const handleDelete = (id, index) => {
    const newComments = [...comment];
    newComments.splice(index, 1);
    setComment(newComments);
  };

  return (
    <div className="card bg-light">
      <div className="card-body">
        {/* <!-- Comment form--> */}
        <form 
          onSubmit={handleSubmit} 
          className="mb-4"
          method="POST"
          action={`/movies/${id}/comment`}
        >
          <textarea
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="form-control"
            rows="3"
            placeholder="Join the discussion and leave a comment!"
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        {/* <!-- Comment with nested comments--> */}
        <div className="d-flex mb-4">
          {/* <!-- Parent comment--> */}
          <div className="flex-shrink-0">
            <img
              className="rounded-circle"
              src="https://dummyimage.com/50x50/ced4da/6c757d.jpg"
              alt="..."
            />
          </div>

          <div className="ms-3">
            <ul>
              {comment.map((comment, index) => (
                <li key={index}>
                  {comment.text}
                  <form 
                    method="POST"
                    action={`/movies/${id}/comment/${comment.id}?_method=DELETE`}
                  >
                    <button 
                      onClick={() => handleDelete(comment.id, index)} 
                      className="btn btn-danger"
                    >
                      Delete Comment
                    </button>
                  </form>
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
