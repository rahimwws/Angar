import Image from "next/image";
import React from "react";
type Props = {
  image: any;
  isOpen: any;
  handleCloseClick: any;
};
export const ModalImage = (props: Props) => {
  return (
    <>
      {props.isOpen && (
        <div className="modal-overlay">
          <div className="modal-wrapper">
            <div className="modal">
              <div className="modal-header">
                <p  onClick={() => props.handleCloseClick(false)}>
                  x
                </p>
              </div>
              <div className="modal-body">
                <Image src={props.image} alt="modal-image" width={400} height={400} priority/>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
