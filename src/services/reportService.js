import http from "./httpService";
import { baseUrl } from "../config.json";

const reportUrl = baseUrl + "/reports";

function getAllReports() {
    return http.get(reportUrl);
}

function getReportsByState(state, page=0) {
    const fetchReports = http.get(`${reportUrl}/${state}?page=${page}`);
    http.showToastifyLoading(fetchReports);
    return fetchReports;
}

function blockReport(reportId) {
    return http.delete((`${reportUrl}/${reportId}`));
}

function updateReportState(reportId, ticketState) {
    return http.put(`${reportUrl}/${reportId}`, {ticketState});
}

function addListOfNewReports(reports) {
    return http.post(`${reportUrl}/addListOfNewReports`, reports);
}

const reportService = {
    getAllReports,
    getReportsByState,
    blockReport,
    updateReportState,
    addListOfNewReports
};

export default reportService;