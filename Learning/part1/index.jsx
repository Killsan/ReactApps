class HelloWorld extends React.Component{
    render(){
        return <h1>Hello</h1>
    }
}

ReactDOM.render(
    <HelloWorld/>,
    document.getElementById("app")
)