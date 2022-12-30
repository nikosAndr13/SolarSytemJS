// see e16.md


// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const discoveryYears = data.asteroids.map(asteroid => asteroid.discoveryYear);

  const counts = {};
  discoveryYears.map(year => {
    const discoveries = discoveryYears.filter(y => y === year);
    counts[year] = discoveries.length;
  })

  const maxYear = Object.keys(counts).reduce((maxYear, year) => {
    if (counts[year] > counts[maxYear]) {
      return Number(year);
    } else {
      return Number(maxYear);
    }
  })
   return maxYear;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function

export function find(array, callback) {}

