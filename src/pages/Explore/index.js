import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { List, ListItem, Card, Button, Typography } from "@material-tailwind/react";
import { Breadcrumb, Maps } from "components";

export default function Explore() {
  let [lat, setLat] = useState(false);
  let [lng, setLng] = useState(false);

  useEffect(() => {
    navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
      setLat(lat)
      setLng(lng)
    })

    window.scrollTo(0, 0);
  }, []);

  const mountain = [
    {
      id: 1,
      name: "Basecamp Mt. Everest via Nepal",
      description: "Gunung Everest",
      location: "Nepal",
      url: "everest",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 2,
      name: "Basecamp Gunung K2 via Khasmir",
      description: "Gunung K2",
      location: "Pakistan",
      url: "k2",
      imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
    },
    {
      id: 3,
      name: "Basecamp Gunung Sindoro via Kledung",
      description: "Gunung Sindoro",
      location: "Indonesia",
      url: "sindoro",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    }
  ];

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1">
      <Breadcrumb
        parent={"explore"}
      />

      <div className="flex flex-col lg:flex-row">
        {/* Left Column */}
        <div className="p-2 px-0 w-full lg:pr-2 lg:w-64">
          <Card>
            <List className="flex-row lg:flex-col">
              <ListItem>Nearby</ListItem>
              <ListItem>Recomended</ListItem>
              <ListItem>Popular</ListItem>
            </List>
          </Card>
          <Card className="mt-4">
            <Maps
              lat={lat}
              lng={lng}
              zoom={15}
              width="100%"
              height="240px"
            />
          </Card>
        </div>
        {/* Right Column */}
        <div className="p-2 px-0 w-full lg:pl-2 lg:flex-1">
          <Card>
            <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {mountain.map((product, i) => {
                return (
                  <div>
                    <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
                      <Link className="relative" to={process.env.PUBLIC_URL + "/mountain/" + product.url}>
                        <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <a href="#!">
                            <img
                              className="rounded-t-lg"
                              src={product.imageUrl}
                              alt="" />
                          </a>
                          <div className="p-6">
                            <Typography
                              variant="h5"
                              className="mb-3 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              {product.name}
                            </Typography>
                            <Typography variant="p" className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                              {product.description}
                            </Typography>
                            <Typography variant="p" className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              {product.location}
                            </Typography>
                            <Button>See more!</Button>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )
              })}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
