import React from 'react'


//Functions uses props from main App area to be able to populate dropdown filters
const FilterForm = ({handleFilterSubmit,onChange,selectedType,selectedWeakness,options}) => {
    return(
        <form onSubmit={handleFilterSubmit}>
        <label>Types:</label>
            <select className="menu" onChange={onChange} name="type" value={selectedType} style={{marginRight: "10px"}}>
            {
                options.map(opt => {
                    return(
                        <option className="item" value={opt.value}>{opt.label}</option>
                    )
                }) 
            }
        </select>
        <label>Weaknesses:</label>
        <select className="menu" onChange={onChange} name="weakness" value={selectedWeakness}>
            {
                options.map(opt => {
                        return(
                            <option className="item" value={opt.value}>{opt.label}</option>
                        )
                    }) 
                }
        </select>
        </form>
    )
}

export default FilterForm