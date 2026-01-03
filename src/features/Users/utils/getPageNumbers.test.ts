import { getPageNumbers, type Props } from './getPageNumbers';

type Test = {
  config: Props;
  result: number[];
};

describe('getPageNumbers pagination split', () => {
  it('should calculate correct when low page count', () => {
    const config: Props = { totalPages: 5, currentPage: 1 };
    const result = [0, 1, 2, 3, 4];
    expect(getPageNumbers(config)).toEqual(result);
  });

  it('should calculate correct pagination when on start', () => {
    const config: Props = { totalPages: 10, currentPage: 1 };
    const result = [0, 1, 2, 3, 4, -1, 9];
    expect(getPageNumbers(config)).toEqual(result);
  });

  it('should calculate correct pagination when on end', () => {
    const config: Props = {
      currentPage: 10,
      totalPages: 10,
    };
    const result = [0, -1, 7, 8, 9];

    expect(getPageNumbers(config)).toEqual(result);
  });

  it('should calculate correct when it is in the middle', () => {
    const testData: Test[] = [
      {
        config: {
          currentPage: 5,
          totalPages: 10,
        },
        result: [0, -1, 4, 5, 6, -1, 9],
      },
      {
        config: {
          currentPage: 7,
          totalPages: 11,
        },
        result: [0, -1, 6, 7, 8, -1, 10],
      },
    ];

    testData.forEach(({ config, result }) => {
      expect(getPageNumbers(config)).toEqual(result);
    });
  });
});
