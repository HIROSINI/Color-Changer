import React, { useState } from 'react'
import Select from 'react-select'
import './Dropdown.css'
function Form() {
  var colors=[
    {
        label : 'Lime',
        value : 'lime'
    },
    {
        label : 'Lavender',
        value : 'lavender'
    },
    {
        label : 'Crimson',
        value : 'crimson'
    },
    {
        label : 'DarkBlue',
        value : 'darkblue'
    },

    {
        label : 'Teal',
        value : 'teal'
    },
    {
        label : 'RebeccaPurple',
        value : 'rebeccapurple'
    },
    {
        label : 'GhostWhite',
        value : 'ghostwhite'
    },
    {
        label : 'AquaMarine',
        value : 'aquamarine'
    },
    {
        label : 'AliceBlue',
        value : 'aliceblue'
    }
  ];
  var [setbgcolor,ddlvalue]=useState(colors.label);
  var ddlhandle = (e) => {
    ddlvalue(e.label);
  }
  return (
    <>
    <h1>COLOR CHANGER</h1>
    <p>Choose any one color from the following options:</p>
      <div className='h'>
        <Select options={colors} onChange={ddlhandle} className="select"></Select>
      </div>
      <div className='drop'>
        <style>{'.drop {background-color:'+setbgcolor+';}'}</style> 
      </div>
    </>
  )
}
export default Form