import React from 'react';
import {
  Button,
  Dialog,
  DialogBody,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";

export default function PopUpRegister(props) {
  return (
    <Dialog open={props.isOpen} size={"xs"} handler={() => props.onClose()}>
      <DialogBody>
        <Typography variant="h4" color="blue-gray">
          Register
        </Typography>
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
          <Button className="mt-6" fullWidth>
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
