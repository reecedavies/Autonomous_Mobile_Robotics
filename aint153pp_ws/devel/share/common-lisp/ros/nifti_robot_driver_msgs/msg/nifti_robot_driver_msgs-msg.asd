
(cl:in-package :asdf)

(defsystem "nifti_robot_driver_msgs-msg"
  :depends-on (:roslisp-msg-protocol :roslisp-utils :std_msgs-msg
)
  :components ((:file "_package")
    (:file "ControllersStatus" :depends-on ("_package_ControllersStatus"))
    (:file "_package_ControllersStatus" :depends-on ("_package"))
    (:file "Currents" :depends-on ("_package_Currents"))
    (:file "_package_Currents" :depends-on ("_package"))
    (:file "CurrentsStamped" :depends-on ("_package_CurrentsStamped"))
    (:file "_package_CurrentsStamped" :depends-on ("_package"))
    (:file "FlipperCommand" :depends-on ("_package_FlipperCommand"))
    (:file "_package_FlipperCommand" :depends-on ("_package"))
    (:file "FlippersState" :depends-on ("_package_FlippersState"))
    (:file "_package_FlippersState" :depends-on ("_package"))
    (:file "FlippersStateStamped" :depends-on ("_package_FlippersStateStamped"))
    (:file "_package_FlippersStateStamped" :depends-on ("_package"))
    (:file "FlippersTorque" :depends-on ("_package_FlippersTorque"))
    (:file "_package_FlippersTorque" :depends-on ("_package"))
    (:file "FlippersTorqueStamped" :depends-on ("_package_FlippersTorqueStamped"))
    (:file "_package_FlippersTorqueStamped" :depends-on ("_package"))
    (:file "FlippersVel" :depends-on ("_package_FlippersVel"))
    (:file "_package_FlippersVel" :depends-on ("_package"))
    (:file "FlippersVelStamped" :depends-on ("_package_FlippersVelStamped"))
    (:file "_package_FlippersVelStamped" :depends-on ("_package"))
    (:file "RobotStatus" :depends-on ("_package_RobotStatus"))
    (:file "_package_RobotStatus" :depends-on ("_package"))
    (:file "RobotStatusStamped" :depends-on ("_package_RobotStatusStamped"))
    (:file "_package_RobotStatusStamped" :depends-on ("_package"))
    (:file "Tracks" :depends-on ("_package_Tracks"))
    (:file "_package_Tracks" :depends-on ("_package"))
    (:file "TracksStamped" :depends-on ("_package_TracksStamped"))
    (:file "_package_TracksStamped" :depends-on ("_package"))
  ))