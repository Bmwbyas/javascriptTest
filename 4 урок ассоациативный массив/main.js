
function sostavChisla (massivChisel, chislo){
    let results = [],

    l = massivChisel.length,
    item;

    for(let i=0; i<l; i++ ) { // Проходим массив значений

        item = massivChisel[i]; // Текущее значение

        if( item >  chislo ) continue; // Выходит за цель, отбросили, выходим

        if( item === chislo ) {
            results.push([item])
            continue
        } // Оно, цепляем, выходим

        let subResults = sostavChisla(massivChisel.slice(i+1), chislo - item); // Ищем возможные варианты, исключая текущее значение

        if( ! subResults.length ) continue;// Возможностей нет, отбросили, выходим

        // console.log("subResults for", item, "is", subResults); // Все возможные варианты для текущего значения

        for( let j=0, k=subResults.length; j<k; j++ ){
            results.push([item].concat(subResults[j])); // Склеиваем результат
            //  console.log(results)
            // debugger
        }

    }

    return results;
}
// sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 8)
 console.log( sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 8) );
