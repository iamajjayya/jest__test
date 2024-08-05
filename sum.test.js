
// const sum  = require('./sum')

// test(' Add 1 +  2 to equal to 3', () => {
//     expect(sum(1,2)).toBe(3)
// });
test(" 2 + 2" , () => {
    expect( 2 + 20).toBe(22);
});

test("Object Assignment", () => {
    const data = {one :  1};
    data ["two"] =2;
    expect(data).toEqual({one:1,two:2})
})

test (" Number Assignment  " , () => {
    expect(2==2).toEqual(true);
})

expect(null).toBeNull();

expect(1).toBeTruthy();
expect(0).toBeFalsy();



