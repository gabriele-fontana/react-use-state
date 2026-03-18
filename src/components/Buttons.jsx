import  {languages} from '../assets/languages'


export default function Buttons() {

    
    return (
    <div className='d-flex justify-content-around'>
        {languages.map((language)=>{
        return (
            <button className='btn btn-primary '>{language.title}</button>
        )})}
               
    </div>
    )
    
}