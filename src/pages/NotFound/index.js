import React, { useEffect } from "react";
import { explore, mountain, pageNotFound404 } from "assets";
import { Button, List, ListItem, ListItemPrefix, Typography } from "@material-tailwind/react";
import Dropdowns from "components/atoms/Dropdowns";
import { DropdownsButton, DropdownsContent } from "components";

export default function NotFound() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1 flex items-center justify-center">
      <div className="">
        <img className="m-auto w-88 m-4" src={pageNotFound404} alt="PageNotFound" />
        <Typography variant="h2" className="text-center mt-4">Your Page is Not Found</Typography>
        <Dropdowns>
          <DropdownsButton id="button1">
            <Button>Hai</Button>
          </DropdownsButton>
          <DropdownsContent id="button1">
            <List>
              <ListItem>
                <ListItemPrefix>
                  <img
                    src={explore}
                    alt="Explore"
                    className="w-6 h-6 inline-block my-auto"
                  />
                </ListItemPrefix>
                Explore
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <img
                    src={mountain}
                    alt="Mountain"
                    className="w-6 h-6 inline-block my-auto"
                  />
                </ListItemPrefix>
                Mountain
              </ListItem>
            </List>
          </DropdownsContent>
        </Dropdowns>
      </div>
    </div>
  )
}
