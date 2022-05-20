import { GetServerSideProps, NextPage } from "next"
import { Eye, Edit2 } from 'react-feather'
import { useState } from 'react'

interface Response {
    id: number
    title: string
    price?: number
    description?: string
    image?: string
    category?: string
}

interface Props{
    data: Response[]
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch('https://fakestoreapi.com/products')
    const data = await res.json()
    return {
        props: { data }
    }
}

const GeneratePage: NextPage<Props> = (data: Props) => {

    const [modeIndex, setModeIndex] = useState(0)

    return (
        <div className="generate">
            <nav>
                <img
                src={"/logo.png"}
                />
                <h1>Invoice Generator</h1>
            </nav>
            <section className="generate-section">
                <div className="generate-head">
                    <h1>Invoice1</h1>
                    <div className="generate-mode">
                        <button className={`${modeIndex == 0?'active':''}`} onClick={() => setModeIndex(0)}><Eye/> Preview</button>
                        <button className={`${modeIndex == 1?'active':''}`} onClick={() => setModeIndex(1)}><Edit2/> Edit</button>
                    </div>
                </div>
            </section>
        </div>
            
    )
}

export default GeneratePage