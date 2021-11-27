import React, { useEffect, useState } from "react";
import reportService from "../services/reportService";
import reportStateEnum from "../enums/reportStateEnum.js"
import ReportDetail from "./reportDetail";
import Pagination from "./pagination";

const Reports = () => {
    const [reportsData, setReportsData] = useState({
        reports: [],
        paging: {}
    });
    
    const [loading, setLoading] = useState(true);

    const onResolve = async (reportId) => {
        await reportService.updateReportState(reportId, reportStateEnum.CLOSED);
        hideBlockAndResolvedReport(reportId);
    }

    const onBlock = async(reportId) => {
        await reportService.blockReport(reportId);
        hideBlockAndResolvedReport(reportId);
    }

    const hideBlockAndResolvedReport = (reportId) => {
        const reports = reportsData.reports.filter(report => report.id !== reportId);
        setReportsData({...reportsData, reports});
        if(reports && reports.length === 0) loadRepors(0);
    }

    const renderReports = () => {
        const {reports} = reportsData;
        if(reports && reports.length > 0)
            return reports.map(report => <ReportDetail 
                    key={report.id}
                    report={report} 
                    onBlock={onBlock} 
                    onResolve={onResolve} />);

        return  !loading ? (<p>There  is no reports founded!</p>) : <></>;
    }

    const showPagination = () => {
        const {reports, paging} = reportsData;
        const {totalPages} = paging;
        if((reports && reports.length > 0) && totalPages > 1) 
            return (
                <Pagination onLoad={loadRepors} paging={paging} />
            );
    }

    const loadRepors = async(page) => {
        const result = await reportService.getReportsByState(reportStateEnum.OPEN, page);
        if(result) {
            const {data, paging} = result;
            setReportsData({reports: data, paging});
        }
    }

    useEffect(() => {
        (async () => {
            await loadRepors(0);
            setLoading(false);
        })();
    }, []);

    return ( 
        <>
            <div className="reports">
                <h2>Reports</h2>
                {renderReports()}
                {showPagination()}
            </div>
            
        </>
     );
}
 
export default Reports;