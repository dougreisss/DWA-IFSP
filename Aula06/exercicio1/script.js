function sortValues(...values) {

    values.sort(function (a, b) {
        return a - b;
    });
    
    console.log('Resultado: ' + values);
}

sortValues(9, 2, 5, 7, 1, 8);