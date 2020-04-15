import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Insight(){

  const [country,setCountry] = useState([]);
  const sorted = country.sort((a,b) => { 
	   return a.latest_data.confirmed < b.latest_data.confirmed
   } );
  useEffect(()=>{
    axios.get('https://corona-api.com/countries')
    .then(res=>{
        console.log(res.data.data)
        setCountry(res.data.data)
      })
    .catch(err=>{
      console.log(err)
    })
  },[]);
  
  
      return ( 
          <div class="container-fluid">
            <div class="row-fluid">
            <div class="card">
                <div class="card-header lead float-left">
                    <strong class="float-left">Insights</strong>
                </div>
                <div class="card-body">
                    <h5 class="card-title">Affected countries</h5>
                    <p class="card-text"></p>

<div class="table-wrap table-sm table-hover">
<table class="table" id="insight-data">
  <thead class="thead-dark position-sticky" id="insight-table-header">
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Country</th>
      <th scope="col">Confirmed</th>
      <th scope="col">Recovered</th>
	  <th scope="col">Critical</th>
      <th scope="col">Deaths</th>
	  
    </tr>
  </thead>
  <tbody>
 
	
			{sorted.map((item,index) => (
				<tr>
					  <th scope="row">{index+1}</th>
					  <td>{item.name}</td>
					  <td>{item.latest_data.confirmed}</td>
					  <td>{item.latest_data.recovered}</td>
					  <td>{item.latest_data.critical}</td>
					  <td>{item.latest_data.deaths}</td>
				</tr>
					))}
	
	
	
	
	
  </tbody>
</table>
</div>
                </div>
                </div>
            </div>
    </div>

         
          
      );
  }

export default Insight