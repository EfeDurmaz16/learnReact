function Sidebar(props) {
  const styler = {
    backgroundColor: "lightblue",
    color: "black",
    padding: "10px",
    textAlign: "center",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  };

  return (
    <h2 style={styler}> {props.greet} from Sidebar </h2>  
  );
}


export default Sidebar;
