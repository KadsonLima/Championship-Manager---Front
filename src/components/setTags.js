import { useState } from "react";
import { Chip, Stack } from '@mui/material'
import styled from "styled-components";

export const SetTags = ({tags, setTag}) =>{

    const [formTags, setTags] = useState([]);

    function handleClick(id) {

        if(!formTags.includes(id)){
            setTags([...formTags, id])
        }
        setTag(formTags)
    }

    function handleDelete(id) {

        setTags(formTags.filter(e => id !== e))

        setTag(formTags)
    }



    


    const tagsOptions = tags?.map((tag) =>{
        return <ChipTags
        size="small"
        key={tag.id}
        label={tag.name}
        id={tag.id}
        variant={formTags.includes(tag.id) ? "":"outlined"}
        onClick={() => handleClick(tag.id)}
        onDelete={() => handleDelete(tag.id)}
      />
    })


    return ( 
        <ContainerChips>
        {tagsOptions} 
        </ContainerChips>
        )
}
const ContainerChips = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;

`

const ChipTags = styled(Chip)`

    span {
    overflow:visible;
    
    }


`
