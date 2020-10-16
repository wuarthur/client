import StyleSheet from 'App/Util/Stylesheet'

export default StyleSheet.create({
  studentEnrollmentItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    borderTopWidth: 1,
    borderTopColor: 'white',
    color: 'white'
  },
  enrollmentItemLeft: {
    flex: 3,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    color: 'white'
  },
  enrollmentItemCenter: {
    flex: 5,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    color: 'white'
  },
  enrollmentItemRight: {
    flex: 4,
    borderLeftWidth: 1,
    borderLeftColor: 'white',
    borderRightWidth: 1,
    borderRightColor: 'white',
    color: 'white'
  },
  wrapperPadding: {
    padding: 16,
  },
  headerRow: {
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    color: 'white'
  },
  container: {
    backgroundColor:'#6666ff',
  },
  text: {
    color: 'white'
  }
})
