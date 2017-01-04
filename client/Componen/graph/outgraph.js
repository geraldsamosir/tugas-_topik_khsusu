import React, {Component}from 'react';
const Plotly = require('react-plotlyjs');


export default class Outgraph extends Component{
    constructor(){
        super()
       let list = []
    }
    render(){
        this.list = this.props.list
        let result =[]
         this.list.reduce(function (res, value) {
            if (!res[value.item_name]) {
                res[value.item_name] = {
                    qty: 0,
                    Id: value.Id,
                    item_name :value.item_name
                };
                result.push(res[value.item_name])
            }
            res[value.item_name].qty += value.qty
            return res;
        }, {});
        this.list =  result;
          let product = []
            let qty = []
            this.list.map((item)=>{
                product =  product.concat(item.item_name)
                qty =  qty.concat(item.qty)
            })
         let data = [
            {
                type: 'bar',  // all "scatter" attributes: https://plot.ly/javascript/reference/#scatter
                x: product,     // more about "x": #scatter-x
                y: qty,     // #scatter-y
                marker: {         // marker is an object, valid marker keys: #scatter-marker
                color: '#40a5ed' // more about "marker.color": #scatter-marker-color
                }
            }
            ];
            let layout = {                     // all "layout" attributes: #layout
            title: 'History in',  // more about "layout.title": #layout-title
            xaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
                title: 'Product name'         // more about "layout.xaxis.title": #layout-xaxis-title
            },
            yaxis: {                  // all "layout.xaxis" attributes: #layout-xaxis
                title: 'Qty'         // more about "layout.xaxis.title": #layout-xaxis-title
            }
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