
const Notification = (props) => {
    if (props.notification === null) {
        return null
    }
    return (
    <div className='notification'>
        {props.notification}
    </div>
    )
}

export default Notification;