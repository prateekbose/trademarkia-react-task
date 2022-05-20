import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown } from 'react-feather'
import { Invoice } from './Components/invoice'

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://fakestoreapi.com/products')
  const data = await res.json()
  
  return {
    props: { data }
  }
}

const Home: NextPage = (data:Object) => {
  
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

  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@400;600;700&display=swap" rel="stylesheet"/>
      </Head>
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
              <button>Generate Invoice</button>
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
