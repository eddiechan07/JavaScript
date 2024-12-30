// 1. Output: 
        // Tesla
        // Mercedes
    // Reason: because randomCar refers to an index of 0 in the array of cars, and otherRandomCar refers to index 1. 
    // Index value: 
        // const [ , , thirdCar] = cars
        // console.log(thirdCar)

// 2. Output: 
        // Elon
        // Error
    // In order to fix it.
        const { employeeName, employeeName: otherName } = employee;
        console.log(employeeName);
        console.log(otherName);
        
// 3. Output: 
        // 12345
        // undefined
    // In order to fix it:
        const person = {
            name: 'Phil Smith',
            age: 47,
            height: '6 feet',
            password : '12345'
        }
        const { password, password: hashedPassword } = person; 
        console.log(password);
        console.log(hashedPassword);

// 4. Output:
        // false
        // true
    // Reason: because first refers to index of 1, second refers to index of 3, and third refers to index of 8. Numbers[1] != Numbers[3], Numbers[1] == Numbers[8]
    const [ , , , , fourth, , , , ,] = numbers;
    console.log(fourth);

// 5. Output:
        // value
        // [1,5,1,8,3,3]
        // 1
        // 5
    console.log(secondKey[5]);

// 6. Scopes:
    // Global Scope: 
        // Variables and functions declared at the top level.
        // Contains the variable beatles and the function printNames
    // Function Scope:
        // Contains variables and functions defined inside printNames
        // Includes the names parameter and the actuallyPrintingNames function.
    // Inner Function Scope:
        // Includes index and name
        // Contains variables defined within the actuallyPrintingNames function.
    //Output: 
        // Paul was found at index 0
        // George was found at index 1
        // John was found at index 2
        // Ringo was found at index 3
        // name and index after loop is Ringo:4

// 7. Output:
        // Nothing, because the function was not being called.

// 8. Output:
        // Paul was found at index 0
        // George was found at index 1
        // John was found at index 2
        // Ringo was found at index 3
    // The array reference does not need to change, so const beatles ensures immutability of the variable reference.
    // The index variable changes with each loop iteration, requiring mutability, which is let
    // The name variable does not need to change within an iteration.

// 9. Output:
        // true
        // flase 
    // planet.composition[0] refers to the first element of the composition array in the planet, which is the string "gas". 
    // planetCopy.composition[0] also refers to the same element because composition is not deep copied—it’s the same array reference for both objects.
    // JavaScript compares objects by reference, not by value. Since planet and planetCopy point to different memory locations, this comparison returns false.



