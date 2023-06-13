const SearchBox = (props) => {
    return(
      <div>
        <form type='input'>find countries 
        <input type="text" value={props.filterTerm} onChange={props.filterChange}></input>
            <button 
            type="submit" 
            onClick={props.setCountries}>
              submit
            </button>
        </form>
      </div>
    )
}

export default SearchBox;