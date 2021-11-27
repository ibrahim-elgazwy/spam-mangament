import "../css/pagination.css";

const Pagination = ({paging, onLoad}) => {
    const {currentPage, nextPage, prevousPage, 
           hasNext, hasPrevous, totalPages} = paging;
    return ( 
        <div className="pagination">
            <div className="page" onClick={() => hasPrevous ? onLoad(prevousPage) : void(0)}>
                <i className="fa fa-chevron-left"></i>
            </div>
            <div className="page page_content">
                <span> {`${currentPage + 1} of ${totalPages}`} </span>
            </div>
            <div className="page" onClick={() => hasNext ? onLoad(nextPage) : void(0)}>
                <i className="fa fa-chevron-right"></i>
            </div>
        </div>
     );
}
 
export default Pagination;