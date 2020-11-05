const enhancer = require('./enhancer.js');
// test away!

describe("unit testing game's enhancing system", () => {
  it('repair', () => {
    expect(
      enhancer.repair({
        name: 'duran',
        enhancement: 2,
        durability: 2,
      })
    ).toEqual({
      name: 'duran',
      enhancement: 2,
      durability: 100,
    });
  });

  it('success', () => {
    expect(
      enhancer.success({
        name: 'mike',
        enhancement: 20,
        durability: 2,
      })
    ).toEqual({
      name: 'mike',
      enhancement: 20,
      durability: 2,
    });

    expect(
        enhancer.success({
          name: 'lukas',
          enhancement: 18,
          durability: 2,
        })
      ).toEqual({
        name: 'lukas',
        enhancement: 19,
        durability: 2,
      });
  });
});

it('fails less than 15, decresed by 5', () => {
    expect(
      enhancer.fail({
        name: 'first',
        enhancement: 4,
        durability: 64,
      })
    ).toEqual({
      name: 'first',
      enhancement: 4,
      durability: 59,
    });
  });
