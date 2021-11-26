import { toast } from "react-toastify";
import reportService from "../services/reportService";

const reports = [
    {
        "source": "REPORT",
        "state": "OPEN",
        "message": "Sales Report 2021",
        "type": "INFRINGES_PROPERTY"
    },
    {
        "source": "REPORT",
        "state": "OPEN",
        "message": "Sales Report 2021",
        "type": "INFRINGES_PROPERTY"
    },
    {
        "source": "REPORT",
        "state": "OPEN",
        "message": "Sales Report 2021",
        "type": "INFRINGES_PROPERTY"
    },
    {
        "source": "REPORT",
        "state": "OPEN",
        "message": "Sales Report 2021",
        "type": "INFRINGES_PROPERTY"
    },
    {
        "source": "REPORT",
        "state": "OPEN",
        "message": "Sales Report 2021",
        "type": "INFRINGES_PROPERTY"
    }
]

async function addNewReports(reportsList) {
    const newReports = (reportsList && reportsList.length) ? 
        reportsList : [...reports];
    try {
        await reportService.addListOfNewReports(newReports);
    } catch {
        toast.error("An unexpected error occurrred.");
    }
}

export default addNewReports;