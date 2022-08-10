// console.log('***** Music Collection *****')


// - Create a variable `collection` that starts as an empty array.

// - Add a function named `addToCollection`. This function should:
//   - Take in the album's `title`, `artist`, `yearPublished` as input parameters
//   - Create a new object having the above properties
//   - Add the new object to the end of the `collection` array
//   - Return the newly created object



let collection = [];
let record;

function addToCollection(title, artist, yearPublished){
    record = {
        title,
        artist,
        yearPublished
    }
    collection.push(record);
    return record;
}


// - Test the `addToCollection` function:
//   - Add 6 albums to your collection. Aim to have a mix of both same and different artists and published years. (Feel free to share your musical interests, or make stuff up. Totally fine either way.)
//   - Console.log each album as added using the returned value.
//   - After all are added, console.log the `collection` array.


addToCollection ("Pet Sounds", "The Beach Boys", 1966);
console.log(record);
addToCollection ("What's Going On", "Marvin Gaye", 1971);
console.log(record);
addToCollection ("Tapestry", "Carole King", 1972);
console.log(record);
addToCollection ("Rise and Fall of Ziggy Stardust", "David Bowie", 1972);
console.log(record);
addToCollection ("Out of the Blue", "Electric Light Orchestra", 1977);
console.log(record);
addToCollection ("Graceland", "Paul Simon", 1986);
console.log(record);

console.log(collection);



// - Add a function named `showCollection`. This function should:
//   - Take in an array parameter. (This allows it to be reused to show any collection, like the results from the find or search.)
//   - Console.log the number of items in the array.
//   - Loop over the array and console.log each album's information formatted like: `TITLE by ARTIST, published in YEAR`.
// - Test the `showCollection` function.

function showCollection(array){
    console.log(array.length);
    for (item of array){
        console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
    }
}

showCollection(collection);





// - Add a function named `findByArtist`. This function should:
//   - Take in `artist` (a string) parameter
//   - Create an array to hold any results, empty to start
//   - Loop through the `collection` and add any objects with a matching artist to the array.
//   - Return the array with the matching results. If no results are found, return an empty array.

// - Test the `findByArtist` function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are found.

// > When testing your functions, write all tests in the JavaScript file!

function findByArtist(artist){
    let albums = [];
    for (record of collection){
        if (artist === record.artist){
            albums.push(record);
        }
    }
    return albums;
}

console.log('The Beach Boys' - findByArtist('The Beach Boys'));
console.log('The Beatles' - findByArtist('The Beatles'));
addToCollection ("Surfer Girl", "The Beach Boys", 1963);
console.log(collection);
console.log('The Beach Boys' - findByArtist('The Beach Boys'));

// ### Stretch goals

// - Create a function called `search`. This function should:
//   - Take an input parameter for a search criteria object. Create your solution based on a search object that has these properties:
//   ```
//   { artist: 'Ray Charles', year: 1957 }
//   ```
//   - The returned output from `search` should meet these requirements:
//     - Return a new array of all items in the `collection` matching *all* of the search criteria.
//     - If no results are found, return an empty array.
//     - If there is no search object or an empty search object provided as input, then return all albums in the `collection`.

function search(item){
    let results = [];
    for (record of collection){
        if (item === record.title || item === record.artist || item === record.yearPublished){
            results.push(record);
            }
        }
    if (item === []){
        return collection;
    }
    return results;
 }


console.log('Ray Charles -', search('Ray Charles'));
console.log('Marvin Gaye -', search('Marvin Gaye'));
console.log('1972 -', search(1972));
console.log('Graceland -', search('Graceland'));
console.log('Empty -', search());
///Not really sure how to fix this last bit.




// - Add an array of `tracks` to your album objects. Each track should have a `name` and `duration`. You will need to update the functions to support this new property:
//   - Update the `addToCollection` function to also take an input parameter for the array of tracks.
//   - Update `search` to allow a `trackName` search criteria.
//   - Update the `showCollection` function to display the list of tracks for each album with its name and duration.
// ```
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
//     3. NAME: DURATION
//     TITLE by ARTIST, published in YEAR:
//     1. NAME: DURATION
//     2. NAME: DURATION
// ```


//These updates seems to be messing up my answers from before, so I'm just going to comment it out, 
//after testing them out to make sure they work.


let tracks = [];
song = {trackName, duration};

function addToCollection(title, artist, yearPublished, trackName, duration){
    let tracks = [];
    record = {
        title,
        artist,
        yearPublished,
        tracks 
    }

    tracks.push(song={trackName, duration});
    collection.push(record);
    return console.log(record);
    
}



addToCollection ("Pet Sounds", "The Beach Boys", 1966, "Wouldn't It Be Nice", 6.66);
addToCollection ("Pet Sounds", "The Beach Boys", 1966, 'God Only Knows', 6.66);
addToCollection ("Pet Sounds", "The Beach Boys", 1966, 'Good Vibrations', 6.66);
addToCollection ("Graceland", "Paul Simon", 1986, 'Diamonds on the Soles of Her Shoes', 4.44);
addToCollection ("Graceland", "Paul Simon", 1986, 'You Can Call Me Al', 4.44);


function search(item){
    let results = [];
    for (record of collection){
        if (item === record.title || item === record.artist || item === record.yearPublished || item === song.trackName){
            results.push(record);
            }
        }
    if (item === []){
        return collection;
    }
    return results;
 }


console.log('Diamonds' - search('Diamonds on the Soles of Her Shoes'));
console.log('Good Vibrations' - search('Good Vibrations'));
console.log('The Beach Boys' - search('The Beach Boys'));
console.log('Graceland' - search('Graceland'));