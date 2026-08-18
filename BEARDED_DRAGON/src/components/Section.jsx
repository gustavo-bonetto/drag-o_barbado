import React from "react";

function Section({
  children,
  dark = false,
  className = "",
  id,
}) {
  return (
    <section
      id={id}
      className={`
        w-full
        border-t
        py-12
        sm:py-14
        lg:py-16
        ${
          dark
            ? "border-[#3A2920] bg-gradient-to-br from-[#0D0D0D] via-[#171513] to-[#2A1A14] text-white"
            : "bg-[#F5F2ED] text-[#0D0D0D]"
        }
        ${className}
      `}
    >
      <div className="mx-auto w-[92%] max-w-7xl">
        {children}
      </div>
    </section>
  );
}

export default Section;
