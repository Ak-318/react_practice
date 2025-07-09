import PropTypes from 'prop-types'

function PropComponent(props){

    return(
        <div className="name-card">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Skill: {props.skill}</p>
            <p>Student: {props.isStudent ? 'Yes' : 'No'}</p>
        </div>
    );

}

PropComponent.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    skill: PropTypes.string,
    isStudent: PropTypes.bool
}

PropComponent.defaultProps = {
    name: "Guest",
    age: 0,
    skill: "N/A",
    isStudent: false
}

export default PropComponent