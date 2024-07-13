import nc from "next-connect";
import { getAttendanceRecordById, updateAttendanceRecord, deleteAttendanceRecord } from "../../../controllers/attendanceController";

const handler = nc()
  .get(getAttendanceRecordById)
  .put(updateAttendanceRecord)
  .delete(deleteAttendanceRecord);

export default handler;
