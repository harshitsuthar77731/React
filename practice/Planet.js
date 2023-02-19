const Planet = (props) => {
    return(
        <div>
            {props.isGasPlanet ? <h1>{props.name}This is gas planet</h1> : <h1>{props.name} This is not gas planet</h1>}
        </div>
    )

}

export {Planet}