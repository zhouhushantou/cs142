function cs142MakeMultiFilter(originalArray) {
    function arrayFilterer(filterCriteria, callback) {
        currentArray = originalArray;
        if (typeof (filterCriteria) != "function")
            return currentArray;
        currentArray = currentArray.filter(filterCriteria);
        if (typeof (callback) == "function")
            return callback
    }
    return arrayFilterer
}

var arrayFilterer1 = cs142MakeMultiFilter([1, 2, 3]);

arrayFilterer1(function (elem) {
    return elem !== 2;
}, function (currentArray) {
    console.log(this);
    console.log(currentArray);
});