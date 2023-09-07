import {StyleSheet} from 'react-native';
import AppColors from '../../utills/AppColors';
import { height, width } from '../../utills/Dimension';

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.primary,
    width: width(100),
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  menuicon: {
    paddingLeft:width(5),
  },
});
export default styles;
