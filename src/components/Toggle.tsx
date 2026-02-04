import { useState } from "react";

export const Toggle = () => {
  const { value, toggle } = useToggle(true);

  return (
    <div>
      <label htmlFor="toggle-on">On</label>
      <input
        type="checkbox"
        id="toggle-on"
        checked={value}
        onChange={toggle}
      ></input>
      <label htmlFor="toggle-off">Off</label>
      <input
        type="checkbox"
        id="toggle-off"
        checked={!value}
        onChange={toggle}
      ></input>
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => {
    // Set it to the opposite of whatever it is CURRENTLY in React's brain
    setValue((prev) => !prev);
  };
  return { value, toggle };
};
