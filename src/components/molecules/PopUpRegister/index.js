import React, { useEffect } from "react";
import { Button, Dialog, DialogBody, IconButton, Input, Typography } from "@material-tailwind/react";

export default function PopUpRegister(props) {
  useEffect(() => {
    if (props.isOpen) {
      // Save the current scroll position
      const scrollY = window.scrollY;

      // Disable scrolling on the body element
      document.body.classList.add("overflow-hidden", "sm:overflow-auto")

      // Restore the scroll position when the drawer is closed
      return () => {
        document.body.classList.remove("overflow-hidden", "sm:overflow-auto");
        window.scrollTo(0, scrollY);
      };
    }
  }, [props.isOpen]);

  let handleSubmit = () => {
    console.log("Submit")
  }

  return (
    <Dialog open={props.isOpen} size={props.isMobile ? "xxl" : "xs"} handler={() => props.onClose()}>
      <DialogBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Register
          </Typography>
          <IconButton
            variant="text"
            color="blue-gray"
            onClick={props.onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your name, username, and password.
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6 h-82">
            <Input size="lg" label="Name" />
            <Input size="lg" label="Address" />
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" fullWidth onClick={() => handleSubmit()}>
            Register
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Already have an account ?{" "}
            <a href="#" className="font-medium text-gray-900">
              Login
            </a>
          </Typography>
        </form>
      </DialogBody>
    </Dialog>
  )
}
