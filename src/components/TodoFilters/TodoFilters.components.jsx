const FiltersContainer = ({children}) => {
    return (
        <div className="flex items center justify-between p-4 bg-purple-600 border-b border solid border-purple-400">
            {children}
        </div>
    )
}

const ItemsLeft = ({total= 0}) =>{
    return (
        <p className="text-white text-sm">
            {total} items left
        </p>
    )
}

const FilterButtonContainer = ({children}) => {
    return (
        <div className="flex items-center space-x-2">
            {children}
        </div>
    )
}

const FilterButton = ({ action, active, filter }) => {
    return (
        <button onClick={action}
            className={` hover:text-white cursor-pointer transition-all duration-300 ease-in-out `
                + (active.toLowerCase().includes(filter.toLowerCase()) ? 'text-purple-900' : 'text-white-400')}>{filter}</button>
    )
}

export {FiltersContainer, ItemsLeft, FilterButtonContainer, FilterButton}