import Button from "./Button";
const Header = ({title}) => {
  
  const onClick = () => {
        
  }

  return (
    <header className="header">
        <h1>{title}</h1>
        <Button color= 'green' onClick={onClick}/>        
    </header>
  )
}

Header.defaultProps ={
    title: 'Task Tracker' ,
}


export default Header