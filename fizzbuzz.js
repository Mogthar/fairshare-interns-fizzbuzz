const readline = require('readline-sync');

function fizzbuzz() {
    console.log('Please enter the maximum number: ');
    let maxNumber = RequestIntegerInput();

    for(let i = 1; i <= maxNumber; i++){
        let arrayOfTags = [];
        let conditionMet = false;

        if(i % 3 == 0)
        {
            arrayOfTags.push('Fizz');
            conditionMet = true;
        }

        if(i % 5 == 0)
        {
            arrayOfTags.push('Buzz');
            conditionMet = true;
        }

        if(i % 7 == 0)
        {
            arrayOfTags.push('Bang');
            conditionMet = true;
        }

        if(i % 11 == 0)
        {
            arrayOfTags = ['Bong'];
            conditionMet = true;
        }

        if(i % 13 == 0)
        {
            /*
            // Look for B in the string to print
            // if there is one, insert fezz infront of it
            // if not then just append
            indexOfB = stringToPrint.indexOf('B')
            if(indexOfB != -1)
            {
                stringToPrint = stringToPrint.substring(0, indexOfB) + 'Fezz' + stringToPrint.substring(indexOfB);
            }
            else
            {
                stringToPrint += 'Fezz';
            }
            */

            //try and do the same thing with the array
            //go through each tag and check if it starts with a B
            let wasBFound = false;
            for(let j = 0; j < arrayOfTags.length; j++)
            {
                // if it does, insert fezz and break the search
                if(arrayOfTags[j][0] == 'B')
                {
                    wasBFound = true;
                    arrayOfTags.splice(j, 0, 'Fezz');
                    break;
                }
            }

            // if there is no B tag, put fezz at the end
            if(!wasBFound)
            {
                arrayOfTags.push('Fezz');
            }

            conditionMet = true;
        }

        // reverse order of tags if 17 divides i; note that this does not qualify as a 'condition tag'
        // in the sense that if 17 divides i, nothing is printed on its own. This condition only modulates
        // existing tags
        if(i % 17 == 0)
        {
            arrayOfTags.reverse();
        }

        // now we need to concatenate the array into one string and print it
        let stringToPrint = '';

        // if one of the tagging conditions was met, create the string
        if(conditionMet)
        {
            for(let j = 0; j < arrayOfTags.length; j++)
            {
                stringToPrint += arrayOfTags[j];
            }
        }
        // else just print the number
        else
        {
            stringToPrint = i.toString();
        }

        console.log(stringToPrint);
    }
}

// Now, we run the main function:
fizzbuzz();

function RequestIntegerInput()
{
    let isEntryLegit = false;
    while(!isEntryLegit)
    {
        var inputInteger = parseInt(readline.prompt());
        if(!isNaN(inputInteger))
        {
            isEntryLegit = true;
        }
    }
    return inputInteger;
}

// create a condition
function Condition(inputInteger, inputWord, finalStringAction)
{
    this.trigger = inputInteger;
    this.tag = inputWord;
    this.action = finalStringAction;
}

// we now need to define different actions of the trigger conditions / actions

