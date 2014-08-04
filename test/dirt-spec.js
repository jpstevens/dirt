var dirt = require('../lib/dirt'),
    path = require('path'),
    expect = require('chai').expect;

describe('dirt', function(){

  describe('#up', function(){

    beforeEach(function(){
      this.upAmount = 3;
      this.dirPath = '../../..';
    });

    describe('when the up amount is not a positive integer', function(){

      it('throws an error', function(){
        expect(function(){ dirt.up(-1); }).to.throw(Error);
      });
    });

    describe('when no filename is not given', function(){

      it('returns the expected path', function(){
        expect(dirt.up(this.upAmount)).to.equal(this.dirPath);
      });

    });

    describe('when no filename is given', function(){

      beforeEach(function(){
        this.filePath = this.dirPath + '/filename.js';
      });

      it('returns the expected path', function(){
        expect(dirt.up(this.upAmount, 'filename.js')).to.equal(this.filePath);
      });

      describe('with a leading forward-slash', function(){

        it('returns the expected path', function(){
          expect(dirt.up(this.upAmount, '/filename.js')).to.equal(this.filePath);
        });

      });

      describe('with a leading dot and forward-slash', function(){

        it('returns the expected path', function(){
          expect(dirt.up(this.upAmount, '/filename.js')).to.equal(this.filePath);
        });

      });
    });
  });

  describe('#require', function(){

    beforeEach(function(){
      this.expected = require('./fixtures/example');
      this.message = dirt.require(2, 'dirt/test/fixtures/example');
    });

    it('can require the specified file', function(){
      expect(this.message).to.equal(this.expected);
    });

  });
});
