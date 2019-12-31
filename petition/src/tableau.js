 
// import tableau from 'tableau-api';  
import React, { Component } from 'react';
import tableau from 'tableau-api';


class TableauSample extends Component {
    componentDidMount() {
        this.initViz()

    }
// viz가 어디서 작용하는 걸까?
    initViz() {
        // this.vizPlaceholder = React.createRef();
        const url = "https://public.tableau.com/views/petition_by_category/Story3?:display_count=y&publish=yes&:origin=viz_share_link";
        const vizPlaceholder = this.vizPlaceholder
        
        let options = {
            width: 960,
            height: 540,
            hideTabs: true,
            hideToolbar: true,
            showShareOptions: false,
            // toolbar: false
           
          };
          let viz = new window.tableau.Viz(vizPlaceholder, url, options)
    }
    render() {
        return(
            <div ref={(div) => { this.vizPlaceholder = div }}>
            {/* { this.initViz() } */}

            </div>
        ) 
    }
}

export default TableauSample
