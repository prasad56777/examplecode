//Read about the Tower of Hanoi algorithm. Write a program to implement it?
function towerOfHanoi(n, sourceRod, auxiliaryRod, targetRod) {
    if (n === 1) {
      console.log(`Move disk 1 from ${sourceRod} to ${targetRod}`);
      return;
    }
  
    // Move n-1 disks from sourceRod to auxiliaryRod using targetRod as auxiliary
    towerOfHanoi(n - 1, sourceRod, targetRod, auxiliaryRod);
  
    // Move the nth disk from sourceRod to targetRod
    console.log(`Move disk ${n} from ${sourceRod} to ${targetRod}`);
  
    // Move the n-1 disks from auxiliaryRod to targetRod using sourceRod as auxiliary
    towerOfHanoi(n - 1, auxiliaryRod, sourceRod, targetRod);
  }
  
  // Example usage:
  const numDisks = 3;
  const source = "A";
  const auxiliary = "B";
  const target = "C";
  
  console.log(`Tower of Hanoi solution for ${numDisks} disks:`);
  towerOfHanoi(numDisks, source, auxiliary, target);
  