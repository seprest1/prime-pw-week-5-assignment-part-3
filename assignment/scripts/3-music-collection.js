//---------------------------------------------------------------------------------------------------------//
// YAY PSEUDOCODE !                                                                                        //
//---------------------------------------------------------------------------------------------------------//

// Itialize collection array
//
// Create function to add albums to the collection array (using paramters about title, artist and year published{
//      initialize variable record = {
//          set,
//          properties,
//          of the variable
//      }
//      add the new record to the collection;
//      return the record;
//}





let collection = [];

function addToCollection(title, artist, yearPublished){
    let record = {
        title,
        artist,
        yearPublished
    }
    collection.push(record);
    return record;
}

console.log(addToCollection("Pet Sounds", "The Beach Boys", 1966));
console.log(addToCollection("What's Going On", "Marvin Gaye", 1971));
console.log(addToCollection("Tapestry", "Carole King", 1972));
console.log(collection);
    //When I do this, during this adding process, it will say ---> (3) [{…}, {…}, {…}],
    //which shows an array of three objects, but when I open it up, I see the full collection,
    //with all six albums. I'm not sure why it does this.
console.log(addToCollection("Rise and Fall of Ziggy Stardust", "David Bowie", 1972));
console.log(addToCollection("Out of the Blue", "Electric Light Orchestra", 1977));
console.log(addToCollection("Graceland", "Paul Simon", 1986));
console.log(collection);


function showCollection(array){
    console.log(array.length);
    for (item of array){
        console.log(item.title, 'by', item.artist, 'published in', item.yearPublished);
    }
}

showCollection(collection);


function findByArtist(artist){
    let results = [];
    for (record of collection){
        if (artist === record.artist){
            results.push(record);
        }
    }
    return results;
}

console.log('The Beach Boys -', findByArtist('The Beach Boys'));
console.log('Paul Simon  -', findByArtist('Paul Simon'));
addToCollection ("Surfer Girl", "The Beach Boys", 1963);
console.log(collection);
console.log('The Beach Boys -', findByArtist('The Beach Boys'));


//---------------------------------------------------------------------------------------------------------//
// ### Stretch goals
//---------------------------------------------------------------------------------------------------------//

function search(item){
    let results = [];
    if (item){ //if there's a search parameter
        for (record of collection){
            if (item === record.title || item === record.artist || item === record.yearPublished){
            results.push(record);
                }
            }
        }
    else { //if there isn't a search parameter
        return collection;
    }
    return results;
 }


console.log('Ray Charles -', search('Ray Charles'));
console.log('Marvin Gaye -', search('Marvin Gaye'));
console.log('1972 -', search(1972));
console.log('Graceland -', search('Graceland'));
console.log('Wrong Item -', search('Wrong'));
console.log('Empty -', search());


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


//---------------------------------------------------------------------------------------------------------//


let musicLibrary = [{title: 'Pet Sounds', artist: 'The Beach Boys', yearPublished: 1966}]; 
//Created, in order to preserve my results for the original functions

console.log(musicLibrary);
let tracks = [];
function addToLibrary(title, artist, yearPublished, trackName, duration){
    let album = {
        title, 
        artist, 
        yearPublished,
        tracks
    };

tracks.push({trackName,duration});

    for (i=0; i<musicLibrary.length; i++){ //loops through albums 
        if (musicLibrary.indexOf(album.title !== 0 )){ //sees if there's an album match
            console.log('help');
        }
    }//end of loop

return console.log(musicLibrary); 
}
addToLibrary("Pet Sounds", "The Beach Boys", 1966, "Wouldn't It Be Nice", 6.06);
addToLibrary("Pet Sounds", "The Beach Boys", 1966, 'God Only Knows', 2.26);
addToLibrary("Graceland", "Paul Simon", 1986, 'Diamonds on the Soles of Her Shoes', 4.41);
addToLibrary("Graceland", "Paul Simon", 1986, 'You Can Call Me Al', 2.34);




// I understand that the question was asking met to add an array of tracks to a particular album, 
// but I got stuck on wanting to add a single track, to an array of tracks, as a property of the album.
// It sometimes would work, but all of the tracks would end up grouped together, which lead me down a 
// rabbit-hole of researching groupBy/reduce and various other methods, which I just don't feel like I 
// have the foundational understanding to use. So I'm going to stop here! This is the remnants of my 
// attempt.