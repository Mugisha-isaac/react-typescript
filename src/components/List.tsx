import React from 'react'
import { IState as IProps } from '../App'
// interface IProps {
//     people: {
//         name: string,
//         age: number,
//         url: string,
//         note?: string
//     }[]
// }


const List: React.FC<IProps> = ({ people }) => {
    const renderList = (): JSX.Element[] => {
        return people.map((person) => {
            return (
                <li className="List">
                    <div className="List-header">
                        <img className="List-img" src={person.url} alt="player" />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.note}</p>
                </li>
            )
        })
    }
    return (
        <ul>
            {
                people.map(person => {
                    return (
                        <div className="container">
                            {renderList()}
                        </div>
                    )
                })
            }
        </ul>
    )
}

export default List
