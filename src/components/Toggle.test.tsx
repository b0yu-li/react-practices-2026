import { describe, expect, it } from "vitest";
import { act, renderHook } from "@testing-library/react";
import { useToggle } from "./Toggle";

describe("useToggle", () => {
  it("initial state should be true", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toEqual(true);
  });

  it("should toggle state", () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toEqual(false);

    act(() => {
      result.current.toggle();
    });
    expect(result.current.value).toEqual(true);
  });
});
