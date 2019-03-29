
"use strict";

let VisionSensorDepthBuff = require('./VisionSensorDepthBuff.js');
let VisionSensorData = require('./VisionSensorData.js');
let VrepInfo = require('./VrepInfo.js');
let ProximitySensorData = require('./ProximitySensorData.js');
let JointSetStateData = require('./JointSetStateData.js');
let ObjectGroupData = require('./ObjectGroupData.js');
let ForceSensorData = require('./ForceSensorData.js');
let ScriptFunctionCallData = require('./ScriptFunctionCallData.js');

module.exports = {
  VisionSensorDepthBuff: VisionSensorDepthBuff,
  VisionSensorData: VisionSensorData,
  VrepInfo: VrepInfo,
  ProximitySensorData: ProximitySensorData,
  JointSetStateData: JointSetStateData,
  ObjectGroupData: ObjectGroupData,
  ForceSensorData: ForceSensorData,
  ScriptFunctionCallData: ScriptFunctionCallData,
};
