/* eslint-disable no-unused-vars */
 enum VALIDATION_REG_EXP {
  NOT_EMPTY100= '^\\S{1,100}$',
  EMAIL= '^\\S{1,100}@\\S{1,100}$',
  TEL= '^\\+?(\\d| |-|\\(|\\)){5,15}$'
}
export default VALIDATION_REG_EXP;
