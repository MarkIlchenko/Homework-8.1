
function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
function partSort(arr , N , a , b)
{


    var l = Math.min(a, b);
    var r = Math.max(a, b);


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


var arr = [ 7, 8, 4, 5, 2 ];
var a = 0, b = 4;
var N = arr.length;
partSort(arr, N, a, b);




