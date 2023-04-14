import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Cards from './src/components/cards';
export default function App() {

  const cards = [
    {
      nome: 'Espada-diapasão',
      desc: '[Esta espada de aparência estranha tem duas lâminas separadas entre si por alguns milímetros. O personagem pode realizar uma manobra especial com uma ação de movimento, golpeando o chão (que deve ser duro como pedra ou metal). A espada então entra em ressonância, passando a vibrar e emitir um ruído muito incômodo. O próximo ataque com esta arma causa +2d6 pontos de dano sônico.]                                                        [Poder de ataque = 15] || [Defesa = 20]',
      imgUrl: "https://3.bp.blogspot.com/-U7GkZ8wPN64/WYzyJhdV7ZI/AAAAAAAABjg/CUKpyxOID-cR4gA3I_LWRw7ad9xNDDQvQCLcBGAs/s640/bloodsinger_by_leesmith.jpg"
    },
    {
      nome: 'Foice',
      desc: '[Diferente da ferramenta usada por fazendeiros, uma foice de combate é bem mais forte e balanceada. Capaz de infligir ferimentos precisos e letais. é uma ferramenta agrícola de mão única projetada com lâminas curvadas e normalmente usada para colheita de grãos ou corte de forragem suculenta]                                               [Poder de ataque = 15] || [Defesa = 20]',
      imgUrl: "https://i.pinimg.com/originals/44/23/d2/4423d2ebd7876c0a4e3ce204eec5a4f5.jpg"
    },
    {
      nome: 'Katana',
      desc: '[A Katana é a espada tradicional dos samurais. Sua lamina delgada é levemente recurvada, e possui apenas um unico fio. É muito longa para ser usada com uma só mão sem treinamento especial; por isso, é uma arma exótica.Ela pode ser usada com duas mãos como uma arma marcial. Por seu desenho elegante, também recebe os benefícios do talento Acuidade com Arma.]                                               [Poder de ataque = 15] || [Defesa = 20]',
      imgUrl: "https://static.wixstatic.com/media/a59bb0_3b4813c110a14d69a64985064bd03880~mv2.jpg/v1/fill/w_738,h_416,al_c,q_85/a59bb0_3b4813c110a14d69a64985064bd03880~mv2.jpg"
    },
  ]

  return (
    <View style={styles.container}>
      {cards.map(f => <Cards cards={f}/>)}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});