
let arr = [50,15,62,15,17,18,91,54,654,156,123,0.5,3.2,1.1,0.7,6.5,456.564,205]

function tri() {
    for (let i = 1 ; i< arr.length; i++){
        for (let j =i ; j>0; j--){
            if(arr[j] < arr[j-1]){
                let temp = arr[j];
                arr[j]=arr[j-1];
                arr[j-1]=temp;}}}
    return arr;
}
