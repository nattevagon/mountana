import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Checkbox,
  Typography,
  IconButton,
} from "@material-tailwind/react";

export default function PopUpLogin(props) {
  let handleSubmit = () => {
    console.log("Submit")
    localStorage.setItem("isLogin", true);
    window.location.reload();
  }

  return (
    <Dialog open={props.isOpen} size={props.isMobile ? "xxl" : "xs"} handler={() => props.onClose()}>
      <DialogBody>
        <div className="mb-2 flex items-center justify-between">
          <Typography variant="h5" color="blue-gray">
            Login
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
          Enter your username and password.
        </Typography>
        <form className="mt-8 mb-2">
          <div className="mb-4 flex flex-col gap-6 h-82">
            <Input size="lg" label="Email" />
            <Input type="password" size="lg" label="Password" />
          </div>
          <Button className="mt-6" fullWidth onClick={() => handleSubmit()}>
            Login
          </Button>
          <Typography color="gray" className="mt-4 text-center font-normal">
            Not already have an account ?{" "}
            <a href="#" className="font-medium text-gray-900">
              Register
            </a>
          </Typography>
        </form>
      </DialogBody>
    </Dialog>
  )
}
