import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Button, Card } from "@material-tailwind/react";
import { Breadcrumb } from "../../components";

export default function Mountain() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const mountain = [
    {
      id: 1,
      name: "Gunung Everest",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "everest",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 2,
      name: "Gunung K2",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "k2",
      imageUrl: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg"
    },
    {
      id: 3,
      name: "Gunung Sindoro",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "sindoro",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 4,
      name: "Gunung Sindoro",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "sindoro",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 5,
      name: "Gunung Sindoro",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "sindoro",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    }
  ];

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1">
      <Breadcrumb
        parent={"mountain"}
      />
      <div>
        <div className="mx-auto">
          <div className="mt-4 mb-8 grid grid-flow-col gap-4 overflow-x-auto no-scrollbar">
            <Button variant="gradient" color="white" className="rounded-full min-w-min">
              All
            </Button>
            <Button variant="gradient" color="white" className="rounded-full min-w-min">
              Amateur
            </Button>
            <Button variant="gradient" color="white" className="rounded-full min-w-min">
              Reguler
            </Button>
            <Button variant="gradient" color="white" className="rounded-full min-w-min">
              Expert
            </Button>
          </div>
          <Card className="w-full">
            <div className="rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {mountain.map((product, i) => {
                return (
                  <div>
                    <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
                      <Link className="relative" to={process.env.PUBLIC_URL+'/mountain/'+product.url}>
                        <div
                          className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                          <a href="#!">
                            <img
                              className="rounded-t-lg"
                              src={product.imageUrl}
                              alt="" />
                          </a>
                          <div className="p-6">
                            <h5
                              className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                              {product.name}
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                              {product.description}
                            </p>
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
