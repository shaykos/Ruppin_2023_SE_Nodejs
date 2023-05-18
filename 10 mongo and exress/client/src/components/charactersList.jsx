import { useContext } from "react";
import { CharactersContext } from '../context/charactersContext';

export default function CharactersList() {

    const { characters } = useContext(CharactersContext);

    return (
        <>
            <div className="wrapper">
                {
                    characters.map((character) => <p key={character._id}>{character.charater_name}</p>)
                }
            </div>
        </>
    );
}