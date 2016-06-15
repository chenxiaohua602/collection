'use strict';

function collect_all_even(collection) {
  //在这里写入代码
    var a=[],b=0;
    for(var i=0; i<collection[i] ;i++)
    if(collection[i]%2===0) {
        a[b] = collection[i];
        b++
    }
    return a;

}

module.exports = collect_all_even;
