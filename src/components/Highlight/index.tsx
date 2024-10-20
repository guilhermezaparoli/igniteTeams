import * as S from "./styles"

type hightlightProps = { 
title: string;
subtitle: string;
}
export function Highlight({title, subtitle}: hightlightProps) {
    return (
        <S.Container>
            <S.Title>{title}</S.Title>
            <S.SubTitle>{subtitle}</S.SubTitle>
        </S.Container>
    )
}


