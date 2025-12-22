import { add } from "./add";

describe('Add', () => {
  it('should successfuly run', () => {
    expect(add(5, 3)).toBe(8);
  })
})
