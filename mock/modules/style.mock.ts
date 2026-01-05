/**
 * 样式配置模块
 * 包含整个应用的UI样式配置，用于统一管理各组件的外观样式
 */
export default {
  /** 返回按钮背景图 */
  backImage: '/icons/aliox_back.svg',
  /** 返回图片大小 */
  backImageSize: {
    width: '40px',
    height: '40px'
  },
  /** 顶部右侧举报图片 */
  reportImage: '/icons/aliox_more.svg',
  /** 举报图标大小 */
  reportImageSize: {
    width: '40px', // 图标宽度
    height: '40px' // 图标高度
  },
  /** 点赞图标 */
  likeIcon: '/icons/aliox_like.svg',
  likedIcon: '/icons/aliox_liked.svg',
  /** 点赞图标大小 */
  unlikeImageSize: {
    width: '34px', // 图标宽度
    height: '34px' // 图标高度
  },
  /** 点赞数量文本样式 */
  likeNumTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(14, 28, 66, 1)'
  },
  /** 用户名文本样式 */
  userNameStyle: {
    fontSize: '16px',
    fontWeight: '700',
    color: 'rgba(14, 28, 66, 1)'
  },
  /** 头像样式（页面通用头像，小型的） */
  avatarStyle: { width: '36px', height: '36px' },
  /** 作品文本样式(内容，备注项) */
  proseTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(59, 70, 92, 1)',
    sort: 'left'
  },
  /** 标签样式（如：描述下面的标签） */
  tagStyle: {
    backgroundColor: 'rgba(14, 28, 66, 1)',
    borderRadius: '40px',
    width: '93px',
    height: '28px',
    fontSize: '12px',
    fontWeight: '400',
    color: 'rgb(255, 255, 255)'
  },
  /** 文本输入框（发送内容）样式 */
  inputStyle: {
    backgroundColor: 'rgba(14, 28, 66, 1)',
    borderRadius: '40px',
    width: '100%',
    height: '54px',
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
    placeholderCorlor: 'rgba(87, 96, 115, 1)',
    /** 右侧发送图标 */
    sendIcon: '/icons/aliox_send_icon.svg',
    sendIconWidth: '32px',
    sendIconHeight: '32px'
  },
  /** 表单标题样式 */
  formTitleStyle: {
    fontSize: '20px',
    fontWeight: '900',
    color: 'rgba(14, 28, 66, 1)',
    marginBottom: '20px'
  },
  /** 表单富文本样式 */
  formRichTextStyle: {
    fontSize: '14px',
    fontWeight: '400',
    color: 'rgb(0, 0, 0)',
    backgroundColor: 'rgb(255, 255, 255)',
    placeholderCorlor: 'rgba(87, 96, 115, 1)'
  },
  /** 表单按钮样式 */
  formBtnStyle: {
    backgroundColor: 'rgba(87, 96, 115, 1)',
    borderRadius: '40px',
    fontSize: '18px',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)'
  },
  /** 输入文本样式 */
  inputTextStyle: {
    borderRadius: '16px',
    placeholderCorlor: 'rgba(87, 96, 115, 1)',
    color: 'rgba(0, 0, 0, 1)',
    fontSize: '14px',
    fontWeight: '400',
    backgroundColor: 'rgba(255, 255, 255, 0.8)'
  },
  /** 高亮按钮样式 */
  highlightBtnStyle: {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor:
      'linear-gradient(135deg, rgba(123, 132, 255, 1) 0%, rgba(99, 229, 252, 1) 49.79%, rgba(174, 255, 112, 1) 100%)'
  },
  /** 主要按钮样式 */
  primaryBtnStyle: {
    color: 'rgba(255, 255, 255, 1)',
    backgroundColor:
      'linear-gradient(180deg, rgba(132, 64, 227, 1) 0%, rgba(180, 148, 247, 1) 100%)',
    boxShadow:
      '0px 2px 0px  rgba(95, 51, 156, 1), 0px 2px 6px  rgba(85, 59, 163, 1),inset 0px 2px 0px  rgba(255, 255, 255, 0.8)'
  },
  /** 确认按钮样式 */
  confirmBtnStyle: {
    borderRadius: '87px',
    width: '240px',
    height: '59px',
    fontSize: '20px',
    fontWeight: '900'
  },
  /** 聊天列表样式 */
  chatListStyle: {
    avatarWidth: '44px',
    avatarHeight: '44px',
    borderRadius: '20px',
    /** 发送背景色 */
    sendBgColor: 'rgba(123, 132, 255, 1)',
    /** 接收背景色 */
    receiveBgColor: 'rgba(99, 229, 252, 1)'
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
      width: '240px',
      height: '59px'
    }
  },
  /** 动态详情页 */
  articleDetailStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 发布动态 */
  sendDynamicStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 聊天机器人 */
  chatViewStyle: {
    /** 描述文本颜色 */
    textCorlor: 'rgba(59, 70, 92, 1)',
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center',
    btnStyle: {
      width: '240px',
      height: '59px',
      color: 'rgba(255, 255, 255, 1)',
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
        fontWeight: '400',
        color: 'rgba(14, 28, 66, 1)'
      },
      /** 描述文本样式 */
      descTextStyle: {
        fontSize: '16px',
        fontWeight: '400',
        color: 'rgba(87, 96, 115, 1)'
      },
      /** 背景样式 */
      bgImageStyle: {
        width: '292px',
        height: '264px',
        bgImg: '/background/aliox_ai_pay_bg.png'
      }
    }
  },
  /** 聊天详情样式 */
  chatDetailsStyle: {
    backgroundColor: '#0e080f',
    /** 顶部文本样式 */
    topTextStyle: {
      borderRadius: '40px 0px 40px 40px',
      width: '190px',
      height: '36px',
      fontSize: '12px',
      fontWeight: '400',
      color: 'rgba(14, 28, 66, 1)',
      backgroundColor: 'rgba(123, 132, 255, 0.5)'
    }
  },
  /** 短视频 */
  shortVideoStyle: {
    backgroundColor: '#0e080f',
    /** 添加图标 */
    addIcon: '/icons/aliox_add_icon.svg',
    addIconWidth: '20px',
    addIconHeight: '20px',
    /** 留言图标 */
    messageIcon: '/icons/aliox_comments.svg',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: '/icons/aliox_like_post.svg',
    avatarWidth: '40px',
    avatarHeight: '40px',
    /** 按钮样式 */
    btnStyle: {
      width: '100px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
    }
  },
  /** 发布视频样式 */
  publishVideoStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 其他用户主页样式 */
  otherHomeStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center',
    /** 关注他人图标 */
    addIcon: '/icons/aliox_add_icon.svg',
    addIconWidth: '24px',
    addIconHeight: '24px',
    /** 留言图标 */
    messageIcon: '/icons/aliox_comments.svg',
    messageIconWidth: '40px',
    messageIconHeight: '40px',
    /** 点赞图标 */
    likeIcon: '/icons/aliox_like_post.svg',
    likeIconWidth: '34px',
    likeIconHeight: '34px',
    /** 顶部数据样式 */
    topDataStyle: {
      /** 说明 */
      descTextStyle: {
        fontSize: '20px',
        fontWeight: '400',
        color: '#fff'
      },
      /** 描述 */
      textTextStyle: {
        fontSize: '14px',
        fontWeight: '400',
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    /** 左侧描述样式 */
    leftDescStyle: {
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 右侧按钮样式 */
    rightBtnStyle: {
      width: '162px',
      height: '53px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)'
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
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center',
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
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 设置页样式 */
  settingStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center',
    /** 按钮文本样式 */
    btnTextStyle: {
      backgroundColor:
        'linear-gradient(136deg, rgba(255, 94, 135, 1) 60%, rgba(71, 252, 255, 1) 100%)',
      fontSize: '16px',
      fontWeight: '400',
      color: '#fff'
    },
    /** 选择项样式 */
    selectBtnStyle: {
      width: '100%',
      height: '52px',
      borderRadius: '12px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      color: 'rgba(14, 28, 66, 1)',
      fontSize: '16px',
      fontWeight: '400'
    }
  },
  /** 关注页样式 */
  followStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 粉丝页样式 */
  fansStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 黑名单页样式 */
  blackListStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 编辑页样式 */
  editStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center'
  },
  /** 金币充值 */
  coinStyle: {
    backgroundColor:
      'url(/background/aliox_default_bg.png) no-repeat center',
    /** 选项设置 */
    selectBtnStyle: {
      width: 'infinite',
      height: '64px',
      borderRadius: '20px',
      backgroundColor: 'rgba(255, 255, 255, 1)',
      selectedColor: 'rgba(255, 255, 255, 1)'
    }
  }
} satisfies Window['styleJson']
