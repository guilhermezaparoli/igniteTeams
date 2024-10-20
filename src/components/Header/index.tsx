import * as S from './styles';
import logoImg from '@assets/logo.png';

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <S.Container>
      {showBackButton && (
        <S.BackButtton>
          <S.BackIcon />
        </S.BackButtton>
      )}
      <S.Logo source={logoImg} />
    </S.Container>
  );
}
