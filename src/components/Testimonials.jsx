import React from "react";
import { IoStarSharp } from "react-icons/io5";
import { toast } from "react-toastify";
const Testimonials = () => {
  return (
    <div className="border-b border-[#008080] pb-12 px-5 md:px-10 lg:px-24 my-10 text-center">
      <div className="text-green font-semibold">#Testimonials</div>
      <div className="mt-2 text-center text-[#353535] font-bold text-2xl md:text-3xl">
        What our clients say about us.
      </div>
      <div className="flex flex-col  md:flex-row items-center justify-center gap-5 lg:gap-10 mt-7">
        {/* Testimonial 1 */}
        <div
          onClick={() => {
            toast.info("Hello from Jammy", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
          className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            alt="James Pattinson"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            Jammy Pattinson
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp className="text-gray-400" />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Lobortis leo pretium facilisis amet nisl at nec. Scelerisque risus
            tortor donec ipsum consequat semper consequat adipiscing ultrices.”
          </div>
        </div>

        {/* Testimonial 2 */}
        <div
          onClick={() => {
            toast.info("Hello from Greg", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
          className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-16 h-16 md:w-24 md:h-24 object-cover"
            alt="Greg Stuart"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            Greg Stuart
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Vestibulum, cum nam non amet consectetur morbi aenean condimentum
            eget. Ultricies integer nunc neque consectetur accumsan laoreet.
            Viverra nibh ultrices.”
          </div>
        </div>

        {/* Testimonial 3 */}
        <div
          onClick={() => {
            toast.info("Hello from Mitchell", {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }}
          className="flex flex-col items-center border-2 border-[#008080] rounded-2xl py-7 px-3 max-w-[350px] md:max-w-[400px] lg:max-w-[600px]"
        >
          <img
            src="https://images.unsplash.com/photo-1502323777036-f29e3972d82f?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-full w-16 h-16 md:w-24 md:h-24"
            alt="Trevor Mitchell"
          />
          <div className="text-[#353535] font-semibold text-lg my-2">
            Mitchell Mesh
          </div>
          <div className="flex items-center gap-2 text-teal-600">
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp />
            <IoStarSharp className="text-gray-400" />
            <IoStarSharp className="text-gray-400" />
          </div>
          <div className="mt-3 text-sm text-[#676768]">
            “Ut tristique viverra sed porttitor senectus. A facilisis metus
            pretium ut habitant lorem. Velit vel bibendum eget aliquet sem nec,
            id sed. Tincidunt.”
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
