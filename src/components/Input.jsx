const Input = (props) => {

return (
    <>
        <p>{props.title}</p>
        <input type={props.typeInput} placeholder={props.placeHolder} onChange={props.onChange}/>
        <br></br>
    </>
)} 

export default Input