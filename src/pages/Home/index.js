import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Banner, Maps } from "../../components";
import { Button, Typography, Card, CardHeader, CardBody, Avatar } from "@material-tailwind/react";
import { login } from "../../libs/login";

export default function Home() {
  let [lat, setLat] = useState(false);
  let [lng, setLng] = useState(false);

  useEffect(() => {
    // navigator?.geolocation.getCurrentPosition(({ coords: { latitude: lat, longitude: lng } }) => {
    //   setLat(lat)
    //   setLng(lng)

    //   console.log(lat, lng)
    // })

    window.scrollTo(0, 0);
    handleLogin();
  }, []);

  const banners = [
    {
      id: 1,
      name: "Product 1",
      description: "This is the description of product 1.",
      url: "https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg",
    },
    {
      id: 2,
      name: "Product 2",
      description: "This is the description of product 2.",
      url: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80",
    },
    {
      id: 3,
      name: "Product 3",
      description: "This is the description of product 2.",
      url: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg",
    },
    {
      id: 4,
      name: "Product 4",
      description: "This is the description of product 1.",
      url: "https://images2.alphacoders.com/131/1313504.jpeg",
    }
  ];

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
      name: "Gunung Lawu",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "sindoro",
      imageUrl: "https://images.pexels.com/photos/1054218/pexels-photo-1054218.jpeg?cs=srgb&dl=pexels-stephan-seeber-1054218.jpg&fm=jpg"
    },
    {
      id: 4,
      name: "Gunung Sindoro",
      description: "Gunung paling mematikan seasia sedunia brow",
      url: "sindoro",
      imageUrl: "https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg"
    },
    {
      id: 5,
      name: "Gunung Sumbing",
      description: "Gunung paling keren di Magelang sekitarnya",
      url: "sindoro",
      imageUrl: "https://images2.alphacoders.com/131/1313504.jpeg"
    }
  ];

  let handleLogin = () => {
    login({ username: "natte", password: "vagon" }, result => {
      console.log(result)
    })
  }

  return (
    <div className="container mx-auto mt-8 px-4 pt-10 sm:pt-20 sm:px-0 flex-1">
      <div className="relative">
        <Banner data={banners} />
        <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 md:p-6 lg:p-8 mx-16">
          <Typography variant="h1" className="text-center text-white text-lg md:text-4xl lg:text-6xl">Find your outdoors</Typography>
          <div className="flex item-center justify-center mt-2 mb-6 md:mt-4">
            <Link to={process.env.PUBLIC_URL + "/explore/"}>
              <Button variant="text" color="white" className="rounded-full min-w-min place-self-center">
                Explore nearby trails
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <Typography variant="h3">
          Find your mountain
        </Typography>
        <div className="container mx-auto">
          <div className="mt-8 mb-8 grid grid-flow-col gap-4 overflow-x-auto no-scrollbar">
            <Button variant="gradient" color="white" className="rounded-full min-w-min" onClick={() => handleLogin()}>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {mountain.map((product, i) => {
              return (
                <div>
                  <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
                    <Link className="relative" to={process.env.PUBLIC_URL + "/mountain/" + product.url}>
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
        </div>
      </div>
      {/* <div className="mt-8">
        <Maps
          lat={lat}
          lng={lng}
          zoom={15}
        />
      </div> */}
      <div className="mt-8">
        <Typography variant="h3" className="mb-4">
          Find your guidelines
        </Typography>
        <div className="mt-8 mb-8 grid grid-flow-col gap-4 overflow-x-auto no-scrollbar">
          <Card
            shadow={false}
            className="min-w-min relative grid w-min-80 items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80')] bg-cover bg-center"
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                How we guide you on the mountain?
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                Cipung
              </Typography>
              <Avatar
                size="xl"
                variant="circular"
                alt="tania andrew"
                className="border-2 border-white"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  )
}
