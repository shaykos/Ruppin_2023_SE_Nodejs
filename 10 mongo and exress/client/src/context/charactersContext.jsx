import { createContext, useState, useEffect } from "react";
import {DEV_API_URL} from '../utils/api_url';

export const CharactersContext = createContext();

export default function CharacterContextProvider({ children }) {
    const [characters, SetCharacters] = useState([]);

    const LoadCharacters = async () => {
        let res = await fetch(`/api/characters/`);
        let data = await res.json();
        SetCharacters(data);
    }

    const AddCharacter = async (character) => {
        let res = await fetch(`/api/characters/add`, {
            method: 'POST',
            body: JSON.stringify(character),
            headers: {
                "Content-Type": "application/json",
              },
        });
        let data = await res.json();
        console.log(data);
    }

    useEffect(()=>{
        LoadCharacters();
    },[])

    const value = {
        characters,
        LoadCharacters,
        AddCharacter
    }

    return (
        <CharactersContext.Provider value={value}>
            {children}
        </CharactersContext.Provider>

    )


}