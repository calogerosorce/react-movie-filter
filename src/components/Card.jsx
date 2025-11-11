

export default function Card(props) {



    return (
        <div className="card col-12 col-md-4 col-lg-4 align-items-center">
            <img src={props.src} alt="" />
            {props && <p>{props.title}</p>}
            <p>{props.genere}</p>
        </div>
    )
}