// function foo() {
//     var x = 10;
//     // closure conditions
//     // 1 : 1 (or more) nested function(s)
//     // 2 : 1 or more function MUST use the parent scope
//     // 3 : the closure must provide a way to escape it(s own scope)

//     function bar() {
//         console.log(x);
//     }

//     bar();
// }

// foo();

var module1 = (function() {
  var x = 0,
    y = 0,
    z = 0;

  function doStuff() {
    return x * 2 + z;
  }

  return {
    z
  };
})();

var module2 = (function() {
  var privateInfo = "should stay put !";
  var publicInfo = "I don't mind if you access this value";
  var secret = "1234";

  function deliverThePrivateInfo(code) {
    if (code !== secret) return "-_-'";
    return privateInfo;
  }

  function deliverThePublicInfo() {
    return publicInfo;
  }

  return {
    deliverThePrivateInfo,
    deliverThePublicInfo
  };
})();

// console.log(typeof module1);
console.log(module2.deliverThePublicInfo());
console.log(module2.deliverThePrivateInfo("1234"));
