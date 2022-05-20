import { FunctionComponent } from "react";

export const Invoice: FunctionComponent<{}> = () => {
    return (
        <div className="invoice">
            <div className="invoice-head">
                <div className="logo">
                    <img src={"/logo.png"} />
                    <h1>Invoice Generator</h1>
                </div>
                <div className="company-details">
                    <h2>
                        LegalForce RAPC Worldwide <br/>
                        +1 877-794-9511 <br/>
                        1580 West El Camino Real, Suite 10 <br/>
                        Mountain View, California <br/>
                        94040 - 2479 <br/>
                        United States
                    </h2>
                </div>
            </div>
            <div className="invoice-summary">
                <div className="invoice-summary-top">
                    <div className="invoice-payment">
                        <h1>Transaction 1</h1>
                        <p>Paid on 05/04/2022</p>
                    </div>
                    <div className="invoice amount">
                        <h3>Amount Paid</h3>
                        <h1>$1,999.0</h1>
                    </div>
                </div>
                <div className="invoice-summary-content">
                    
                </div>
            </div>
        </div>
    )
}