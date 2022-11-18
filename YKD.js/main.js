// bbsort1
var data = [2,5,1,6,8];

	for ( var i=0, tmp; i<data.length - 1 ;  i++ ){
		
		for (  var j = 0; j < data.length - 1 ; j++ ){
			if (data[j] > data[j+1]){
				tmp = data[j];
				data [j] = data [j+1];
				data[j+1] = tmp;
				
			}
		}
		
		}
	
	
console.log(data);






// bbsort2
var data = [2,5,1,6,8];

	for ( var i=0, tmp; i<data.length - 1 ;  i++ ){
		
		for (  var j = 0; j < data.length - 1 ; j++ ){
			if (data[j] < data[j+1]){
				tmp = data[j];
				data [j] = data [j+1];
				data[j+1] = tmp;
				
			}
		}
		
		}
	
	
console.log(data);





// delete

const arr=[5, 1, 4, 6, 62, 8, 9];
let l=arr.length;
let nmb = 'ohh';
let i;
for (i=0; i<l; i++){
     const currentV=arr[i];
    let p=i;
    while(p>0 && arr[p-1]>currentV){
     arr[p]=arr[p-1];
      p--;
     }
    arr[p]=currentV;}
let a=arr.indexOf(i)
for (let i=0; i<=l; i++){
if (arr[i]%2==0){
  arr[i]=nmb
}}
 console.log(arr);







// Insertion Sort max-min
const arr=[9, 6, 1, 3, 4, 20];
let l=arr.length;
for (let i=1; i<l; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]<currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}
console.log(arr);



// Insertion Sort min-max
const arr=[9, 6, 1, 3, 4, 20];
let l=arr.length;
for (let i=1; i<l; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}
console.log(arr);




// nameSortnormal
const arr=["Diana", "Vlad", "Vitalik", "Denys", "Sasha"];
for (let i=0; i<arr.length; i++){
const currentV=arr[i];
let p=i;
while(p>0 && arr[p-1]>currentV){
    arr[p]=arr[p-1];
    p--;
}arr[p]=currentV;
}console.log(arr)


// nameSortsecondletter
const Names = ["Diana", "Vlad", "Vitalik", "Denys", "Sasha" ];

function InsertionSort(Names){
    for (let prev_in = 0; prev_in < Names.length; prev_in ++){
      for (let index = 0; index < Names.length - 1; index ++){
        if (Names[index][1] > Names[index + 1][1]){
          const result = Names[index]
          Names[index] = Names[index + 1]
          Names[index + 1] = result
        }
      }
    }
    return(Names)
  }
  
  console.log(InsertionSort(Names));



// nameSortthirdletter
  const Names = ["Diana", "Vlad", "Vitalik", "Denys", "Sasha" ];

function InsertionSort(Names){
    for (let prev_in = 0; prev_in < Names.length; prev_in ++){
      for (let index = 0; index < Names.length - 1; index ++){
        if (Names[index][2] > Names[index + 1][2]){
          const result = Names[index]
          Names[index] = Names[index + 1]
          Names[index + 1] = result
        }
      }
    }
    return(Names)
  }
  
  console.log(InsertionSort(Names));