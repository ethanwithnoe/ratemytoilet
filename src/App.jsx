import React, { useState } from 'react';
import './App.css';
import { BsSearch } from 'react-icons/bs';

function App() {
    const toilets = [
        {
          name: "University Credit Union Center",
          description: "Very good for doing Hacking during HackDavis!!",
          likes: "30"
        },
        {
          name: "Gilmore Hall Dorm",
          description: "Kinda nasty, and had to walk all the way across the building from my dorm room to the bathroom",
            likes: "67"
        },
        {
          name: "Unitrans Maintainence Center",
          description: "Pretty clean, got a real nice soap scrub lol",
            likes: "46"
        },
        {
            name: "TLC",
            description: "Clean and well-maintained restroom facilities.",
            likes: "132"
        },
        {
            name: "Shields Library",
            description: "Restroom facilities available on multiple floors.",
            likes: "60"
        },
        {
          name: "Kemper Hall",
          description: "Not bad, pretty good size but kinda far from the lobby",
          likes: "31"
        },
    ];

    const [searchVal, setSearchVal] = useState("");
    const [searchResults, setSearchResults] = useState(toilets);
    const [selectedToilet, setSelectedToilet] = useState(null);

    function handleSearchClick() {
        if (searchVal === "") {
            setSearchResults(toilets);  
        } else {
            const filteredResults = toilets.filter((toilet) =>
                toilet.name.toLowerCase().includes(searchVal.toLowerCase())
            );
            setSearchResults(filteredResults);  
        }
        setSelectedToilet(null);
    }

    function handleToiletClick(toilet) {
        setSelectedToilet(toilet);
    }

    function addLike() {
      if (selectedToilet) {
          const updatedToilets = searchResults.map((toilet) =>
              toilet === selectedToilet ? { ...toilet, likes: parseInt(toilet.likes, 10) + 1  } : toilet
          );
          setSearchResults(updatedToilets);
          setSelectedToilet({ ...selectedToilet, likes: parseInt(selectedToilet.likes, 10) + 1  });
      }
    }
    const containerStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '20px'
    };

    const inputStyle = {
        marginRight: '10px',
        padding: '8px',        
        width: '200px',        
        border: '1px solid #ccc',
        borderRadius: '4px'
    };

    return (

        <div>
          <div style={containerStyle}><h1>Rate My Toilet!</h1>
          </div>
            <div style={containerStyle}>
                <input
                    style={inputStyle}
                    value={searchVal}
                    onChange={e => setSearchVal(e.target.value)}
                    placeholder="Search for toilets..."
                />
                <BsSearch onClick={handleSearchClick} style={{ cursor: 'pointer' }} />
            </div>
            <div>
                {searchResults.map((toilet, index) => (
                    <div
                        key={index}
                        style={{ alignItems: 'center', textAlign: 'center', justifyContent: 'center',fontWeight: '700', marginTop: '10px', cursor: 'pointer' }}
                        onClick={() => handleToiletClick(toilet)}
                    >
                        {toilet.name}
                    </div>
                ))}
            </div>
            {selectedToilet && (
                <div style={{ marginLeft: '600px', marginTop: '20px' }}>
                    <h2>{selectedToilet.name}</h2>
                    <p>{selectedToilet.description}</p>
                    <p>Likes: {selectedToilet.likes}</p>
                    <p onClick={addLike}> Add Like</p>

                </div>
            )}
        </div>
    );
}

export default App;
