export default function Alert({ messages, show, setShow }) {
  return show && (
    <div className="alert ">
      {messages.map((message, index) => (
        <p key={index}>{message}</p>
      ))}
      <button onClick = {() => setShow(false)}>Cerrar</button>
    </div>
  );
}
/*
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
*/