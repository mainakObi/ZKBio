import mongoose from "mongoose";

const { Schema } = mongoose;

const attendanceSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ["Present", "Absent", "On Leave"],
      default: "Present",
    },
    checkInTime: {
      type: Date,
    },
    checkOutTime: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Attendance || mongoose.model("Attendance", attendanceSchema);
