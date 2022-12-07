export const validate = (userValue: { email: string; password: string }) => {
  if (userValue.email.includes('@')) return alert('이메일 형식을 확인해주세요');
  if (userValue.password.length > 8)
    return alert('비밀번호는 최소 8글자 이상이여야 합니다.');
  return false;
};
