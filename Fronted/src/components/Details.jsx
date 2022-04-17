import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
    productsDetailsLoading,
    productsDetailsSuccess,
    productsDetailsFail,
} from '../Features/Product/action'

import { useParams } from 'react-router-dom'
import styles from './Flat.module.css'

export const Details = () => {

    const dispatch = useDispatch()
    const { id } = useParams()
    const [details, setDetails] = useState({})

    useEffect(() => {
        getData()
    }, [dispatch, id])

    const getData = () => {
        dispatch(productsDetailsLoading())
        fetch(`http://localhost:4500/flat/${id}`)
            .then((response) => response.json())
            .then((data) => {
                dispatch(productsDetailsSuccess(data))
                setDetails(data)
                // console.log(data);
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err))
            })
    }
    const { loading } = useSelector((state) => state.productDetailsState)

    return (
        <section className={styles.Details}>
            <div className={styles.Details1}>
                <img src={details.flatImage} />
            </div>
            <div className={styles.Details2}>
                <table className={styles.Details2table}>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>{details.name}</td>
                        </tr>
                        <tr>
                            <td>Gender</td>
                            <td>{details.gender} </td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td>{details.age}</td>
                        </tr>
                        <tr>
                            <td>Flat Type</td>
                            <td>{details.flatType}</td>
                        </tr>
                        <tr>
                            <td>Flat Number</td>
                            <td>{details.flatNumber}</td>
                        </tr>
                        <tr>
                            <td>Flat Block</td>
                            <td>{details.flatBlock}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section >
    )
}
