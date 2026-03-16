import chatJson from '~root/mock/modules/chat.mock'
import CoinsJson from '~root/mock/modules/coins.mock'
import CommentJson from '~root/mock/modules/comment.mock'
import DynamicJson from '~root/mock/modules/dynamic.mock'
import messageJson from '~root/mock/modules/message.mock'
import ReportJson from '~root/mock/modules/report.mock'
import StyleJson from '~root/mock/modules/style.mock'
import UserListJson from '~root/mock/modules/user-list.mock'
import UserJson from '~root/mock/modules/user.mock'

/** 全局样式配置 */
window.styleJson = window.styleJson || StyleJson

/** 当前登录人用户信息 */
window.userJson = window.userJson || UserJson

/** 动态数据列表 */
window.dynamicJson = window.dynamicJson || DynamicJson

/** 评论数据列表 */
window.commentJson = window.commentJson || CommentJson

/** 所有用户数据列表 */
window.userListJson = window.userListJson || UserListJson

/** 聊天列表数据 */
window.chatListJson = window.chatListJson || chatJson

/** 聊天消息列表 */
window.messageListJson = window.messageListJson || messageJson

/** 金币数据 */
window.coinListJson = window.coinListJson || CoinsJson

window.privacyAgreementJson = window.privacyAgreementJson || '说明'
window.userAgreementJson = window.userAgreementJson || '说明'

/** 举报选项 */
window.reportListJson = window.reportListJson || ReportJson

/** 发布图片选项 */
window.publishImageListJson = window.publishImageListJson || [
  { name: 'Hobbies', value: 0 },
  { name: 'Inspire', value: 1 }
]

/** 聊天机器人说明 */
window.chatBotDesc = window.chatBotDesc || {
  title: 'Fashion AI',
  content: 'Hey there! \'m Leepy, your stylish AI companion, here to dive into the world of fashion with you. Whether you\'re into casual looks, professional outfits, or bold street style, I’m here to explore the latest trends, share helpful styling tips, and make sure you always feel confident and chic. Ready to step up your fashion game? Let’s have fun experimenting with new looks and discovering fresh ways to express yourself through style!',
  points: 200
}
