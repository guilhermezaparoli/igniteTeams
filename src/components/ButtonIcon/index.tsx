import { TouchableOpacityProps } from 'react-native';
import * as S from './styles';
import { ButtonIconTypeStyleProps } from './styles';
import { MaterialIcons} from "@expo/vector-icons"
type Props = TouchableOpacityProps & {
  type?: ButtonIconTypeStyleProps;
  icon: keyof typeof MaterialIcons.glyphMap
};
export function ButtonIcon({ type = 'PRIMARY', icon, ...rest  }: Props) {
  return <S.Container {...rest}>
    <S.Icon name={icon} type={type}/>
  </S.Container>;
}
