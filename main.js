
function swap(arr, xp, yp)
{
    let temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function partSort(arr , N , a , b)
{


    let l = Math.min(a, b);
    let r = Math.max(a, b);


    var i, j;
    for (i = l; i < r + 1 + 1; i++)
    {
        for (j = l; j < r - i + 1; j++)
        {
            if (arr[j] > arr[j + 1])
            {
                swap(arr, j, j + 1);

            }
        }

    }


    for (i = 0; i < N; i++)
        document.write(arr[i] + " ");
}

let usNum1 = prompt("Enter your number: ");
let usNum2 = prompt("Enter your number: ");
let usNum3 = prompt("Enter your number: ");
let usNum4 = prompt("Enter your number: ");
let usNum5 = prompt("Enter your number: ");


let arr = [ usNum1, usNum2, usNum3, usNum4, usNum5 ];
let a = 0, b = 4;
let N = arr.length;
partSort(arr, N, a, b);




