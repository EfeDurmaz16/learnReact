function Header(props){
  
  console.log(props);
    return(
      <h1>Hello there indeed, {props.name}, <span style={{color: props.color, fontWeight: "bold"}}>{props.color}</span> </h1>
    );
  }

export default Header;