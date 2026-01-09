/**
 * 样式配置模块
 * 包含整个应用的UI样式配置，用于统一管理各组件的外观样式
 */
export default {
  /** 返回按钮背景图 */
  backImage: '/icons/back.svg',
  /** 返回图片大小 */
  backImageSize: {
    width: '24px',
    height: '24px'
  },
  /** 顶部右侧举报图片 */
  reportImage: '/icons/more.svg',
  /** 举报图标大小 */
  reportImageSize: {
    width: '24px', // 图标宽度
    height: '24px' // 图标高度
  },
  /** 点赞图标 */
  likeIcon: '/icons/like.svg',
  likedIcon: '/icons/liked.svg',
  /** 点赞图标大小 */
  unlikeImageSize: {
    width: '40px', // 图标宽度
    height: '40px' // 图标高度
  },
  /** 点赞数量文本样式 */
  likeNumTextStyle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 用户名文本样式 */
  userNameStyle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 头像样式（页面通用头像，小型的） */
  avatarStyle: { width: '48px', height: '48px' },
  /** 作品文本样式(内容，备注项) */
  proseTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.8)',
    sort: 'left'
  },
  /** 标签样式（如：描述下面的标签） */
  tagStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    height: '28px',
    fontSize: '12px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)'
  },
  /** 文本输入框（发送内容）样式 */
  inputStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    width: '100%',
    height: '46px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    placeholderCorlor: 'rgba(255, 255, 255, 0.4)',
    /** 右侧发送图标 */
    sendIcon: '/icons/send_icon.svg',
    sendIconWidth: '46px',
    sendIconHeight: '46px'
  },
  /** 表单标题样式 */
  formTitleStyle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 1)',
    marginBottom: '9px'
  },
  /** 表单富文本样式 */
  formRichTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    placeholderCorlor: 'rgba(255, 255, 255, 0.6)'
  },
  /** 表单按钮样式 */
  formBtnStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 输入文本样式 */
  inputTextStyle: {
    borderRadius: '16px',
    placeholderCorlor: 'rgba(255, 255, 255, 0.6)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  /** 高亮按钮样式 */
  highlightBtnStyle: {
    color: 'rgba(18, 18, 18, 1)',
    backgroundColor: 'rgba(14, 252, 208, 1)'
  },
  /** 主要按钮样式 */
  primaryBtnStyle: {
    color: 'rgba(18, 18, 18, 1)',
    backgroundColor:
      'linear-gradient(0deg, rgba(19, 164, 230, 1) 0%, rgba(2, 253, 153, 1) 100%)',
    boxShadow: ''
  },
  /** 确认按钮样式 */
  confirmBtnStyle: {
    borderRadius: '100px',
    width: '240px',
    height: '54px',
    fontSize: '16px',
    fontWeight: '700'
  },
  /** 聊天列表样式 */
  chatListStyle: {
    avatarWidth: '44px',
    avatarHeight: '44px',
    borderRadius: '24px',
    /** 发送背景色 */
    sendBgColor: 'rgba(255, 255, 255, 0.1)',
    /** 接收背景色 */
    receiveBgColor:
      'linear-gradient(180deg, rgba(19, 164, 230, 1) 0%, rgba(2, 253, 153, 1) 100%)'
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
      width: '190px',
      height: '54px'
    }
  },
  /** 动态详情页 */
  articleDetailStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 发布动态 */
  sendDynamicStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 聊天机器人 */
  chatViewStyle: {
    /** 描述文本颜色 */
    textCorlor: 'rgba(255, 255, 255, 0.6)',
    backgroundColor: 'rgba(18, 18, 18, 1)',
    btnStyle: {
      width: '233px',
      height: '56px',
      color: 'rgba(18, 18, 18, 1)',
      rightIcon:
        'https://huanniuchat.oss-accelerate.aliyuncs.com/template_development/sivio_ai_chat_arr.png',
      rightIconWidth: '0px',
      rightIconHeight: '0px'
    },
    /** 弹框样式 */
    popupStyle: {
      /** 标题文本 */
      titleTextStyle: {
        fontSize: '20px',
        fontWeight: '700',
        color: 'rgba(18, 18, 18, 1)'
      },
      /** 描述文本样式 */
      descTextStyle: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'rgba(18, 18, 18, 0.6)'
      },
      /** 背景样式 */
      bgImageStyle: {
        width: '280px',
        height: '157px',
        bgImg: '/background/ai_pay_bg.png'
      }
    }
  },
  /** 聊天详情样式 */
  chatDetailsStyle: {
    backgroundColor: '#0e080f',
    /** 顶部文本样式 */
    topTextStyle: {
      borderRadius: '32px',
      width: '201px',
      height: '36px',
      fontSize: '14px',
      fontWeight: '400',
      color: 'rgba(255, 255, 255, 1)',
      backgroundColor: 'rgba(13, 8, 13, 0.2)'
    }
  },
  /** 短视频 */
  shortVideoStyle: {
    backgroundColor: '#0e080f',
    /** 添加图标 */
    addIcon: '/icons/add_icon.png',
    addIconWidth: '24px',
    addIconHeight: '24px',
    /** 留言图标 */
    messageIcon: '/icons/comments_icon.png',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: '/icons/like.svg',
    avatarWidth: '40px',
    avatarHeight: '40px',
    /** 按钮样式 */
    btnStyle: {
      width: '163px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  },
  /** 发布视频样式 */
  publishVideoStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 其他用户主页样式 */
  otherHomeStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
    /** 关注他人图标 */
    addIcon: '/icons/add_icon.png',
    addIconWidth: '24px',
    addIconHeight: '24px',
    /** 留言图标 */
    messageIcon: '/icons/aliox_comments.svg',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: '/icons/like.svg',
    likeIconWidth: '40px',
    likeIconHeight: '40px',
    /** 顶部数据样式 */
    topDataStyle: {
      /** 说明 */
      descTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: '#fff'
      },
      /** 描述 */
      textTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 1)'
      }
    },
    /** 左侧描述样式 */
    leftDescStyle: {
      fontSize: '14px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 右侧按钮样式 */
    rightBtnStyle: {
      width: '162px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(14, 252, 208, 1)'
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
    backgroundColor: 'rgba(18, 18, 18, 1)',
    /** 选项样式 */
    selectBtnStyle: {
      width: '164px',
      height: '115px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: '400',
      color: 'rgba(14, 28, 66, 1)'
    }
  },
  /** 私聊样式 */
  privateChatStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 设置页样式 */
  settingStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
    /** 按钮文本样式 */
    btnTextStyle: {
      backgroundColor: 'rgba(255, 87, 51, 1)',
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 选择项样式 */
    selectBtnStyle: {
      width: '100%',
      height: '46px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      color: 'rgba(255, 255, 255, 1)',
      fontSize: '16px',
      fontWeight: '700'
    }
  },
  /** 关注页样式 */
  followStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 粉丝页样式 */
  fansStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 黑名单页样式 */
  blackListStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 编辑页样式 */
  editStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)'
  },
  /** 金币充值 */
  coinStyle: {
    backgroundColor: 'rgba(18, 18, 18, 1)',
    /** 选项设置 */
    selectBtnStyle: {
      width: '105px',
      height: '100px',
      borderRadius: '24px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      selectedColor: 'rgba(14, 252, 208, 1)'
    }
  }
} satisfies Window['styleJson']
