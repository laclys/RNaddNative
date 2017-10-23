#import "CalendarManager.h"
@implementation CalendarManager
// 向外暴露CalendarManager
RCT_EXPORT_MODULE();
// 使用RCT_EXPORT_METHOD()宏指令，将方法暴露出。模块在JavaScript中使用时的引用名addEvent,并传递name和location两个参数
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}
//对外提供调用方法,为了演示事件时间格式化 自动类型转换
// NSLog 是在xcode里；RCTLogInfo暴露出去log方法在网页调试中看到
RCT_EXPORT_METHOD(addEventMoreDate:(NSString *)name location:(NSString *)location date:(NSDate *)date)
{
   NSDateFormatter *formatter = [[NSDateFormatter alloc] init] ;
  [formatter setDateFormat:@"yyyy-MM-dd"];
   RCTLogInfo(@"获取的事件信息:%@,地点:%@,时间:%@",name,location,[formatter stringFromDate:date]);
}
//对外提供调用方法,为了演示事件时间格式化 传入属性字段
RCT_EXPORT_METHOD(addEventMoreDetails:(NSString *)name details:(NSDictionary *) dictionary)
{
  NSString *location = [RCTConvert NSString:dictionary[@"location"]];
  NSDate *time = [RCTConvert NSDate:dictionary[@"time"]];
  NSString *description=[RCTConvert NSString:dictionary[@"description"]];
  NSLog(@"获取的事件信息:%@,地点:%@,时间:%@,备注信息:%@",name,location,time,description);
 
}
@end
