import PropTypes from "prop-types"
export const DisplayUser = ({ name, age, friends }) => {
    return <div>
        <h1>{name}</h1>
        <h1>{age}</h1>
    </div>
}
DisplayUser.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    friends: PropTypes.arrayOf(PropTypes.any)
}