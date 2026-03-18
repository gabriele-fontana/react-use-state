import  {languages} from '../assets/languages'


export default function Buttons({languages, onClick}) {

    
    return (
    <div className='d-flex justify-content-around'>
        {languages.map((language)=>{
        return (
            <button className='btn btn-primary ' onClick={()=>onClick(language)}>{language.title}</button>
        )})}
               
    </div>
    )
    
}