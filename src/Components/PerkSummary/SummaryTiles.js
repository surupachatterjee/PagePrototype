import React, {Component} from 'react'

export class SummaryTiles extends Component {

    recentTransactions =[
        {
            "trxDate": "03-03-2018",
            "name" : "John Carly",
            "trxDescription"  :"Description Iorum Ipsum No.1234",
            "trxVal" : "$200.52"
        },
        {
            "trxDate": "03-03-2018",
            "name" : "John Carly",
            "trxDescription"  :"Description Iorum Ipsum No.1234",
            "trxVal" : "$200.52"
        },
        {
            "trxDate": "03-03-2018",
            "name" : "John Carly",
            "trxDescription"  :"Description Iorum Ipsum No.1234",
            "trxVal" : "$50.52"
        },
        {
            "trxDate": "03-03-2018",
            "name" : "John Carly",
            "trxDescription"  :"Description Iorum Ipsum No.1234",
            "trxVal" : "$100.52"
        }

    ]

    listRows(){
        let rows = this.recentTransactions.map((row) => {
            return(
                <li className=" list-group-item card-body" >
                <form>
                    <div className="row" >
                        <div className="mx-lg-3 pr-lg-5">
                            {row.trxDate}
                        </div>
                        <div className="mx-lg-auto pl-lg-5">
                            <div>{row.name}</div>
                            <div>{row.trxDescription}</div>
                        </div>
                        <div className="mx-lg-auto">
                            {row.trxVal}
                        </div>
                    </div>
                </form>
                </li>
            )
        })
        return rows;
    }


    render() {


        return (
            <ul className="list-group list-group-flush">
                <li className=" list-group-item card-body" >
                    <form className="form-inline">
                        <label htmlFor="start" >Start</label>
                        <div className="form-group  mx-sm-3 pr-lg-5">
                            <input type="date" className="form-control" id="start"/>
                        </div>
                        <label htmlFor="end">End</label>
                        <div className="form-group  mx-sm-3 ">
                            <input type="date" className="form-control" id="end"/>
                        </div>
                        <div className="form-group mx-sm-3 pl-lg-5">
                            <div className="col-md-9">
                            <input type="text" className="form-control" placeholder="Search Keywords"
                                   style={{"width":"13rem"}}/>
                            </div>
                        </div>
                    </form>
                </li>

                {this.listRows()}


                <li className="list-group-item card-body col-centered">
                    <a href="#">View More Transactions</a>
                </li>
            </ul>
        )
    }
}