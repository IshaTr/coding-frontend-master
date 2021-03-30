const FakeDataGenerator = require("./fakeDataGenerator");

jest.useFakeTimers();

describe("fakeDataGenerator", () => {
  let fakeDataGenerator
  const cbFn = jest.fn();

  beforeEach(() => {
    fakeDataGenerator = new FakeDataGenerator();
  })
  it("should contain the default accountType", () => {
    const basicAccount = fakeDataGenerator.generateFakeUser();

    expect(basicAccount.accountType).toBe("default");
  });

  it("should contain the given accountType", () => {
    fakeDataGenerator = new FakeDataGenerator("basic");
    const basicAccount = fakeDataGenerator.generateFakeUser();

    expect(basicAccount.accountType).toBe("basic");
  });

  it("should create an interval based factory", () => {
    fakeDataGenerator.createIntervalBasedFakeUserGenerator(cbFn, 1000);

    jest.advanceTimersByTime(2000);

    // clearTimer
    fakeDataGenerator.clearTimer();

    expect(cbFn).toHaveBeenCalledTimes(2);
    expect(cbFn).toHaveBeenCalledWith(expect.any(Object));
    expect(cbFn.mock.calls[0][0].accountType).toBe("default");
  });
});