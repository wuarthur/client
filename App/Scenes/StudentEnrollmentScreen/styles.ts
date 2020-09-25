import StyleSheet from 'App/Util/Stylesheet'

export default StyleSheet.create({
  studentEnrollmentItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    borderTopWidth: 1,
    borderTopColor: 'black',
  },
  enrollmentItemLeft: {
    flex: 3,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
  },
  enrollmentItemCenter: {
    flex: 5,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
  },
  enrollmentItemRight: {
    flex: 4,
    borderLeftWidth: 1,
    borderLeftColor: 'black',
    borderRightWidth: 1,
    borderRightColor: 'black',
  },
  wrapperPadding: {
    padding: 16,
  },
})
