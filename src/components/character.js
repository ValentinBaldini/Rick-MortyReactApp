import '../index.css';

export default function Character({ character }) {
    return (
        <div className="character-details">
            <h2>{character.name}</h2>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
            <div className="details-container">
                <div className="status-container">
                    <span className={character.status === 'Alive' ? 'alive' : 'dead'}></span>
                    <span>{character.status}</span>
                </div>
                <p>
                    <span className="text-grey">Episodios: </span>
                    <span>{character.episode.length}</span>
                </p>
                <p>
                    <span className="text-grey">Especie: </span>
                    <span>{character.species}</span>
                </p>
                <p>
                    <span className="text-grey">Genero: </span>
                    <span>{character.gender}</span>
                </p>
                <p>
                    <span className="text-grey">Origen: </span>
                    <span>{character.origin.name}</span>
                </p>
                <p>
                    <span className="text-grey">Ubicacion actual: </span>
                    <span>{character.location.name}</span>
                </p>
            </div>
        </div>
    );
}
