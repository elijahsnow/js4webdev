var array = ['Pearl Jam', 'Soundgarden', 'Alice in Chains'];

for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}

//  THE TOWER OF HANOI PUZZLE
//  At the beginning, all of the disks are stacked on top of each other and start
// in the first pillar. At the end, the stack of disks are shifted over to the
// last pillar.

// CAVEATS
// 1. You can only move one disk at a time.
// 2. At each move, you take the disk from the top of any of the stacks and
//    place it on another tower.
// 3. You can only place a smaller disk on top of a larger disk.
// 4. Victory is achieved when all of the starting disks are arranged in their
//    same starting orderon a destination tower. You can use any tower other
//    than the one you started from as your destination.

// THE ALGORITHM
// The goal is to get the largest, bottom-most disk to the destination tower.

// Description:
//  - This is achieved by moving all of the disk (except for the largest) from
//    the starting tower to our temporary  tower.
// -  Once the step above is completed, we move the largest disk to the
//    destination tower.

// Formal description:
// -  Move the top N-1  disk from the starting tower to the temporary tower.
// -  Move the bottom most (aka Nth) disk from starting tower to the destination tower
// -  Move the remaining N-1 disks from the temporary tower to the destination tower.
//    Recursion. Did you mean recursion.
(function () {
var numberOfDisks = 3;

// Our function takes three variables
// Where 'n' is the number of disks to be moved
// Where 'a' is the starting tower
// Where 'c' is our destination tower
// Whre 'b' is our auxiliary or temporary tower

var towerOfHanoi = function(n, a, b, c) {
  if (n > 0) {
    towerOfHanoi(n - 1, a, c, b);
    console.log("Moved disk " + n + " from " + a + " to " + c + "!");
    towerOfHanoi(n - 1, b, a, c);
  }
}

towerOfHanoi(numberOfDisks, "starting", "temporary", "destination");
}());


//  We've defined a function which will represent the moves required to moves
//  required to move all the disks to the target rod.
//              towerOfHanoi(n, from_rod, to_rod, aux_rod)
//              where n   ==>  number of diks to be moved.
//              where from_rod ==> rod where disk is present.
//              where to_rod ==> rod where the dosk is to be moved.
//              where  aux_rod ==> auxiliary/temporary moving rod.
//
//                  The corresponding function would be:
//                  towerOfHanoi(4, A, B, C)
//
//  Now, we can devide our task into simpler subtasks
