import React from 'react'

const Custom_Input_Field =   React.forwardRef(({ type, placeholder }, ref) => {
  return (
      <input
          type={type}
          placeholder={placeholder}
          className="input input-bordered w-full m-4 max-w-xs"
          ref={ref}
      />
  );
});

export default Custom_Input_Field