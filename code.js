function permutationSort(a) {
    let permutations = [];
    GetPermutations(a, 0, permutations);
    
    for (let i = 0; i < permutations.length; i++) {
        if (isSorted(permutation)) {
            console.log(permutation);
            return permutations.length;
        }
    }
    
    return permutations.length;
}

function GetPermutations(arr, current, permutation) {
    let check = false;
    for (let i = current; i < arr.length; i++) {
        swap(arr, i, current);
        check = GetPermutations(arr, current + 1, permutation);
        if (check == true) {
            return true;
        }
        swap(arr, current, i);
    }
    if (current >= arr.length) {
        permutation[0]++;
        return sortCheck(arr);
    }
}

function swap(array, i, j) {
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function isSorted(arr){
    for(let i = 0; i < arr.length - 1; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

