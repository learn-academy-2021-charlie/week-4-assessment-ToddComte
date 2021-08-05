// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////
// for me it was a hard one it definitely threw me for a loop and I had to do some 
// googling to find out my operator that I wanted to use or could use
// But I knew that in order to randomize the order That the array would come back 
// I would have to use the math.floor and math.random methods
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variable provided.
describe("oneLess", () => {
        it("removes the first item from the array and shuffles the remaining content", () => {
var colors1 = ["purple", "blue", "green", "yellow", "pink"]
expect(colors1).toContainEqual(["yellow", "blue", "pink", "green"])
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
expect(colors2).toContainEqual(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"])
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// b) Create the function that makes the test pass.

const oneLess = (words) => {
        words.shift()
        let currentIndex = words.length, i
        while(0 !== currentIndex){
                i = Math.floor(Math.random() * currentIndex)
                currentIndex--
                [words[currentIndex], words[i]] = [words[i], words[currentIndex]]
        }
        return words
                
}



// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////
// For this problem I took really good notes on Monday and was able to solve it by comparing my notes to what I knew how to do
// This function is taking in the air race and looking for the Number that is the least amount and the number with the maximum amount
// Other thing that I remember is that the triple dots is what is unpacking the 
// array so where it can look at the individual numbers and evaluate them
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with expect statements for each of the variables provided.
describe("minAndMax", () => {
        it("returns an array of the minimum and maximum numbers in that order")
        var nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        var nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]    
        expect(minAndMax(num1)).toEqual([-8, 90])
        expect(minAndMax(num2)).toEqual([5, 109])
        })
})


// b) Create the function that makes the test pass.
const minAndMax = (array) => {
        return [Math.min(...array), Math.max(...array)]
}


// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
////////////////////////////////////////////// Todd's Pesdo code ///////////////////////////////////////////////
// When I first read this question it threw me for a loop because I saw multiple numbers that it needed to take it out
// But once again I referred to the syllabus and my notes and thanks to you and Sarah and all your hard work I was able to
// Figure it out I using the dots filter method. We all know the filter method pulls in all the numbers in the Saray and will evaluate them to 
// The value an index in the array and then it will return only one of those numbers.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// a) Create a test with an expect statement using the variables provided.
describe("noRepeat", () => {
        it("takes in two arrays as arguments and returns one array with no duplicate values.")
        var testArray1 = [3, 7, 10, 5, 4, 3, 3]
        var testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noRepeat(testArray1)).toEqual([3, 7, 10, 5, 4, 3, 3])
        expect(noRepeat(testArray2)).toEqual([7, 8, 2, 3, 1, 5, 4])
        })
})

// b) Create the function that makes the test pass.
const noRepeat = (array1, array2) => {
        array1.concat(array2).filter((value, index, array) => {
                array.indexOf(value) === index
        })
}