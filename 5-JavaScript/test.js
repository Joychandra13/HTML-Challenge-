const original = { name: "Alice", address: { city: "Wonderland" } };
const deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city = "New City"; 
console.log(original.address.city); 