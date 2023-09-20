import React, { useEffect, useState } from "react";
import { pageNotFound404 } from "assets";
import { Button, Typography } from "@material-tailwind/react";
import Modal from "components/atoms/Modal";

export default function NotFound() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1 flex items-center justify-center">
      <div className="">
        <img className="m-auto w-88 m-4" src={pageNotFound404} alt="PageNotFound" />
        <Typography variant="h2" className="text-center mt-4">Your Page is Not Found</Typography>
      </div>
      
      <div>
      {/* <!-- Button trigger modal --> */}
      <Button>
        <button
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          onClick={() => setShowModal(true)}
        >
          Launch demo modal
        </button>
      </Button>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        HAHAHAHA
      </Modal>
    </div>
    </div>
  )
}
