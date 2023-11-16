    // Arrays of possible names and occupations
    const possibleNames = ["Dr. Slice", "Dr. Pressure", "Prof. Possibility", "Prof. Prism", "Dr. Impulse", "Prof. Spark", "Dr. Wire", "Prof. Goose"];
    const possibleOccupations = ["Teacher", "Gardener", "Programmer", "Actor", "Singer", "Dancer", "Cook", "Coder", "Driver"];

    // Initial array of freelancers
    const freelancers = [
      { name: "Alice", price: 30, occupation: "Writer" },
      { name: "Bob", price: 50, occupation: "Teacher" },
    ];

    // Function to get a random element from an array
    function getRandomElement(array) {
       // Generate a random index within the bounds of the array length
      const randomIndex = Math.floor(Math.random() * array.length);
      // Return the element at the randomly generated index
      return array[randomIndex];
    }
    
    // Function to calculate average starting price
    function calculateAveragePrice() {
      // Calculate the total sum of starting prices using the reduce method
      const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.price, 0);
      // Calculate the average starting price by dividing the total sum by the number of freelancers
      const averagePrice = totalPrices / freelancers.length;
       // If the calculated average is NaN ( when the array is empty), return 0; otherwise, return the calculated average
      return isNaN(averagePrice) ? 0 : averagePrice;
    }


    // Function to generate a freelancer with a random name, occupation, and starting price
    function generateRandomFreelancer() {
       // Return an object representing a freelancer
      return {
        // Assign a random name from the possibleNames array
      name: getRandomElement(possibleNames),
       // Assign a random occupation from the possibleOccupations array
      occupation: getRandomElement(possibleOccupations),
        // Generate a random price between 30 and 100 (inclusive)
      price: Math.floor(Math.random() * (100 - 30 + 1)) + 30, 
  };
}

  // Function to render freelancers
    function renderFreelancers() {
      // Select the tbody element inside the #freelancers-list table
      const freelancersList = document.querySelector("#freelancers-list tbody");
       // Clear the existing content of the freelancers list by setting innerHTML to an empty string
      freelancersList.innerHTML = "";
     // Loop through each freelancer in the 'freelancers' array
      freelancers.forEach(freelancer => {
        // Create a new table row (tr) element for each freelancer
        const row = document.createElement("tr");
        // Set the innerHTML of the row to display the freelancer's name, occupation, and starting price in separate cells
        row.innerHTML = `<td>${freelancer.name}</td><td>${freelancer.occupation}</td><td>$${freelancer.price}</td>`;
         // Append the row to the tbody, adding it to the freelancers list
        freelancersList.appendChild(row);
      });


      // Update average starting price in the DOM
      // Calculate the average starting price using the calculateAveragePrice function
      const averageStartingPrice = calculateAveragePrice();
       // Select the element with the ID 'average-starting-price' and set its text content to the formatted average price
      document.querySelector("#average-starting-price").textContent = averageStartingPrice.toFixed(2);

    }
    

    // Function to add a new freelancer
    function addNewFreelancer() {
      // Check if the number of freelancers is less than the number of possible names to avoid repetition
      if (freelancers.length < possibleNames.length) {
        // Generate a new freelancer using the generateRandomFreelancer function
        const newFreelancer = generateRandomFreelancer();
        // Add the new freelancer to the freelancers array
        freelancers.push(newFreelancer);
         // Render the updated list of freelancers in the DOM
        renderFreelancers();
      }
    }

    // Set interval to add a new freelancer every five seconds
    setInterval(addNewFreelancer, 5000);
        // Add Carol after 3 seconds
        setTimeout(() => {
          // Create a new freelancer object for Carol
            const carol = { name: "Carol", price: 70, occupation: "Programmer" };
             // Push Carol to the freelancers array
            freelancers.push(carol);
            // Render the updated list of freelancers in the DOM
            renderFreelancers();
          }, 3000);

    // Initial rendering
    renderFreelancers();

    
    