import Mock from 'mockjs';

export default {
  // 获取基本信息
  userInfo: () => {
    return {
      data: Mock.mock({
        avatarUrl: '',
        email: '',
        mobile: '',
        mobilePrefix: '86',
        realName: '',
        userCode: 1,
        userName: ''
      }),
      msg: '操作成功'
    };
  }
}