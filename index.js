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
// -  Move tge bottom most (aka Nth) disk from starting tower to the destination tower
// -  Move the remaining N-1 disks from the temporary tower to the destination tower.
//    Recursion. Did you mean recursion.
(function () {
var numberOfDisks = 3;

var towerOfHanoi = function(n, a, b, c) {
  if (n > 0) {
    towerOfHanoi(n - 1, a, c, b);
    console.log("Moved disk " + n + " from " + a + " to " + c + "!");
    towerOfHanoi(n - 1, b, a, c);
  }
}

towerOfHanoi(numberOfDisks, "starting", "temporary", "destination");
}());
