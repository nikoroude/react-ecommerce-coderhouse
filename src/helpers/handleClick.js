import { useEffect } from "react"


export const handleClick = () => {
    console.log ("click!")
}

useEffect( () => {
    window.addEventListener('click', handleClick)

    return () => {
        window.removeEventListener('click', handleClick)
    }
}, [])