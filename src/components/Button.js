
const Button = ({ color, text}) => {    

  return (
    <button className="btn" style={{backgroundColor: color}}>
        {text}    
    </button>
  )
}

Button.defaultProps ={
    text: 'Add',
    color: 'steelblue',    
}

export default Button