import React from 'react'
import { Link } from 'react-router-dom';
import { Breadcrumb } from '../../components';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

export default function Schedule() {
  const schedules = [
    {
      id: 1,
      name: "Gunung Everest",
      description: "Gunung paling mematikan seasia sedunia brow",
      date: "10 Jan 2024",
      location: "Nepal",
      url: "everest",
      imageUrl: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80"
    },
    {
      id: 2,
      name: "Gunung Sindoro",
      description: "Gunung paling mematikan seasia sedunia brow",
      date: "22 Jan 2024",
      location: "Wonosobo, Indonesia",
      url: "sindoro",
      imageUrl: "https://img.freepik.com/premium-photo/mountain-landscape-with-sunset-background_726745-519.jpg"
    }
  ];

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1">
      <Breadcrumb
        parent={"schedule"}
      />
      <div>
        <div className="bg-white rounded-lg p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
          {schedules.map((item, i) => {
            return (
              <Card className="w-full max-w-[48rem] flex-row">
              <CardHeader
                shadow={false}
                floated={false}
                className="m-0 w-2/5 shrink-0 rounded-r-none"
              >
                <img
                  src={item.imageUrl}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className='py-4 px-6 w-full'>
                <Typography variant="h4" color="blue-gray" className="mb-1">
                  {item.name}
                </Typography>
                <Typography color="gray" className="font-normal">
                  {item.location}
                </Typography>
                <Typography color="gray" className="mb-4 font-normal">
                  {item.date}
                </Typography>
                <a href="#" className="inline-block">
                  <Button color='black' className="flex items-center gap-2">
                    See more
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      className="h-4 w-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </Button>
                </a>
              </CardBody>
            </Card>
            )
          })}
        </div>
      </div>
    </div>
  )
}
