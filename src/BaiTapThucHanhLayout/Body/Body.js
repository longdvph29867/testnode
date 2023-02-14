import React, { Component } from 'react'
import Banner from '../Banner/Banner'
import Item from '../Item/Item'

export default class Body extends Component {
render() {
    return (
        <div>
            <div className="container px-lg-5">
                <Banner/>
                <div className="pt-4">
                    <div className="row gx-lg-5">
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                        <Item/>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
