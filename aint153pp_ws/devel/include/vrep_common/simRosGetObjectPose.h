// Generated by gencpp from file vrep_common/simRosGetObjectPose.msg
// DO NOT EDIT!


#ifndef VREP_COMMON_MESSAGE_SIMROSGETOBJECTPOSE_H
#define VREP_COMMON_MESSAGE_SIMROSGETOBJECTPOSE_H

#include <ros/service_traits.h>


#include <vrep_common/simRosGetObjectPoseRequest.h>
#include <vrep_common/simRosGetObjectPoseResponse.h>


namespace vrep_common
{

struct simRosGetObjectPose
{

typedef simRosGetObjectPoseRequest Request;
typedef simRosGetObjectPoseResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct simRosGetObjectPose
} // namespace vrep_common


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::vrep_common::simRosGetObjectPose > {
  static const char* value()
  {
    return "dcc153fe8e4754d793983e414eb1b664";
  }

  static const char* value(const ::vrep_common::simRosGetObjectPose&) { return value(); }
};

template<>
struct DataType< ::vrep_common::simRosGetObjectPose > {
  static const char* value()
  {
    return "vrep_common/simRosGetObjectPose";
  }

  static const char* value(const ::vrep_common::simRosGetObjectPose&) { return value(); }
};


// service_traits::MD5Sum< ::vrep_common::simRosGetObjectPoseRequest> should match 
// service_traits::MD5Sum< ::vrep_common::simRosGetObjectPose > 
template<>
struct MD5Sum< ::vrep_common::simRosGetObjectPoseRequest>
{
  static const char* value()
  {
    return MD5Sum< ::vrep_common::simRosGetObjectPose >::value();
  }
  static const char* value(const ::vrep_common::simRosGetObjectPoseRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::vrep_common::simRosGetObjectPoseRequest> should match 
// service_traits::DataType< ::vrep_common::simRosGetObjectPose > 
template<>
struct DataType< ::vrep_common::simRosGetObjectPoseRequest>
{
  static const char* value()
  {
    return DataType< ::vrep_common::simRosGetObjectPose >::value();
  }
  static const char* value(const ::vrep_common::simRosGetObjectPoseRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::vrep_common::simRosGetObjectPoseResponse> should match 
// service_traits::MD5Sum< ::vrep_common::simRosGetObjectPose > 
template<>
struct MD5Sum< ::vrep_common::simRosGetObjectPoseResponse>
{
  static const char* value()
  {
    return MD5Sum< ::vrep_common::simRosGetObjectPose >::value();
  }
  static const char* value(const ::vrep_common::simRosGetObjectPoseResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::vrep_common::simRosGetObjectPoseResponse> should match 
// service_traits::DataType< ::vrep_common::simRosGetObjectPose > 
template<>
struct DataType< ::vrep_common::simRosGetObjectPoseResponse>
{
  static const char* value()
  {
    return DataType< ::vrep_common::simRosGetObjectPose >::value();
  }
  static const char* value(const ::vrep_common::simRosGetObjectPoseResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // VREP_COMMON_MESSAGE_SIMROSGETOBJECTPOSE_H
