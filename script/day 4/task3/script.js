function removeDuplicates(data) {
    // Step 1: Create a Set to track seen IDs
    const seen = new Set();
  
    // Step 2: Use the filter() method to remove duplicates
    return data.filter(item => {
      // If the ID is not in the Set, add it to the Set and keep the item
      if (!seen.has(item.id)) {
        seen.add(item.id);  // Mark this ID as seen
        return true;        // Keep this item in the filtered array
      }
      // If the ID is already in the Set, skip this item
      return false;
    });
  }
  const data = [
    { id: 1, name: 'A' },
    { id: 2, name: 'B' },
    { id: 1, name: 'C' },
  ];
  
  console.log(removeDuplicates(data));  