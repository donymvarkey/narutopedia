import React from 'react'

export default function Character(props) {
    return (
        <div className="card p-3">
            <div className="row">
                <div className="col-md-6">
                    <img src={props.character.image} className="card-img-top" alt={props.character.name.english} />
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <h3 className="card-title text-center fw-bolder">{props.character.name.english}</h3>
                    </div>
                    <div className="row">
                        <h6 className="card-title text-center fw-bolder">[Kanji: {props.character.name.kanji} &nbsp; Romaji: {props.character.name.romaji}]</h6>
                    </div><hr />
                    <div className="row">
                        <p className="card-text">{props.character.other_names}</p>
                    </div><hr />
                    <div className="row">
                        <h4 className="fw-bold text-center">Family</h4>
                        <div className="row text-center justify-content-end">
                            <div className="col-md-12">
                                <table className="table">
                                    <thead>
                                        <tr class="table-primary">
                                            <th>Father</th>
                                            <th>Mother</th>
                                            <th>Wife</th>
                                            <th>Son</th>
                                            <th>Daughter</th>
                                            <th>Godfather</th>
                                        </tr>   
                                    </thead>
                                    <tbody>
                                        <tr className="table-light">
                                            <td>{props.character.family.Father}</td>
                                            <td>{props.character.family.Mother}</td>
                                            <td>{props.character.family.Wife}</td>
                                            <td>{props.character.family.Son}</td>
                                            <td>{props.character.family.Daughter}</td>
                                            <td>{props.character.family.Godfather}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <h4 className="fw-bold text-center">Personal Details</h4>
                <hr />
                <div className="row">
                    <div className="col-md-12">
                        <table className="table">
                            <thead>
                                <tr className="table-primary text-center">
                                    <th>Kekkei Genkai</th>
                                    <th>Classifications</th>
                                    <th>Afiliations</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-light text-center">
                                    <td>
                                        {
                                            props.character.personal.kekkei_genkai.map((item) => {
                                                return(
                                                    <ul style={{listStyleType: "circle"}}>
                                                        <li className=" text-justify">{item}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            props.character.personal.classifications.map((item) => {
                                                return(
                                                    <ul style={{listStyleType: "circle"}}>
                                                        <li className=" text-justify">{item}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                    <td>
                                        {
                                            props.character.personal.affiliations.map((item) => {
                                                return(
                                                    <ul  style={{listStyleType: "circle"}}>
                                                        <li className=" text-justify">{item}</li>
                                                    </ul>
                                                )
                                            })
                                        }
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
