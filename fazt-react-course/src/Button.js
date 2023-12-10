import PropTypes from 'prop-types'
export function Button({text, name}) {
    if (!text) {
        console.log("el texto es requerido");
    }
    return <button>
        {text} - {name}
    </button>
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}
Button.defaultProps = {
    name: "some user"
}