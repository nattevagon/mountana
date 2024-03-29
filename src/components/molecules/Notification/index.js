import React, { useEffect } from "react";
import { Drawer, List, ListItem, ListItemSuffix, Chip, Typography, IconButton } from "@material-tailwind/react";

export default function Notification(props) {
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

  return (
    <Drawer
      className="p-4 z-50"
      placement="right"
      open={props.isOpen}
      onClose={() => props.onClose()}
      size={540}
      overlay={false}
    >
      <div className="mb-6 flex items-center justify-between">
        <Typography variant="h5" color="blue-gray" className="pl-2">
          Notification
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
      <div>
        <List>
          <ListItem>
            Your schedule on the process..
            <ListItemSuffix>
              <Chip
                value="Recent"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            Thankyou for coming....
            <ListItemSuffix>
              <Chip
                value="16.00 PM"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <ListItem>
            Your account have been created, thankyou!..
            <ListItemSuffix>
              <Chip
                value="12.00 PM"
                variant="ghost"
                size="sm"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
        </List>
      </div>
    </Drawer>
  )
}
