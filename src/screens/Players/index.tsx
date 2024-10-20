import { Header } from '@components/Header';
import * as S from './styles';
import { Highlight } from '@components/Highlight';
import { ButtonIcon } from '@components/ButtonIcon';
import { Input } from '@components/Input';
import { Filter } from '@components/Filter';
import { FlatList } from 'react-native';
import { useState } from 'react';
import { PlayerCard } from '@components/PlayerCard';
import { ListEmpty } from '@components/ListEmpty';
import { Button } from '@components/Button';

export function Players() {
  const [team, setTeam] = useState<string>('Time a');
  const [players, setPlayers] = useState<string[]>(['Guilherme']);

  function OnRemove() {}
  return (
    <S.Container>
      <Header showBackButton />

      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />

      <S.Form>
        <Input placeholder="Nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </S.Form>
      <S.HeaderList>
        <FlatList
          data={['Time a', 'Time b']}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <S.AmountPlayers>{players.length}</S.AmountPlayers>
      </S.HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={OnRemove} />
        )}
        ListEmptyComponent={() => (
          <ListEmpty message="Não há pessoas nesse time" />
        )}
      />
      <Button title='Remover turma' type='SECONDARY'/>
    </S.Container>
  );
}
