
import { romanize } from './../js/scripts.js';

describe('romanize', () => {
    test('should correctly test that number is less then 4000', () =>{
      expect(romanize('4500')).toEqual('no roman numerals for numbers this big')
    });

    test('Units place for  numbers between 1-3 ', ()=>{
      expect(romanize('3')).toEqual('III')
    });
    
    test ('units place for numbers between 6-8', () => {
      expect(romanize('7')).toEqual('VII')
    });
    
    test ('units place for number equal to 5', () => {
      expect(romanize('5')).toEqual('V')
    });

    test ('units place for number equal to 4', () => {
      expect(romanize('4')).toEqual('IV')
    });

    test ('units place for number equal to 9', () => {
      expect(romanize('9')).toEqual('IX')
    });

    test ('units for numbers up to 39', ()=>{
      expect(romanize('37')).toEqual('XXXVII')
    });

    test ('units for numbers between 60 & 89', () => {
      expect(romanize('75')).toEqual('LXXV')
    });

    test ('units for numbers between 50 - 59', () => {
      expect(romanize('55')).toEqual('LV')
    });
    test ('units for numbers between 40 - 49', () => {
      expect(romanize('44')).toEqual('XLIV')
    });
    test ('units for numbers between 90 - 99', () => {
      expect(romanize('99')).toEqual('XCIX')
    });
    test ('units for numbers between 100 - 399', () => {
      expect(romanize('274')).toEqual('CCLXXIV')
    });
    test ('units for numbers between 600 & 899', () => {
      expect(romanize('752')).toEqual('DCCLII')
    });
    test ('units for numbers between 500-599', () => {
      expect(romanize('550')).toEqual('DL')
    });
    test ('units for numbers between 400-499', () => {
      expect(romanize('456')).toEqual('CDLVI')
    });
    test ('units for numbers between 900-999', () => {
      expect(romanize('929')).toEqual('CMXXIX')
    });
    test ('units for numbers between 1000-3999', () => {
      expect(romanize('1234')).toEqual('MCCXXXIV')
    });
  });
