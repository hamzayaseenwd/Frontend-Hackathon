import React from 'react'

const Custom_Input_Field =   React.forwardRef(({ type, placeholder }, ref) => {
  return (
      <div
      className="flex flex-col items-center"
      >

      <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered  ml-5 mr-5 m-2 max-w "
          ref={ref}
          />
          </div>
  );
});

export default Custom_Input_Field