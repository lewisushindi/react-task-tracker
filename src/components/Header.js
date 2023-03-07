
const Header = ({title}) => {
  return (
    <header>
        <h1 style={headingStyle}>{title}</h1>

    </header>
  )
}

Header.defaultProps ={
    title: 'Task Tracker' ,
}

const headingStyle ={
    color: 'blue',
}

export default Header