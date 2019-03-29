
"use strict";

let simRosPauseSimulation = require('./simRosPauseSimulation.js')
let simRosGetCollectionHandle = require('./simRosGetCollectionHandle.js')
let simRosEraseFile = require('./simRosEraseFile.js')
let simRosSetArrayParameter = require('./simRosSetArrayParameter.js')
let simRosGetInfo = require('./simRosGetInfo.js')
let simRosLoadModel = require('./simRosLoadModel.js')
let simRosSetFloatSignal = require('./simRosSetFloatSignal.js')
let simRosGetUIEventButton = require('./simRosGetUIEventButton.js')
let simRosGetArrayParameter = require('./simRosGetArrayParameter.js')
let simRosRemoveModel = require('./simRosRemoveModel.js')
let simRosAppendStringSignal = require('./simRosAppendStringSignal.js')
let simRosEnablePublisher = require('./simRosEnablePublisher.js')
let simRosClearStringSignal = require('./simRosClearStringSignal.js')
let simRosReadVisionSensor = require('./simRosReadVisionSensor.js')
let simRosGetObjectChild = require('./simRosGetObjectChild.js')
let simRosAuxiliaryConsoleOpen = require('./simRosAuxiliaryConsoleOpen.js')
let simRosSetUIButtonLabel = require('./simRosSetUIButtonLabel.js')
let simRosCopyPasteObjects = require('./simRosCopyPasteObjects.js')
let simRosGetObjectParent = require('./simRosGetObjectParent.js')
let simRosGetIntegerParameter = require('./simRosGetIntegerParameter.js')
let simRosGetJointMatrix = require('./simRosGetJointMatrix.js')
let simRosGetObjectSelection = require('./simRosGetObjectSelection.js')
let simRosSetJointForce = require('./simRosSetJointForce.js')
let simRosTransferFile = require('./simRosTransferFile.js')
let simRosGetObjectPose = require('./simRosGetObjectPose.js')
let simRosReadProximitySensor = require('./simRosReadProximitySensor.js')
let simRosGetUISlider = require('./simRosGetUISlider.js')
let simRosGetCollisionHandle = require('./simRosGetCollisionHandle.js')
let simRosClearIntegerSignal = require('./simRosClearIntegerSignal.js')
let simRosSetBooleanParameter = require('./simRosSetBooleanParameter.js')
let simRosDisablePublisher = require('./simRosDisablePublisher.js')
let simRosSetJointState = require('./simRosSetJointState.js')
let simRosSetObjectPosition = require('./simRosSetObjectPosition.js')
let simRosGetDistanceHandle = require('./simRosGetDistanceHandle.js')
let simRosGetStringParameter = require('./simRosGetStringParameter.js')
let simRosGetDialogResult = require('./simRosGetDialogResult.js')
let simRosSetIntegerSignal = require('./simRosSetIntegerSignal.js')
let simRosSynchronous = require('./simRosSynchronous.js')
let simRosSetStringSignal = require('./simRosSetStringSignal.js')
let simRosLoadUI = require('./simRosLoadUI.js')
let simRosGetVisionSensorDepthBuffer = require('./simRosGetVisionSensorDepthBuffer.js')
let simRosBreakForceSensor = require('./simRosBreakForceSensor.js')
let simRosGetUIButtonProperty = require('./simRosGetUIButtonProperty.js')
let simRosSetUIButtonProperty = require('./simRosSetUIButtonProperty.js')
let simRosAuxiliaryConsoleClose = require('./simRosAuxiliaryConsoleClose.js')
let simRosAddStatusbarMessage = require('./simRosAddStatusbarMessage.js')
let simRosGetObjectFloatParameter = require('./simRosGetObjectFloatParameter.js')
let simRosCloseScene = require('./simRosCloseScene.js')
let simRosLoadScene = require('./simRosLoadScene.js')
let simRosRemoveUI = require('./simRosRemoveUI.js')
let simRosGetBooleanParameter = require('./simRosGetBooleanParameter.js')
let simRosGetModelProperty = require('./simRosGetModelProperty.js')
let simRosGetFloatingParameter = require('./simRosGetFloatingParameter.js')
let simRosGetObjectGroupData = require('./simRosGetObjectGroupData.js')
let simRosGetFloatSignal = require('./simRosGetFloatSignal.js')
let simRosCreateDummy = require('./simRosCreateDummy.js')
let simRosSetIntegerParameter = require('./simRosSetIntegerParameter.js')
let simRosReadForceSensor = require('./simRosReadForceSensor.js')
let simRosSetJointPosition = require('./simRosSetJointPosition.js')
let simRosSetObjectPose = require('./simRosSetObjectPose.js')
let simRosEndDialog = require('./simRosEndDialog.js')
let simRosAuxiliaryConsolePrint = require('./simRosAuxiliaryConsolePrint.js')
let simRosSetObjectFloatParameter = require('./simRosSetObjectFloatParameter.js')
let simRosDisplayDialog = require('./simRosDisplayDialog.js')
let simRosClearFloatSignal = require('./simRosClearFloatSignal.js')
let simRosDisableSubscriber = require('./simRosDisableSubscriber.js')
let simRosGetDialogInput = require('./simRosGetDialogInput.js')
let simRosSetModelProperty = require('./simRosSetModelProperty.js')
let simRosGetIntegerSignal = require('./simRosGetIntegerSignal.js')
let simRosAuxiliaryConsoleShow = require('./simRosAuxiliaryConsoleShow.js')
let simRosSetObjectQuaternion = require('./simRosSetObjectQuaternion.js')
let simRosSetFloatingParameter = require('./simRosSetFloatingParameter.js')
let simRosReadDistance = require('./simRosReadDistance.js')
let simRosGetLastErrors = require('./simRosGetLastErrors.js')
let simRosStopSimulation = require('./simRosStopSimulation.js')
let simRosSetObjectParent = require('./simRosSetObjectParent.js')
let simRosGetVisionSensorImage = require('./simRosGetVisionSensorImage.js')
let simRosGetJointState = require('./simRosGetJointState.js')
let simRosGetAndClearStringSignal = require('./simRosGetAndClearStringSignal.js')
let simRosSetUISlider = require('./simRosSetUISlider.js')
let simRosSetObjectSelection = require('./simRosSetObjectSelection.js')
let simRosCallScriptFunction = require('./simRosCallScriptFunction.js')
let simRosGetUIHandle = require('./simRosGetUIHandle.js')
let simRosSetJointTargetPosition = require('./simRosSetJointTargetPosition.js')
let simRosEnableSubscriber = require('./simRosEnableSubscriber.js')
let simRosGetObjectHandle = require('./simRosGetObjectHandle.js')
let simRosSetVisionSensorImage = require('./simRosSetVisionSensorImage.js')
let simRosReadCollision = require('./simRosReadCollision.js')
let simRosSetJointTargetVelocity = require('./simRosSetJointTargetVelocity.js')
let simRosSetSphericalJointMatrix = require('./simRosSetSphericalJointMatrix.js')
let simRosGetStringSignal = require('./simRosGetStringSignal.js')
let simRosSetObjectIntParameter = require('./simRosSetObjectIntParameter.js')
let simRosRemoveObject = require('./simRosRemoveObject.js')
let simRosStartSimulation = require('./simRosStartSimulation.js')
let simRosSynchronousTrigger = require('./simRosSynchronousTrigger.js')
let simRosGetObjectIntParameter = require('./simRosGetObjectIntParameter.js')
let simRosGetObjects = require('./simRosGetObjects.js')

