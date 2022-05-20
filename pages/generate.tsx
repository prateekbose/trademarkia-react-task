import { GetServerSideProps, NextPage } from "next"
import { Eye, Edit2 } from 'react-feather'

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
                    <h1>Invoice1 <Edit2/></h1>
                    <div className="generate-mode">
                        <button><Eye/> Preview</button>
                    </div>
                </div>
            </section>
        </div>
            
    )
}

export default GeneratePage