

const Popup = ({ text, onClose, className }) => {
    return (
        <div className = "popupWrap">
            <div className = {`popup ${className}`} >
                <p> Animation ended  <br/> click {text}
                     </p>
                <span onClick={onClose}>x</span>
            </div>
        </div>
    )
}

export default Popup