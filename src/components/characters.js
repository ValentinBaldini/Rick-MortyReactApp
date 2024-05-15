import React, { useState } from 'react';
import Character from './character'; // Asumiendo que Character está en el mismo directorio
import '../index.css'

export default function Characters(props) {
    const { characters, setCharacters } = props;
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const resetCharacters = () => {
        setCharacters(null);
    }

    const showCharacter = (character) => {
        setSelectedCharacter(character);
    }

    const resetSelectedCharacter = () =>{
        setSelectedCharacter(null);
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <div className="container-characters">
                {selectedCharacter ? (
                    <>
                    <span className='back-home'onClick={resetSelectedCharacter}>Volver a Personajes</span>
                    <Character character={selectedCharacter} />
                    </>
                ) : (
                    characters.map((character, index) => (
                        <div className="character-container" key={index}>
                            <div>
                                <img src={character.image} alt={character.name}></img>
                            </div>
                            <div>
                                <h3>{character.name}</h3>
                                <h6>{character.status === 'Alive' ? (
                                    <>
                                        <span className="alive">Alive</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="dead">Dead</span>
                                    </>
                                )}</h6>
                                <p>
                                    <span className="text-grey">Episodios:</span>
                                    <span>{character.episode.length}</span>
                                </p>

                                <button className="btn-verMas" onClick={() => showCharacter(character)}>Ver Mas</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <span className="back-home" onClick={resetCharacters}>Volver a Home</span>
        </div>
    )
}