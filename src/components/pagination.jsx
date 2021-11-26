import "../css/pagination.css";

const Pagination = ({paging, onLoad}) => {
    const {currentPage, nextPage, prevousPage, 
           hasNext, hasPrevous, totalPages} = paging;
    return ( 
        <div className="pagination">
            <div className="page">
                <i className="fa fa-chevron-left" 
                   onClick={() => hasPrevous ? onLoad(prevousPage) : false}>
                </i>
            </div>
            <div className="page page_content">
                <span> {`${currentPage + 1} of ${totalPages}`} </span>
            </div>
            <div className="page">
                <i className="fa fa-chevron-right" 
                   onClick={() => hasNext ? onLoad(nextPage) : false}>
                </i>
            </div>
        </div>
     );
}
 
export default Pagination;