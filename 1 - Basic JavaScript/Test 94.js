// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  console.log(id, prop, value)

  switch(prop) {
    case "tracks":
      if (value !== "") {
        if (records[id].tracks == undefined) {
          records[id].tracks = [value];
          console.log(records)
        } else {
          records[id].tracks.push(value);
        }
      } else {
        delete records[id].tracks;
      }
      break;
    case "artist":
      if (value !== "") {
        records[id].artist = value;
      } else {
        delete records[id].artist;
      }
      break;
    default:
      records[id][prop] = value;
      break;
  }



  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');
