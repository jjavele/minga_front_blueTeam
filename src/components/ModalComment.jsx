import axios from 'axios';
import { useState, useParams, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import commentsActions from '../redux/actions/comments';
import EditComment from '../components/EditComment';
import EliminateComment from './EliminateComment';

let ModalComment = ({ isOpen, onClose, chapterId }) => {

    let _id = useParams
    console.log(chapterId)

    let [newComment, setNewComment] = useState('');
    let [editingCommentId, setEditingCommentId] = useState(null);
    let [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    let [deletingCommentId, setDeletingCommentId] = useState(null);
    let [page, setPage] = useState(1);
    let [totalPages, setTotalPages] = useState(null);
    
    let token = localStorage.getItem("token");
    let user = JSON.parse(localStorage.getItem("user"))
    console.log(user._id)
    let headers = {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    };

    //PARA LOS DATOS DE LOS COMMENTS:
    let comments = useSelector((store) => store.comments.comments);
    console.log(comments);

    let dispatch = useDispatch();

    useEffect(() => {
        let fetchComments = async () => {
        let {data} = axios.get(`http://localhost:8080/api/comments?chapter_id=${chapterId}&page=${page}`, headers)
            .then((res) => dispatch(commentsActions.datos_comments(res.data.comments)))
            setTotalPages(data.totalPages)
            .catch((err) => console.error(err));
        }
        fetchComments()
    }, [isOpen]);


    // Función para manejar el cambio en el text area del formulario
    let handleCommentChange = (event) => {
        setNewComment(event.target.value);
    };

    // Función para manejar el envío del formulario
    let handleSubmit = async (event) => {
        event.preventDefault()
        
        try {
            await axios.post(`http://localhost:8080/api/comments/`, { chapter_id: chapterId, user_id: user._id, comment: newComment, }, headers)
            
        } catch (error) {
            console.error(error)            
        }
        onClose();
    };

    // Función para activar la edición del comentario
    let handleEditClick = (commentId) => {
        setEditingCommentId(commentId);
    };

    // Función para desactivar la edición del comentario
    let handleEditCancel = () => {
        setEditingCommentId(null);
    };

    // Función para guardar el comentario editado
    let handleEditSave = (editedComment) => {
    // Actualizar el comentario en el estado local (Redux)
    let updatedComments = comments.map((comment) =>
        comment._id === editingCommentId ? { ...comment, comment: editedComment } : comment
    );
    dispatch(commentsActions.datos_comments(updatedComments));

    // Desactivar la edición del comentario
        setEditingCommentId(null);
    };

    // Función para verificar si el comentario pertenece al usuario logueado
    let isCommentBelongsToUser = (comment) => {
        return comment?.user_id?._id === user._id;
    };

    // Función para eliminar un comentario
    let handleDeleteClick = (commentId) => {
        setIsDeleteModalOpen(true);
        setDeletingCommentId(commentId);
    };

    let handleDeleteCancel = () => {
        setIsDeleteModalOpen(false);
        setDeletingCommentId(null);
    };
    
    let handleDeleteConfirm = () => {
        // Llamar a la función para eliminar el comentario
        handleDeleteClick(deletingCommentId);
        setIsDeleteModalOpen(false);
    };

    const PrevButton = (props) => {
        const { page } = props;
        if (page !== 1) {
          return (
            <button {...props} className="self-center text-black font-bold text-lg hover:scale-[1.1] ps-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
          );
        } else {
          return (
            <button {...props} className="self-center text-gray-500 font-bold text-lg hover:scale-[1.1] ps-4" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 9l-3 3m0 0l3 3m-3-3h7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
          );
        }
    };
    
    const NextButton = (props) => {
        const { page, totalPages } = props;
        if (page !== totalPages) {
          return (
            <button {...props} className="self-center text-black font-bold text-lg hover:scale-[1.1] pe-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
          );
        } else {
          return (
            <button {...props} className="self-center text-gray-500 font-bold text-lg hover:scale-[1.1] pe-4" disabled>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </button>
          );
        }
    };

    const goToPrevPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    };

    const goToNextPage = () => {
        if (page < totalPages) {
            setPage(page + 1);
        }
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full bg-black opacity-20 z-100" onClick={onClose}/>
            )}
            <div className="flex flex-col fixed w-[40vw] h-[90vh] justify-end top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-md p-4">
                {comments && comments?.map((comment) => (
                <div key={comment?._id} className="flex flex-col h-[16vh] w-[40vw] self-center justify-between bg-gray-200 p-2 mt-2 mb-2" >
                    {isCommentBelongsToUser(comment) 
                    ? 
                    <div className="flex items-center self-end p-2">
                        <h3 className="text-bold ps-4">{comment?.user_id.email}</h3>
                        <img className="w-[4vw] rounded-full" src={comment?.user_id.photo} alt="" />
                    </div>  
                    : 
                    <div className="flex items-center p-2">
                        <img className="w-[4vw] rounded-full" src={comment?.user_id.photo} alt="" />
                        <h3 className="text-bold ps-4">{comment?.user_id.email}</h3>
                    </div>}
                              
                    <p className="flex items-center h-[3vh] pb-2">{comment?.comment}</p>
                    <div className="flex items-center ps-4 justify-between w-[30vh] ">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"strokeWidth="1.5" stroke="currentColor" className="flex w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"/>
                        </svg>
                        <p className="text-bold">N°</p>
                        <div className="flex h-[3.5vh] p-1 items-center text-bold border border-black rounded-md ps-2 bg-white-500 text-blue-600 py-2 px-4">
                            <button className="text-[1.5vh] " type="submit">
                                Replay
                            </button>
                        </div>
                        {isCommentBelongsToUser(comment)
                        ? 
                        <div className="flex h-[3.5vh] p-1 self-center items-center text-bold border border-black rounded-md ps-2 bg-white-500 text-blue-600 py-2 px-4">
                            <button className="ps-2" onClick={() => handleEditClick(comment?._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="flex w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                            </button>
                        </div>
                        :
                        <div> </div>}
                        {isCommentBelongsToUser(comment)
                        ? 
                        <div className="flex h-[3.5vh] p-1 self-center items-center text-bold border border-black rounded-md ps-2 bg-white-500 text-red-600 py-2 px-4">
                            <button className="ps-2" onClick={() => handleDeleteClick(comment?._id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </button>
                        </div>
                        :
                        <div></div>}
                    </div>
                </div>
                ))}
                <div className="flex h-[3vh] w-[35vw] m-4 justify-between rounded-3xl">
                    <PrevButton page={page} onClick={goToPrevPage}></PrevButton>
                    <NextButton page={page} totalPages={totalPages} onClick={goToNextPage}></NextButton>
                </div>
                <form className="flex" onSubmit={handleSubmit}>
                    <input className=" border-2 w-[40vw] h-[3vw] rounded-lg" type="text" value={newComment} onChange={handleCommentChange} placeholder="Say something here..."/>
                    <button type="submit">
                        <svg  className=" hover:bg-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    </button>
                </form>
                {editingCommentId && (
                    <EditComment commentId={editingCommentId} initialComment={comments.find((comment) => comment._id === editingCommentId)?.comment} onSave={handleEditSave} onCancel={handleEditCancel}/>
                )}
                {isDeleteModalOpen && (
                    <EliminateComment commentId={deletingCommentId} onDelete={handleDeleteConfirm} onCancel={handleDeleteCancel}/>
                )}
            </div>
            
             
        </>
    );
};

export default ModalComment;