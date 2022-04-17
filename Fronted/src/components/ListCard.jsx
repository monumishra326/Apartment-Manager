import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Flat.module.css'

export const ListCard = ({ product }) => {
    let navigate = useNavigate()
    const navigatePage = () => {
        navigate(`/flat/${product._id}`)
    }

    return (
        <div className={styles.ListCard} onClick={navigatePage}>
            <div className={styles.ListCard1}>

                <img src={product.flatImage} />
            </div>

            <div className={styles.ListCard2}>
                <table className={styles.ListCard2table}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{product.name}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{product.gender} </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{product.age}</td>
                        </tr>
                        <tr>
                            <td>Flat Type</td>
                            <td>{product.flatType}</td>
                            <td>Flat Number</td>
                            <td>{product.flatNumber}</td>
                            <td>Flat Block</td>
                            <td>{product.flatBlock}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

    )
}
