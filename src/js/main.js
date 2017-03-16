/**
 * Created by Administrator on 2017/3/15.
 */
define(function(require , exports ,module){
    var searchBarColor = require('searchBarColor');
    var indexBanner = require("indexBanner");
    function main( ){
        searchBarColor();
        indexBanner();
    }
    module.exports = main;
})
