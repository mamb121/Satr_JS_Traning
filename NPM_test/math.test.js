const math= require('./math');
test('add 1 to 2 equal 3',()=>{
    expect(math.sum(1,2)).toBe(3);
});