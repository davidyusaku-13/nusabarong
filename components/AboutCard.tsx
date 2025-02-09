import React from "react";

interface AboutCardProps {
  title: string;
}

export default function AboutCard({ title }: AboutCardProps) {
  return (
    <>
      <div className="sm:w-[500px] w-[300px] min-h-[550px] bg-white text-black sm:px-12 sm:pt-4 sm:pb-4 px-4 pb-4 flex flex-col sm:my-6 my-4">
        <p className="text-center font-bold text-[50px] italic">{title}</p>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tenetur
          molestiae sit itaque totam! Quaerat quasi impedit sed debitis?
          Corporis nesciunt, amet provident natus dolor aliquam facere sapiente
          ad animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          tenetur molestiae sit itaque totam! Quaerat quasi impedit sed debitis?
          Corporis nesciunt, amet provident natus dolor aliquam facere sapiente
          ad animi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          tenetur molestiae sit itaque totam! Quaerat quasi impedit sed debitis?
          Corporis nesciunt, amet provident natus dolor aliquam facere sapiente
          ad animi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
          tenetur molestiae sit itaque totam! Quaerat quasi impedit sed debitis?
          Corporis nesciunt, amet provident natus dolor aliquam facere sapiente
          ad animi.
        </p>
      </div>
    </>
  );
}
