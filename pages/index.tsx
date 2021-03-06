import type { GetServerSideProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Invoice } from '../Components/invoice'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  
  return {
    props: { data }
  }
}

const Home: NextPage = (data:Object) => {
  
  const Router = useRouter()

  const [inputActive, setInputActive] = useState(false)
  const [inputValue, setInputValue] = useState("")
  const [invoiceOpen, setInvoiceOpen] = useState(false)
  const [invoiceIndex, setInvoiceIndex] = useState(-1)

  const handleValue = (value:string) => {
    setInputActive(value.length>0)
    setInputValue(value)
  }

  const handleInvoiceButton = (index:number) => {
    setInvoiceOpen(!(index == invoiceIndex))
    setInvoiceIndex((index == invoiceIndex)?-1:index)
  }

  const generateInvoice = (name: string) => {
    Router.push({
      pathname: '/generate',
      query: {
        name: name
      }
    })
  }

  return (
    <div>
      <nav>
        <img
          src={"/logo.png"}
        />
      </nav>
      <div className="page">
        <section className="top-section">
          <div className="top-text-section">
            <h1>Invoice Generator</h1>
            <div className="text-input-section">
              <label className={`placeholder ${inputActive?'placeholder-active':''}`} htmlFor="number" placeholder="Enter Name">Enter Name</label>
              <input type="text" name="number" required value={inputValue} onChange={(event) => handleValue(event.target.value)}/>
              <button onClick={() => generateInvoice(inputValue)}>Generate Invoice</button>
            </div>
          </div>
          <div className="side-image">
            <img
              src={"/side-image.png"}
            />
          </div>
        </section>
        <section className="saved-section">
          <h1>Saved Invoices</h1>
          <div className="saved-invoice">
            <div className="saved-invoice-top">
              <div className="head">
                <h1>Invoice1</h1>
                <p>5th May 2021</p>
              </div>
              <button onClick={() => handleInvoiceButton(1)}>View Invoice <ChevronDown className={`${(invoiceOpen && invoiceIndex == 1)?'invoice-open':''} invoice-arrow`} /></button>
            </div>
            <div className={`saved-invoice-body ${(invoiceOpen && invoiceIndex == 1)?'invoice-body-open':''}`}>
              <Invoice/>
            </div>
          </div>
          <div className="saved-invoice">
            <div className="saved-invoice-top">
              <div className="head">
                <h1>Invoice1</h1>
                <p>5th May 2021</p>
              </div>
              <button onClick={() => handleInvoiceButton(2)}>View Invoice <ChevronDown className={`${(invoiceOpen && invoiceIndex == 2)?'invoice-open':''} invoice-arrow`} /></button>
            </div>
            <div className={`saved-invoice-body ${(invoiceOpen && invoiceIndex == 2)?'invoice-body-open':''}`}>
              <Invoice/>
            </div>
          </div>
        </section>
      </div>
    </div>
    
  )
}

export default Home
