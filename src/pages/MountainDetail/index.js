import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb, Maps } from "components";
import { Button, Card, Tabs, TabsHeader, TabsBody, Tab, TabPanel, Carousel, Typography } from "@material-tailwind/react";
import { heart } from "assets";

export default function MountainDetail() {
  const param = useParams();

  const product = {
    id: 1,
    name: "Base Camp Gunung Sindoro Via Kledung",
    description: "Gunung Sindoro, biasa disebut Sindara, atau juga Sundoro (Ketinggian puncak 3.136 mdpl) merupakan sebuah gunung volkano aktif yang terletak di Jawa Tengah, Indonesia, dengan Temanggung sebagai kota terdekat. Gunung Sindoro terletak berdampingan dengan Gunung Sumbing, ada yang menyebutnya gunung kembar dapat terlihat jelas dari Sunrisecamp Prau sebagai icon pemandangan Gunung Prau",
    imageUrl: "https://mediacenter.temanggungkab.go.id/asset/foto_berita/GRASINDO_JALUR_FAVORIT_PARA_PENDAKI.jpg",
  };

  const trackNearby = [
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
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  });


  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0 flex-1">
      <Breadcrumb
        parent={"mountain"}
        child={param.child}
        subChild={param.subChild}
      />
      <Card className="w-full mt-4 p-6">
        <div className="md:flex">
          <div className="md:w-1/2 lg:pb-4">
            <img
              className="w-full h-full rounded-lg object-cover object-center shadow-xl object-cover"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-semibold mt-4 mb-4 sm:mt-0">{product.name}</h1>
            <p className="text-gray-600 text-justify">{product.description}</p>
            <div className="mt-4">
              <h1 className="text-xl font-semibold mb-4">Information</h1>
              <div className="flex flex-col">
                <div className="overflow-x-auto">
                  <div className="inline-block min-w-full">
                    <div className="overflow-hidden">
                      <table className="min-w-full text-left text-sm font-light table-fixed">
                        <tbody>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap align-top px-6 py-4 font-medium">Address</td>
                            <td className="px-6 py-4 align-top">Jl. Campur Salam No.7, Kledung, Kec. Kledung, Kabupaten Temanggung, Jawa Tengah 56264</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap align-top px-6 py-4 font-medium">Phone Number</td>
                            <td className="px-6 py-4 align-top">0857-4749-7256</td>
                          </tr>
                          <tr className="border-b dark:border-neutral-500">
                            <td className="whitespace-nowrap align-top px-6 py-4 font-medium">Time</td>
                            <td className="px-6 py-4 align-top">07.00 WIB - 23.00 WIB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 mb-4 flex item-center">
              <Button className="p-2 mr-4">
                <img
                  src={heart}
                  alt="heart"
                  className="w-8 h-6 inline-block my-auto"
                />
              </Button>
              <Button fullWidth>Book Now</Button>
            </div>
          </div>
        </div>
        <hr className="my-2 border-blue-gray-50" />
        <div className="flex flex-col lg:flex-row">
          <div className="p-2 px-0 w-full lg:pr-4 lg:flex-1">
            <div className="flex item-center justify-around">
              <div>
                <Typography variant="p" className="text-center" color="black">Length</Typography>
                <Typography variant="h6" className="text-center" color="black">3.136 m</Typography>
              </div>
              <div>
                <Typography variant="p" className="text-center" color="black">Estimate to the Top</Typography>
                <Typography variant="h6" className="text-center" color="black">5-6 Hours</Typography>
              </div>
              <div>
                <Typography variant="p" className="text-center" color="black">Level</Typography>
                <Typography variant="h6" className="text-center" color="black">Expert</Typography>
              </div>
            </div>
            <hr className="my-2 border-blue-gray-50" />
            <div className="my-4 flex flex-row gap-2 flex-wrap">
              <Button variant="outlined" className="max-w-min p-2">Mountain</Button>
              <Button variant="outlined" className="max-w-min p-2">Sindoro</Button>
              <Button variant="outlined" className="min-w-min p-2">Kledung</Button>
              <Button variant="outlined" className="min-w-min p-2">Wonosobo</Button>
              <Button variant="outlined" className="min-w-min p-2">Jawa Tengah</Button>
              <Button variant="outlined" className="min-w-min p-2">Indonesia</Button>
              <Button variant="outlined" className="min-w-min p-2">Expert</Button>
            </div>
            <div className="mt-4">
              <Tabs value="desc" className="z-0">
                <TabsHeader
                  className="rounded-none border-b border-blue-gray-50 bg-transparent p-0 z-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-gray-900 shadow-none rounded-none",
                  }}>
                  <Tab key={0} value="desc">
                    <Typography variant="h6">Detail Description</Typography>
                  </Tab>
                  <Tab key={1} value="itinerary">
                    <Typography variant="h6">Itinerary</Typography>
                  </Tab>
                </TabsHeader>
                <TabsBody>
                  <TabPanel className="p-0 py-4" key={0} value="desc">
                    <Typography variant="p">
                      Proceed cautiously on this 103.3-km out-and-back trail near Khumjung, Province 1. Generally considered a highly challenging route, it should only be attempted by experienced adventurers. This is a very popular area for backpacking, camping, and hiking, so you'll likely encounter other people while exploring. The best times to visit this trail are February through October. Dogs are welcome and may be off-leash in some areas.
                    </Typography>
                  </TabPanel>
                  <TabPanel className="p-0 py-4" key={1} value="itinerary">
                    <ol className="border-l border-neutral-300 dark:border-neutral-500">
                      {/* <!--First item--> */}
                      <li>
                        <div className="flex-start flex items-center pt-3">
                          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                          <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            01.07.2021
                          </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                          <h4 className="mb-1.5 text-xl font-semibold">
                            Title of section 1
                          </h4>
                          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                            scelerisque diam non nisi semper, et elementum lorem ornare.
                            Maecenas placerat facilisis mollis. Duis sagittis ligula in
                            sodales vehicula.
                          </p>
                        </div>
                      </li>
                      {/* <!--Second item--> */}
                      <li>
                        <div className="flex-start flex items-center pt-2">
                          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                          <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            13.09.2021
                          </p>
                        </div>
                        <div className="mb-6 ml-4 mt-2">
                          <h4 className="mb-1.5 text-xl font-semibold">
                            Title of section 2
                          </h4>
                          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Libero expedita explicabo eius fugiat quia aspernatur autem
                            laudantium error architecto recusandae natus sapiente sit nam
                            eaque, consectetur porro molestiae ipsam an deleniti.
                          </p>
                        </div>
                      </li>
                      {/* <!--Third item--> */}
                      <li>
                        <div className="flex-start flex items-center pt-2">
                          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                          <p className="text-sm text-neutral-500 dark:text-neutral-300">
                            25.11.2021
                          </p>
                        </div>
                        <div className="ml-4 mt-2 pb-5">
                          <h4 className="mb-1.5 text-xl font-semibold">
                            Title of section 3
                          </h4>
                          <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                            Voluptatibus temporibus esse illum eum aspernatur, fugiat
                            suscipit natus! Eum corporis illum nihil officiis tempore.
                            Excepturi illo natus libero sit doloremque, laborum molestias
                            rerum pariatur quam ipsam necessitatibus incidunt, explicabo.
                          </p>
                        </div>
                      </li>
                    </ol>
                  </TabPanel>
                </TabsBody>
              </Tabs>
            </div>
            <hr className="my-2 border-blue-gray-50" />
            <div className="mt-4">
              <Typography variant="h5" className="mb-4" color="black">Gallery</Typography>
              <Carousel className="rounded-xl">
                <img
                  src="https://4.bp.blogspot.com/-Bj1GkHr-qqo/XHPHX-ENSBI/AAAAAAAAJd4/4oluNmaugW8gWijqigigexrM1a-ES1F9QCPcBGAYYCw/s1600/IMG_8250.jpg"
                  alt="image 1"
                  className="h-full w-full object-cover max-h-40 sm:max-h-60 md:max-h-80 lg:max-h-100"
                />
                <img
                  src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2rehpELIsW-CjutzXBJ9W8brV8PD4HqLZbmyqEppne-sZl7iiMg8yvR_p6V1t16ShpCPqX84eX3kWxZQLrQRfgoKZFZ1ONMcJKTsMDOK-S7r7OqNlC8CyHQGEKQXaKvihra4zZxk_m1uiqI58cP8CmlXI3NEhA0Ux11gfInDKdcYHR0z6OhlcMbGi/s1600/pendakian-gunung-sindoro-via-kledung-tercepat.jpg"
                  alt="image 2"
                  className="h-full w-full object-cover max-h-40 sm:max-h-60 md:max-h-80 lg:max-h-100"
                />
                <img
                  src="https://mytrip123.com/wp-content/uploads/2016/03/Sindoro.jpg"
                  alt="image 3"
                  className="h-full w-full object-cover max-h-40 sm:max-h-60 md:max-h-80 lg:max-h-100"
                />
              </Carousel>
            </div>
          </div>
          <hr className="my-2 border-blue-gray-50 lg:hidden" />
          <div className="p-2 px-0 w-full lg:pl-4 lg:w-92 lg:border-l border-blue-gray-50">
            <div>
              <Typography variant="h5" className="mb-4" color="black">Location</Typography>
              <Maps
                lat={-7.339263353986866}
                lng={110.03179334750635}
                zoom={14}
                width="100%"
                height="240px"
              />
            </div>
            <div className="mt-4">
              <Typography variant="h5" className="mb-4" color="black">Nearby</Typography>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                {trackNearby.map((item, i) => {
                  return (
                    <div>
                      <div key={item.id} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 ease-in-out" >
                        <Link className="relative" to={process.env.PUBLIC_URL + "/mountain/" + item.url}>
                          <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                            <a href="#!">
                              <img
                                className="rounded-t-lg"
                                src={item.imageUrl}
                                alt="" />
                            </a>
                            <div className="p-4">
                              <Typography
                                variant="h5"
                                className="mb-3 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                                {item.name}
                              </Typography>
                              <Typography variant="p" className="mb-1 text-base text-neutral-600 dark:text-neutral-200">
                                {item.description}
                              </Typography>
                              <Typography variant="p" className="text-base text-neutral-600 dark:text-neutral-200">
                                {item.location}
                              </Typography>
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
        </div>
      </Card>
    </div>
  )
}
