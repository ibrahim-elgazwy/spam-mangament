import http from "./httpService";
import { baseUrl } from "../config.json";

const reportUrl = baseUrl + "/reports";

function getAllReports() {
    return http.get(reportUrl);
}

function getReportsByState(state, page=0) {
    return http.get(`${reportUrl}/${state}?page=${page}`);
}

function blockReport(reportId) {
    return http.delete((`${reportUrl}/${500}`));
}

function updateReportState(reportId, ticke7tState) {
    return http.put(`${reportUrl}/${reportId}`, {ticke7tState});
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