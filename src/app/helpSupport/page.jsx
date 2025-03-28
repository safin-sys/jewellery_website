import React from "react";
import hero from "../../../public/shared/sss.jpg";
import Image from "next/image";
import mainUrl from "@/components/shared/mainUrl";
const page = async() => {
  const about = await mainUrl(`/info?page=help`);
  return (
    <div className="container m-auto mt-9 px-4 lg:px-0">
      <div>
        <h1 className="pb-4">Home/Help & Support</h1>
        <div
          className="relative bg-cover bg-center md:h-[55vh] h-[200px] -mt-[1px]"
          style={{
            width: "100%",
          }}
        >
          <Image
            src={hero}
            className="rounded-2xl"
            alt="Hero Image"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
          <div className="absolute px-4 lg:px-0 inset-0 flex justify-center items-center ">
            <div className="">
              <div className="">
                <div className="text-3xl font-semibold md:text-5xl ">
                  <h1 className="">Help & Support</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
      <div className="mt-5">
      {about?.content ? (
          <div dangerouslySetInnerHTML={{ __html: about?.content  }} />
        ) : (
          <NoData /> // Render NoData when description is missing
        )}
      </div>
      </div>
    </div>
  );
};

export default page;
