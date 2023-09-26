const Person = (props) => {
    return(

        <div>
            <p>Learn some information about this person</p>
            <h3>{props.age >= 18 ? "Please go vote" : "you must be 18"}</h3>
            <h1>{props.name.length > 8 ? props.name.slice(0, 8) : props.name}</h1>
            {props.hobbies.map(hobby => <li>{hobby}</li>)}
        </div>
    )
}