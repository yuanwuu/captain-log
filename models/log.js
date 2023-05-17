const { Schema, model } = require("mongoose");
const logsSchema = new Schema(
  {
    title: String,
    entry: String,
    shipIsBroken: Boolean,
  },
  { timestamps: true }
);
const Log = model("Log", logsSchema);
module.exports = Log;