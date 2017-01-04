import React, {Component}from 'react';
const Plotly = require('react-plotlyjs');


export default class Stokgraph extends Component{
    render(){
        let product = []
        let qty = []
        this.props.list.map((item)=>{
            product =  product.concat(item.item_name)
            qty =  qty.concat(item.qty)
        })
         let data = [
            {
                type: 'pie',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
                labels: product,     // more about "x": #scatter-x
                values: qty,     // #scatter-y
                marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: '#40a5ed' // more about "marker.color": #scatter-marker-color
                }
            },
            ];
            let layout = {                     // all "layout" attributes: #layout
                title: 'Stok',  // more about "layout.title": #layout-title
            };
            let config = {
            showLink: false,
            displayModeBar: true
            };
            return (
                 <Plotly className="whatever" data={data} layout={layout} config={config}/>
            );
    }
}