const Modal = (props) => {
  return (
    <div className="modal-bg">
      <div className="modal-contents">
        <p>
          این صفحه مختص به تیم طراحی اسنپ گاراژ بوده و کلیه حقوق آن متعق به اسنپ
          گاراژ است.
        </p>
        <br />
        <button onClick={() => props.modalClick()}>ورود به سایت</button>
      </div>
    </div>
  );
};

export default Modal;
