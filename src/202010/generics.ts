function getFirstElement<T>(arr : T[]): T {
    return arr[0];
}

getFirstElement([1, 2, 3]);
getFirstElement(['1', '2', '3']);
getFirstElement<Boolean>([true]);