import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EliminateComment = ({ commentId, onDelete, onCancel }) => {

    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user._id)
    let headers = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:8080/api/comments/${commentId}`, headers);
            onDelete(commentId);
            Swal.fire({
                icon: 'success',
                title: 'Comment deleted successfully!',
            });
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: 'error',
                title: 'You do not have permission to delete this comment',
            });
        }
    };

    return (
        <div className="z-200 fixed top-0 left-0 w-full h-full">
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4">
                <h3 className="text-bold">Delete Comment:</h3>
                <p>Are you sure you want to delete this comment?</p>
                <div className="flex justify-between mt-4">
                    <button onClick={handleDelete} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                        Delete
                    </button>
                    <button onClick={onCancel} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EliminateComment;
