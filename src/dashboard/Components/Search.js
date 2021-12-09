import React, { useState } from 'react'
import { useAsyncDebounce } from 'react-table'

function Search({ filter, setFilter }) {
    const [value, setValue] = useState(filter)
    const onChange = useAsyncDebounce(value => {
        setFilter(value || undefined)
    }, 1000)
    return (
        <span className="searcher">

            <div class="form-outline">
                <input type="search" value={value || ''} id="form1" class="form-control" placeholder="Search . . . " onChange={(e) => {
                    setValue(e.target.value)
                    onChange(e.target.value);

                }}
                    aria-label="Search" />
            </div>
        </span>
    )
}

export default Search
