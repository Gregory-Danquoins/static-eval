import React from "react";
import Image from "next/image";
import trust from "../../../../public/images/trustpilot.png";

const Footer = () => {
  return (
    <footer className="w-full h-40  bg-primary-dark p-6">
      {" "}
      <h2 className="--font-nunito text-white font-bold text-xl text-center">
        ELECTRICITY BUSINESS
      </h2>
      <div className="pt-6 mx-auto">
        <Image
          src={trust}
          width={100}
          height={50}
          alt="Picture of the author"
        />
      </div>
    </footer>
  );
};

export default Footer;
