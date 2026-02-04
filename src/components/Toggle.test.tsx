import { describe, expect, it } from "vitest";
import { renderHook } from "@testing-library/react";
import { useToggle } from "./Toggle";

describe("useToggle", () => {
  it("should be OK", () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toEqual(true);
  });
});
