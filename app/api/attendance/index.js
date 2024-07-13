import nc from "next-connect";
import { createAttendance, getAttendanceRecords } from "../../../controllers/attendanceController";

const handler = nc()
  .get(getAttendanceRecords)
  .post(createAttendance);

export default handler;
