// controllers/attendanceController.js

import Attendance from "../models/Attendance";

// Create Attendance Record
export const createAttendance = async (req, res) => {
  try {
    const { user, date, status, checkInTime, checkOutTime } = req.body;
    const attendance = new Attendance({ user, date, status, checkInTime, checkOutTime });
    await attendance.save();
    res.status(201).json(attendance);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Attendance Records
export const getAttendanceRecords = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate("user", "email");
    res.status(200).json(attendanceRecords);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get Attendance Record by ID
export const getAttendanceRecordById = async (req, res) => {
  try {
    const { id } = req.query;
    const attendanceRecord = await Attendance.findById(id).populate("user", "email");
    if (!attendanceRecord) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json(attendanceRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update Attendance Record
export const updateAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.query;
    const { user, date, status, checkInTime, checkOutTime } = req.body;
    const attendanceRecord = await Attendance.findByIdAndUpdate(
      id,
      { user, date, status, checkInTime, checkOutTime },
      { new: true, runValidators: true }
    );
    if (!attendanceRecord) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json(attendanceRecord);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete Attendance Record
export const deleteAttendanceRecord = async (req, res) => {
  try {
    const { id } = req.query;
    const attendanceRecord = await Attendance.findByIdAndDelete(id);
    if (!attendanceRecord) {
      return res.status(404).json({ message: "Attendance record not found" });
    }
    res.status(200).json({ message: "Attendance record deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
