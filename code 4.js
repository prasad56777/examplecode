//Write a program to print the first non-repeated character from a string?
function findFirstNonRepeatedCharacter(str) {
    const charCount = {};
  
    // Iterate through the string and count character occurrences
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      charCount[char] = (charCount[char] || 0) + 1;
    }
  
    // Iterate through the string again to find the first non-repeated character
    for (let i = 0; i < str.length; i++) {
      const char = str[i];
      if (charCount[char] === 1) {
        return char;
      }
    }
    return null;
  }
  
  // Example usage:
  const inputString = "mangosm";
  const firstNonRepeatedChar = findFirstNonRepeatedCharacter(inputString);
  
  if (firstNonRepeatedChar !== null) {
    console.log(`The first non-repeated character is: ${firstNonRepeatedChar}`);
  } else {
    console.log("No non-repeated character found in the string.");
  }
  