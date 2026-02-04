function each(tab, func) {
    for (var i = 0; i < tab.length; i++) {
      func(tab[i], i);
    }
}
// ex1
function indexedExponentials(nombres) {
    var res = []; 
    each(nombres, function(n, i) {
      res.push(n ** i); 
    });
    return res;
}

// ex2
function indexedExponentials(nombres) {
    var res = []; 
    each(nombres, function(n, i) {
        if(n % 2 !== 0 && i % 2 === 0) {
            res.push(n);
        } 
    });
    return res;
}

// ex3
function indexedExponentials(chaines) {
    var res = []; 
    each(chaines, function(n, i) {
        if(n.length % 2 === 0 && i % 2 === 0) {
            res.push(n);
        } 
    });
    return res;
}

// ex4
function unique(tableau) {
    var res = []; 
    each(tableau, function(element) {
      if (res.indexOf(element) === -1) {
        res.push(element);
      }
    });
    return res;
}

// ex5
function findDuplicates(tableau) {
    var res = []; 
    each(tableau, function(element) {
      if (res.indexOf(element) !== -1) {
        res.push(element);
      }
    });
    return res;
}

// ex6


// ex7
