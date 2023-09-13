import React from 'react'
import { useParams } from 'react-router-dom';
import { Breadcrumb } from '../../components';
import { Button } from "@material-tailwind/react";

export default function MountainDetail() {
  const param = useParams();

  const product = {
    id: 1,
    name: 'Base Camp Gunung Sindoro Via Kledung',
    description: 'Gunung Sindoro, biasa disebut Sindara, atau juga Sundoro (Ketinggian puncak 3.136 mdpl) merupakan sebuah gunung volkano aktif yang terletak di Jawa Tengah, Indonesia, dengan Temanggung sebagai kota terdekat. Gunung Sindoro terletak berdampingan dengan Gunung Sumbing, ada yang menyebutnya gunung kembar dapat terlihat jelas dari Sunrisecamp Prau sebagai icon pemandangan Gunung Prau',
    imageUrl: 'https://mediacenter.temanggungkab.go.id/asset/foto_berita/GRASINDO_JALUR_FAVORIT_PARA_PENDAKI.jpg',
  };

  return (
    <div className="container mx-auto mt-8 px-4 py-10 sm:py-20 sm:px-0">
      <Breadcrumb
        parent={"mountain"}
        child={param.id}
      />
      <div className="bg-white rounded-lg mt-4 p-6">
        <div className='md:flex'>
          <div className="md:w-1/2">
            <img
              className="h-96 w-full rounded-lg object-cover object-center shadow-xl shadow-blue-gray-300/50"
              src={product.imageUrl}
              alt={product.name}
            />
          </div>
          <div className="md:w-1/2 md:ml-8">
            <h1 className="text-3xl font-semibold mt-4 mb-4 sm:mt-0">{product.name}</h1>
            <p className="text-gray-600">{product.description}</p>
            <div className='mt-4'>
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
            <div className='mt-4 mb-4'>
              <Button fullWidth>Book Now</Button>
            </div>
          </div>
        </div>
        <div className='mt-4'>
          <h1 className="text-xl font-semibold mb-4">Itinerary</h1>
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
        </div>
      </div>
    </div>
  )
}
