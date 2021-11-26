import "../css/reports.css";

const reportDetail = ({report, onBlock, onResolve}) => {
    
    const {id, state, type, message} = report;

    return ( 
        <div className="report">
            <div className="report_content">
                <p>Id: {id}</p>
                <p>State: {state}</p>
            </div>
            <div className="report_content">
                <p>Type: {type}</p>
                <p>Message: {message}</p>
            </div>
            <div className="report_content">
                <button className="btn" onClick={() => onBlock(id)}>Block</button>
                <button className="btn" onClick={() => onResolve(id)}>Resolve</button>
            </div>
        </div>
     );
}
 
export default reportDetail;