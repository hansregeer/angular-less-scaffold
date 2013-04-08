describe('Buzz Client', function () {
    it('should filter results', function () {
        input('user').enter('jacksparrow');
        element(':button').click();
        expect(repeater('ul li').count()).toEqual(10);
        input('filterText').enter('Bees');
        expect(repeater('ul li').count()).toEqual(1);
    });
});
