function App() {

    return (
        <div className="App">
            <User name="Kenny" age={23} color={"blue"} />
            <Job salary={120000} position="Senior Dev" company="Amazon" />
        </div>
    );
}
const User = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.color}</h1>
        </div>
    )
}

const Job = (props) => {
    return (
        <div>
            <h1>{props.salary}</h1>
            <h1>{props.position}</h1>
            <h1>{props.company}</h1>

        </div>
    )
}