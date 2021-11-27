import http from "./httpService";
import { baseUrl } from "../config.json";

const reportUrl = baseUrl + "/reports";
const { get, put, post, httpDelete, showToastifyLoading} = http;

function getReportsByState(state, page=0) {
    const fetchReports = get(`${reportUrl}/${state}?page=${page}`);
    showToastifyLoading(fetchReports);
    return fetchReports;
}

function blockReport(reportId) {
    const blockReq = httpDelete((`${reportUrl}/${reportId}`));

    showToastifyLoading(blockReq, 
        `Trying to block report ${reportId}`,
        `Report ${reportId} is Blocked`,
        `Something went wrong 🤯`);

    return blockReq;
}

function updateReportState(reportId, ticketState) {
    const resolveReq =  put(`${reportUrl}/${reportId}`, {ticketState});

    showToastifyLoading(resolveReq, 
        `Trying to Resolve report ${reportId}`,
        `Report ${reportId} is Resolved`,
        `Something went wrong 🤯`);

    return resolveReq;
}

function getAllReports() {
    return get(reportUrl);
}

function addListOfNewReports(reports) {
    return post(`${reportUrl}/addListOfNewReports`, reports);
}

const reportService = {
    getAllReports,
    getReportsByState,
    blockReport,
    updateReportState,
    addListOfNewReports
};

export default reportService;