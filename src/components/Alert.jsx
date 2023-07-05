import Swal from "sweetalert2";

export default function Alert({ messages, show, setShow }) {
  const showAlerts = async () => {
    for (let i = 0; i < messages.length; i++) {
      await Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: <p key={i}>{messages[i]}</p>,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  return show && (
    <div className="alert">
      {showAlerts()}
      <button onClick={() => setShow(false)}>Cerrar</button>
    </div>
  );
}

/*
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

Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'Your work has been saved',
  showConfirmButton: false,
  timer: 1500
})
*/