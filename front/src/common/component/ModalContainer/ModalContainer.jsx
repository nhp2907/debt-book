import React, {useEffect, useRef} from "react";

function ModalContainer(props) {
    require('./ModalContainer.css')
    const self = useRef();
    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
              if (self.current === event.target) {
                  props.remove();
              }
        })
    }, [props])
    return (
        <div ref={self} className="modal-container">
            {props.children}
        </div>
    );
}

export default ModalContainer;