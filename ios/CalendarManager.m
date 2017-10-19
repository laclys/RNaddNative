#import "CalendarManager.h"
@implementation CalendarManager
// 向外暴露CalendarManager
RCT_EXPORT_MODULE();
// 使用RCT_EXPORT_METHOD()宏指令，将方法暴露出。模块在JavaScript中使用时的引用名addEvent,并传递name和location两个参数
RCT_EXPORT_METHOD(addEvent:(NSString *)name location:(NSString *)location)
{
  RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
}

@end