module.exports = {
  simRosPauseSimulation: simRosPauseSimulation,
  simRosGetCollectionHandle: simRosGetCollectionHandle,
  simRosEraseFile: simRosEraseFile,
  simRosSetArrayParameter: simRosSetArrayParameter,
  simRosGetInfo: simRosGetInfo,
  simRosLoadModel: simRosLoadModel,
  simRosSetFloatSignal: simRosSetFloatSignal,
  simRosGetUIEventButton: simRosGetUIEventButton,
  simRosGetArrayParameter: simRosGetArrayParameter,
  simRosRemoveModel: simRosRemoveModel,
  simRosAppendStringSignal: simRosAppendStringSignal,
  simRosEnablePublisher: simRosEnablePublisher,
  simRosClearStringSignal: simRosClearStringSignal,
  simRosReadVisionSensor: simRosReadVisionSensor,
  simRosGetObjectChild: simRosGetObjectChild,
  simRosAuxiliaryConsoleOpen: simRosAuxiliaryConsoleOpen,
  simRosSetUIButtonLabel: simRosSetUIButtonLabel,
  simRosCopyPasteObjects: simRosCopyPasteObjects,
  simRosGetObjectParent: simRosGetObjectParent,
  simRosGetIntegerParameter: simRosGetIntegerParameter,
  simRosGetJointMatrix: simRosGetJointMatrix,
  simRosGetObjectSelection: simRosGetObjectSelection,
  simRosSetJointForce: simRosSetJointForce,
  simRosTransferFile: simRosTransferFile,
  simRosGetObjectPose: simRosGetObjectPose,
  simRosReadProximitySensor: simRosReadProximitySensor,
  simRosGetUISlider: simRosGetUISlider,
  simRosGetCollisionHandle: simRosGetCollisionHandle,
  simRosClearIntegerSignal: simRosClearIntegerSignal,
  simRosSetBooleanParameter: simRosSetBooleanParameter,
  simRosDisablePublisher: simRosDisablePublisher,
  simRosSetJointState: simRosSetJointState,
  simRosSetObjectPosition: simRosSetObjectPosition,
  simRosGetDistanceHandle: simRosGetDistanceHandle,
  simRosGetStringParameter: simRosGetStringParameter,
  simRosGetDialogResult: simRosGetDialogResult,
  simRosSetIntegerSignal: simRosSetIntegerSignal,
  simRosSynchronous: simRosSynchronous,
  simRosSetStringSignal: simRosSetStringSignal,
  simRosLoadUI: simRosLoadUI,
  simRosGetVisionSensorDepthBuffer: simRosGetVisionSensorDepthBuffer,
  simRosBreakForceSensor: simRosBreakForceSensor,
  simRosGetUIButtonProperty: simRosGetUIButtonProperty,
  simRosSetUIButtonProperty: simRosSetUIButtonProperty,
  simRosAuxiliaryConsoleClose: simRosAuxiliaryConsoleClose,
  simRosAddStatusbarMessage: simRosAddStatusbarMessage,
  simRosGetObjectFloatParameter: simRosGetObjectFloatParameter,
  simRosCloseScene: simRosCloseScene,
  simRosLoadScene: simRosLoadScene,
  simRosRemoveUI: simRosRemoveUI,
  simRosGetBooleanParameter: simRosGetBooleanParameter,
  simRosGetModelProperty: simRosGetModelProperty,
  simRosGetFloatingParameter: simRosGetFloatingParameter,
  simRosGetObjectGroupData: simRosGetObjectGroupData,
  simRosGetFloatSignal: simRosGetFloatSignal,
  simRosCreateDummy: simRosCreateDummy,
  simRosSetIntegerParameter: simRosSetIntegerParameter,
  simRosReadForceSensor: simRosReadForceSensor,
  simRosSetJointPosition: simRosSetJointPosition,
  simRosSetObjectPose: simRosSetObjectPose,
  simRosEndDialog: simRosEndDialog,
  simRosAuxiliaryConsolePrint: simRosAuxiliaryConsolePrint,
  simRosSetObjectFloatParameter: simRosSetObjectFloatParameter,
  simRosDisplayDialog: simRosDisplayDialog,
  simRosClearFloatSignal: simRosClearFloatSignal,
  simRosDisableSubscriber: simRosDisableSubscriber,
  simRosGetDialogInput: simRosGetDialogInput,
  simRosSetModelProperty: simRosSetModelProperty,
  simRosGetIntegerSignal: simRosGetIntegerSignal,
  simRosAuxiliaryConsoleShow: simRosAuxiliaryConsoleShow,
  simRosSetObjectQuaternion: simRosSetObjectQuaternion,
  simRosSetFloatingParameter: simRosSetFloatingParameter,
  simRosReadDistance: simRosReadDistance,
  simRosGetLastErrors: simRosGetLastErrors,
  simRosStopSimulation: simRosStopSimulation,
  simRosSetObjectParent: simRosSetObjectParent,
  simRosGetVisionSensorImage: simRosGetVisionSensorImage,
  simRosGetJointState: simRosGetJointState,
  simRosGetAndClearStringSignal: simRosGetAndClearStringSignal,
  simRosSetUISlider: simRosSetUISlider,
  simRosSetObjectSelection: simRosSetObjectSelection,
  simRosCallScriptFunction: simRosCallScriptFunction,
  simRosGetUIHandle: simRosGetUIHandle,
  simRosSetJointTargetPosition: simRosSetJointTargetPosition,
  simRosEnableSubscriber: simRosEnableSubscriber,
  simRosGetObjectHandle: simRosGetObjectHandle,
  simRosSetVisionSensorImage: simRosSetVisionSensorImage,
  simRosReadCollision: simRosReadCollision,
  simRosSetJointTargetVelocity: simRosSetJointTargetVelocity,
  simRosSetSphericalJointMatrix: simRosSetSphericalJointMatrix,
  simRosGetStringSignal: simRosGetStringSignal,
  simRosSetObjectIntParameter: simRosSetObjectIntParameter,
  simRosRemoveObject: simRosRemoveObject,
  simRosStartSimulation: simRosStartSimulation,
  simRosSynchronousTrigger: simRosSynchronousTrigger,
  simRosGetObjectIntParameter: simRosGetObjectIntParameter,
  simRosGetObjects: simRosGetObjects,
};
