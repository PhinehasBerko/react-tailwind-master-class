// This is how to render list in react applications

const ListRender =() =>{
    const listItems = [
        " engineer "," farmers "," doctors"
    ]
    return(
        <div className="px-6">
            {listItems.map((item) =>item)}
        </div>
    )
}

// Importance of keys in a list
// A "key" is a special string attribute neededd to
// be included when creating a list of elements.

// Keys give the elements a stable identity
// Keys help React identify which items have changed,
// added, or are removed.
// Help in efficient update of the user interface
export default ListRender