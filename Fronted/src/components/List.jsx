import React from 'react'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ListCard } from './ListCard.jsx'
import styles from './Flat.module.css'

import {
    getproductsLoading,
    getproductsSuccess,
    productsDetailsFail,
} from '../Features/Product/action'

export const List = () => {
    const dispatch = useDispatch()
    const [products, setProducts] = useState([])
    const [value, setValue] = useState(0)
    const [filter, setFilter] = useState(0)
    const [search, setSearch] = useState("")

    const {
        loading,
        filteredflatsCount,
        resultPerPage,
        flatsCount,
    } = useSelector((state) => state.productsState)

    useEffect(() => {
        getData()
    }, [dispatch])

    const handleValue = (e) => {
        console.log(e.target.value)
    }

    const handleFilter = (e) => {
        console.log(e.target.value)
    }
    const handleSearch = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
    }

    const SearchBy = () => {
        getData()
    }

    const getData = () => {
        dispatch(getproductsLoading())

        let link = 'http://localhost:4500/flat'

        if (search) {
            link = `http://localhost:4500/flat/?keyword=${search}`
        }

        fetch(link)
            .then((response) => response.json())
            .then((data) => {
                dispatch(getproductsSuccess(data))
                setProducts(data.flats)
            })
            .catch((err) => {
                dispatch(productsDetailsFail(err))
            })
    }

    return (
        <section className={styles.bigcontainer}>

            <div className={styles.leftw}>
                <div className={styles.leftfunctionality}>
                    <label className={styles.optiontext}>Sort By Flat No:</label>
                    <select name="pets" id="pet-select" className={styles.sortOption} onChange={handleValue}>
                        <option>--Please choose an option--</option>
                        <option value="1">Sort by ascending order</option>
                        <option value="-1">Sort by descending order</option>
                    </select><br /><br />

                    <label className={styles.optiontext}>Filter By Resident Type:</label>
                    <select name="pets" id="pet-select" className={styles.sortOption} onChange={handleFilter}>
                        <option>--Please choose an option--</option>
                        <option value="Owner">Owner</option>
                        <option value="Tenant">Tenant</option>
                    </select><br /><br />

                    <input type="text" name="search" placeholder="Enter Block Number" onChange={handleSearch} />
                    <button onClick={SearchBy}>Search</button>

                </div>
            </div>

            <div className={styles.righty}>
                <div>
                    {products &&
                        products.map((product) => (
                            <ListCard key={product._id} product={product} />
                        ))}
                </div>
            </div>
        </section >
    )
}
