import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditComment = ({ commentId, initialComment, onSave, onCancel }) => {

    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user._id)
    let headers = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };

    const [editedComment, setEditedComment] = useState(initialComment);

    const handleCommentChange = (event) => {
        setEditedComment(event.target.value);
    };

    const handleSave = async () => {
        try {
        await axios.put(`http://localhost:8080/api/comments/${commentId}`, {comment: editedComment,}, headers);
        onSave(editedComment)
        Swal.fire({
            icon: 'success',
            title: 'Comment changed successfully!',
        })

        } catch (error) {
        console.error(error);
        Swal.fire({
            icon: 'error',
            title: 'You do not have permission to modify this comment',
        })
        }
    };

    return (
        <div className="z-200 fixed top-0 left-0 w-full h-full">
        <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4">
            <h3 className="text-bold">Edit Comment:</h3>
            <input
            className="border-2 w-full h-[3vw] rounded-lg"
            type="text"
            value={editedComment}
            onChange={handleCommentChange}
            placeholder="Edit your comment here..."
            />
            <div className="flex justify-between mt-4">
            <button onClick={handleSave} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Save
            </button>
            <button onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Cancel
            </button>
            </div>
        </div>
        </div>
    );
};

export default EditComment;
