/**
 * 样式配置模块
 * 包含整个应用的UI样式配置，用于统一管理各组件的外观样式
 */
export default {
  /** 返回按钮背景图 */
  backImage: '/icons/back.png',
  /** 返回图片大小 */
  backImageSize: {
    width: '40px',
    height: '40px'
  },
  /** 顶部右侧举报图片 */
  reportImage: '/icons/more.png',
  /** 举报图标大小 */
  reportImageSize: {
    width: '40px', // 图标宽度
    height: '40px' // 图标高度
  },
  /** 点赞图标 */
  likeIcon: '/icons/unlike.png',
  likedIcon: '/icons/liked.png',
  /** 点赞图标大小 */
  unlikeImageSize: {
    width: '36px', // 图标宽度
    height: '36px' // 图标高度
  },
  /** 点赞数量文本样式 */
  likeNumTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)'
  },
  /** 用户名文本样式 */
  userNameStyle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'rgba(51, 51, 51, 1)'
  },
  /** 头像样式（页面通用头像，小型的） */
  avatarStyle: { width: '36px', height: '36px' },
  /** 作品文本样式(内容，备注项) */
  proseTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(102, 102, 102, 1)',
    sort: 'left'
  },
  /** 标签样式（如：描述下面的标签） */
  tagStyle: {
    backgroundColor: 'rgba(238, 250, 136, 1)',
    borderRadius: '40px',
    width: '92px',
    height: '26px',
    fontSize: '12px',
    fontWeight: '400',
    color: 'rgba(51, 51, 51, 1)'
  },
  /** 文本输入框（发送内容）样式 */
  inputStyle: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: '40px',
    width: '100%',
    height: '54px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    placeholderCorlor: 'rgba(153, 153, 153, 1)',
    /** 右侧发送图标 */
    sendIcon: '/icons/send.png',
    sendIconWidth: '36px',
    sendIconHeight: '36px'
  },
  /** 表单标题样式 */
  formTitleStyle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(51, 51, 51, 1)',
    marginBottom: '20px'
  },
  /** 表单富文本样式 */
  formRichTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(0, 0, 0, 1)',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    placeholderCorlor: 'rgba(153, 153, 153, 1)'
  },
  /** 表单按钮样式 */
  formBtnStyle: {
    backgroundColor: 'rgba(0, 0, 0, 1)',
    borderRadius: '40px',
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 输入文本样式 */
  inputTextStyle: {
    borderRadius: '16px',
    placeholderCorlor: 'rgba(153, 153, 153, 1)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: 'rgba(255, 255, 255, 1)'
  },
  /** 高亮按钮样式 */
  highlightBtnStyle: {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(0, 0, 0, 1)'
  },
  /** 确认按钮样式 */
  confirmBtnStyle: {
    borderRadius: '40px',
    width: '198px',
    height: '53px',
    fontSize: '20px',
    fontWeight: '700'
  },
  /** 聊天列表样式 */
  chatListStyle: {
    avatarWidth: '44px',
    avatarHeight: '44px',
    borderRadius: '10px',
    /** 发送背景色 */
    sendBgColor: 'rgba(233, 175, 251, 1)',
    /** 接收背景色 */
    receiveBgColor: 'rgba(169, 192, 255, 1)'
  },
  /** 举报按钮 */
  reportBtnStyle: {
    /** 选择项按钮 */
    selectBtnStyle: {
      width: '260px',
      height: '46px'
    },
    /** 取消按钮 */
    cancelBtnStyle: {
      width: '198px',
      height: '53px'
    }
  },
  /** 动态详情页 */
  articleDetailStyle: {
    backgroundColor: 'white'
  },
  /** 发布动态 */
  sendDynamicStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 聊天机器人 */
  chatViewStyle: {
    /** 描述文本颜色 */
    textCorlor: 'rgba(51, 51, 51, 1)',
    backgroundColor: 'url(/background/default_bg.png)',
    btnStyle: {
      width: '239px',
      height: '53px',
      color: 'rgba(255, 255, 255, 1)',
      rightIcon: '',
      rightIconWidth: '0px',
      rightIconHeight: '0px'
    },
    /** 弹框样式 */
    popupStyle: {
      /** 标题文本 */
      titleTextStyle: {
        fontSize: '24px',
        fontWeight: '700',
        color: 'rgba(51, 51, 51, 1)'
      },
      /** 描述文本样式 */
      descTextStyle: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'rgba(51, 51, 51, 1)'
      },
      /** 背景样式 */
      bgImageStyle: {
        width: '303px',
        height: '359px',
        bgImg: 'url(/background/aichat_dialog_bg.png)'
      }
    }
  },
  /** 聊天详情样式 */
  chatDetailsStyle: {
    backgroundColor: 'url(/background/default_bg.png)',
    /** 顶部文本样式 */
    topTextStyle: {
      borderRadius: '30px',
      width: '335px',
      height: '95px',
      fontSize: '14px',
      fontWeight: '400',
      color: '#fff',
      backgroundColor: '#0d080d33'
    }
  },
  /** 短视频 */
  shortVideoStyle: {
    backgroundColor: 'url(/background/default_bg.png)',
    /** 添加图标 */
    addIcon: '/icons/gzyh.png',
    addIconWidth: '16px',
    addIconHeight: '16px',
    /** 留言图标 */
    messageIcon: '/icons/msg.png',
    messageIconWidth: '20px',
    messageIconHeight: '20px',
    /** 点赞图标 */
    unLikeIcon: '/icons/stunlike.png',
    likeIcon: '/icons/stliked.png',
    avatarWidth: '48px',
    avatarHeight: '48px',
    /** 按钮样式 */
    btnStyle: {
      width: '77px',
      height: '30px',
      borderRadius: '10px',
      backgroundColor: 'rgba(233, 175, 251, 1)'
    }
  },
  /** 发布视频样式 */
  publishVideoStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 其他用户主页样式 */
  otherHomeStyle: {
    backgroundColor: 'url(/background/otherprofilebg.png)',
    /** 关注他人图标 */
    addIcon: '/icons/gzyh.png',
    addIconWidth: '16px',
    addIconHeight: '16px',
    /** 留言图标 */
    messageIcon: '/icons/msg.png',
    messageIconWidth: '34px',
    messageIconHeight: '34px',
    /** 点赞图标 */
    likeIcon: '/icons/stunlike.png',
    likeIconWidth: '30px',
    likeIconHeight: '30px',
    /** 顶部数据样式 */
    topDataStyle: {
      /** 说明 */
      descTextStyle: {
        fontSize: '20px',
        fontWeight: '700',
        color: 'rgba(51, 51, 51, 1)'
      },
      /** 描述 */
      textTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(51, 51, 51, 1)'
      }
    },
    /** 左侧描述样式 */
    leftDescStyle: {
      fontSize: '16px',
      fontWeight: '400',
      color: 'rgba(51, 51, 51, 1)'
    },
    /** 右侧按钮样式 */
    rightBtnStyle: {
      width: '142px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(169, 192, 255, 1)'
    },
    /** 卡片说明 */
    cardDescStyle: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#fff',
      sort: 'left'
    }
  },
  /** 举报样式 */
  reportIndexStyle: {
    backgroundColor: 'url(/background/default_bg.png)',
    /** 选项样式 */
    selectBtnStyle: {
      width: '164px',
      height: '115px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: '400',
      color: 'rgba(51, 51, 51, 1)'
    }
  },
  /** 私聊样式 */
  privateChatStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 设置页样式 */
  settingStyle: {
    backgroundColor: 'url(/background/default_bg.png)',
    /** 按钮文本样式 */
    btnTextStyle: {
      backgroundColor: 'rgba(51, 51, 51, 1)',
      fontSize: '20px',
      fontWeight: '700',
      color: '#fff'
    },
    /** 选择项样式 */
    selectBtnStyle: {
      width: '100%',
      height: '52px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(51, 51, 51, 1)',
      fontSize: '16px',
      fontWeight: '700'
    }
  },
  /** 关注页样式 */
  followStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 粉丝页样式 */
  fansStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 黑名单页样式 */
  blackListStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 编辑页样式 */
  editStyle: {
    backgroundColor: 'url(/background/default_bg.png)'
  },
  /** 金币充值 */
  coinStyle: {
    backgroundColor: 'url(/background/default_bg.png)',
    /** 选项设置 */
    selectBtnStyle: {
      width: '100%',
      height: '64px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      selectedColor: 'rgba(169, 192, 255, 1)'
    }
  }
} satisfies Window['styleJson']
