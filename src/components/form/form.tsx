import { ChangeEvent, FormEvent, useState } from "react"
import { SearchType } from "../../types"
import { countries } from "../../data/countries"
import styles from "./form.module.css"
import Alert from "../Alert/Alert"


type FormProps = {
    fetchWeather: () => void
}


export default function Form({ fetchWeather }: FormProps) {

    const [search, setSearch] = useState<SearchType>({
        city: "",
        country: ""
    })

    const [alert, setAlert] = useState('')



    const handLeChange = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handLeSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (Object.values(search).includes("")) {
             setAlert('Todos los campos son obligatorios')
            return
        }
        fetchWeather()
    }

    return (
        <form
            className={styles.form}
            onSubmit={handLeSubmit}
        >

             {alert && <Alert>{alert}</Alert>}
            <div className={styles.field}>
                <label htmlFor="city">Ciudad</label>

                <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Ciudad"
                    value={search.city}
                    onChange={handLeChange}
                />
            </div>

            <div className={styles.field}>
                <label htmlFor="country">Pais</label>
                <select
                    id="country"
                    value={search.country}
                    name="country"
                    onChange={handLeChange}
                >
                    <option value="">-- Seleccione un pais ---</option>
                    {countries.map(countrie => (
                        <option
                            key={countrie.code}
                            value={countrie.code}
                        >{countrie.name}</option>
                    ))}
                </select>
            </div>

            <input className={styles.submit} type="submit" value="Consultar clima" />
        </form>
    )
}