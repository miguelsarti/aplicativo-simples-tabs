import { View, Text, Image } from "react-native";

export default function Profile() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey' }}>
            <Text style={{ fontSize: 25 }}>Leon S. Kennedy</Text>
            <Image 
                source={{ uri: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiALDCpzLPAup61xRxEgTJz0t2sVvJps9lm9DtwrUf-i8CteKnfla2W6RM9-EO78QT-PnVyX7xF3qLUliaS410EgAbNg5OIapXTwJxii39NdzLL7Shq_uAK9YhqCt5NLdv2ZZ8q1ERwuuKzgc_ewLvAdYX7LAd0NjdqXzZSh8o2FZFNbigIwLDmENWR/w1200-h630-p-k-no-nu/RE4_Leon_01.png"}}
                style={{ width: 200, height: 200, borderRadius: 100, margin: 10 }}
            />
            <Text style={{ fontSize: 18, color: "white", width: "40%" }}>Leon S. Kennedy é um dos personagens principais da franquia Resident Evil, criado pela Capcom. Introduzido no jogo Resident Evil 2 (1998), ele é um policial novato que sobrevive ao apocalipse zumbi em Raccoon City. Após o incidente em Raccoon City, Leon se torna um agente do governo dos Estados Unidos, enfrentando ameaças bioterroristas em diversas missões. Ele é conhecido por sua coragem, habilidades de combate e um forte senso de justiça. Além disso, Leon tem um forte senso de lealdade aos seus amigos, como Claire Redfield, e se destaca por sua habilidade em situações de alto risco.</Text>


        </View>
    );
}