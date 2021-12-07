let a = [
   [5, 7, 1],
   [-4, 1, 0],
   [2, 0, 3]
];

function findDet(arr) {
   let b = arr[0][0] * arr[1][1] * arr[2][2] + arr[0][1] * arr[1][2] * arr[2][0] + arr[0][2] * arr[1][0] * arr[2][1] - arr[0][2] * arr[1][1] * arr[2][0] - arr[0][0] * arr[1][2] * arr[2][1] - arr[0][1] * arr[1][0] * arr[2][2]
   console.log(b);
}