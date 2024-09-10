const DashboardBox = (props) => {
    return (
        <div className="dashboardbox"
            style={{
                backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
            }}>
            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white">{props.title}</h4>
                    <p className="text-white">{props.count}</p>
                </div>
                <div className="ml-auto">
                    {
                        props.icon ?
                            <span className="icon">
                                {props.icon}
                            </span>
                            : ''
                    }
                </div>
            </div>
        </div>
    )
}
export default DashboardBox;
