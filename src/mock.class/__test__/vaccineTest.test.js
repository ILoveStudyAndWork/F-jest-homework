import VaccineTest from "../vaccineTest";
import Covid19Vaccine from "../covid19Vaccine";

const mockAcceptInjection = jest.fn();
const mockGetHasAntibodies = jest.fn();
jest.mock("../recipient", () => {
  // mock class实现
  return jest.fn().mockImplementation(() => {
    return {
      acceptInjection: mockAcceptInjection,
      getHasAntibodies: mockGetHasAntibodies,
    };
  });
});

beforeEach(() => {
  // clear mock here
  jest.clearAllMocks();
});

describe("inject", () => {
  test("should recipient accept injection with vaccine", () => {
    // TODO 14: add test here
    // arrage
    const vaccineTest = new VaccineTest();
    // act:inject
    vaccineTest.inject();
    // assert:hansbencallwith
    expect(mockAcceptInjection).toHaveBeenCalledWith(
      expect.any(Covid19Vaccine)
    );
  });
});

describe("test", () => {
  test("should get Success if recipient has antibodies", () => {
    // TODO 15: add test here
    // arrage
    const vaccineTest = new VaccineTest();
    // act inject
    vaccineTest.inject();

    mockGetHasAntibodies.mockReturnValue(true);
    // assert test return Vaccine Test Success ? true
    expect(vaccineTest.test()).toBe("Vaccine Test Success");
  });

  test("should get Failed if recipient has no antibodies", () => {
    // TODO 16: add test here
    // arrage
    const vaccineTest = new VaccineTest();
    // act inject
    vaccineTest.inject();

    mockGetHasAntibodies.mockReturnValue(false);
    // assert test return Vaccine Test Success ? true
    expect(vaccineTest.test()).toBe("Vaccine Test Failed");
  });
});
