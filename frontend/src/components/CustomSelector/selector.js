const CustomSelector = ({options, onSelection, name, className}) => {
    return <select onChange={onSelection} name={name} className={className}>
        {options.map((option, key) => <option value={option.value} label={option.label} key={key} /> )}
    </select>;
}

export default CustomSelector;