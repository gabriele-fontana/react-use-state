
export default function AppCard({data}){
    return(
        <div className="card mt-4">
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p className="card-text">{data.description}</p>
            </div>
        </div>
    )

}