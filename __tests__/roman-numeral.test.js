
import { romanize } from './../js/scripts.js';

describe('romanize', () => {
    test('should correctly test that number is less then 4000', () =>{
      expect(romanize('4500')).toEqual('no roman numerals for numbers this big')
    });

    test('Units place for  numbers between 1-3', ()=>{
      expect(romanize('2')).toEqual('II')
      
    });
    
    test ('units place for numbers between 6-8', () => {
      expect(romanize('7')).toEqual('VII')
    });
    
    test ('units place for number equal to 5', () => {
      expect(romanize('5')).toEqual('V')
    });

});

