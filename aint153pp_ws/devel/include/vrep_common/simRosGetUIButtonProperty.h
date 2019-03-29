// Generated by gencpp from file vrep_common/simRosGetUIButtonProperty.msg
// DO NOT EDIT!


#ifndef VREP_COMMON_MESSAGE_SIMROSGETUIBUTTONPROPERTY_H
#define VREP_COMMON_MESSAGE_SIMROSGETUIBUTTONPROPERTY_H

#include <ros/service_traits.h>


#include <vrep_common/simRosGetUIButtonPropertyRequest.h>
#include <vrep_common/simRosGetUIButtonPropertyResponse.h>


namespace vrep_common
{

struct simRosGetUIButtonProperty
{

typedef simRosGetUIButtonPropertyRequest Request;
typedef simRosGetUIButtonPropertyResponse Response;
Request request;
Response response;

typedef Request RequestType;
typedef Response ResponseType;

}; // struct simRosGetUIButtonProperty
} // namespace vrep_common


namespace ros
{
namespace service_traits
{


template<>
struct MD5Sum< ::vrep_common::simRosGetUIButtonProperty > {
  static const char* value()
  {
    return "3c5af3530571fd8a5d18090795eb3f0c";
  }

  static const char* value(const ::vrep_common::simRosGetUIButtonProperty&) { return value(); }
};

template<>
struct DataType< ::vrep_common::simRosGetUIButtonProperty > {
  static const char* value()
  {
    return "vrep_common/simRosGetUIButtonProperty";
  }

  static const char* value(const ::vrep_common::simRosGetUIButtonProperty&) { return value(); }
};


// service_traits::MD5Sum< ::vrep_common::simRosGetUIButtonPropertyRequest> should match 
// service_traits::MD5Sum< ::vrep_common::simRosGetUIButtonProperty > 
template<>
struct MD5Sum< ::vrep_common::simRosGetUIButtonPropertyRequest>
{
  static const char* value()
  {
    return MD5Sum< ::vrep_common::simRosGetUIButtonProperty >::value();
  }
  static const char* value(const ::vrep_common::simRosGetUIButtonPropertyRequest&)
  {
    return value();
  }
};

// service_traits::DataType< ::vrep_common::simRosGetUIButtonPropertyRequest> should match 
// service_traits::DataType< ::vrep_common::simRosGetUIButtonProperty > 
template<>
struct DataType< ::vrep_common::simRosGetUIButtonPropertyRequest>
{
  static const char* value()
  {
    return DataType< ::vrep_common::simRosGetUIButtonProperty >::value();
  }
  static const char* value(const ::vrep_common::simRosGetUIButtonPropertyRequest&)
  {
    return value();
  }
};

// service_traits::MD5Sum< ::vrep_common::simRosGetUIButtonPropertyResponse> should match 
// service_traits::MD5Sum< ::vrep_common::simRosGetUIButtonProperty > 
template<>
struct MD5Sum< ::vrep_common::simRosGetUIButtonPropertyResponse>
{
  static const char* value()
  {
    return MD5Sum< ::vrep_common::simRosGetUIButtonProperty >::value();
  }
  static const char* value(const ::vrep_common::simRosGetUIButtonPropertyResponse&)
  {
    return value();
  }
};

// service_traits::DataType< ::vrep_common::simRosGetUIButtonPropertyResponse> should match 
// service_traits::DataType< ::vrep_common::simRosGetUIButtonProperty > 
template<>
struct DataType< ::vrep_common::simRosGetUIButtonPropertyResponse>
{
  static const char* value()
  {
    return DataType< ::vrep_common::simRosGetUIButtonProperty >::value();
  }
  static const char* value(const ::vrep_common::simRosGetUIButtonPropertyResponse&)
  {
    return value();
  }
};

} // namespace service_traits
} // namespace ros

#endif // VREP_COMMON_MESSAGE_SIMROSGETUIBUTTONPROPERTY_H
