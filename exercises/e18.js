import { data } from "../data/data";
import { minBy, maxBy } from "./e17";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {

  const counts = {};
  data.asteroids.reduce((acc, el) => {
    if (acc[el.discoveryYear]) {
      acc[el.discoveryYear]++;
    } else {
      acc[el.discoveryYear] = 1;
    }
    return acc;
  },counts);

  const maxYear = Object.keys(counts).reduce((maxYear, year) => {
    if (counts[year] > counts[maxYear]) {
      return Number(year);
    } else {
      return Number(maxYear);
    }
  })
   return maxYear;
  // feel free to import your `maxBy` or `minBy` methods from previous lessons
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
