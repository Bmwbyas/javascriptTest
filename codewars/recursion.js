С помощью рекурсии выведите все примитивные элементы этого объекта в консоль.
let arr = {
    a: 1,
    b: {c: 2, d: 3, e: 4},
    f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};

function func(arr) {

    for (key in arr) {
        if (typeof arr[key] == 'object') {
            func(arr[key])
        } else {
            console.log(arr[key]);
        }
    }
}

Напишите код, который развернет наш многомерный массив в одномерный. Для приведенного выше массива это будет выглядеть вот так:
func(arr)
function func(arr) {
    let res=[]
    for (let elem of arr) {
        if (typeof elem == 'object') {
            res.push(...func(elem));
        } else {
            res.push(elem)
        }
    }
return res
}

console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]))

Давайте найдем сумму примитивных элементов нашего массива:
function func(arr) {
    let sum = 0;

    for (let elem of arr) {
        if (typeof elem == 'object') {
            sum += func(elem);
        } else {
            sum += elem;
        }
    }

    return sum;
}

console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

С помощью рекурсии найдите сумму элементов этого объекта.
function func(arr) {
    let sum = 0;

    for (let key in arr) {
        if (typeof arr[key] == 'object') {
            sum += func(arr[key]);
        } else {
            sum += arr[key];
        }
    }

    return sum;
}

console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));

Дан многомерный массив произвольного уровня вложенности, например, такой:
function func(arr) {
    const newArr=[]

    for (let elem of arr) {
        if (typeof elem == 'object') {
             newArr.push(func(elem));
        } else {
            newArr.push(elem**2)
        }
    }

    return newArr;
}

console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let result = arr.map((elem)=> {
    return elem.map((num)=> {
        return num * num;
    });
});

console.log(result);