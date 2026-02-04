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

const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState<boolean>(initialValue);
  const toggle = () => {
    setValue(!value);
  };
  return { value, toggle };
};
