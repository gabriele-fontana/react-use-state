import  {languages} from '../assets/languages'


export default function Buttons() {

    return (
languages.map((language)=>{
    return (
    <button>{language.title}</button>
    )
})
        
    )
}