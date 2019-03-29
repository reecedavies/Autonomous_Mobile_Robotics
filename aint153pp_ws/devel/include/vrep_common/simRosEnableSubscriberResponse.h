// Generated by gencpp from file vrep_common/simRosEnableSubscriberResponse.msg
// DO NOT EDIT!


#ifndef VREP_COMMON_MESSAGE_SIMROSENABLESUBSCRIBERRESPONSE_H
#define VREP_COMMON_MESSAGE_SIMROSENABLESUBSCRIBERRESPONSE_H


#include <string>
#include <vector>
#include <map>

#include <ros/types.h>
#include <ros/serialization.h>
#include <ros/builtin_message_traits.h>
#include <ros/message_operations.h>


namespace vrep_common
{
template <class ContainerAllocator>
struct simRosEnableSubscriberResponse_
{
  typedef simRosEnableSubscriberResponse_<ContainerAllocator> Type;

  simRosEnableSubscriberResponse_()
    : subscriberID(0)  {
    }
  simRosEnableSubscriberResponse_(const ContainerAllocator& _alloc)
    : subscriberID(0)  {
  (void)_alloc;
    }



   typedef int32_t _subscriberID_type;
  _subscriberID_type subscriberID;




  typedef boost::shared_ptr< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> > Ptr;
  typedef boost::shared_ptr< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> const> ConstPtr;

}; // struct simRosEnableSubscriberResponse_

typedef ::vrep_common::simRosEnableSubscriberResponse_<std::allocator<void> > simRosEnableSubscriberResponse;

typedef boost::shared_ptr< ::vrep_common::simRosEnableSubscriberResponse > simRosEnableSubscriberResponsePtr;
typedef boost::shared_ptr< ::vrep_common::simRosEnableSubscriberResponse const> simRosEnableSubscriberResponseConstPtr;

// constants requiring out of line definition



template<typename ContainerAllocator>
std::ostream& operator<<(std::ostream& s, const ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> & v)
{
ros::message_operations::Printer< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >::stream(s, "", v);
return s;
}

} // namespace vrep_common

namespace ros
{
namespace message_traits
{



// BOOLTRAITS {'IsFixedSize': True, 'IsMessage': True, 'HasHeader': False}
// {'sensor_msgs': ['/opt/ros/kinetic/share/sensor_msgs/cmake/../msg'], 'std_msgs': ['/opt/ros/kinetic/share/std_msgs/cmake/../msg'], 'geometry_msgs': ['/opt/ros/kinetic/share/geometry_msgs/cmake/../msg'], 'vrep_common': ['/home/student/Desktop/RDavies/aint153pp_ws/src/vrep_common/msg']}

// !!!!!!!!!!! ['__class__', '__delattr__', '__dict__', '__doc__', '__eq__', '__format__', '__getattribute__', '__hash__', '__init__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', '_parsed_fields', 'constants', 'fields', 'full_name', 'has_header', 'header_present', 'names', 'package', 'parsed_fields', 'short_name', 'text', 'types']




template <class ContainerAllocator>
struct IsFixedSize< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsFixedSize< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
  : TrueType
  { };

template <class ContainerAllocator>
struct IsMessage< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> const>
  : TrueType
  { };

template <class ContainerAllocator>
struct HasHeader< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
  : FalseType
  { };

template <class ContainerAllocator>
struct HasHeader< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> const>
  : FalseType
  { };


template<class ContainerAllocator>
struct MD5Sum< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "62d69ecf284a2ca70f446f9db0533ca8";
  }

  static const char* value(const ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator>&) { return value(); }
  static const uint64_t static_value1 = 0x62d69ecf284a2ca7ULL;
  static const uint64_t static_value2 = 0x0f446f9db0533ca8ULL;
};

template<class ContainerAllocator>
struct DataType< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "vrep_common/simRosEnableSubscriberResponse";
  }

  static const char* value(const ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator>&) { return value(); }
};

template<class ContainerAllocator>
struct Definition< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
{
  static const char* value()
  {
    return "int32 subscriberID\n\
\n\
";
  }

  static const char* value(const ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator>&) { return value(); }
};

} // namespace message_traits
} // namespace ros

namespace ros
{
namespace serialization
{

  template<class ContainerAllocator> struct Serializer< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
  {
    template<typename Stream, typename T> inline static void allInOne(Stream& stream, T m)
    {
      stream.next(m.subscriberID);
    }

    ROS_DECLARE_ALLINONE_SERIALIZER
  }; // struct simRosEnableSubscriberResponse_

} // namespace serialization
} // namespace ros

namespace ros
{
namespace message_operations
{

template<class ContainerAllocator>
struct Printer< ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator> >
{
  template<typename Stream> static void stream(Stream& s, const std::string& indent, const ::vrep_common::simRosEnableSubscriberResponse_<ContainerAllocator>& v)
  {
    s << indent << "subscriberID: ";
    Printer<int32_t>::stream(s, indent + "  ", v.subscriberID);
  }
};

} // namespace message_operations
} // namespace ros

#endif // VREP_COMMON_MESSAGE_SIMROSENABLESUBSCRIBERRESPONSE_H
