import React from "react";
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

export default function PopUpLogin(props) {
  let handleSubmit = () => {
    console.log("Submit")
    localStorage.setItem("isLogin", true);
    window.location.reload();
  }

  return (
    <Dialog open={props.isOpen} size={"xs"} handler={() => props.onClose()}>
      <DialogBody>
        <Typography variant="h4" color="blue-gray">
          Login
        </Typography>
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
