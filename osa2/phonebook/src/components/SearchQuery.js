const SearchQuery = (props) => {
    return (
      <form>
        <h2>Search</h2>
        <div>
          search:
          <input 
          value = {props.query}
          onChange = {props.handleSearchChange}
          />
        </div>
      </form>
    )
  }

export default SearchQuery;