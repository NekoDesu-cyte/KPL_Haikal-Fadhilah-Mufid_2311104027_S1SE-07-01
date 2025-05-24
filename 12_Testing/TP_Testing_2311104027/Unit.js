function testCariTandaBilangan() {
    console.assert(CariTandaBilangan(-5) === "Negatif", "Test Case 1 Failed");
    console.assert(CariTandaBilangan(0) === "Nol", "Test Case 2 Failed");
    console.assert(CariTandaBilangan(7) === "Positif", "Test Case 3 Failed");

    console.log("All test cases passed.");
}


testCariTandaBilangan();