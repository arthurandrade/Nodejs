const expect = require('expect');
const utils = require('./utils');

describe('Utils', () => {
    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            
            expect(res).toBe(44);
            expect(res).toBeA('number');
        });
        
        it('should async add two numbers', (done) => {
            utils.addAsync(1, 1, (sum) => {
                expect(sum).toBe(2);
                expect(sum).toBeA('number');
                done();
            });
        });
    });
    
    describe('#square', () => {
        it('should square a number', () => {
            var res = utils.square(2);
            expect(res).toBe(4).toBeA('number');
        });
        
        it('should async square a number', (done) => {
            utils.squareAsync(2, (square) => {
                expect(square).toBe(4).toBeA('number');
                done();
            });
        });
    });
    
    describe('#setName', () => {
        it('should set firstName and lastName', () => {
            var user = {location: 'Brasil', age: 27};
            var res = utils.setName(user, 'Arthur Andrade');
          
            expect(res).toInclude({
              firstName: 'Arthur',
              lastName: 'Andrade'
            });
        });
    });

    describe('others', () => {
        it('should use some methods', () => {
            expect(12).toNotBe(11);
        
            expect({name:"Arthur"}).toEqual({name:"Arthur"});
        
            expect([2,3,4]).toInclude(3);
            expect([2,3,4]).toExclude(1);
        
            expect({
                name:"Arthur",
                age:27
            }).toExclude({age:23});
        
            expect({
                name:"Arthur",
                age:27
            }).toInclude({age:27});
        });
    })
});
