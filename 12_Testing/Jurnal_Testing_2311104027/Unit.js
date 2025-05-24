function testCariNilaiPangkat() {
    console.assert(CariNilaiPangkat(2, 0) === 1, "Test Case 1 Failed");
    console.assert(CariNilaiPangkat(2, -1) === -1, "Test Case 2 Failed");
    console.assert(CariNilaiPangkat(101, 2) === -2, "Test Case 3 Failed");
    console.assert(CariNilaiPangkat(2, 11) === -2, "Test Case 4 Failed");
    console.assert(CariNilaiPangkat(2, 5) === 32, "Test Case 5 Failed");
    console.assert(CariNilaiPangkat(2, 31) === -3, "Test Case 6 Failed");

    console.log("All test cases completed.");
}

testCariNilaiPangkat(); 